import React from 'react'
import { FaTrophy, FaAward, FaCertificate, FaStar } from 'react-icons/fa'
import { SiAmazonaws, SiGooglecloud } from 'react-icons/si'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Leap Trailblazer Award",
      organization: "CSG Systems International",
      date: "2023",
      description: "Awarded for outstanding professional growth and innovation in software engineering, recognizing excellence in problem-solving, continuous learning, and embodying CSG's guiding principles.",
      type: "award"
    },
    {
      icon: <SiAmazonaws />,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "Nov 2024",
      description: "Certificate in Amazon Web Services Cloud Practitioner - foundational understanding of AWS Cloud concepts, services, and terminology.",
      type: "certificate"
    },
    {
      icon: <SiGooglecloud />,
      title: "Prompt Design in Vertex AI",
      organization: "Google Cloud",
      date: "Nov 2024",
      description: "Google Cloud Badge demonstrating proficiency in prompt engineering and design using Vertex AI for advanced AI/ML applications.",
      type: "badge"
    }
  ]

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Recognition and professional development milestones</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className={`achievement-card ${achievement.type}`}>
              <div className="achievement-icon-wrapper">
                {achievement.icon}
              </div>
              
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <div className="achievement-meta">
                  <span className="achievement-org">{achievement.organization}</span>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                
                <div className="achievement-badge">
                  {achievement.type === 'award' && <FaStar className="badge-icon" />}
                  {achievement.type === 'certification' && <FaCertificate className="badge-icon" />}
                  {achievement.type === 'badge' && <FaAward className="badge-icon" />}
                  <span className="badge-text">
                    {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

