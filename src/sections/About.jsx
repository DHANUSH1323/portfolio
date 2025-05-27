// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
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

// // Fallback-safe icon renderer for skills
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

// // Timeline Data
// const experiencesNew = [
//   {
//     side: 'left',
//     title: "Software Engineer Intern (Full Stack)",
//     company: "The Integrity Company",
//     date: "May 2024 – Present",
//     location: "Ocean Side, California",
//     icon: <FaReact color="#00d8ff" />,
//     stack: [FaReact, FaNodeJs, SiSpringboot, FaAws, SiPostgresql],
//     details: [
//       "Deployed automation solutions in Salesforce CRM, optimizing workflows and enhancing operational efficiency.",
//       "Implemented algorithms for pre-appointment tasks and automated post-job communication processes.",
//       "Designed and developed a database and a full-stack website to manage and place jobs for the portal.",
//     ]
//   },
//   {
//     side: 'right',
//     title: "Research Assistant (AI Security Innovations)",
//     company: "University at Buffalo",
//     date: "Feb 2024 – Apr 2024",
//     location: "Buffalo, New York",
//     icon: <FaPython color="#ffc107" />,
//     stack: [FaPython, SiMongodb, SiFirebase, FaGithub],
//     details: [
//       "Pioneered the integration of Transformers to enhance 'Sven’s' ability to identify complex security vulnerabilities.",
//       "Utilized advanced LLMs to boost 'Sven’s' analytical capabilities, ensuring security in vulnerability assessments.",
//     ]
//   }
// ];

// // Milestone Icon
// const MilestoneIcon = ({ icon, idx }) => (
//   <motion.div
//     className="milestone-icon"
//     initial={{ scale: 0, opacity: 0 }}
//     whileInView={{ scale: 1.2, opacity: 1 }}
//     transition={{ type: 'spring', stiffness: 400, damping: 20, delay: idx * 0.12 }}
//     viewport={{ once: true }}
//   >
//     {icon}
//   </motion.div>
// );

// const TechStack = ({ stack }) => (
//   <div className="stack-badges">
//     {stack.map((Icon, i) => (
//       <span className="stack-badge" key={i}><Icon size={22} /></span>
//     ))}
//   </div>
// );

// // const TimelineCardNew = ({ exp, idx }) => (
// //   <motion.div
// //     className={`timeline-card glassmorphic ${exp.side}`}
// //     initial={{ opacity: 0, x: exp.side === 'left' ? -100 : 100, scale: 0.93 }}
// //     whileInView={{ opacity: 1, x: 0, scale: 1 }}
// //     transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: idx * 0.12 }}
// //     viewport={{ once: true, amount: 0.2 }}
// //   >
// //     <div className="timeline-card-meta">
// //       {exp.date} &nbsp; | &nbsp; {exp.location}
// //     </div>
// //     <div className="card-header">
// //       <h4>
// //         <span className="exp-title">{exp.title}</span>
// //         <span className="exp-company"> – {exp.company}</span>
// //       </h4>
// //     </div>
// //     <TechStack stack={exp.stack} />
// //     <ul>
// //       {exp.details.map((d, i) => <li key={i}>{d}</li>)}
// //     </ul>
// //   </motion.div>
// // );


// const TimelineCardNew = ({ exp, idx }) => (
//   <motion.div
//     className={`timeline-card glassmorphic ${exp.side}`}
//     initial={{ opacity: 0, x: exp.side === 'left' ? -100 : 100, scale: 0.93 }}
//     whileInView={{ opacity: 1, x: 0, scale: 1 }}
//     transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: idx * 0.12 }}
//     viewport={{ once: false, amount: 0.7 }} // <--- change here
//   >
//     <div className="timeline-card-meta">
//       {exp.date} &nbsp; | &nbsp; {exp.location}
//     </div>
//     <div className="card-header">
//       <h4>
//         <span className="exp-title">{exp.title}</span>
//         <span className="exp-company"> – {exp.company}</span>
//       </h4>
//     </div>
//     <TechStack stack={exp.stack} />
//     <ul>
//       {exp.details.map((d, i) => <li key={i}>{d}</li>)}
//     </ul>
//   </motion.div>
// );


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


//       <div className="about-grid">
//         <div className="about-card">
//           <span className="about-card-icon" style={{ color: '#8c7cf0' }}>
//             <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#282a36" /><text x="13" y="29" fontSize="18" fill="#fff">AI</text></svg>
//           </span>
//           <span className="about-card-title">AI/ML Developer</span>
//         </div>
//         <div className="about-card">
//           <span className="about-card-icon" style={{ color: '#00bcd4' }}>
//             <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#282a36" /><text x="13" y="29" fontSize="18" fill="#fff">M</text></svg>
//           </span>
//           <span className="about-card-title">Mulesoft Expert</span>
//         </div>
//         <div className="about-card">
//           <span className="about-card-icon" style={{ color: '#ffc107' }}>
//             <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#282a36" /><text x="6" y="29" fontSize="18" fill="#fff">Full</text></svg>
//           </span>
//           <span className="about-card-title">FullStack Developer</span>
//         </div>
//         <div className="about-card">
//           <span className="about-card-icon" style={{ color: '#00e2e2' }}>
//             <svg width="40" height="40" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#282a36" /><text x="5" y="29" fontSize="18" fill="#fff">Data</text></svg>
//           </span>
//           <span className="about-card-title">Data Scientist</span>
//         </div>
//       </div>


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


//       <div className="timeline-section advanced-timeline">
//         <h3 className="timeline-title">My Journey</h3>
//         <h2 className="timeline-heading">Experience</h2>
//         <div className="timeline-center">
//           <div className="timeline-vertical-line" />
//           {experiencesNew.map((exp, i) => (
//             <div className={`timeline-row align-center ${exp.side}`} key={i}>
//               {exp.side === 'left' && (
//                 <>
//                   <div className="timeline-card glassmorphic left">
//                     <TimelineCardNew exp={exp} idx={i} />
//                   </div>
//                   <div className="timeline-marker-wrap">
//                     <MilestoneIcon icon={exp.icon} idx={i} />
//                   </div>
//                   <div className="timeline-empty" />
//                 </>
//               )}
//               {exp.side === 'right' && (
//                 <>
//                   <div className="timeline-empty" />
//                   <div className="timeline-marker-wrap">
//                     <MilestoneIcon icon={exp.icon} idx={i} />
//                   </div>
//                   <div className="timeline-card glassmorphic right">
//                     <TimelineCardNew exp={exp} idx={i} />
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
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
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="#282a36" />
              <text x="13" y="29" fontSize="18" fill="#fff">AI</text>
            </svg>
          </span>
          <span className="about-card-title">AI/ML Developer</span>
        </div>
        <div className="about-card">
          <span className="about-card-icon" style={{ color: '#00bcd4' }}>
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="#282a36" />
              <text x="13" y="29" fontSize="18" fill="#fff">M</text>
            </svg>
          </span>
          <span className="about-card-title">Mulesoft Expert</span>
        </div>
        <div className="about-card">
          <span className="about-card-icon" style={{ color: '#ffc107' }}>
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="#282a36" />
              <text x="6" y="29" fontSize="18" fill="#fff">Full</text>
            </svg>
          </span>
          <span className="about-card-title">FullStack Developer</span>
        </div>
        <div className="about-card">
          <span className="about-card-icon" style={{ color: '#00e2e2' }}>
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="#282a36" />
              <text x="5" y="29" fontSize="18" fill="#fff">Data</text>
            </svg>
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