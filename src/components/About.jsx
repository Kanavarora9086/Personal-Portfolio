import React from 'react';
import { GraduationCap, Award, BookOpen, Globe, Lightbulb, ShieldCheck, Rocket, BrainCircuit, ShieldAlert, CheckCircle } from 'lucide-react';
import './About.css';

// Importing certification images
import deloitteCert from '../assets/certs/deloitte_cert.png';
import genAiCert from '../assets/certs/gen_ai.png';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header mb-5">
          <div className="badge mb-2">My Philosophy</div>
          <h2 className="heading-gradient">Engineering with Purpose</h2>
          <p className="text-secondary mt-3 max-w-600">
            I believe that great software isn't just about code—it's about solving human problems with elegant, scalable, and secure architecture. My journey is defined by a relentless pursuit of technical excellence.
          </p>
        </div>
        
        <div className="about-layout">
          <div className="education-timeline">
            <h3 className="sub-heading mb-4"><GraduationCap size={20} className="text-accent" /> Academic Foundation</h3>
            <div className="timeline-card glass-card animate-up">
              <div className="t-icon"><GraduationCap size={24} /></div>
              <div className="t-content">
                <span className="t-date">2023 — 2027</span>
                <h3>Bachelor's of Technology</h3>
                <p className="t-org">MBS College of Engineering & Technology</p>
                <p className="t-desc">Focused on Distributed Systems, Advanced Algorithms, and Full-Stack Architecture. Currently maintaining a high academic standing with a focus on MERN technologies.</p>
              </div>
            </div>

            <div className="timeline-card glass-card animate-up" style={{ animationDelay: '0.1s' }}>
              <div className="t-icon"><BookOpen size={24} /></div>
              <div className="t-content">
                <span className="t-date">2021 — 2022</span>
                <h3>Higher Secondary Education</h3>
                <p className="t-org">Happy Model Higher Secondary School</p>
                <p className="t-desc">Mastered the foundations of Physics and Mathematics, which now serve as my logical backbone for complex system design.</p>
              </div>
            </div>
          </div>

          <div className="expertise-grid">
            <h3 className="sub-heading mb-4"><Award size={20} className="text-accent" /> Professional Credentials</h3>
            <div className="cert-framed-grid">
              <div className="cert-frame glass-card animate-up" style={{ animationDelay: '0.2s' }}>
                <div className="cert-img-wrapper">
                  <img src={genAiCert} alt="Generative AI Certification" className="cert-img" />
                </div>
                <div className="cert-info">
                  <div className="cert-header">
                    <BrainCircuit size={18} className="text-accent" />
                    <h4>Generative AI Mastery</h4>
                  </div>
                  <p>Advanced Large Language Models, Prompt Engineering, and AI integration into MERN applications.</p>
                  <span className="cert-badge">Verified Expert</span>
                </div>
              </div>

              <div className="cert-frame glass-card animate-up" style={{ animationDelay: '0.3s' }}>
                <div className="cert-img-wrapper">
                  <img src={deloitteCert} alt="Deloitte Cyber Certification" className="cert-img" />
                </div>
                <div className="cert-info">
                  <div className="cert-header">
                    <ShieldAlert size={18} className="text-accent" />
                    <h4>Deloitte Cyber Simulation</h4>
                  </div>
                  <p>Mastered Cybersecurity fundamentals, Digital Risk Management, and Threat Analysis through Deloitte Australia's job simulation.</p>
                  <span className="cert-badge">Australia (Virtual)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-footer-stats mt-5 glass-card animate-up">
          <div className="stat-item">
            <span className="stat-num">02+</span>
            <span className="stat-label">Years of Coding</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">15+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <span className="stat-label">Commitment to Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




