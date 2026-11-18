import React from "react";
import useReveal from "../hooks/useReveal";

export default function About() {
    // trigger fade/slide-in on scroll
    useReveal();

    return (
        <section id="about" className="section" aria-labelledby="about-title" tabIndex="-1">
            <div className="container">
                <div className="about about--boxed reveal" aria-label="About section">
                    <header className="about__header">
                        <span id="about-title" className="about__eyebrow">About</span>
                        <h2 className="about__title">Learn more about me</h2>
                    </header>

                    <figure className="about__photo">
                        <img
                            loading="lazy"
                            decoding="async"
                            src="assets/IMG_6034.png"
                            alt="Dhanush Babu Ramadoss"
                        />
                    </figure>

                    <article className="about__card" aria-label="About summary">
                        <p className="about__tagline">AI Agentic Engineer · LLM Agents &amp; Evals · Backend Engineer</p>
                        <div className="about__rule" />
                        <p>
                            I’m Dhanush, an AI Agentic Engineer with 5+ years of software engineering experience. I build LLM agents that run in production: multi-agent orchestration, MCP tool servers, evaluation harnesses, guardrails, and the backend services that hold it all together.
                        </p>
                        <p>
                            At Acarin Inc, I designed the multi-agent invoice-processing worker for an enterprise HR and finance AI platform, built its eval harness (golden datasets replayed from Langfuse traces, scored with LLM-as-a-judge and code-based graders), added jailbreak and prompt-injection guardrails, and wrote a PII masking service. I also cut the MCP tool list exposed to the agent from 78 to 34, which reduced wrong-tool selection.
                        </p>
                        <p>
                            That work led me to research. In a pre-registered study of 1,254 agent conversations on tau2-bench, plus a 456-conversation follow-up, I tested fewer tools against better tool descriptions. Adding parameter facts to descriptions raised task success from 53% to 67%, while per-turn tool retrieval cut it to as low as 4%.
                        </p>
                        <p>
                            Before AI, I built backend systems: Node.js APIs for real-time apps at Redprint, Spring Boot microservices with PostgreSQL and Kafka for ALDI at TCS, and distributed-system performance analysis at Cognizant. I hold an M.S. in Computer Science from the University at Buffalo (GPA 3.75/4.0).
                        </p>
                        <p>
                            <strong>LLMs &amp; Agents:</strong> Claude, GPT and Gemini APIs, AWS Bedrock, LangChain, LangGraph, MCP, Langfuse<br />
                            <strong>Languages:</strong> Python, TypeScript, JavaScript, Java, SQL<br />
                            <strong>Frameworks:</strong> FastAPI, Node.js, React, Spring Boot<br />
                            <strong>Data, Cloud &amp; Tools:</strong> PostgreSQL, Qdrant, Redis, Kafka, AWS, Azure, Docker, Kubernetes, GitHub Actions<br />
                            <strong>Certifications:</strong> AWS Cloud Practitioner, Azure Developer Associate, Node.js, Develop AI Agents on Azure (Microsoft)
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}