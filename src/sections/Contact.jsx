import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// You can replace with your own avatar
const BOT_AVATAR = "https://api.dicebear.com/7.x/personas/svg?seed=Dhanush";
const USER_AVATAR = "https://api.dicebear.com/7.x/personas/svg?seed=Visitor";

const QUICK_REPLIES = [
    { key: "about", label: "About Me" },
    { key: "skills", label: "Skills" },
    { key: "projects", label: "Projects" },
    { key: "resume", label: "Resume" },
    { key: "contact", label: "Contact Info" },
];

const BOT_REPLIES = {
    welcome: "Hey, I'm Dhanush! 👋 Your personal AI agent for this portfolio. What do you want to know?",
    about: "I'm a full stack developer with 4+ years of experience. I love React, Node.js, AWS, C#, and all things modern web! I build scalable, robust solutions and thrive in fast-moving teams.",
    skills: "Tech arsenal: React, Redux, Node.js, TypeScript, C#, .NET, AWS, Docker, SQL/NoSQL, ML, and more. Ask about any specific stack.",
    projects: "Explore my projects on [GitHub](https://github.com/yourprofile) or ask for a quick summary.",
    resume: "Download my resume here: [Resume.pdf](your_resume_link_here.pdf).",
    contact: "You can email me at dhanush@email.com or DM on [LinkedIn](https://linkedin.com/in/yourprofile).",
    fallback: "Hmm, I didn't catch that. Try one of the quick replies below or ask another question!",
};

function parseLinks(text) {
    // Convert [Text](URL) to anchor tags
    return text.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
            return (
                <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer" className="bot-link">
                    {match[1]}
                </a>
            );
        }
        return part;
    });
}

// export default function ContactChatAgent() {
export default function Contact() {
    const [messages, setMessages] = useState([
        { from: "bot", text: BOT_REPLIES.welcome }
    ]);
    const [input, setInput] = useState("");
    const chatRef = useRef(null);

    useEffect(() => {
        chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
    }, [messages]);

    function replyBot(text) {
        const lower = text.trim().toLowerCase();
        let key = "";
        if (lower.includes("about")) key = "about";
        else if (lower.includes("skill")) key = "skills";
        else if (lower.includes("project")) key = "projects";
        else if (lower.includes("resume") || lower.includes("cv")) key = "resume";
        else if (lower.includes("contact") || lower.includes("email") || lower.includes("linkedin")) key = "contact";
        else key = "fallback";
        setTimeout(() => {
            setMessages((msgs) => [...msgs, { from: "bot", text: BOT_REPLIES[key] }]);
        }, 700);
    }

    function handleSend(text) {
        setMessages((msgs) => [...msgs, { from: "user", text }]);
        replyBot(text);
    }

    function handleOption(key) {
        const selected = QUICK_REPLIES.find((q) => q.key === key);
        handleSend(selected.label);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!input.trim()) return;
        handleSend(input.trim());
        setInput("");
    }

    return (
        <section id="contact" className="contact-agent-section">
            <div className="chat-agent-card">
                <div className="agent-header">
                    <img src={BOT_AVATAR} alt="Dhanush Avatar" className="agent-avatar" />
                    <span className="agent-title">Dhanush Agent</span>
                </div>
                <div className="agent-chat-window" ref={chatRef}>
                    <AnimatePresence initial={false}>
                        {messages.map((msg, idx) => (
                            <motion.div
                                key={idx}
                                className={`agent-msg-row ${msg.from}`}
                                initial={{ opacity: 0, y: msg.from === "user" ? 25 : -25 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: msg.from === "user" ? 12 : -12 }}
                                transition={{ type: "spring", duration: 0.48 }}
                            >
                                {msg.from === "bot" && (
                                    <img src={BOT_AVATAR} className="agent-msg-avatar" alt="Bot" />
                                )}
                                <div className={`agent-bubble ${msg.from}`}>
                                    {msg.from === "bot" ? parseLinks(msg.text) : msg.text}
                                </div>
                                {msg.from === "user" && (
                                    <img src={USER_AVATAR} className="agent-msg-avatar user" alt="User" />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <form className="agent-chat-form" onSubmit={handleSubmit} autoComplete="off">
                    <input
                        className="agent-chat-input"
                        placeholder="Ask me anything about Dhanush…"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        maxLength={200}
                        autoFocus
                    />
                    <button className="agent-chat-send" type="submit" disabled={!input.trim()}>Send</button>
                </form>
                <div className="agent-quick-replies">
                    {QUICK_REPLIES.map(opt => (
                        <button
                            key={opt.key}
                            className="agent-quick-btn"
                            type="button"
                            onClick={() => handleOption(opt.key)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}