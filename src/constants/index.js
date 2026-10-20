const BASE_URL = import.meta.env.BASE_URL;

export const myProjects = [
  {
    id: 1,
    title: "Swiggy Jugaad: Agentic AI Grocery Assistant on Swiggy MCP",
    description:
      "An AI agent on Swiggy's Instamart MCP server that infers what is left in a household's kitchen from order history, ranks recipes by ingredients likely on hand, and places a real Instamart order for only the missing items.",
    subDescription: [
      "Modelled pantry stock as a Weibull (k=2) decay curve per item, scaled sublinearly by household size, with a per-item pace multiplier learned from user corrections so the agent asks less over time.",
      "Wrote a framework-free tool-calling agent loop on NVIDIA NIM with model fallback, streamed to a web UI over Server-Sent Events.",
      "Enforced checkout guardrails in code, not in the prompt: split stage/confirm tools, a session-bound user ID and a Rs. 1000 order cap.",
      "Mapped raw SKU names to a 67-ingredient vocabulary via batched LLM calls and a global SKU cache; covered by 78 offline tests.",
    ],
    href: "https://github.com/randomPlayerHere/swiggy_jugaad",
    demo: "",
    image: `${BASE_URL}assets/projects/swiggy_jugaad.png`,
    tags: [
      { id: 1, name: "Python", path: `${BASE_URL}assets/logos/Python.svg` },
      { id: 2, name: "FastAPI", path: `${BASE_URL}assets/logos/FastAPI.svg` },
      { id: 3, name: "MCP" },
      { id: 4, name: "NVIDIA NIM" },
      { id: 5, name: "PostgreSQL", path: `${BASE_URL}assets/logos/PostgreSQL.svg` },
    ],
  },
  {
    id: 2,
    title: "Sentinel AI: 1D CNN Network Intrusion Detection System",
    description:
      "A 1D CNN that classifies network flows into 11 classes (benign + 10 attack families such as DDoS, PortScan and Botnet), served through a real-time FastAPI + React dashboard.",
    subDescription: [
      "Trained on CICIDS2017 across 78 flow features, reaching 99.48% accuracy and 97.67% macro-F1 on 47,912 test flows.",
      "Cut false alarms via class balancing and dropout, clearing 98.97% of benign traffic (~1% false-positive rate) at 98.29% average precision and 97.20% average recall.",
      "Shipped a containerized FastAPI + React app with single and batch endpoints (up to 5,000 flows/request), SHAP per-feature explanations and a live WebSocket alert stream.",
      "Runs at ~1,800 flows/sec with ~155 ms p95 latency on CPU.",
    ],
    href: "https://github.com/randomPlayerHere/nids",
    demo: "https://sentinel-view-d24475ea.vercel.app/",
    image: `${BASE_URL}assets/projects/nids.png`,
    tags: [
      { id: 1, name: "Python", path: `${BASE_URL}assets/logos/Python.svg` },
      { id: 2, name: "TensorFlow", path: `${BASE_URL}assets/logos/TensorFlow.svg` },
      { id: 3, name: "FastAPI", path: `${BASE_URL}assets/logos/FastAPI.svg` },
      { id: 4, name: "React", path: `${BASE_URL}assets/logos/React.svg` },
      { id: 5, name: "Docker", path: `${BASE_URL}assets/logos/Docker.svg` },
    ],
  },
  {
    id: 3,
    title: "Datich: Mental State Analysis via Fine-Tuned Small Language Model",
    description:
      "A mental health text analysis tool using a Qwen2.5-0.5B model fine-tuned with LoRA adapters to score emotional dimensions and classify psychological profiles.",
    subDescription: [
      "Fine-tuned Qwen2.5-0.5B with LoRA (PEFT) to score six emotional dimensions — Sadness, Anxiety, Rumination, Self Focus, Hopelessness, and Emotional Volatility — from raw text input.",
      "Integrated a pre-trained StandardScaler and KMeans clustering pipeline to classify inputs into one of four psychological profiles with confidence percentages.",
      "Built a FastAPI backend deployed on Hugging Face Spaces (Docker) and a React/TypeScript frontend deployed on Vercel.",
    ],
    href: "https://github.com/randomPlayerHere/datich",
    demo: "https://datich.vercel.app",
    image: `${BASE_URL}assets/projects/datich.png`,
    tags: [
      { id: 1, name: "Python", path: `${BASE_URL}assets/logos/Python.svg` },
      { id: 2, name: "React", path: `${BASE_URL}assets/logos/React.svg` },
      { id: 3, name: "Hugging Face", path: `${BASE_URL}assets/logos/HuggingFace.svg` },
      { id: 4, name: "FastAPI", path: `${BASE_URL}assets/logos/FastAPI.svg` },
    ],
  },
  {
    id: 4,
    title: "SMA Crossover Strategy Backtester",
    description:
      "A quantitative trading strategy backtester using Simple Moving Averages on historical stock data.",
    subDescription: [
      "Implemented buy/sell signal logic using SMA crossover strategy.",
      "Analyzed cumulative returns and drawdowns using pandas.",
      "Visualized performance metrics using Matplotlib.",
      "Built a Streamlit interface for interactive backtesting.",
    ],
    href: "https://github.com/randomPlayerHere/backtestSMA",
    demo: "https://backtestsma.streamlit.app/",
    image: `${BASE_URL}assets/projects/trading.png`,
    tags: [
      { id: 1, name: "Python", path: `${BASE_URL}assets/logos/Python.svg` },
      { id: 2, name: "pandas", path: `${BASE_URL}assets/logos/Pandas.svg` },
      { id: 3, name: "Matplotlib", path: `${BASE_URL}assets/logos/Matplotlib.svg` },
      { id: 4, name: "Streamlit", path: `${BASE_URL}assets/logos/Streamlit.svg` },
    ],
  },
  {
    id: 5,
    title: "HyprFit - AI Fitness Coach",
    description:
      "An adaptive fitness planner using clustering and rule-based personalization.",
    subDescription: [
      "Applied clustering algorithms to user activity data for workout personalization.",
      "Designed rule-based recommendation logic for adaptive plans.",
      "Built an interactive UI using Streamlit.",
      "Focused on lightweight, interpretable ML models.",
    ],
    href: "https://github.com/randomPlayerHere/hyprfit",
    demo: "",
    image: `${BASE_URL}assets/projects/hyprfit.jpeg`,
    tags: [
      { id: 1, name: "Python", path: `${BASE_URL}assets/logos/Python.svg` },
      { id: 2, name: "scikit-learn", path: `${BASE_URL}assets/logos/scikit-learn.svg` },
      { id: 3, name: "Streamlit", path: `${BASE_URL}assets/logos/Streamlit.svg` },
    ],
  },
];

export const experiences = [
  {
    title: "AI Engineer Intern",
    job: "Deloitte South Asia, Gurugram",
    date: "Jul 2026 - Aug 2026",
    contents: [
      "Shipped AI features for an internal tool Deloitte Tax uses to file TDS/TCS returns.",
      "Built a RAG pipeline on AWS Bedrock to find each transaction's TDS section, using Amazon Titan Embeddings to search tax provisions and Amazon Nova Lite to pick the TDS section code.",
      "Paired the RAG pipeline with rule-based checks on G/L account names, raising accuracy from 66% to 94% on ~500 labeled transactions.",
      "Designed the end-to-end G/L preprocessing pipeline with per-company normalization layers, turning unstructured ledger data into a validated, deduplicated schema.",
    ],
  },
  {
    title: "Software Engineer Intern",
    job: "Teemo.ai, NYC (Remote)",
    date: "Feb 2026 - Jun 2026",
    contents: [
      "Built backend services for an AI-powered education platform, solely owning the At-Risk Student Detection system, which combines 5 behavior signals into one score and sorts students into 3 risk levels, with ~100% test coverage.",
      "Co-developed an AI photo-grading pipeline scoring handwritten worksheets via LLM.",
      "Built the AI Tutor backend behind a pluggable provider interface, decoupling tutoring logic from any single LLM vendor.",
    ],
  },
  {
    title: "AI/ML Executive Member",
    job: "ELabs (Electronics Labs), KIIT",
    date: "2025 - Present",
    contents: [
      "Conducted hands-on machine learning workshops (regression, clustering, model evaluation) for 100+ students.",
      "Mentored junior members in building end-to-end ML projects using Python, scikit-learn, and Streamlit.",
      "Built and demonstrated GenAI prototypes using LangChain and OpenAI APIs during ELabs Tech Week.",
      "Strengthened technical communication and leadership through collaborative AI initiatives.",
    ],
  },
];

export const achievements = [
  {
    title: "B.Tech in Computer Science",
    issuer: "Kalinga Institute of Industrial Technology",
    detail: "CGPA 8.92 · 2023 - 2027",
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    detail: "Foundational certification",
  },
  {
    title: "Statistical Learning",
    issuer: "Stanford Online",
    detail: "Certification",
  },
  {
    title: "Top 60 of 4000+ teams",
    issuer: "Deloitte Hacksplosion 2026",
    detail: "National hackathon, top 1.5%",
  },
  {
    title: "400+ problems solved",
    issuer: "LeetCode & Codeforces",
    detail: "Data structures & algorithms",
  },
];

export const mySocials = [
  {
    name: "Github",
    href: "https://github.com/randomPlayerHere",
    icon: `${BASE_URL}assets/socials/GitHub.svg`,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/khushalnirwal/",
    icon: `${BASE_URL}assets/socials/LinkedIn.svg`,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/khushalnirwal/",
    icon: `${BASE_URL}assets/socials/Instagram.svg`,
  },
];
export const RESUME_URL = `${BASE_URL}Khushal_Nirwal_Resume.pdf`;
