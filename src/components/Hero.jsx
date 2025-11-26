import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullTitle = 'Software Development Engineer'

  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= fullTitle.length) {
        setDisplayText(fullTitle.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
        // Keep cursor blinking after typing is done
      }
    }, 100) // 100ms per character

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typeInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container-centered">
        <div className="hero-content-centered">
          <h1 className="hero-title-large">
            Payel Das
          </h1>
          <h2 className="hero-subtitle typewriter">
            {displayText}
            <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
          </h2>
          <p className="hero-description">
            Software Engineer who loves solving problems, building reliable systems, and continuously learning along the way.
          </p>
          
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('experience')} className="btn btn-primary">
              View My Work
            </button>
            <a href={`${import.meta.env.BASE_URL}Payel_Das_Resume.pdf`} download="Payel_Das_Resume.pdf" className="btn btn-secondary">
              <FaDownload />
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/payeldas14" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/payeldas14/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:payel.ngp10@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <FaChevronDown />
      </div>
    </section>
  )
}

export default Hero

