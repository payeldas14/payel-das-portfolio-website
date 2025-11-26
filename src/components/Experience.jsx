import React from 'react'
import { FaBriefcase, FaCalendar } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer II",
      company: "CSG Systems International",
      location: "",
      period: "Jan 2022 - Present",
      description: "Delivered scalable, cloud-based microservices and automation frameworks, improving performance, reliability, and system efficiency across enterprise platforms.",
      careerProgression: [
        { role: "Software Development Engineer II", period: "Aug 2025 - Present" },
        { role: "Software Development Engineer I", period: "Oct 2023 - Aug 2025" },
        { role: "SDE Graduate", period: "Aug 2022 - Sep 2023" },
        { role: "Software Engineer Intern", period: "Jan 2022 - Aug 2022" }
      ],
      technologies: ["Java", "AWS Services", "Python", "Terraform", "C#", ".NET", "SQL", "NoSQL", "CI/CD", "Linux", "Shell", "Azure DevOps", "Snowflake"]
    },
    {
      title: "Software Engineer Intern",
      company: "HighRadius",
      location: "",
      period: "May 2021 - Jan 2022",
      description: "Built automated data pipelines to streamline data processing, reducing manual effort and improving accuracy through smart extraction and validation.",
      technologies: ["Java", "Python", "Selenium", "Regex", "SQL", "Spring Boot", "React.js", "Node.js", "HTML", "CSS", "ML", "Jenkins", "GitHub"]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">My professional journey in software development</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <div className="experience-company">
                        <FaBriefcase className="icon" />
                        <span>{exp.company}</span>
                        {exp.location && <span className="location">• {exp.location}</span>}
                      </div>
                    </div>
                    <div className="experience-period">
                      <FaCalendar className="icon" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  {exp.careerProgression && (
                    <div className="career-progression">
                      <h4>Career Progression:</h4>
                      <div className="progression-timeline">
                        {exp.careerProgression.map((stage, idx) => (
                          <div key={idx} className="progression-item">
                            <div className="progression-dot"></div>
                            <div className="progression-stage">
                              <div className="stage-role">{stage.role}</div>
                              <div className="stage-period">{stage.period}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="experience-technologies">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

