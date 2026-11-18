// src/components/Contact.js
import React from "react";
import useReveal from "../hooks/useReveal";

const tiles = [
    {
        id: "phone",
        label: "Phone",
        value: "716-939-8230",
        href: "tel:+17169398230",
        icon: <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />,
    },
    {
        id: "email",
        label: "Email",
        value: "dhanushramrt@gmail.com",
        href: "mailto:dhanushramrt@gmail.com",
        icon: <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />,
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/dhanushbaburamadoss",
        href: "https://www.linkedin.com/in/dhanushbaburamadoss/",
        icon: <path d="M4.98 3.5C4.98 4.88 3.85 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.8v2h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-3.98v-6.7c0-1.6-.03-3.7-2.25-3.7-2.26 0-2.6 1.76-2.6 3.58V23H7.5V8.5z" />,
    },
    {
        id: "github",
        label: "GitHub",
        value: "github.com/DHANUSH1323",
        href: "https://github.com/DHANUSH1323",
        icon: <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.26.8-.58v-2.1c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.82 5.62-5.5 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .5Z" />,
    },
];

/**
 * Contact (info-only)
 * Renders a header and four info tiles: Phone, Email, LinkedIn, GitHub.
 */
export default function Contact() {
    useReveal?.();

    return (
        <section id="contact" className="section" aria-labelledby="contact-title" tabIndex="-1">
            <div className="container">
                <div className="contact-panel reveal">
                    <header style={{ marginBottom: 16 }}>
                        <span className="edu-eyebrow">Contact</span>
                        <h2 id="contact-title" className="edu-title">Ready to collaborate?</h2>
                    </header>

                    <div className="contact-row">
                        {tiles.map((t) => {
                            const external = t.href.startsWith("http");
                            return (
                                <div className="contact-tile" role="group" aria-labelledby={`${t.id}-label`} key={t.id}>
                                    <div className="contact-icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">{t.icon}</svg>
                                    </div>
                                    <div>
                                        <div id={`${t.id}-label`} className="contact-label">{t.label}</div>
                                        <a
                                            className="contact-email"
                                            href={t.href}
                                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        >
                                            {t.value}
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
