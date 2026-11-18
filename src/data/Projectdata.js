// src/data/Projectdata.js
export const projects = [
    {
        id: 'tool-count-study',
        title: 'Research: Tool Count vs Tool Description in LLM Agents',
        desc:
            'Ran a pre-registered study (1,254 agent conversations, 11 conditions) and a 456-conversation follow-up on tau2-bench comparing fewer tools against better tool descriptions. Parameter facts in descriptions raised task success from 53% to 67% while longer rewrites added nothing, 48 distractor tools caused no reliable drop, and per-turn tool retrieval cut success to as low as 4%.',
        tags: ['Python', 'tau2-bench', 'OpenAI API', 'Claude API', 'statsmodels'],
        image: '/assets/toolstudy.svg',
        codeUrl: 'https://github.com/DHANUSH1323/PhD'
    },
    {
        id: 'deep-research-agent',
        title: 'Multi-Agent Deep Research Assistant',
        desc:
            'Built an orchestrator that decomposes a research question and dispatches it to specialized subagents for retrieval and paper summarization, returning a cited report over a corpus of arXiv papers. Retrieval is exposed as MCP tools from a purpose-built MCP server, with hybrid dense + BM25 search and reciprocal-rank fusion over Qdrant, and contextual chunking on ingest.',
        tags: ['Python', 'LangGraph', 'MCP', 'Qdrant', 'FastEmbed', 'Langfuse', 'PyMuPDF', 'Docker'],
        image: '/assets/deepresearch.svg',
        codeUrl: 'https://github.com/DHANUSH1323/deep-research-agent'
    },
    {
        id: 'gaia-agent',
        title: 'GAIA Benchmark Agent',
        desc:
            'Built a tool-using agent on smolagents and Qwen2.5-72B with custom tools for attachment parsing across text, Excel, and PDF, run across the full GAIA benchmark question set under a sandboxed import allowlist.',
        tags: ['Python', 'smolagents', 'Qwen2.5-72B', 'DuckDuckGo Search', 'Gradio', 'pandas'],
        image: '/assets/gaia.svg',
        codeUrl: 'https://github.com/DHANUSH1323/Agents'
    },
    {
        id: 'reality-game-show',
        title: 'AI-Driven Reality Game Show Platform',
        desc:
            'Built a real time, multi round game show platform enhanced with AI powered question difficulty tuning, player performance analytics, and automated moderation, using WebSockets for low latency buzzer events and Spring Boot for authoritative game state orchestration across concurrent teams.',
        tags: [
            'Java',
            'Spring Boot',
            'WebSockets',
            'AI Analytics',
            'Game Theory',
            'React',
            'Docker'
        ],
        image: '/assets/realitygameshow.png',
        codeUrl: 'https://github.com/DHANUSH1323/RealityGameShow'
    },
    {
        id: 'banking-microservices',
        title: 'Banking Ledger & Transaction Microservices',
        desc:
            'Designed and built scalable Java Spring Boot microservices to handle banking transactions, ledger entries, and account balance management, with strong consistency guarantees, fault tolerance, and secure REST APIs aligned with real world financial systems.',
        tags: [
            'Java',
            'Spring Boot',
            'Microservices',
            'REST APIs',
            'PostgreSQL',
            'Kafka',
            'Docker'
        ],
        image: '/assets/banking.png',
        codeUrl: 'https://github.com/DHANUSH1323/banking'
    },
    {
        id: 'job-tracker',
        title: 'Agentic AI Job Application Tracker',
        desc:
            ' Created a self-governing AI tool that automates job application tracking with real-time email parsing and Google Sheets integration.',
        tags: ['Python', 'Agentic AI', 'Gemini', 'Numpy', 'PyTorch'],
        image: '/assets/agenticai.png',
        codeUrl: 'https://github.com/DHANUSH1323/Job_tracker'
    },
    {
        id: 'traffic-sign',
        title: 'Real Time Traffic Sign Detection',
        desc:
            'Developed a CNN-fusion (Vision Tranformer + CNN) system for real-time traffic sign detection and classification with high precision and recall.',
        tags: ['Python', 'PyTorch', 'NLP', 'Vision Transformer', 'CNN', 'React'],
        image: '/assets/realtime.png',
        codeUrl: 'https://github.com/DHANUSH1323/Real-time-traffic-recognition-and-classification'
    },
    {
        id: 'laptop-ai',
        title: 'Laptop AI Advisor App',
        desc:
            'Built an AI-powered web app using XGBoost and KNN to predict laptop prices with 87% accuracy and deliver brand-specific insights.',
        tags: ['Python', 'PyTorch', 'NLP', 'React', 'SciKit-learn', 'React Native', 'Node.js', 'Stripe', 'Google Cloud'],
        image: '/assets/laptopai.png',
        codeUrl: 'https://github.com/DHANUSH1323/LaptopPricePredictor_server'
    },
    {
        id: 'bookstore',
        title: 'Online Book Store Management System',
        desc:
            'Developed a full-stack React + Python/PostgreSQL platform with real-time search, optimized queries (50% faster), and scalable inventory management.',
        tags: ['Python', 'Postman API', 'PostgreSQL', 'SQL', 'React.js', 'Node.js', 'NumPy'],
        image: '/assets/onlinebookstore.png',
        codeUrl: 'https://github.com/DHANUSH1323/Online_Bookstore'
    },
    {
        id: 'simple-rpg',
        title: 'Simple RPG Game',
        desc:
            'Built a text-based role-playing game in C# featuring character creation, combat mechanics, and inventory management.',
        tags: ['C#', '.NET', 'ASP.NET', 'Blazor', 'OOP Concepts'],
        image: '/assets/simplerpg.png',
        codeUrl: 'https://github.com/DHANUSH1323/SimpleRPG'
    },
    {
        id: 'nmt',
        title: 'Neural Machine Translation (NMT) Model using NLP',
        desc:
            'Implemented an English-to-Spanish translation system using LSTMs with attention in TensorFlow/Keras, covering preprocessing, training, and evaluation.',
        tags: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'NLTK', 'Pandas'],
        image: '/assets/nlp.png',
        codeUrl: 'https://github.com/DHANUSH1323/Neural-Machine-Translation-using-NLP'
    },
    {
        id: 'bill-buddy',
        title: 'Bill Buddy (Flutter)',
        desc:
            'Built a Splitwise-like expense-sharing app with group expense tracking and bill-splitting features.',
        tags: ['Flutter', 'Dart', 'Kotlin', 'MongoDB', 'Python'],
        image: '/assets/billbuddy.png',
        codeUrl: 'https://github.com/DHANUSH1323/Bill_buddy'
    }
    // …add more
];

export default projects;