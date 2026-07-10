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
            <span className="hero-pre-title">Building Modern Web Experiences</span>
            <br />
            <span className="text-accent">Kanav Arora</span>
            <br />
            <span className="heading-gradient">Full Stack Developer & Cloud Enthusiast</span>
          </h1>

          <p className="hero-description">
            I’m a B.Tech Computer Science Engineering student focused on <span className="text-accent">Full Stack Development</span>, <span className="text-accent">Cloud Computing</span>, <span className="text-accent">AWS</span>, and <span className="text-accent">DevOps</span>. I build scalable applications and deploy real-world projects on AWS rather than stopping at local development.
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
            <a href="https://www.instagram.com/_kanav05_?igsh=cWZtbjZzYWMyMmQy" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="Instagram">
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

