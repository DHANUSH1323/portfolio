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
                            alt="Portrait"
                        />
                    </figure>

                    <article className="about__card" aria-label="About summary">
                        <p className="about__tagline">Software Developer · Full Stack Developer · AI Engineer · Computer Vision</p>
                        <div className="about__rule" />
                        <p>
                            I’m Dhanush — I am a performance-oriented Software Engineer with over 5 years of experience providing impactful, scalable solutions in full-stack development, cloud engineering, and optimizing performance. Proficient in contemporary technologies such as Python, React, React Native, Node.js, Java, C#, JavaScript, TypeScript, AWS, Google Cloud, SQL Server, PostgreSQL, and Firebase, I focus on designing systems that enhance performance, reliability, and user experience.

                        </p>
                        <p>
                            I obtained an MS in Computer Science from the University at Buffalo, where I developed Machine Learning, Deep Learning, and Computer Vision models from the ground up, implementing them on actual datasets and reaching accuracy of up to 94% in predictive analytics endeavors.
                        </p>
                        <p>
                            At Redprint Inc, I directed mobile and backend development across platforms that catered to over 1M active users, established microservices for instantaneous health monitoring, and decreased deployment cycles by 40% using CI/CD automation. In earlier positions at TCS (ALDI) and CTS (Truist Bank), I upgraded enterprise applications, decreased API response times by over 40%, and refined database queries to lower reporting expenses by 50%.
                        </p>
                        <p>
                            Enthusiastic about AI, ML, and new technologies, I excel in dynamic settings where creativity intersects with implementation, and I am dedicated to developing meaningful solutions that extend worldwide.
                        </p>
                        <p>
                            Actively pursuing full-time Software Engineering positions that allow me to utilize my software engineering skills and AI/ML background to achieve significant business outcomes.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}