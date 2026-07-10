import React from 'react';
import { Cloud, GraduationCap, Sparkles } from 'lucide-react';
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
            <div className="timeline-card-head">
              <div className="timeline-icon">
                <Cloud className="text-accent" size={20} />
              </div>
              <div className="timeline-title">
                <p className="timeline-role">Cloud Computing Internship</p>
                <h3>TechCadd</h3>
              </div>
              <span className="timeline-date badge">Current</span>
            </div>
            <p className="timeline-summary">
              Hands-on practical cloud training focused on AWS infrastructure, networking, and real deployment workflows.
            </p>
            <ul className="timeline-details mt-3">
              <li>AWS EC2, VPC, Subnets, Route Tables, Internet Gateway, and NAT Gateway.</li>
              <li>Security Groups, IAM, Elastic IP, User Data, EBS, AWS CLI, and RDS.</li>
              <li>Website deployment on AWS EC2 with practical implementation across every module.</li>
            </ul>
          </div>

          <div className="timeline-item glass-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="timeline-dot"></div>
            <div className="timeline-card-head">
              <div className="timeline-icon">
                <GraduationCap className="text-accent" size={20} />
              </div>
              <div className="timeline-title">
                <p className="timeline-role">Education Timeline</p>
                <h3>B.Tech Computer Science Engineering</h3>
              </div>
              <span className="timeline-date badge">2023 — 2027</span>
            </div>
            <p className="timeline-summary">
              Built a strong academic foundation in software engineering, full-stack development, and modern application architecture.
            </p>
            <div className="education-meta">
              <span><Sparkles size={14} className="text-accent" /> Full Stack Development</span>
              <span><Sparkles size={14} className="text-accent" /> Cloud Computing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
