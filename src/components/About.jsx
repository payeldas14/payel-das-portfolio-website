import React from 'react'
import { FaCode, FaServer, FaCloud, FaDatabase, FaChartLine, FaShieldAlt, FaRobot, FaCogs } from 'react-icons/fa'
import './About.css'

const About = () => {
  const skills = [
    { 
      icon: <FaCode />,
      category: "Programming Languages", 
      items: ["Java", "Python", "Terraform", "C#", ".NET", "JavaScript", "SQL", "Shell/Korn Shell", "HTML", "CSS", "JSON"] 
    },
    { 
      icon: <FaServer />,
      category: "Backend & Web Development", 
      items: ["REST APIs", "Microservices", "Event-Driven Design", "Django", "Node.js", "React.js", "Reusable Components", "OOP"] 
    },
    { 
      icon: <FaCloud />,
      category: "Cloud & DevOps", 
      items: ["AWS (S3, Lambda, EventBridge, SQS, VPC, IAM)", "Terraform (IaC)", "Kubernetes", "Docker", "Azure DevOps", "CI/CD Pipelines"] 
    },
    { 
      icon: <FaDatabase />,
      category: "Databases", 
      items: ["MySQL", "PostgreSQL", "DynamoDB", "MongoDB", "Snowflake", "NoSQL", "Relational Schema Design", "Query Optimization"] 
    },
    { 
      icon: <FaChartLine />,
      category: "Monitoring & Observability", 
      items: ["CloudWatch", "Kibana", "Linux Logs", "Debugging & Error Analysis"] 
    },
    { 
      icon: <FaShieldAlt />,
      category: "Security & Architecture", 
      items: ["Defensive Coding", "Secrets Management", "Secure AWS Patterns", "Distributed System Architecture"] 
    },
    { 
      icon: <FaRobot />,
      category: "AI Tools & Automation", 
      items: ["GitHub Copilot", "OpenAI", "Claude", "Microsoft Copilot", "CursorAI", "Automation Scripts", "Prompt Engineering"] 
    },
    { 
      icon: <FaCogs />,
      category: "DevOps & Collaboration Tools", 
      items: ["CI/CD Pipelines", "Azure", "Jenkins", "Agile/Scrum", "SDLC", "Git", "Jira", "Maven", "Bitbucket"] 
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Hi, I'm Payel Das, a Software Development Engineer with over three years of experience 
              building and improving software systems. I enjoy solving problems, creating impactful 
              features, and working on products that make everyday experiences better. I approach 
              work with curiosity, responsibility, and a love for continuous learning.
            </p>
            <p className="about-paragraph">
              In my professional journey, I've worked across backend development, cloud services, 
              automation, and microservice-based platforms. I believe in writing clean, scalable 
              code and collaborating closely with teams to deliver reliable and thoughtful solutions. 
              I love exploring new tools, improving performance, and taking ownership of what I build.
            </p>
            <p className="about-paragraph">
              Outside of work, I'm someone who finds joy in simple things - music, cooking, singing, 
              and binge-watching Netflix series on lazy weekends.
            </p>

          </div>

          <div id="skills" className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h4>
                    <span className="category-icon">{skillGroup.icon}</span>
                    {skillGroup.category}
                  </h4>
                  <div className="skill-tags">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

