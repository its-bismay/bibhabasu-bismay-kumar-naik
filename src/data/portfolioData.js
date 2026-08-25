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
    { name: "Node.js", icon: "Server" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Python", icon: "Cpu" },
    { name: "FastAPI", icon: "Server" },
    { name: "MySQL", icon: "Database" },
  ],
  achievements: [
    {
      id: 1,
      title: "Winner of HACK HORIZON 2.0",
      date: "Apr 2026",
      description: "Developed RAG based webapp to simplify and streamline government policies and queries.",
      category: "Hackathon",
      link: "https://www.linkedin.com/posts/bismay-kumar_buildinpublic-hackathonexperience-learnbybuilding-ugcPost-7449052352881381376-PCJe/"
    },
    {
      id: 2,
      title: "Winner of APL Google Developers Group Ranchi",
      date: "May 2026",
      description: "Build a Genai and ML based Akinator for IPL Players",
      category: "Hackathon",
      link: "https://www.linkedin.com/posts/bismay-kumar_hackathon-gdgranchi-agenticpremierleague-ugcPost-7462900969719296001-8Uy8/"
    }
  ],
  projects: [
    {
      id: "codeflow",
      slug: "codeflow",
      title: "CodeFlow",
      shortDescription: "A production-grade, real-time collaborative workspace with voice/video calls and sandboxed microVMs.",
      description: "A production-grade, real-time collaborative workspace where multiple developers can edit the same files simultaneously with sub-100ms perceived latency, make voice/video calls inside the workspace, and run complex multi-file projects in secure sandboxed microVMs.",
      thumbnail: "/codeflow.webp",
      tech: ["React", "Node.js", "MongoDB", "WebRTC", "Yjs", "Socket.IO", "E2B", "Express.js"],
      liveUrl: "https://code-flow-real-time-collaborative-w.vercel.app/",
      githubUrl: "https://github.com/its-bismay/CodeFlow--real-time-collaborative-workspace",
      timeline: [
        { phase: "Planning & CRDT implementation", date: "June 2026" },
        { phase: "MicroVM Sandboxing", date: "June 2026" },
        { phase: "WebRTC & Final Polish", date: "July 2026" }
      ],
      features: [
        "Conflict-Free Real-Time Collaboration (CRDTs)",
        "Stateful Sandbox Execution (E2B microVMs)",
        "Live Web Server Previews",
        "Integrated WebRTC Audio/Video Calling",
        "Enterprise-Grade Authentication"
      ],
      readme: `
## **CodeFlow**

A production-grade, real-time collaborative workspace where multiple developers can edit the same files simultaneously with sub-100ms perceived latency, make voice/video calls inside the workspace, and run complex multi-file projects in secure sandboxed microVMs.

---

- **Conflict-Free Collaboration:** Powered by Yjs (CRDTs) to enable simultaneous multi-user code editing with seamless offline sync and automatic conflict resolution.
- **Stateful Sandbox Execution:** Integrated with E2B's Firecracker microVMs to instantly spin up dedicated, secure virtual environments that sync your workspace in real-time.
- **Live Web Server Previews:** Spin up full web apps (like FastAPI or Node.js) inside the sandbox, automatically forwarding exposed ports for live iframe previews.
- **Integrated WebRTC Calling:** Seamless in-editor video and voice channels powered by GetStream.io WebRTC SDK, allowing you to talk while you type.
- **Robust Architecture:** Employs a microservice-oriented design handling concurrent WebSocket connections and horizontal scaling via Node.js, Express.js, Socket.IO, and MongoDB.
      `
    },
    {
      id: "researchify",
      slug: "researchify",
      title: "AI Research Agent Platform",
      shortDescription: "A full-stack research automation platform powered by a LangGraph multi-agent pipeline.",
      description: "A full-stack research automation platform where users authenticate via Google, create research projects, and a LangGraph multi-agent pipeline (powered by Gemini 3.1 Flash-Lite) researches the topic in parallel — collecting web content, images (Unsplash), and videos (YouTube) — then synthesizes a markdown report, uploads it to AWS S3, and delivers it via email (Gmail SMTP) and Telegram. All background work is orchestrated through a Postgres-backed job queue.",
      thumbnail: "/researchify.webp",
      tech: ["React", "FastAPI", "Python", "LangGraph", "PostgreSQL", "Google Gemini"],
      liveUrl: "https://researchify-six.vercel.app",
      githubUrl: "https://github.com/its-bismay/Researchify",
      timeline: [
        { phase: "Architecture & Planning", date: "July 2026" },
        { phase: "LangGraph Pipeline Dev", date: "August 2026" },
        { phase: "Frontend & Deployment", date: "August 2026" }
      ],
      features: [
        "LangGraph multi-agent pipeline",
        "Zero-infrastructure Postgres job queue",
        "Parallel web, image, and video research",
        "Automated AWS S3 report generation",
        "Email and Telegram delivery integrations"
      ],
      readme: `
## **AI Research Agent Platform**

A full-stack research automation platform where users authenticate via Google, create research projects, and a **LangGraph multi-agent pipeline** (powered by **Gemini 3.1 Flash-Lite**) researches the topic in parallel.

---

- **Job Queue (No Redis):** PostgreSQL serves as the job queue using \\\`SELECT ... FOR UPDATE SKIP LOCKED\\\`.
- **LangGraph Pipeline:** Directed state graph with fan-out/fan-in parallelism for Web, Image, and Video search.
- **Rate Limiter:** Sliding-window rate limiter at the LLM layer.
- **Delivery System:** Automated report delivery via Gmail SMTP and Telegram.
- **Single Service Deployment:** Background worker runs as an \\\`asyncio.Task\\\` inside the FastAPI lifespan.
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
      { degree: "Higher Secondary Education", school: "Saraswati Vidya Mandir Gatiroutpatna Cuttack", period: "2020 - 2022" }
    ]
  }
};
