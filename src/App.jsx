import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import Background3D from './components/Background3D';
import DevOps from './components/DevOps';

function App() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const dot = document.querySelector('.custom-cursor-dot');
    
    const moveCursor = (e) => {
      if (cursor && dot) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
      }
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <div className="custom-cursor-dot"></div>
      <Background3D />
      <div className="bg-grid"></div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <DevOps />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      
      <ThemeSwitcher />
      
      <footer className="glass" style={{ padding: '3rem 0', textAlign: 'center', marginTop: '4rem', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
            DESIGNED & BUILT BY <span className="text-accent" style={{ fontWeight: 'bold' }}>KANAV ARORA</span>
          </p>
          <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
            © {new Date().getFullYear()} • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

