import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  // const scrollToSection = (id) => {
  //   const el = document.getElementById(id);
  //   el?.scrollIntoView({ behavior: 'smooth' });
  // };
  // const scrollToSection = (id) => {
  //   // Get navbar height for offset
  //   const navEl = document.querySelector('.navbar-container');
  //   const navHeight = navEl?.offsetHeight || 0;

  //   if (id === 'hero') {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //     return;
  //   }

  //   // 2) Any other section → offset by navbar height
  //   const section = document.getElementById(id);
  //   if (!section) return;

  //   // Calculate scroll position: section top relative to document minus navbar height
  //   const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  //   const targetY = sectionTop - navHeight;

  //   window.scrollTo({ top: targetY, behavior: 'smooth' });
  // };

  return (
    <>
      <div className="navbar-container">
        <nav className="custom-navbar">
          <div className="nav-left">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:yourmail@example.com"><MdEmail /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>

          <ul className="nav-center">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-right">
            <a href="#contact">
              <button className="hire-button">Hire Me</button>
            </a>
          </div>
        </nav>
        <div className="navbar-divider" />
      </div>
    </>
  );
};

export default Navbar;