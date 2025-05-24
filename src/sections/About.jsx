// import React, { useRef } from 'react';
// import {
//   FaJava, FaPython, FaPhp, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws,
//   FaDatabase, FaAngular, FaGithub
// } from 'react-icons/fa';
// import {
//   SiTypescript, SiPytorch, SiPerl, SiGoland, SiSpringboot,
//   SiOracle, SiKubernetes, SiDotnet, SiNextdotjs, SiPostgresql, SiMongodb, SiFirebase,
//   SiApachespark, SiGooglecloud, SiJenkins, SiNpm,
//   SiTerraform, SiApacheairflow, SiGraphql, SiRedux, SiMysql
// } from 'react-icons/si';

// // Fallback-safe icon renderer
// function SafeIcon({ Icon, size }) {
//   try {
//     return Icon ? <Icon size={size} /> : <FaDatabase size={size} />;
//   } catch {
//     return <FaDatabase size={size} />;
//   }
// }

// const skills = [
//   { name: 'Java', Icon: FaJava },
//   { name: 'Python', Icon: FaPython },
//   { name: 'SQL', Icon: SiMysql },
//   { name: 'PHP', Icon: FaPhp },
//   { name: 'JavaScript', Icon: FaJs },
//   { name: 'TypeScript', Icon: SiTypescript },
//   { name: 'C#', Icon: FaDatabase },            // fallback
//   { name: 'C++', Icon: FaDatabase },           // fallback
//   { name: 'PyTorch', Icon: SiPytorch },
//   { name: 'Perl', Icon: SiPerl },
//   { name: 'GoLang', Icon: SiGoland },
//   { name: 'GraphQL', Icon: SiGraphql },

//   { name: 'Spring Boot', Icon: SiSpringboot },
//   { name: 'Node.js', Icon: FaNodeJs },
//   { name: 'React', Icon: FaReact },
//   { name: 'Oracle Jet', Icon: FaDatabase },    // fallback
//   { name: 'Kafka', Icon: FaDatabase },         // fallback
//   { name: 'Angular', Icon: FaAngular },
//   { name: 'Kubernetes', Icon: SiKubernetes },
//   { name: '.NET', Icon: SiDotnet },
//   { name: 'Next.js', Icon: SiNextdotjs },

//   { name: 'PostgreSQL', Icon: SiPostgresql },
//   { name: 'MongoDB', Icon: SiMongodb },
//   { name: 'S3', Icon: FaDatabase },            // fallback
//   { name: 'Firebase', Icon: SiFirebase },
//   { name: 'Oracle', Icon: SiOracle },
//   { name: 'RDBMS', Icon: FaDatabase },         // fallback
//   { name: 'DynamoDB', Icon: FaDatabase },      // fallback

//   { name: 'AWS', Icon: FaAws },
//   { name: 'GIT', Icon: FaGitAlt },
//   { name: 'Hadoop', Icon: FaDatabase },        // fallback
//   { name: 'Spark', Icon: SiApachespark },
//   { name: 'Docker', Icon: FaDocker },
//   { name: 'GCP', Icon: SiGooglecloud },
//   { name: 'XML', Icon: FaDatabase },           // fallback
//   { name: 'REST APIs', Icon: FaGithub },       // fallback
//   { name: 'Jenkins', Icon: SiJenkins },
//   { name: 'NPM', Icon: SiNpm },
//   { name: 'Terraform', Icon: SiTerraform },
//   { name: 'Airflow', Icon: SiApacheairflow },
//   { name: 'Redux', Icon: SiRedux }
// ];

// export default function About() {
//   const scrollRef = useRef(null);

//   const handleNav = (dir) => {
//     const container = scrollRef.current;
//     if (!container) return;
//     const cardWidth = container.firstChild.getBoundingClientRect().width + 16;
//     const scrollAmount = dir === 'right' ? cardWidth : -cardWidth;
//     container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//   };

//   return (
//     <section id="about" className="about-section">
//       <h3 className="about-intro">Introduction</h3>
//       <h2 className="about-heading">About Me</h2>
//       <p className="about-description">
//         I'm a Full Stack Developer with 4 years of experience building scalable, AI-driven software
//         using modern technologies like React, Java, AWS, and ML. I focus on creating performant,
//         secure, and user-centric applications that solve real-world problems. I thrive in
//         collaborative environments and continuously seek to learn and build impactful solutions.
//       </p>

//       <div className="skills-wrapper">
//         <button
//           className="skill-nav prev"
//           onClick={() => handleNav('left')}
//           aria-label="Scroll skills left"
//         >
//           ‹
//         </button>

//         <div className="skills-container" ref={scrollRef}>
//           {skills.map(({ name, Icon }) => (
//             <div key={name} className="skills-card">
//               <SafeIcon Icon={Icon} size={48} />
//               <span>{name}</span>
//             </div>
//           ))}
//         </div>

//         <button
//           className="skill-nav next"
//           onClick={() => handleNav('right')}
//           aria-label="Scroll skills right"
//         >
//           ›
//         </button>
//       </div>
//     </section>
//   );
// }











import React, { useRef } from 'react';
import {
  FaJava, FaPython, FaPhp, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws,
  FaDatabase, FaAngular, FaGithub
} from 'react-icons/fa';
import {
  SiTypescript, SiPytorch, SiPerl, SiGoland, SiSpringboot,
  SiOracle, SiKubernetes, SiDotnet, SiNextdotjs, SiPostgresql, SiMongodb, SiFirebase,
  SiApachespark, SiGooglecloud, SiJenkins, SiNpm,
  SiTerraform, SiApacheairflow, SiGraphql, SiRedux, SiMysql
} from 'react-icons/si';

// Fallback-safe icon renderer for skills
function SafeIcon({ Icon, size }) {
  try {
    return Icon ? <Icon size={size} /> : <FaDatabase size={size} />;
  } catch {
    return <FaDatabase size={size} />;
  }
}

const skills = [
  { name: 'Java', Icon: FaJava },
  { name: 'Python', Icon: FaPython },
  { name: 'SQL', Icon: SiMysql },
  { name: 'PHP', Icon: FaPhp },
  { name: 'JavaScript', Icon: FaJs },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'C#', Icon: FaDatabase },            // fallback
  { name: 'C++', Icon: FaDatabase },           // fallback
  { name: 'PyTorch', Icon: SiPytorch },
  { name: 'Perl', Icon: SiPerl },
  { name: 'GoLang', Icon: SiGoland },
  { name: 'GraphQL', Icon: SiGraphql },

  { name: 'Spring Boot', Icon: SiSpringboot },
  { name: 'Node.js', Icon: FaNodeJs },
  { name: 'React', Icon: FaReact },
  { name: 'Oracle Jet', Icon: FaDatabase },    // fallback
  { name: 'Kafka', Icon: FaDatabase },         // fallback
  { name: 'Angular', Icon: FaAngular },
  { name: 'Kubernetes', Icon: SiKubernetes },
  { name: '.NET', Icon: SiDotnet },
  { name: 'Next.js', Icon: SiNextdotjs },

  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'S3', Icon: FaDatabase },            // fallback
  { name: 'Firebase', Icon: SiFirebase },
  { name: 'Oracle', Icon: SiOracle },
  { name: 'RDBMS', Icon: FaDatabase },         // fallback
  { name: 'DynamoDB', Icon: FaDatabase },      // fallback

  { name: 'AWS', Icon: FaAws },
  { name: 'GIT', Icon: FaGitAlt },
  { name: 'Hadoop', Icon: FaDatabase },        // fallback
  { name: 'Spark', Icon: SiApachespark },
  { name: 'Docker', Icon: FaDocker },
  { name: 'GCP', Icon: SiGooglecloud },
  { name: 'XML', Icon: FaDatabase },           // fallback
  { name: 'REST APIs', Icon: FaGithub },       // fallback
  { name: 'Jenkins', Icon: SiJenkins },
  { name: 'NPM', Icon: SiNpm },
  { name: 'Terraform', Icon: SiTerraform },
  { name: 'Airflow', Icon: SiApacheairflow },
  { name: 'Redux', Icon: SiRedux }
];

export default function About() {
  const scrollRef = useRef(null);

  const handleNav = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstChild.getBoundingClientRect().width + 16;
    const scrollAmount = dir === 'right' ? cardWidth : -cardWidth;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="about" className="about-section">
      <h3 className="about-intro">Introduction</h3>
      <h2 className="about-heading">About Me</h2>
      <p className="about-description">
        I'm a Full Stack Developer with 4 years of experience building scalable, AI-driven software
        using modern technologies like React, Java, AWS, and ML. I focus on creating performant,
        secure, and user-centric applications that solve real-world problems. I thrive in
        collaborative environments and continuously seek to learn and build impactful solutions.
      </p>

      {/* Roles/Expertise Cards Row */}
      <div className="about-grid">
        <div className="about-card">
          <span className="about-card-icon" style={{ color: '#8c7cf0' }}>
            {/* AI/ML Developer (chip SVG) */}
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#282a36" /><text x="13" y="29" fontSize="18" fill="#fff">AI</text></svg>
          </span>
          <span className="about-card-title">AI/ML Developer</span>
        </div>
        <div className="about-card">
          <span className="about-card-icon" style={{ color: '#00bcd4' }}>
            {/* Mulesoft Expert (M fallback) */}
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#282a36" /><text x="13" y="29" fontSize="18" fill="#fff">M</text></svg>
          </span>
          <span className="about-card-title">Mulesoft Expert</span>
        </div>
        <div className="about-card">
          <span className="about-card-icon" style={{ color: '#ffc107' }}>
            {/* FullStack (gears fallback) */}
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#282a36" /><text x="6" y="29" fontSize="18" fill="#fff">Full</text></svg>
          </span>
          <span className="about-card-title">FullStack Developer</span>
        </div>
        <div className="about-card">
          <span className="about-card-icon" style={{ color: '#00e2e2' }}>
            {/* Data Scientist (atom fallback) */}
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#282a36" /><text x="5" y="29" fontSize="18" fill="#fff">Data</text></svg>
          </span>
          <span className="about-card-title">Data Scientist</span>
        </div>
      </div>

      {/* Skills Carousel */}
      <div className="skills-wrapper">
        <button
          className="skill-nav prev"
          onClick={() => handleNav('left')}
          aria-label="Scroll skills left"
        >
          ‹
        </button>

        <div className="skills-container" ref={scrollRef}>
          {skills.map(({ name, Icon }) => (
            <div key={name} className="skills-card">
              <SafeIcon Icon={Icon} size={48} />
              <span>{name}</span>
            </div>
          ))}
        </div>

        <button
          className="skill-nav next"
          onClick={() => handleNav('right')}
          aria-label="Scroll skills right"
        >
          ›
        </button>
      </div>
    </section>
  );
}