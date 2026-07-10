import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', level: '95%' },
        { name: 'CSS', level: '92%' },
        { name: 'JavaScript', level: '95%' },
        { name: 'React', level: '90%' },
        { name: 'Bootstrap', level: '88%' },
        { name: 'Tailwind CSS', level: '85%' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: '88%' },
        { name: 'Express.js', level: '86%' },
        { name: 'MongoDB', level: '85%' },
        { name: 'REST API', level: '90%' }
      ]
    },
    {
      title: 'Cloud',
      skills: [
        { name: 'AWS EC2', level: '90%' },
        { name: 'VPC', level: '88%' },
        { name: 'Subnets', level: '86%' },
        { name: 'Security Groups', level: '87%' },
        { name: 'Elastic IP', level: '84%' },
        { name: 'IAM', level: '85%' },
        { name: 'RDS', level: '82%' },
        { name: 'EBS', level: '83%' },
        { name: 'AWS CLI', level: '86%' }
      ]
    },
    {
      title: 'Tools & DevOps Basics',
      skills: [
        { name: 'Git', level: '88%' },
        { name: 'GitHub', level: '89%' },
        { name: 'VS Code', level: '92%' },
        { name: 'Postman', level: '90%' },
        { name: 'Vercel', level: '84%' },
        { name: 'Netlify', level: '84%' },
        { name: 'Linux', level: '86%' },
        { name: 'DevOps Basics', level: '82%' }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header mb-5">
          <div className="badge mb-2">Technical Arsenal</div>
          <h2 className="heading-gradient">Core Competencies</h2>
        </div>

        <div className="skills-layout">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category glass-card animate-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h3 className="cat-title">{cat.title}</h3>
              <div className="skills-list">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-val">{skill.level}</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: skill.level, animationDelay: `${(idx * 4 + i) * 0.05}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
