import React, { useEffect, useRef, useState } from "react";
import BackgroundParticles from "./BackgroundParticles";

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <BackgroundParticles />
            <div className="hero__inner">
                <h1 className="hero__title">Dhanush Babu Ramadoss</h1>
                <h2 className="hero__sub">
                    I&apos;m a <Typewriter words={["Software Engineer", "Full Stack Engineer", "ML Engineer"]} />
                </h2>

                <nav className="hero__nav">
                    <a href="#about" onClick={smooth("#about")} className="is-active">About</a>
                    <a href="#projects" onClick={smooth("#projects")}>Projects</a>
                    <a href="#education" onClick={smooth("#education")}>Education</a>
                    <a href="#contact" onClick={smooth("#contact")}>Contact</a>
                </nav>
            </div>
        </section>
    );
}

function smooth(selector) {
    return (e) => {
        e.preventDefault();
        const el = document.querySelector(selector);
        if (!el) return;

        // lock page scroll for overlay sections
        if (selector === '#about') {
            document.body.dataset.lock = 'about';
            document.body.style.overflow = 'hidden';
        } else if (selector === '#projects') {
            document.body.dataset.lock = 'projects';
            document.body.style.overflow = 'hidden';
        } else if (selector === '#education') {
            document.body.dataset.lock = 'education';
            document.body.style.overflow = 'hidden';
        } else if (selector === '#contact') {
            document.body.dataset.lock = 'contact';
            document.body.style.overflow = 'hidden';
        } else {
            delete document.body.dataset.lock;
            document.body.style.overflow = '';
        }

        const header = document.querySelector('.site-nav');
        const offset = header ? (header.offsetHeight + 8) : 76;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        document.body.dataset.nav = 'shown';
        window.scrollTo({ top: y, behavior: 'auto' });
    };
}

/* ---------------- Typewriter (no deps) ---------------- */
function Typewriter({ words, speed = 110, pause = 1200 }) {
    const [i, setI] = useState(0);
    const [txt, setTxt] = useState("");
    const [phase, setPhase] = useState("typing");

    useEffect(() => {
        const word = words[i % words.length];
        let t;
        if (phase === "typing") {
            if (txt.length < word.length) t = setTimeout(() => setTxt(word.slice(0, txt.length + 1)), speed);
            else t = setTimeout(() => setPhase("pausing"), pause);
        } else if (phase === "pausing") {
            t = setTimeout(() => setPhase("deleting"), 240);
        } else {
            if (txt.length > 0) t = setTimeout(() => setTxt(word.slice(0, txt.length - 1)), speed * 0.6);
            else { setI((x) => x + 1); setPhase("typing"); }
        }
        return () => clearTimeout(t);
    }, [txt, phase, i, words, speed, pause]);

    return (
        <span className="tw">
            {txt}<span className="tw__caret" />
        </span>
    );
}

/* ---------------- Minimal inline icons ---------------- */
// function GitHub() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.26.8-.58v-2.1c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.82 5.62-5.5 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .5Z" /></svg>) }
// function LinkedIn() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.85 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.8v2h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-3.98v-6.7c0-1.6-.03-3.7-2.25-3.7-2.26 0-2.6 1.76-2.6 3.58V23H7.5V8.5z" /></svg>) }
// function Mail() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 5 8-5" /></svg>) }
// function Doc() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>) }