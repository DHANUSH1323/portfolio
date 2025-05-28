const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-left">
        <h1 className="hero-name">Dhanush Babu<br />Ramadoss</h1>
        <div className="hero-accent" />
        <p className="subtitle">
          Fullstack/AI–ML Engineer with 4 years of industry experience.
        </p>
        <button className="download-btn">Download CV</button>
      </div>
      <div className="hero-right">
        <img src="src/assets/robot.png" alt="robot graphic" />
      </div>
    </section>
  );
};

export default Hero;