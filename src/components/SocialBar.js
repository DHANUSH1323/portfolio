import React from "react";

export default function SocialBar() {
    return (
        <aside className="socialbar" aria-label="Social links">
            <a href="https://github.com/DHANUSH1323" target="_blank" rel="noopener noreferrer" className="soc" aria-label="GitHub"><GitHub /></a>
            <a href="https://www.linkedin.com/in/dhanush-babu-a23426130/" target="_blank" rel="noopener noreferrer" className="soc" aria-label="LinkedIn"><LinkedIn /></a>
            <a href="mailto:dhansuhramrt@gmail.com" className="soc" aria-label="Email"><Mail /></a>
            {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="soc" aria-label="Resume"><Doc /></a> */}
            <a href="/resume.pdf" className="soc" aria-label="Resume" download="Dhanush_Babu_Resume.pdf" type="application/pdf"><Doc /></a>
        </aside>
    );
}

function GitHub() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.26.8-.58v-2.1c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.61-2.82 5.62-5.5 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .5Z" /></svg>) }
function LinkedIn() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.85 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7 0h3.8v2h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V23h-3.98v-6.7c0-1.6-.03-3.7-2.25-3.7-2.26 0-2.6 1.76-2.6 3.58V23H7.5V8.5z" /></svg>) }
function Mail() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5 8 5 8-5" /></svg>) }
function Doc() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>) }