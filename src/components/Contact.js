// src/components/Contact.js
import React from "react";
import useReveal from "../hooks/useReveal";

/**
 * Contact (info-only)
 * Renders a header and two info cards: Address + Email.
 * This matches the reference screenshot that shows only static contact info.
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
                        <div className="contact-tile" role="group" aria-labelledby="addr-label">
                            <div className="contact-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                                </svg>
                            </div>
                            <div>
                                <div id="addr-label" className="contact-label">My Address</div>
                                <div className="contact-value">8363 Albanese Cir, Dublin, Ohio - 43016</div>
                            </div>
                        </div>

                        <div className="contact-tile" role="group" aria-labelledby="email-label">
                            <div className="contact-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                                </svg>
                            </div>
                            <div>
                                <div id="email-label" className="contact-label">Email</div>
                                <a className="contact-email" href="mailto:dhanushramrt@gmail.com">
                                    dhanushramrt@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}