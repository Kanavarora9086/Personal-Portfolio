import React from 'react';
import { GraduationCap, Award, BookOpen, Rocket, CheckCircle, Cloud, Cpu, Database, ShieldCheck, Sparkles } from 'lucide-react';
import './About.css';

const About = () => {
  const certifications = [
    {
      title: 'Deloitte Cyber Security',
      description: 'Completed a cybersecurity simulation focused on digital risk awareness, threat understanding, and secure system thinking.',
      badge: 'Virtual Training',
      icon: <ShieldCheck size={18} className="text-accent" />
    },
    {
      title: 'Dell AI',
      description: 'Explored practical AI concepts and modern application thinking with a strong emphasis on real-world relevance.',
      badge: 'AI Exposure',
      icon: <Cpu size={18} className="text-accent" />
    },
    {
      title: 'MongoDB',
      description: 'Built a strong foundation in database design, CRUD operations, and scalable data modeling for modern applications.',
      badge: 'Database Skills',
      icon: <Database size={18} className="text-accent" />
    },
    {
      title: 'AWS Cloud Training',
      description: 'Strengthened my understanding of cloud architecture, deployment workflows, and practical AWS service usage.',
      badge: 'Cloud Focus',
      icon: <Cloud size={18} className="text-accent" />
    },
    {
      title: 'TechCadd Cloud Computing',
      description: 'Completed hands-on cloud training with practical modules in AWS networking, compute, storage, and deployments.',
      badge: 'Practical Training',
      icon: <Cloud size={18} className="text-accent" />
    }
  ];

  const journeyPoints = [
    'Started web development and built a strong foundation in frontend and backend technologies.',
    'Learned the MERN stack and created full-stack applications with responsive interfaces and scalable APIs.',
    'Built real-world projects and deployed them to demonstrate practical delivery beyond local development.',
    'Started cloud computing with hands-on AWS training and practical deployments.',
    'Currently learning DevOps and advanced AWS services while strengthening my deployment and automation skills.'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header mb-5">
          <div className="badge mb-2">My Profile</div>
          <h2 className="heading-gradient">Building Practical Solutions</h2>
          <p className="text-secondary mt-3 max-w-600">
            I’m a B.Tech Computer Science Engineering student focused on Full Stack Development, Cloud Computing, AWS, and DevOps. I build scalable web applications and deploy real-world projects on AWS instead of stopping at local development.
          </p>
        </div>
        
        <div className="about-layout">
          <div className="education-timeline">
            <h3 className="sub-heading mb-4"><GraduationCap size={20} className="text-accent" /> Academic Foundation</h3>
            <div className="timeline-card glass-card animate-up">
              <div className="t-icon"><GraduationCap size={24} /></div>
              <div className="t-content">
                <span className="t-date">2023 — 2027</span>
                <h3>B.Tech Computer Science Engineering</h3>
                <p className="t-org">MBS College of Engineering & Technology</p>
                <p className="t-desc">Built a strong academic base in software engineering, cloud concepts, and modern application development with a practical and structured approach.</p>
              </div>
            </div>

            <div className="timeline-card glass-card animate-up" style={{ animationDelay: '0.1s' }}>
              <div className="t-icon"><BookOpen size={24} /></div>
              <div className="t-content">
                <span className="t-date">2021 — 2022</span>
                <h3>Higher Secondary Education</h3>
                <p className="t-org">Happy Model Higher Secondary School</p>
                <p className="t-desc">Developed the analytical and problem-solving foundation that now supports my approach to system design and software development.</p>
              </div>
            </div>
          </div>

          <div className="expertise-grid">
            <h3 className="sub-heading mb-4"><Award size={20} className="text-accent" /> Certifications</h3>
            <div className="cert-framed-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-frame glass-card animate-up" style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
                  <div className="cert-icon-box">{cert.icon}</div>
                  <div className="cert-info">
                    <div className="cert-header">
                      <h4>{cert.title}</h4>
                    </div>
                    <p>{cert.description}</p>
                    <span className="cert-badge">{cert.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-story-stack">
          <div className="glass-card animate-up">
            <h3 className="sub-heading mb-3"><Rocket size={20} className="text-accent" /> Journey So Far</h3>
            <ul className="timeline-details mt-4">
              {journeyPoints.map((point, index) => (
                <li key={index}>
                  <CheckCircle size={16} className="text-accent" style={{ marginRight: '0.5rem' }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card animate-up">
            <h3 className="sub-heading mb-3"><Sparkles size={20} className="text-accent" /> Achievements</h3>
            <ul className="timeline-details mt-4">
              <li><CheckCircle size={16} className="text-accent" style={{ marginRight: '0.5rem' }} />Successfully deployed applications on AWS using real infrastructure components.</li>
              <li><CheckCircle size={16} className="text-accent" style={{ marginRight: '0.5rem' }} />Built multiple full-stack projects using React, Node.js, Express.js, and MongoDB.</li>
              <li><CheckCircle size={16} className="text-accent" style={{ marginRight: '0.5rem' }} />Completed practical cloud networking labs covering VPC, subnets, security groups, and routing.</li>
              <li><CheckCircle size={16} className="text-accent" style={{ marginRight: '0.5rem' }} />Worked on a university-level ERP system with a modern and scalable architecture.</li>
            </ul>
          </div>
        </div>

        <div className="about-footer-stats mt-5 glass-card animate-up">
          <div className="stat-item">
            <span className="stat-num">03+</span>
            <span className="stat-label">Years of Coding</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">20+</span>
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
