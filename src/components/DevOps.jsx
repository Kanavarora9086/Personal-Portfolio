import React from 'react';
import { Container, Terminal, Cloud, Activity, GitBranch, Settings, ShieldCheck } from 'lucide-react';
import './DevOps.css';

const DevOps = () => {
  const tools = [
    { name: 'Git/GitHub', icon: <GitBranch size={20} />, desc: 'Version Control & CI/CD' },
    { name: 'Linux', icon: <Terminal size={20} />, desc: 'System Administration' },
    { name: 'Docker', icon: <Container size={20} />, desc: 'Containerization' },
    { name: 'Monitoring', icon: <Activity size={20} />, desc: 'Health & Metrics' },
    { name: 'Networking', icon: <Cloud size={20} />, desc: 'Cloud Infrastructure' },
    { name: 'Security', icon: <ShieldCheck size={20} />, desc: 'DevSecOps focus' }
  ];

  return (
    <section id="devops" className="section">
      <div className="container">
        <div className="section-header mb-5">
          <div className="badge mb-2">Operations & Infrastructure</div>
          <h2 className="heading-gradient">DevOps Excellence</h2>
          <p className="text-secondary mt-3 max-w-600">
            I bridge the gap between development and operations, ensuring seamless deployments, system reliability, and automated infrastructure management.
          </p>
        </div>

        <div className="devops-layout">
          <div className="devops-main glass-card animate-up">
            <div className="terminal-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <span className="terminal-title">kanav@devops:~/workflow</span>
            </div>
            <div className="terminal-body">
              <p className="command">$ init-pipeline --production</p>
              <p className="response">Building images... <span className="text-accent">DONE</span></p>
              <p className="response">Running security audits... <span className="text-accent">PASSED</span></p>
              <p className="response">Deploying to cloud cluster... <span className="text-accent">LIVE</span></p>
              <p className="cursor-blink">_</p>
            </div>
          </div>

          <div className="devops-tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-card glass-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="tool-icon-circle">{tool.icon}</div>
                <div className="tool-info">
                  <h4>{tool.name}</h4>
                  <p>{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOps;
