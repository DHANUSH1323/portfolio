import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}


export default App
