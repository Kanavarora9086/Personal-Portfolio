import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Architecture',
      skills: [
        { name: 'React.js', level: '90%' },
        { name: 'JavaScript (ES6+)', level: '95%' },
        { name: 'CSS3 / SCSS', level: '92%' },
        { name: 'HTML5', level: '95%' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: '88%' },
        { name: 'Express.js', level: '85%' },
        { name: 'MongoDB', level: '85%' },
        { name: 'REST APIs', level: '90%' }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git / GitHub', level: '85%' },
        { name: 'JWT / Auth', level: '80%' },
        { name: 'Vite / Webpack', level: '82%' },
        { name: 'Deployment', level: '75%' }
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

