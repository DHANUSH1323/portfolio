// src/data/Projectdata.js
export const projects = [
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
        id: 'delivery-mgmt',
        title: 'Agentic AI Job Application Tracker',
        desc:
            ' Created a self-governing AI tool that automates job application tracking with real-time email parsing and Google Sheets integration.',
        tags: ['Python', 'Agentic AI', 'Gemini', 'Numpy', 'PyTorch'],
        image: '/assets/agenticai.png',
        codeUrl: 'https://github.com/DHANUSH1323/Job_tracker'
    },
    {
        id: 'delivery-mgmt',
        title: 'Real Time Traffic Sign Detection',
        desc:
            'Developed a CNN-fusion (Vision Tranformer + CNN) system for real-time traffic sign detection and classification with high precision and recall.',
        tags: ['Python', 'PyTorch', 'NLP', 'Vision Transformer', 'CNN', 'React'],
        image: '/assets/realtime.png',
        codeUrl: 'https://github.com/DHANUSH1323/Real-time-traffic-recognition-and-classification'
    },
    {
        id: 'delivery-mgmt',
        title: 'Laptop AI Advisor App',
        desc:
            'Built an AI-powered web app using XGBoost and KNN to predict laptop prices with 87% accuracy and deliver brand-specific insights.',
        tags: ['Python', 'PyTorch', 'NLP', 'React', 'SciKit-learn', 'React Native', 'Node.js', 'Stripe', 'Google Cloud'],
        image: '/assets/laptopai.png',
        codeUrl: 'https://github.com/DHANUSH1323/LaptopPricePredictor_server'
    },
    {
        id: 'delivery-mgmt',
        title: 'Online Book Store Management System',
        desc:
            'Developed a full-stack React + Python/PostgreSQL platform with real-time search, optimized queries (50% faster), and scalable inventory management.',
        tags: ['Python', 'Postman API', 'PostgreSQL', 'SQL', 'React.js', 'Node.js', 'NumPy'],
        image: '/assets/onlinebookstore.png',
        codeUrl: 'https://github.com/DHANUSH1323/Online_Bookstore'
    },
    {
        id: 'nyc-cab',
        title: 'Simple RPG Game',
        desc:
            'Built a text-based role-playing game in C# featuring character creation, combat mechanics, and inventory management.',
        tags: ['C#', '.NET', 'ASP.NET', 'Blazor', 'OOP Concepts'],
        image: '/assets/simplerpg.png',
        codeUrl: 'https://github.com/DHANUSH1323/SimpleRPG'
    },
    {
        id: 'nyc-cab',
        title: 'Neural Machine Translation (NMT) Model using NLP',
        desc:
            'Implemented an English-to-Spanish translation system using LSTMs with attention in TensorFlow/Keras, covering preprocessing, training, and evaluation.',
        tags: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'NLTK', 'Pandas'],
        image: '/assets/nlp.png',
        codeUrl: 'https://github.com/DHANUSH1323/Neural-Machine-Translation-using-NLP'
    },
    {
        id: 'nyc-cab',
        title: 'Bill_buddy using Flutter',
        desc:
            'Built a Splitwise-like expense-sharing app with group expense tracking and bill-splitting features.',
        tags: ['Flutter', 'Dart', 'Kotlin', 'MongoDB', 'Python'],
        image: '/assets/billbuddy.png',
        codeUrl: 'git@github.com:DHANUSH1323/Bill_buddy.git'
    }
    // …add more
];

export default projects;