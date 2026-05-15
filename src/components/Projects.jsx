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
      title: 'Digibridge',
      category: 'Social Impact',
      image: digibridgeImg,
      description: 'A geolocation-driven platform bridging the digital divide by providing localized skill development resources to rural areas.',
      tags: ['Node.js', 'React', 'Leaflet', 'Cloudinary'],
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


