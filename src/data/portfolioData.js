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
    { name: "TypeScript", icon: "FileJson" },
    { name: "Tailwind CSS", icon: "Palette" },
    { name: "Node.js", icon: "Server" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "Python", icon: "Cpu" },
    { name: "AWS", icon: "Cloud" }
  ],
  achievements: [
    {
      id: 1,
      title: "Winner of Global FinTech Hackathon",
      date: "Oct 2025",
      description: "Developed a cross-border payment solution using blockchain.",
      category: "Hackathon"
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      date: "Jan 2026",
      description: "Validation of expertise in designing distributed systems.",
      category: "Certification"
    }
  ],
  projects: [
    {
      id: "nexus-cloud",
      slug: "nexus-cloud",
      title: "Nexus Cloud",
      shortDescription: "A decentralized storage platform with end-to-end encryption.",
      description: "Nexus Cloud provides a radical new approach to personal data storage. By utilizing a decentralized network and client-side encryption, it ensures that your data is safe and accessible only by you.",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      tech: ["React", "Rust", "WebAssembly", "IPFS"],
      liveUrl: "https://nexus-cloud.demo",
      githubUrl: "https://github.com/bismay/nexus-cloud",
      timeline: [
        { phase: "Research", date: "Sep 2025" },
        { phase: "Prototyping", date: "Oct 2025" },
        { phase: "Alpha Release", date: "Dec 2025" }
      ],
      features: [
        "End-to-end PGP encryption",
        "Decentralized storage via IPFS",
        "Drag-and-drop file management",
        "Cross-device synchronization"
      ],
      readme: `
# Nexus Cloud

Nexus Cloud is a secure, decentralized storage platform.

## key Features
- **Security First**: Files are encrypted on the client side.
- **Peer-to-Peer**: No central server controls your data.
- **Open Source**: Audit the code anytime.

## Tech Stack
Using React for the UI and Rust/Wasm for the heavy cryptographic lifting.
      `
    },
    {
      id: "ai-quant",
      slug: "ai-quant",
      title: "AI Quant",
      shortDescription: "Stock market predictor using Transformer-based models.",
      description: "AI Quant analyzes historical market data and social sentiment to predict short-term stock movements with high accuracy.",
      thumbnail: "https://images.unsplash.com/photo-1611974717482-982c7a6944b8?q=80&w=800&auto=format&fit=crop",
      tech: ["Python", "TensorFlow", "React", "D3.js"],
      liveUrl: "https://ai-quant.demo",
      githubUrl: "https://github.com/bismay/ai-quant",
      timeline: [
        { phase: "Data Collection", date: "Jan 2026" },
        { phase: "Model Training", date: "Feb 2026" },
        { phase: "Deployment", date: "Present" }
      ],
      features: [
        "Real-time market sentiment analysis",
        "Backtesting engine",
        "Interactive D3.js visualization",
        "Automated trading signals"
      ],
      readme: "# AI Quant\nPredicting the future of finance with deep learning."
    }
  ],
  about: {
    story: [
      { year: "2023-NOVEMBER", event: "Started web devlopment", description: "In my first semester of college, a tragedy broke my left hand—and slowed everything down. Stuck at home, I turned to web development, inspired by my love for movies, and began building a streaming website." },
      { year: "2024-MARCH", event: "Joined INNOREVA web team", description: "Facing strong competition in my first year, I cleared the club interviews and joined Team Innoreva—one of NIT Jamshedpur’s most prestigious clubs—as a web team member." },
      { year: "2026-APRIL", event: "Won National level hackathon", description: "Leading my team, we achieved 2nd place at the national-level Hack Horizon 2.0 hackathon, earning ₹1000 and goodies." }
    ],
    education: [
      { degree: "B.Tech in Electrical Engineering", school: "National Institute of Technology, Jamshedpur", period: "2023 - 2027" }
    ]
  }
};
