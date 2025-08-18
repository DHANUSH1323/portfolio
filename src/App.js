import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SocialBar from "./components/SocialBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects"; // <-- add
import BackgroundParticles from "./components/BackgroundParticles";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  useLayoutEffect(() => {
    // Stop scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force hash to #hero before first paint
    if (window.location.hash !== "#hero") {
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", "#hero");
      } else {
        window.location.hash = "#hero";
      }
    }

    // Ensure only HERO is "shown"
    const allSections = document.querySelectorAll("section.section");
    allSections.forEach(s => s.classList.remove("section-show"));
    const hero = document.getElementById("hero");
    if (hero) hero.classList.add("section-show");

    // Hard jump to top
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <SocialBar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
export default App;