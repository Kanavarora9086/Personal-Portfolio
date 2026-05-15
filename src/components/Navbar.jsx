import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Hexagon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'DevOps', href: '#devops' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];


  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <div className="logo-icon">
            <Hexagon className="text-accent" size={32} />
            <Cpu className="cpu-inner" size={16} />
          </div>
          <span className="logo-text">KANAV<span className="dot">.</span></span>
        </a>

        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
          <a href="/assets/resume.pdf" target="_blank" className="btn btn-primary nav-cta">Resume</a>
        </div>

        <button className="mobile-toggle mobile-only" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overflow */}
      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
        <div className="mobile-menu glass" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
             <span className="logo-text">KANAV<span className="dot">.</span></span>
             <button onClick={() => setIsOpen(false)}><X size={28} /></button>
          </div>
          <div className="mobile-links">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {link.name}
              </a>
            ))}
            <a href="/assets/resume.pdf" target="_blank" className="btn btn-primary mt-4" onClick={() => setIsOpen(false)}>Resume</a>
          </div>
        </div>
      </div>
    </nav>
  );

};

export default Navbar;

