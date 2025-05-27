import React from 'react';
import { motion } from 'framer-motion';
import {
    FaReact, FaPython, FaNodeJs, FaAws, FaGithub
} from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiMongodb, SiFirebase } from 'react-icons/si';

// Timeline Data
const experiences = [
    {
        side: 'left',
        title: "Software Engineer Intern (Full Stack)",
        company: "The Integrity Company",
        date: "May 2024 – Present",
        location: "Ocean Side, California",
        icon: <FaReact color="#00d8ff" />,
        stack: [FaReact, FaNodeJs, SiSpringboot, FaAws, SiPostgresql],
        details: [
            "Deployed automation solutions in Salesforce CRM, optimizing workflows and enhancing operational efficiency.",
            "Implemented algorithms for pre-appointment tasks and automated post-job communication processes.",
            "Designed and developed a database and a full-stack website to manage and place jobs for the portal.",
        ]
    },
    {
        side: 'right',
        title: "Research Assistant (AI Security Innovations)",
        company: "University at Buffalo",
        date: "Feb 2024 – Apr 2024",
        location: "Buffalo, New York",
        icon: <FaPython color="#ffc107" />,
        stack: [FaPython, SiMongodb, SiFirebase, FaGithub],
        details: [
            "Pioneered the integration of Transformers to enhance 'Sven’s' ability to identify complex security vulnerabilities.",
            "Utilized advanced LLMs to boost 'Sven’s' analytical capabilities, ensuring security in vulnerability assessments.",
        ]
    }
];

// Milestone Icon Animation
const MilestoneIcon = ({ icon, idx }) => (
    <motion.div
        className="milestone-icon"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1.2, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: idx * 0.12 }}
        viewport={{ once: false, amount: 0.7 }}
    >
        {icon}
    </motion.div>
);

// Stack Badges
const TechStack = ({ stack }) => (
    <div className="stack-badges">
        {stack.map((Icon, i) => (
            <span className="stack-badge" key={i}><Icon size={22} /></span>
        ))}
    </div>
);

// Timeline Card
const TimelineCard = ({ exp, idx }) => (
    <motion.div
        className={`timeline-card glassmorphic ${exp.side}`}
        initial={{ opacity: 0, x: exp.side === 'left' ? -100 : 100, scale: 0.93 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: idx * 0.12 }}
        viewport={{ once: false, amount: 0.7 }}
    >
        <div className="timeline-card-meta">
            {exp.date} &nbsp; | &nbsp; {exp.location}
        </div>
        <div className="card-header">
            <h4>
                <span className="exp-title">{exp.title}</span>
                <span className="exp-company"> – {exp.company}</span>
            </h4>
        </div>
        <TechStack stack={exp.stack} />
        <ul>
            {exp.details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
    </motion.div>
);

export default function Experience() {
    return (
        <section id="experience" className="timeline-section advanced-timeline">
            <h3 className="timeline-title">My Journey</h3>
            <h2 className="timeline-heading">Experience</h2>
            <div className="timeline-center">
                <div className="timeline-vertical-line" />
                {experiences.map((exp, i) => (
                    <div className={`timeline-row align-center ${exp.side}`} key={i}>
                        {exp.side === 'left' && (
                            <>
                                <div className="timeline-card glassmorphic left">
                                    <TimelineCard exp={exp} idx={i} />
                                </div>
                                <div className="timeline-marker-wrap">
                                    <MilestoneIcon icon={exp.icon} idx={i} />
                                </div>
                                <div className="timeline-empty" />
                            </>
                        )}
                        {exp.side === 'right' && (
                            <>
                                <div className="timeline-empty" />
                                <div className="timeline-marker-wrap">
                                    <MilestoneIcon icon={exp.icon} idx={i} />
                                </div>
                                <div className="timeline-card glassmorphic right">
                                    <TimelineCard exp={exp} idx={i} />
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}