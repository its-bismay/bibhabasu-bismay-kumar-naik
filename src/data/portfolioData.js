export const portfolioData = {
  name: "Bibhabasu Bismay Kumar Naik",
  title: "Full Stack Developer & AI Enthusiast",
  intro: "Building high-performance web applications with a focus on seamless user experiences and scalable architecture.",
  socials: {
    github: "https://github.com/its-bismay",
    linkedin: "https://www.linkedin.com/in/bismay-kumar/",
    twitter: "https://x.com/BibhabasuBismay/",
    email: "bismaybibhabasu33@gmail.com"
  },
  skills: [
    { name: "React", icon: "Code2" },
    { name: "Next.js", icon: "Zap" },
    { name: "JavaScript", icon: "FileJson" },
    { name: "Tailwind CSS", icon: "Palette" },
    { name: "Node.js", icon: "Server" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Python", icon: "Cpu" },
  ],
  achievements: [
    {
      id: 1,
      title: "Winner of HACK HORIZON 2.0",
      date: "Apr 2026",
      description: "Developed RAG based webapp to simplify and streamline government policies and queries.",
      category: "Hackathon",
      link:"https://www.linkedin.com/posts/bismay-kumar_buildinpublic-hackathonexperience-learnbybuilding-ugcPost-7449052352881381376-PCJe/"
    },
    {
      id: 2,
      title: "Winner of APL Google Developers Group Ranchi",
      date: "May 2026",
      description: "Build a Genai and ML based Akinator for IPL Players",
      category: "Hackathon",
      link:"https://www.linkedin.com/posts/bismay-kumar_hackathon-gdgranchi-agenticpremierleague-ugcPost-7462900969719296001-8Uy8/"
    }
  ],
projects: [
    {
      id: "ci-guardian",
      slug: "ci-guardian",
      title: "CI Guardian",
      shortDescription: "AI-powered CI/CD workflow failure detection and real-time triage platform.",
      description: "A real-time GitHub App that watches workflow runs, downloads multi-job logs when a pipeline fails, extracts stack trace file context, and executes an AI pipeline using LangGraph to surface structured root-cause reports, propose code fixes, and alert developers dynamically.",
      thumbnail: "/ci-guardian.webp",
      tech: ["Python", "FastAPI", "React", "PostgreSQL", "LangGraph", "Docker"],
      liveUrl: "https://ci-guardian-client.vercel.app/dashboard",
      githubUrl: "https://github.com/its-bismay/ci-guardian-server",
      timeline: [
        { phase: "Architecture Planning", date: "January 2026" },
        { phase: "Pipeline & SSE Engine Dev", date: "February 2026" },
        { phase: "Dockerization & Production Deploy", date: "February 2026" }
      ],
      features: [
        "Real-time Automated Failure Analysis",
        "Multi-Job Log Parsing & Stack Trace Extraction",
        "Server-Sent Events (SSE) Live Streams",
        "Automated Telegram Bot Alerts",
        "Non-Spamming Pull Request Comments"
      ],
      readme: `
## **CI Guardian**

Auto-detect CI/CD failures on GitHub, root-cause them with AI using full repository context, and surface a proposed fix on a real-time dashboard, via Telegram, and as an auto-posted PR comment.

---

- **Automated AI Pipeline:** Intercepts completed run webhooks, processes logs, extracts stack traces, and utilizes LangGraph with OpenRouter LLM gateways for detailed triage.
- **Real-Time Stream Dashboard:** Delivers pipeline data directly to the user interface using Server-Sent Events (SSE) without needing Redis.
- **Smart Notification Ecosystem:** Delivers clear root-cause summaries directly to users via a dedicated Telegram Bot channel.
- **Programmatic PR Management:** Posts and continually updates existing pull request comments on workflow re-runs instead of creating message spam.
- **Robust Authorization Layer:** Secures client-server communication using cross-domain JWT authentication strings.
      `
    },
    {
      id: "sentinel-scan",
      slug: "sentinel-scan",
      title: "SentinelScan",
      shortDescription: "An asynchronous, production-ready web application security vulnerability scanner.",
      description: "A full-stack web security application that runs 10 parallel high-fidelity security audit modules concurrently to evaluate response headers, SSL certificate integrity, cookies, and single-page architectures, utilizing Inngest for event-driven background processing and Groq LLMs for automated remediation code compilation.",
      thumbnail: "/sentinelscan.webp",
      tech: ["Node.js", "Express", "MongoDB", "Inngest", "Playwright", "React"],
      liveUrl: "https://sentinel-scan-client.vercel.app/",
      githubUrl: "https://github.com/its-bismay/SentinelScan",
      timeline: [
        { phase: "Security Module Research", date: "March 2026" },
        { phase: "Inngest Pipeline Engineering", date: "April 2026" },
        { phase: "UI Dev & Vercel Client Hosting", date: "May 2026" }
      ],
      features: [
        "Concurrently Run 10 Security Audit Modules",
        "Event-Driven Background Processing Engine",
        "In-Process Fault-Tolerance Fallback Layer",
        "AI Report Generation & Summary Analysis",
        "Headless Browser Dynamic SPA Crawling"
      ],
      readme: `
## **SentinelScan 🛡️**

A production-ready, full-stack, asynchronous web security vulnerability scanner featuring a modern dark-themed dashboard, an event-driven background processing pipeline, and AI-driven report compilation.

---

- **10 Specialized Audit Engines:** Evaluates response configurations, Cookie flags, SSL certificate chains, Robots.txt files, Information Leakage banners, and CORS credentials using Promise.allSettled().
- **Decoupled Job Architecture:** Isolates heavy scanning procedures away from the primary Express thread using Inngest background event flows.
- **High-Availability Engine Safeguard:** Falls back gracefully to a non-blocking local setImmediate() process if background queues become unreachable.
- **AI Triage Integration:** Compiles executive summaries and actionable remediation code diffs via Groq LLMs (Llama 3.3).
- **Headless Crawling Agent:** Spawns a dedicated Playwright browser instances to thoroughly index dynamic Single Page Applications (SPAs).
      `
    },
    {
      id: "repolense",
      slug: "repolense",
      title: "Repolense AI",
      shortDescription: "A webapp to visualize and analyse GitHub repositories.",
      description: "RepoLens is an interactive GitHub repository visualizer and AI-powered code explainer. It helps you explore, analyze, and understand any public GitHub repository using a force-directed graph, interactive file tree, and AI-generated explanations for the project and its files.",
      thumbnail: "/repolense.webp",
      tech: ["React", "Express", "Javascript", "D3.js"],
      liveUrl: "https://repolense-frontend.vercel.app",
      githubUrl: "https://github.com/its-bismay/repolense",
      timeline: [
        { phase: "Research", date: "May 2026" },
        { phase: "Prototyping", date: "May 2026" },
        { phase: "V1 hosting", date: "May 2026" }
      ],
      features: [
        "Visualize Repository Structure",
        "AI-Powered Analysis",
        "File Summaries",
        "GitHub Integration"
      ],
      readme: `
## **RepoLens AI**

It is an interactive GitHub repository visualizer and AI-powered code explainer. It helps you explore, analyze, and understand any public GitHub repository using a force-directed graph, interactive file tree, and AI-generated explanations for the project and its files.

---

- **Visualize Repository Structure:** See the entire file/folder structure as an interactive force-directed graph and file tree.
- **AI-Powered Analysis:** Get high-level overviews, tech stack, architecture, and key file explanations using Google Gemini AI.
- **File Summaries:** Click any file to get a detailed, AI-generated summary and explanation.
- **GitHub Integration:** Fetches real-time data (stars, forks, license, etc.) for any public repo.
- **Modern UI:** Built with React, Tailwind CSS, D3.js, and Vite for a fast, responsive experience.
      `
    },
    {
      id: "leetcode-stats",
      slug: "leetcode-stats",
      title: "Leetcode-Stats-Api",
      shortDescription: "A backend api to fetch Leetcode stats.",
      description: "A fast, async REST API built with FastAPI that fetches and serves LeetCode user statistics — problems solved, contest ratings, and topic coverage — by querying LeetCode's internal GraphQL API.",
      thumbnail: "/leetcode-stats-api.webp",
      tech: ["Python", "FastAPI", "Uvicorn", "Pydantic"],
      liveUrl: "https://leetcode-stats-api-five.vercel.app/docs",
      githubUrl: "https://github.com/its-bismay/leetcode-stats-api",
      timeline: [
        { phase: "Leetcode Graphql Api research", date: "April 2026" },
        { phase: "Project setup", date: "May 2026" },
        { phase: "Deployment", date: "May" }
      ],
      features: [
        "Real-time market sentiment analysis",
        "Backtesting engine",
        "Interactive D3.js visualization",
        "Automated trading signals"
      ],
      readme: `
##  **LeetCode Stats API**

A fast, async REST API built with **FastAPI** that fetches and serves LeetCode user statistics — problems solved, contest ratings, and topic coverage — by querying LeetCode's internal GraphQL API.

---

- **Problems Solved** — Total, Easy, Medium, Hard counts
- **Global Rank** — Overall site ranking
- **Contest Stats** — Rating, global ranking, top percentage, contests attended
- **Topics Covered** — All solved tags sorted by count
- **Parallel Fetching** — Both GraphQL queries fire simultaneously via asyncio.gather
- **Auto Swagger Docs** — Interactive API docs at /docs
`
    }
  ],
  about: {
    story: [
      { year: "2023-NOVEMBER", event: "Started web devlopment", description: "In my first semester of college, a tragedy broke my left hand—and slowed everything down. Stuck at home, I turned to web development, inspired by my love for movies, and began building a streaming website." },
      { year: "2024-MARCH", event: "Joined INNOREVA web team", description: "Facing strong competition in my first year, I cleared the club interviews and joined Team Innoreva—one of NIT Jamshedpur’s most prestigious clubs—as a web team member." },
      { year: "2026-APRIL", event: "Won National level hackathon", description: "Leading my team, we achieved 2nd place at the national-level Hack Horizon 2.0 hackathon, earning ₹1000 and goodies." }
    ],
    education: [
      { degree: "B.Tech in Electrical Engineering", school: "National Institute of Technology, Jamshedpur", period: "2023 - 2027" },
      {degree: "Higher Secondary Education", school: "Saraswati Vidya Mandir Gatiroutpatna Cuttack", period: "2020 - 2022" }
    ]
  }
};
