import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: "Smart Payment Prediction Platform",
      description: "Architected a scalable SaaS analytics platform using Java/Spring Boot, React.js, Python, and REST APIs, integrating ML-driven forecasting, modular backend, and reusable front-end components to deliver 60% higher prediction accuracy, improving data processing, and streamlined end-to-end user experience.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Java", "Python","Spring Boot", "React.js", "HTML", "CSS", "REST APIs", "Machine Learning"],
      category: "full-stack",
      github: null,
      demo: null,
      featured: true,
      company: "HighRadius"
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a modern, responsive portfolio website showcasing professional experience, projects, and achievements. Built with React and Vite featuring smooth animations, intuitive navigation, and a clean, professional design optimized for all devices.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Vite", "CSS3", "JavaScript", "Responsive Design"],
      category: "frontend",
      github: "https://github.com/payeldas14",
      demo: null,
      featured: false
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Featured projects showcasing my technical expertise</p>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <div className="featured-badge">Featured</div>}
              {project.company && <div className="company-badge">@ {project.company}</div>}
              
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">
                  <FaCode className="project-icon" />
                  {project.title}
                </h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

