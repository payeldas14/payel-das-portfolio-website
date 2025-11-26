import React, { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Here you would typically send the form data to a backend service
    // For now, we'll just show a success message
    setFormStatus('success')
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setFormStatus('')
    }, 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              If you'd like to discuss potential collaborations or just want to connect, 
              I'd love to hear from you.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:payel.ngp10@gmail.com">payel.ngp10@gmail.com</a>
                </div>
              </div>

              <div className="contact-method">
                <FaLinkedin className="contact-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/payeldas14/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/payeldas14
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <FaGithub className="contact-icon" />
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/payeldas14" target="_blank" rel="noopener noreferrer">
                    github.com/payeldas14
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Bangalore, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject of the email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                />
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane />
                Send Message
              </button>

              {formStatus === 'success' && (
                <div className="form-success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

