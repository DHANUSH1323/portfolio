import React, { useEffect } from "react";

const education = [
    {
        title: "M.S. Computer Science",
        grade: "GPA: 3.75/4.0",
        period: "Aug 2023 – Dec 2024",
        school: "University at Buffalo, The State University of New York (SUNY)",
        note: "Coursework: Algorithms, Data Intensive Applications, Data Management Systems, Machine Learning, Computer Vision",
    },
    {
        title: "B.E. Computer Science and Engineering",
        grade: "GPA: 3.6/4.0",
        period: "Jun 2016 – Sept 2020",
        school: "R.M.D Engineering College (Anna University), Chennai, India",
        note: "Coursework: Operating Systems, Networks, Object Oriented Programming, Computer Architecture, Data Structures",
    },
];

const certifications = [
    "AWS Cloud Practitioner",
    "Azure Developer Associate",
    "Node.js",
    "Develop AI Agents on Azure (Microsoft)",
];

const experience = [
    {
        title: "AI Agentic Engineer – Acarin Inc",
        period: "Feb 2026 – Present",
        place: "Columbia, MD",
        bullets: [
            "Designed the multi-agent invoice-processing worker for an enterprise HR and finance AI platform, and wrote its orchestrator routing rules, tool list, and human-in-the-loop approval steps in Python.",
            "Built the eval harness in Python that replays golden datasets from Langfuse traces with an LLM as the user, scores 10 runs per case with an LLM-as-a-judge and code-based graders, and feeds a regression suite.",
            "Added input and output guardrails: an LLM judge catches jailbreak and prompt-injection attempts, and output checks stop internal IDs and reasoning traces leaking, tracked by false-positive and false-negative rate.",
            "Prototyped long-term agent memory in PostgreSQL, with per-user and per-entity stores that save stated preferences and load them back in later sessions.",
            "Developed the backend services for the worker in FastAPI with MCP tool servers, using Kafka for asynchronous response delivery and PostgreSQL for agent state, and reduced the MCP tool list exposed to the agent from 78 to 34 (56%), cutting wrong-tool selection.",
            "Wrote the personally identifiable information (PII) masking service in Python that replaces detected identities with opaque tokens before any text goes to a third-party model.",
        ],
    },
    {
        title: "Software Engineer – Redprint",
        period: "Jan 2025 – Feb 2026",
        place: "Buffalo, NY",
        bullets: [
            "Built Node.js REST APIs serving real-time web and mobile applications, handling authentication, request validation, error handling, and asynchronous data flows.",
            "Implemented data caching and profiled backend performance to cut API response times, keeping live updates and notifications responsive under high-frequency traffic.",
            "Split backend services for independent release and automated deployment through GitHub Actions CI/CD, cutting release time by 90%, and integrated third-party analytics, notification, and monitoring services.",
        ],
    },
    {
        title: "Junior Software Engineer – Tata Consultancy Services",
        period: "Dec 2021 – Jul 2023",
        place: "Chennai, India",
        bullets: [
            "Built Java Spring Boot microservices for ALDI’s enterprise system, exposing RESTful APIs and integrating PostgreSQL and Kafka to improve end-to-end data processing efficiency by 32%.",
            "Developed automated unit and integration tests with JUnit and Mockito, reducing regression issues by 40% and improving release stability in distributed, multi-tier environments.",
            "Troubleshot production issues and tuned SQL queries in an Agile Scrum team, cutting average incident resolution time by 28%.",
        ],
    },
    {
        title: "Performance Test Engineer – Cognizant",
        period: "Oct 2020 – Aug 2021",
        place: "Chennai, India",
        bullets: [
            "Analyzed distributed system performance across PostgreSQL, Kafka messaging, and Spring Boot backend services, surfacing scalability issues that improved API response times by 25% at peak load.",
            "Built performance and validation tools in Java to assess Spring Boot microservices and REST APIs.",
            "Produced performance reports and test documentation with developers, QA, and business stakeholders in Agile delivery cycles, reducing failed release cycles by 30%.",
        ],
    },
    {
        title: "Programmer Analyst Intern – Cognizant",
        period: "Jan 2020 – May 2020",
        place: "Chennai, India",
        bullets: [
            "Built RESTful APIs with Java and Spring Boot, working with cross-functional teams on debugging and code reviews.",
        ],
    },
];

export default function Education() {
    useEffect(() => {
        const applyLock = () => {
            if (window.location.hash === "#education") {
                document.body.setAttribute("data-lock", "education");
            } else {
                if (document.body.getAttribute("data-lock") === "education") {
                    document.body.removeAttribute("data-lock");
                }
            }
        };

        applyLock();
        window.addEventListener("hashchange", applyLock);
        return () => {
            window.removeEventListener("hashchange", applyLock);
            if (document.body.getAttribute("data-lock") === "education") {
                document.body.removeAttribute("data-lock");
            }
        };
    }, []);

    return (
        <section id="education" className="section" aria-labelledby="education-title" tabIndex="-1">
            <div className="container">
                <div className="edu-panel reveal">
                    <header className="edu-head">
                        <span className="edu-eyebrow">Education</span>
                        <h2 id="education-title" className="edu-title">Education &amp; Experience</h2>
                    </header>

                    <div className="edu-grid">
                        {/* Left column — Education + Certifications */}
                        <div className="edu-col">
                            <h3 className="edu-col__title">Education</h3>
                            <ol className="edu-tl" aria-label="Education timeline">
                                {education.map((e) => (
                                    <li className="edu-item" key={e.title}>
                                        <span className="edu-tl__dot" />
                                        <div className="edu-item__body">
                                            <div className="edu-item__row">
                                                <h4 className="edu-item__title">{e.title}</h4>
                                                <span className="pill">{e.grade}</span>
                                            </div>
                                            <div className="edu-item__period">{e.period}</div>
                                            <div className="edu-item__school">{e.school}</div>
                                            <ul className="edu-bullets">
                                                <li>{e.note}</li>
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ol>

                            <h3 className="edu-col__title">Certifications</h3>
                            <ol className="edu-tl" aria-label="Certifications">
                                {certifications.map((c) => (
                                    <li className="edu-item" key={c}>
                                        <span className="edu-tl__dot" />
                                        <div className="edu-item__body">
                                            <h4 className="edu-item__title">{c}</h4>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Right column — Experience */}
                        <div className="edu-col">
                            <h3 className="edu-col__title">Experience</h3>
                            <ol className="edu-tl" aria-label="Experience timeline">
                                {experience.map((x) => (
                                    <li className="edu-item" key={x.title}>
                                        <span className="edu-tl__dot" />
                                        <div className="edu-item__body">
                                            <div className="edu-item__row">
                                                <h4 className="edu-item__title">{x.title}</h4>
                                                <span className="pill">{x.period}</span>
                                            </div>
                                            <div className="edu-item__school">{x.place}</div>
                                            <ul className="edu-bullets">
                                                {x.bullets.map((b) => (
                                                    <li key={b}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
