import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">♪</span>
              <span className="footer-logo-text">peter de keijzer</span>
            </div>
            <p className="footer-description">
              Fullstack Developer crafting exceptional web experiences with modern technologies and creative solutions.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/in/peterdekeijzer" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8A6 6 0 0 1 6 8C6 10.3 8 13 12 17C16 13 18 10.3 18 8A6 6 0 0 1 6 8Z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/peterdekeijzer" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22H16V16H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>GitHub</span>
              </a>
              <a href="mailto:peter@example.com" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            <h3>Navigation</h3>
            <ul>
              <li><button onClick={() => scrollToSection('home')} className="footer-link">Home</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="footer-link">Skills</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="footer-link">Projects</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="footer-link">Experience</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button></li>
            </ul>
          </div>

          {/* Skills/Technologies */}
          <div className="footer-skills">
            <h3>Technologies</h3>
            <ul>
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Node.js & Express</li>
              <li>PostgreSQL & MongoDB</li>
              <li>AWS & Docker</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Resume</a></li>
              <li><a href="https://blog.peterdekeijzer.com" target="_blank" rel="noopener noreferrer" className="footer-link">Blog</a></li>
              <li><button onClick={() => scrollToSection('projects')} className="footer-link">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="footer-link">Hire Me</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Peter de Keijzer. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
              <a href="/terms" className="footer-bottom-link">Terms of Service</a>
              <button onClick={scrollToTop} className="back-to-top">
                Back to Top
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer