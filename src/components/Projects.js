// src/components/Projects.js
import React, { useEffect } from "react";
import projects from "../data/Projectdata";

export default function Projects() {
    useEffect(() => {
        const applyLock = () => {
            if (window.location.hash === "#projects") {
                document.body.setAttribute("data-lock", "projects");
            } else {
                document.body.removeAttribute("data-lock");
            }
        };

        applyLock(); // run on mount (after initial hash is set)
        window.addEventListener("hashchange", applyLock);

        return () => {
            window.removeEventListener("hashchange", applyLock);
            // be safe: remove lock when this component unmounts
            if (document.body.getAttribute("data-lock") === "projects") {
                document.body.removeAttribute("data-lock");
            }
        };
    }, []);

    return (
        <section id="projects" className="section">
            <div className="container">
                <span className="section__title">Projects</span>
                <h2 className="section__subtitle">Things I’ve built</h2>

                <div className="projects">
                    {projects.map((p) => (
                        <article className="project-card" key={p.id}>
                            {/* image */}
                            <img
                                className="project-card__img"
                                src={process.env.PUBLIC_URL + p.image}
                                alt={p.title}
                                loading="lazy"
                            />

                            {/* body */}
                            <div className="project-card__body">
                                <h3 className="project-card__title">{p.title}</h3>
                                <p className="project-card__desc">{p.desc}</p>

                                <ul className="project-card__tags">
                                    {p.tags.map((t) => (
                                        <li key={t}>{t}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* footer */}
                            <div className="project-card__footer">
                                <a
                                    className="btn btn--ghost"
                                    href={p.codeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}