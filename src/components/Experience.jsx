import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="heading-gradient">Professional Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="experience-timeline">
          <div className="timeline-item glass-card animate-fade-in">
            <div className="timeline-dot"></div>
            <div className="timeline-header">
              <div className="timeline-icon">
                <Briefcase className="text-accent" size={24} />
              </div>
              <div className="timeline-title">
                <h3>Full Stack Web Development Intern</h3>
                <p className="text-accent">@ TECHIBLE</p>
              </div>
              <div className="timeline-date badge">
                JUN 2025 - AUG 2025
              </div>
            </div>
            <ul className="timeline-details mt-4">
              <li>
                Developed and deployed full-stack web applications using the MERN stack, implementing responsive React front-ends and RESTful APIs with Node.js and Express.
              </li>
              <li>
                Improved user experience and achieved faster performance through frontend optimizations and efficient API design.
              </li>
              <li>
                Designed and optimized MongoDB databases, ensuring efficient data storage, retrieval, and scalability.
              </li>
              <li>
                Maintained secure authentication and authorization using JWT and Passport.js.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
