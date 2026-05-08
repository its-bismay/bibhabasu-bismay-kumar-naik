import { Octokit } from "@octokit/rest";
import { GoogleGenAI } from "@google/genai";

const OWNER = "its-bismay";
const REPO  = "neetcode-submissions-v42lzpe9";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
});

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

async function analyzeCommitWithGemini(commitMessage) {
  const prompt = `
You are a DSA problem analyzer. Given a Git commit message from a LeetCode/NeetCode submissions repo, extract:
1. The exact problem title (as it appears on LeetCode/NeetCode)
2. The difficulty level (Easy, Medium, or Hard)

Commit message: "${commitMessage}"

Respond ONLY with a JSON object, no markdown, no explanation:
{"title": "<problem title>", "difficulty": "<Easy|Medium|Hard>"}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  try {
    return JSON.parse(response.text.trim());
  } catch {
    return { title: commitMessage, difficulty: "Unknown" };
  }
}

function timeAgo(isoDate) {
  const diff = Math.floor((Date.now() - new Date(isoDate)) / 1000);
  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
}

export async function fetchLastSolvedDSA() {

  const { data: commits } = await octokit.repos.listCommits({
    owner: OWNER,
    repo: REPO,
    per_page: 1,
  });

  const latestCommit = commits[0];
  const commitMessage = latestCommit.commit.message;
  const commitDate    = latestCommit.commit.author.date;
  const sha           = latestCommit.sha;


  const { data: commitDetail } = await octokit.repos.getCommit({
    owner: OWNER,
    repo: REPO,
    ref: sha,
  });

  const firstFile = commitDetail.files?.[0];
  const solutionUrl = firstFile
    ? `https://github.com/${OWNER}/${REPO}/blob/main/${firstFile.filename}`
    : `https://github.com/${OWNER}/${REPO}/commit/${sha}`;


  const { title, difficulty } = await analyzeCommitWithGemini(commitMessage);


  return {
    lastSolved: {
      title,
      difficulty,
      solutionUrl,
      date: timeAgo(commitDate),
    },
  };
}