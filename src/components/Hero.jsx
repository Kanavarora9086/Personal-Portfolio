import React from 'react';
import { Github, Linkedin, Instagram, ArrowRight, Download, Terminal } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero-container">
        <div className="hero-content animate-up">
          <div className="hero-badge-container">
            <span className="badge">
              <Terminal size={14} style={{ marginRight: '8px' }} />
              Available for Hire
            </span>
          </div>
          <h1 className="hero-title">
            <span className="hero-pre-title">Crafting the Future of Web</span>
            <br />
            <span className="text-accent">Kanav Arora</span>
            <br />
            <span className="heading-gradient">Full Stack Architect & DevOps Strategist</span>
          </h1>

          <p className="hero-description">
            I craft high-performance, scalable web solutions using the <span className="text-accent">MERN</span> stack. Specialized in building premium user experiences with clean, maintainable engineering.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Portfolio <ArrowRight size={18} />
            </a>
            <a href="/assets/resume.pdf" target="_blank" className="btn btn-secondary">
              Get Resume <Download size={18} />
            </a>
          </div>


          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/kanav-arora-49a7881a4/" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="https://github.com/kanavaror9086" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Instagram">
              <Instagram size={22} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-up" style={{ animationDelay: '0.2s' }}>
          <div className="tech-stack-display glass">
            <div className="visual-circle main-circle">
              <span className="visual-text">MERN</span>
            </div>
            <div className="visual-circle orbital o1">React</div>
            <div className="visual-circle orbital o2">Node</div>
            <div className="visual-circle orbital o3">Mongo</div>
            <div className="visual-circle orbital o4">Express</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

