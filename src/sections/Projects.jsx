import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaReact, FaPython, FaJs, FaAws, FaNodeJs, FaDatabase, FaGithub
} from "react-icons/fa";
import { SiTensorflow, SiMongodb, SiRedux, SiTypescript } from "react-icons/si";

// Example project data
const projects = [
    {
        id: 1,
        title: "Deep Fake Detection System",
        description:
            "Designed and continually enhanced a model to detect manipulated media, deployed for enterprise-scale fact-checking.",
        stack: [FaReact, FaPython, SiTensorflow, FaAws],
        tags: ["All", "AI", "Python", "Fullstack"],
        image: "/assets/fake-detect-screenshot.png",
        preview: "/assets/fake-detect-demo.gif", // On hover, show this gif
        metrics: ["3k+ users", "Deployed on AWS", "Hackathon Winner"],
        more: "Full system using React, TensorFlow, Python, and AWS S3. Achieved >98% detection accuracy. Used by real media clients. Built a live dashboard for monitoring.",
        demo: "https://your-demo-link.com",
        repo: "https://github.com/your-repo"
    },
    {
        id: 2,
        title: "Autoencoder for Anomaly Detection",
        description:
            "Automated defect detection in manufacturing, reducing manual inspection time by 75%.",
        stack: [FaPython, SiTensorflow, SiMongodb],
        tags: ["All", "AI", "Python"],
        image: "/assets/autoencoder-app.png",
        preview: "/assets/autoencoder-demo.gif",
        metrics: ["75% faster", "Production tested", "LLM-enabled"],
        more: "Used advanced autoencoders and MongoDB. Built REST API with Flask. Results visualized with D3.js. Industry-tested.",
        demo: "https://your-demo-link.com",
        repo: "https://github.com/your-repo"
    },
    {
        id: 3,
        title: "Time-Series Forecasting with RNNs",
        description:
            "Developed models to predict energy usage patterns, aiding utility companies with smarter grid management.",
        stack: [FaPython, FaJs, SiTensorflow],
        tags: ["All", "AI", "Python", "Fullstack"],
        image: "/assets/forecasting-app.png",
        preview: "/assets/forecasting-demo.gif",
        metrics: ["100k+ rows", "Live predictions", "API docs"],
        more: "Custom RNN, React dashboard, Python backend, API docs with Swagger. Used for real-world forecasting.",
        demo: "https://your-demo-link.com",
        repo: "https://github.com/your-repo"
    },
    // Add more projects!
];

// Unique filter tags
const filterTags = [
    "All",
    "React",
    "Python",
    "AI",
    "Fullstack"
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, type: "spring", stiffness: 50 }
    })
};

export default function Projects() {
    const [activeTag, setActiveTag] = useState("All");
    const [modal, setModal] = useState(null);

    const filteredProjects =
        activeTag === "All"
            ? projects
            : projects.filter((p) => p.tags.includes(activeTag));

    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <h3 className="projects-subtitle">
                    <span style={{ color: "#00ffa2" }}>What I have built so far</span>
                </h3>
                <h2 className="projects-title">Projects Portfolio</h2>
            </div>

            {/* Filter Chips */}
            <div className="project-tags">
                {filterTags.map((tag) => (
                    <button
                        key={tag}
                        className={`project-tag${activeTag === tag ? " active" : ""}`}
                        onClick={() => setActiveTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <motion.div className="projects-grid" layout>
                <AnimatePresence>
                    {filteredProjects.map((proj, i) => (
                        <motion.div
                            className="project-card"
                            key={proj.id}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            whileHover={{ scale: 1.03, boxShadow: "0 8px 40px #39e2ff66" }}
                            transition={{ type: "spring", stiffness: 80 }}
                        >
                            <div
                                className="project-image-wrap"
                                onMouseEnter={(e) => {
                                    const img = e.currentTarget.querySelector(".project-image");
                                    if (img && proj.preview) img.src = proj.preview;
                                }}
                                onMouseLeave={(e) => {
                                    const img = e.currentTarget.querySelector(".project-image");
                                    if (img && proj.image) img.src = proj.image;
                                }}
                                onClick={() => setModal(proj)}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    className="project-image"
                                    src={proj.image}
                                    alt={proj.title}
                                    loading="lazy"
                                />
                                <div className="project-metrics">
                                    {proj.metrics.map((metric, idx) => (
                                        <span className="project-metric" key={idx}>
                                            {metric}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-content">
                                <h4 className="project-title">{proj.title}</h4>
                                <div className="project-stack-icons">
                                    {proj.stack.map((Icon, idx) => (
                                        <span key={idx} className="stack-icon">
                                            <Icon size={22} />
                                        </span>
                                    ))}
                                </div>
                                <p className="project-desc">{proj.description}</p>
                                <button
                                    className="project-more-btn"
                                    onClick={() => setModal(proj)}
                                >
                                    Show more
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Modal for details/demo */}
            <AnimatePresence>
                {modal && (
                    <motion.div
                        className="project-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setModal(null)}
                    >
                        <motion.div
                            className="project-modal"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.92, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={modal.preview || modal.image}
                                alt={modal.title}
                                className="project-modal-img"
                                loading="lazy"
                            />
                            <div className="project-modal-body">
                                <h3>{modal.title}</h3>
                                <div className="project-stack-icons">
                                    {modal.stack.map((Icon, idx) => (
                                        <span key={idx} className="stack-icon">
                                            <Icon size={22} />
                                        </span>
                                    ))}
                                </div>
                                <p>{modal.more}</p>
                                <div className="modal-links">
                                    {modal.demo && (
                                        <a href={modal.demo} target="_blank" rel="noopener noreferrer" className="modal-link">
                                            View Demo
                                        </a>
                                    )}
                                    {modal.repo && (
                                        <a href={modal.repo} target="_blank" rel="noopener noreferrer" className="modal-link">
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                            <button className="modal-close-btn" onClick={() => setModal(null)}>×</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}