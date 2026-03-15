const BASE_URL = import.meta.env.BASE_URL;

export const myProjects = [
  {
    id: 1,
    title: "Datich: Mental State Analysis via Fine-Tuned Small Language Model",
    description:
      "A mental health text analysis tool using a Qwen2.5-0.5B model fine-tuned with LoRA adapters to score emotional dimensions and classify psychological profiles.",
    subDescription: [
      "Fine-tuned Qwen2.5-0.5B with LoRA (PEFT) to score six emotional dimensions — Sadness, Anxiety, Rumination, Self Focus, Hopelessness, and Emotional Volatility — from raw text input.",
      "Integrated a pre-trained StandardScaler and KMeans clustering pipeline to classify inputs into one of four psychological profiles with confidence percentages.",
      "Built a FastAPI backend deployed on Hugging Face Spaces (Docker) and a React/TypeScript frontend deployed on Vercel.",
    ],
    href: "https://github.com/randomPlayerHere/datich",
    logo: "",
    image: `${BASE_URL}assets/projects/datich.png`,
    tags: [
      { id: 1, name: "Python", path: `${BASE_URL}assets/logos/Python.svg` },
      { id: 2, name: "React", path: `${BASE_URL}assets/logos/React.svg` },
      { id: 3, name: "Hugging Face", path: `${BASE_URL}assets/logos/HuggingFace.svg` },
      { id: 4, name: "FastAPI", path: `${BASE_URL}assets/logos/FastAPI.svg` },
    ],
  },
  {
    id: 2,
    title: "Sentinel AI: Deep CNN-Based Network Intrusion Detection System",
    description:
      "A high-accuracy Deep CNN model for detecting malicious network traffic using the CICIDS2017 dataset.",
    subDescription: [
      "Built a Deep CNN architecture in TensorFlow/Keras for attack vs normal traffic classification. Performed flow-level preprocessing, feature scaling, and dataset balancing.",
      "Achieved >99% detection accuracy and evaluated using Precision, Recall, and F1-score.",
      "Benchmarked performance against a baseline DNN model.",
    ],
    href: "https://github.com/randomPlayerHere/nids",
    logo: "",
    image: `${BASE_URL}assets/projects/nids.png`,
    tags: [
      { id: 1, name: "Python", path: `${BASE_URL}assets/logos/Python.svg` },
      { id: 2, name: "TensorFlow", path: `${BASE_URL}assets/logos/TensorFlow.svg` },
      { id: 3, name: "scikit-learn", path: `${BASE_URL}assets/logos/scikit-learn.svg` },
    ],
  },
  {
    id: 3,
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
    logo: "",
    image: `${BASE_URL}assets/projects/trading.png`,
    tags: [
      { id: 1, name: "Python", path: `${BASE_URL}assets/logos/Python.svg` },
      { id: 2, name: "pandas", path: `${BASE_URL}assets/logos/Pandas.svg` },
      { id: 3, name: "Matplotlib", path: `${BASE_URL}assets/logos/Matplotlib.svg` },
      { id: 4, name: "Streamlit", path: `${BASE_URL}assets/logos/Streamlit.svg` },
    ],
  },
  {
    id: 4,
    title: "HyprFit - AI Fitness Coach",
    description:
      "An adaptive fitness planner using clustering and rule-based personalization.",
    subDescription: [
      "Applied clustering algorithms to user activity data for workout personalization.",
      "Designed rule-based recommendation logic for adaptive plans.",
      "Built an interactive UI using Streamlit.",
      "Focused on lightweight, interpretable ML models.",
    ],
    href: "",
    logo: "",
    image: `${BASE_URL}assets/projects/hyprfit.jpeg`,
    tags: [
      { id: 1, name: "Python", path: `${BASE_URL}assets/logos/Python.svg` },
      { id: 2, name: "scikit-learn", path: `${BASE_URL}assets/logos/scikit-learn.svg` },
      { id: 4, name: "Streamlit", path: `${BASE_URL}assets/logos/Streamlit.svg` }
    ],
  }
];


export const experiences = [
  {
    title: "Software Development Engineer Intern",
    job: "Teemo.ai, NYC (Remote)",
    date: "2026 - Present",
    contents: [
      "Automated complex internal development workflows by building custom Python scripting tools and integrating CI/CD pipelines, reducing manual boilerplate tasks by 30% and accelerating the software development lifecycle.",
      "Designed and developed robust, scalable RESTful APIs utilizing Agile methodologies, achieving 90%+ code coverage through comprehensive automated testing and increasing deployment efficiency by 25%.",
      "Streamlined core engineering processes by optimizing system architecture and implementing strict code quality standards, reducing system latency by 15% and boosting cross-functional productivity for a 5-person engineering team.",
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
  {
    title: "Freelance Data & ML Developer",
    job: "Independent Projects",
    date: "2022 - 2024",
    contents: [
      "Built automated data extraction pipelines using Python (BeautifulSoup, requests, Selenium).",
      "Performed large-scale web scraping, cleaning, and preprocessing for structured analytics workflows.",
      "Applied exploratory data analysis (EDA) and feature engineering using pandas and NumPy.",
      "Developed machine learning models for classification and forecasting tasks.",
      "Delivered reproducible notebooks and lightweight dashboards for client insights.",
    ],
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