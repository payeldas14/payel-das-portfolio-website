import React from 'react'
import { FaDownload, FaFileAlt, FaCheckCircle } from 'react-icons/fa'
import './Resume.css'

const Resume = () => {
  const highlights = [
    "5+ years of software development experience",
    "Expert in modern web technologies",
    "Strong problem-solving and analytical skills",
    "Experience with Agile methodologies",
    "Proven track record of delivering projects",
    "Excellent communication and teamwork"
  ]

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Download my CV to learn more about my background</p>
        </div>

        <div className="resume-content">
          <div className="resume-card">
            <div className="resume-icon-wrapper">
              <FaFileAlt className="resume-icon" />
            </div>

            <h3>My Professional Resume</h3>
            <p className="resume-description">
              Download my complete resume to see my full professional experience, 
              education, certifications, and accomplishments in software development.
            </p>

            <div className="resume-highlights">
              <h4>Highlights</h4>
              <ul className="highlights-list">
                {highlights.map((highlight, index) => (
                  <li key={index}>
                    <FaCheckCircle className="check-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href="/Payel_Das_Resume.pdf" 
              download="Payel_Das_Resume.pdf" 
              className="download-btn"
            >
              <FaDownload />
              Download Resume
            </a>

            <p className="resume-note">
              PDF Format • Last Updated: November 2024
            </p>
          </div>

          <div className="resume-preview">
            <div className="preview-placeholder">
              <div className="preview-header">
                <div className="preview-line name"></div>
                <div className="preview-line title"></div>
              </div>
              <div className="preview-section">
                <div className="preview-line"></div>
                <div className="preview-line"></div>
                <div className="preview-line short"></div>
              </div>
              <div className="preview-section">
                <div className="preview-line"></div>
                <div className="preview-line"></div>
                <div className="preview-line"></div>
              </div>
              <div className="preview-section">
                <div className="preview-line short"></div>
                <div className="preview-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

