import React from 'react';
import { ExternalLink, Github as GithubIcon, Layers } from 'lucide-react';
import './Projects.css';

// Importing generated images
import cachedInfoImg from '../assets/cached_info.png';
import weatherHorizonImg from '../assets/weather_horizon.png';
import digibridgeImg from '../assets/digibridge.png';

const Projects = () => {
  const projects = [
    {
      title: 'Cached-Info',
      category: 'Education Platform',
      image: cachedInfoImg,
      description: 'A comprehensive study resource portal with secure authentication, interactive test modules, and real-time resource sharing.',
      tags: ['MongoDB', 'Express', 'React', 'Node.js'],
      links: { github: 'https://github.com/kanavaror9086', demo: '#' }
    },
    {
      title: 'Weather Horizon',
      category: 'Utility Tool',
      image: weatherHorizonImg,
      description: 'Dynamic weather dashboard featuring high-precision API data, custom visualizations, and location-based weather forecasting.',
      tags: ['React', 'API', 'Framer Motion', 'JS'],
      links: { github: 'https://github.com/kanavaror9086', demo: '#' }
    },
    {
      title: 'Jammu University ERP Website',
      category: 'University Platform',
      image: cachedInfoImg,
      description: 'A modern ERP portal developed for Jammu University with responsive UI, authentication, academic modules, optimized backend APIs, and a scalable architecture.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      links: { github: 'https://github.com/kanavaror9086', demo: '#' }
    },
    {
      title: 'AWS Portfolio Deployment',
      category: 'Cloud Deployment',
      image: weatherHorizonImg,
      description: 'Successfully deployed my personal portfolio on AWS EC2 using EC2, Elastic IP, a user data script, Security Groups, and Apache Web Server. The deployment is live and demonstrates practical cloud deployment skills.',
      tags: ['AWS EC2', 'Elastic IP', 'Security Groups', 'Linux'],
      links: { github: 'https://github.com/kanavaror9086', demo: '#' }
    },
    {
      title: 'DigiBridge',
      category: 'Educational Platform',
      image: digibridgeImg,
      description: 'An educational platform focused on resource sharing, an interactive interface, modern frontend design, responsive usability, and real-world impact for learners and communities.',
      tags: ['Node.js', 'React', 'MongoDB', 'Responsive UI'],
      links: { github: 'https://github.com/kanavaror9086', demo: '#' }
    },
    {
      title: 'Internship Management System',
      category: 'Management Platform',
      image: cachedInfoImg,
      description: 'A professional management platform with role-based authentication, a dashboard, intern tracking, assignment management, progress monitoring, and an admin panel.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      links: { github: 'https://github.com/kanavaror9086', demo: '#' }
    },
    {
      title: 'Vendor Booking Platform',
      category: 'Booking Solution',
      image: weatherHorizonImg,
      description: 'A modern booking platform featuring vendor profiles, booking management, responsive design, and search and filtering for a seamless user experience.',
      tags: ['React', 'MongoDB', 'Responsive UI', 'Booking Flow'],
      links: { github: 'https://github.com/kanavaror9086', demo: '#' }
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header mb-5">
          <div className="badge mb-2">Portfolio</div>
          <h2 className="heading-gradient">Selected Works</h2>
          <p className="text-secondary mt-3 max-w-400">A collection of projects where I bridge the gap between complex logic and elegant design.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-img-container">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                   <div className="project-links">
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="p-link-overlay" aria-label="GitHub">
                      <GithubIcon size={22} />
                    </a>
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="p-link-overlay" aria-label="Live Demo">
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-header mt-4">
                <span className="project-category">{project.category}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">
                  {project.description}
                </p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="p-tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <button className="btn-text">
                  Project Details <Layers size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

