import { useEffect } from "react";

export default function useReveal(selector = ".reveal") {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll(selector));
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("is-in"); });
        }, { threshold: 0.12 });
        els.forEach(el => io.observe(el));
        return () => io.disconnect();
    }, [selector]);
}