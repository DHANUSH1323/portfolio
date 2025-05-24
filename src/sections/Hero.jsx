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


// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Suspense } from 'react';
// import RobotModel from '../components/RobotModel';

// const Hero = () => {
//   return (
//     <section id="hero" className="hero-section">
//       <div className="hero-left">
//         <h1 className="hero-name">Dhanush Babu<br />Ramadoss</h1>
//         <div className="hero-accent" />
//         <p className="subtitle">
//           Fullstack/AI–ML Engineer with 4 years of industry experience.
//         </p>
//         <button className="download-btn">Download CV</button>
//       </div>

//       <div className="hero-right">
//         <div style={{ width: '100%', maxWidth: 500, height: 500 }}>
//           <Canvas>
//             <Suspense fallback={null}>
//               <ambientLight intensity={1} />
//               <directionalLight position={[5, 5, 5]} intensity={1.5} />
//               <RobotModel scale={2} position={[0, -1.5, 0]} />
//               <OrbitControls enableZoom={false} />
//             </Suspense>
//           </Canvas>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;