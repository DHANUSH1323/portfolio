// import { FaLinkedin, FaGithub } from 'react-icons/fa';
// import { MdEmail } from 'react-icons/md';

// const Navbar = () => {
//   // const scrollToSection = (id) => {
//   //   const el = document.getElementById(id);
//   //   el?.scrollIntoView({ behavior: 'smooth' });
//   // };
//   // const scrollToSection = (id) => {
//   //   // Get navbar height for offset
//   //   const navEl = document.querySelector('.navbar-container');
//   //   const navHeight = navEl?.offsetHeight || 0;

//   //   if (id === 'hero') {
//   //     window.scrollTo({ top: 0, behavior: 'smooth' });
//   //     return;
//   //   }

//   //   // 2) Any other section → offset by navbar height
//   //   const section = document.getElementById(id);
//   //   if (!section) return;

//   //   // Calculate scroll position: section top relative to document minus navbar height
//   //   const sectionTop = section.getBoundingClientRect().top + window.scrollY;
//   //   const targetY = sectionTop - navHeight;

//   //   window.scrollTo({ top: targetY, behavior: 'smooth' });
//   // };

//   return (
//     <>
//       <div className="navbar-container">
//         <nav className="custom-navbar">
//           <div className="nav-left">
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
//             <a href="mailto:yourmail@example.com"><MdEmail /></a>
//             <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
//           </div>

//           <ul className="nav-center">
//             <li><a href="#hero">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#experience">Experience</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>

//           <div className="nav-right">
//             <a href="#contact">
//               <button className="hire-button">Hire Me</button>
//             </a>
//           </div>
//         </nav>
//         <div className="navbar-divider" />
//       </div>
//     </>
//   );
// };

// export default Navbar;










import React, { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
// import "./index.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optional: Auto-set active link based on scroll position (not required for now)
  // See: https://stackoverflow.com/questions/52007359

  return (
    <nav className={`navbar-container${scrolled ? " navbar-scrolled" : ""}`}>
      <div className="custom-navbar">
        <div className="nav-left">
          <a
            href="https://linkedin.com/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your@email.com"
            aria-label="Mail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <ul className="nav-center">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={active === link.label ? "active" : ""}
              onClick={() => setActive(link.label)}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a href="#contact">
            <button className="hire-button">Hire Me</button>
          </a>
        </div>
      </div>
      <div className="navbar-divider" />
    </nav>
  );
}