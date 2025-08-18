import React, { useEffect, useState } from "react";

export default function Navbar() {
    const [active, setActive] = useState("about");
    const [show, setShow] = useState(false); // hidden on hero, visible after

    // Show navbar only after the hero (#hero) is mostly out of view
    useEffect(() => {
        const hero = document.getElementById("hero");
        if (!hero) { setShow(true); return; } // if hero missing, keep nav visible

        // Show the navbar only when the hero is basically NOT visible.
        const ioHero = new IntersectionObserver(
            (entries) => {
                const r = entries[0].intersectionRatio || 0;
                setShow(r < 0.05); // show when hero < 5% in view
            },
            { threshold: [0, 0.05, 0.25, 0.5, 0.75, 1] }
        );
        ioHero.observe(hero);

        // Initial state on load (no flicker)
        const initialRatio = (() => {
            const rect = hero.getBoundingClientRect();
            const vh = window.innerHeight || document.documentElement.clientHeight;
            const fullyInView = rect.top >= 0 && rect.bottom <= vh;
            // If most of hero is on screen, hide nav.
            if (fullyInView || rect.top < vh && rect.bottom > 0) {
                return 1; // visible
            }
            return 0; // not visible
        })();
        if (initialRatio >= 0.05) setShow(false);

        return () => ioHero.disconnect();
    }, []);

    useEffect(() => {
        // When the navbar is visible, hide the SocialBar via a body data-attribute
        document.body.dataset.nav = show ? "shown" : "hidden";
    }, [show]);

    // Active link underline as you scroll
    useEffect(() => {
        const ids = ["hero", "about", "projects", "education", "contact"];
        const sections = ids.map(id => document.getElementById(id)).filter(Boolean);

        const io = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
            { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
        );
        sections.forEach(s => io.observe(s));
        return () => io.disconnect();
    }, []);

    // Smooth scroll with header offset
    // Instant jump to a section (non-hero), also sets the section lock
    const scrollTo = (id) => (e) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (!el) return;

        // set/clear the overlay lock per section
        if (id === 'contact' || id === 'about' || id === 'projects' || id === 'education') {
            document.body.dataset.lock = id;
            document.body.style.overflow = 'hidden';
        } else {
            delete document.body.dataset.lock;
            document.body.style.overflow = '';
        }

        const header = document.querySelector(".site-nav");
        const offset = header ? header.offsetHeight + 8 : 76;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

        // JUMP, not smooth
        window.scrollTo({ top: y, behavior: "auto" });

        // reflect hash without triggering another scroll
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, "", `#${id}`);
        }

        // mark active right away
        setActive(id);
    };

    // Instant jump to a section (used for brand -> hero)
    const jumpTo = (id) => (e) => {
        e.preventDefault();
        // clear any section lock
        delete document.body.dataset.lock;
        document.body.style.overflow = "";

        // Special-case the hero: jump to absolute top so About never steals focus
        if (id === "hero") {
            // clear locks
            delete document.body.dataset.lock;
            document.body.style.overflow = "";

            // immediately hide navbar + show hero icons
            document.body.dataset.nav = "hidden";

            // jump to absolute top
            window.scrollTo({ top: 0, behavior: "auto" });
            setActive("hero");

            // reflect hash without causing scroll
            if (window.history && window.history.replaceState) {
                window.history.replaceState(null, "", `#${id}`);
            }
            return;
        }

        const el = document.getElementById(id);
        if (!el) return;
        const header = document.querySelector(".site-nav");
        const offset = header ? header.offsetHeight + 8 : 76;
        const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "auto" });
        // reflect hash without causing additional scroll
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, "", `#${id}`);
        }
    };

    return (
        <header className={`site-nav ${show ? "is-visible" : ""}`} role="navigation" aria-label="Primary" aria-hidden={!show}>
            <div className="site-nav__inner">
                <a href="#hero" onClick={jumpTo("hero")} className="site-nav__brand">Dhanush Babu</a>
                <div className="site-nav__links">
                    <a href="#about" onClick={scrollTo("about")} className={active === "about" ? "is-active" : ""}>About</a>
                    <a href="#projects" onClick={scrollTo("projects")} className={active === "projects" ? "is-active" : ""}>Projects</a>
                    <a href="#education" onClick={scrollTo("education")} className={active === "education" ? "is-active" : ""}>Education</a>
                    <a href="#contact" onClick={scrollTo("contact")} className={active === "contact" ? "is-active" : ""}>Contact</a>
                </div>
            </div>
        </header>
    );
}

/* inline icons */
function GitHub() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.26.8-.58v-2.1c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.82 5.62-5.5 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .5Z" /></svg>) }
function LinkedIn() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.85 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.8v2h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-3.98v-6.7c0-1.6-.03-3.7-2.25-3.7-2.26 0-2.6 1.76-2.6 3.58V23H7.5V8.5z" /></svg>) }
function Mail() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 5 8-5" /></svg>) }
function Doc() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>) }