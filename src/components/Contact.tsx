import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="contact-title animate-fade-in">
          <span className="gradient-text animate-slide-up">Get In Touch</span>
        </h2>
        <p className="contact-description animate-slide-up animate-stagger-1">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        
        <div className="contact-content">
          <div className="contact-info animate-slide-left">
            <div className="contact-item animate-slide-up animate-stagger-1">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:pjcr.dekeijzer@gmail.com" className="contact-link">
                  pjcr.dekeijzer@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item animate-slide-up animate-stagger-2">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8A6 6 0 0 1 6 8C6 10.3 8 13 12 17C16 13 18 10.3 18 8A6 6 0 0 1 6 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Tokyo, Japan</p>
              </div>
            </div>

            <div className="contact-item animate-slide-up animate-stagger-3">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4H18A2 2 0 0 1 20 6V20A2 2 0 0 1 18 22H6A2 2 0 0 1 4 20V6A2 2 0 0 1 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/peterdekeijzer" className="contact-link" target="_blank" rel="noopener noreferrer">
                  /in/peterdekeijzer
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper animate-slide-right">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell me about your project, collaboration ideas, or just say hello..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '18px', height: '18px' }}>
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polygon points="22,2 15,22 11,13 2,9 22,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact