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
            if (fullyInView || (rect.top < vh && rect.bottom > 0)) {
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
