import './Hero.css'
import StarParticles from './StarParticles'

const Hero = () => {
  return (
    <section className="hero">
      <StarParticles />
      <div className="hero-content">
        <div className="hero-logo">
          <div className="g-clef-icon">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 75C35 82 41 88 48 88C55 88 61 82 61 75C61 68 55 62 48 62C41 62 35 68 35 75ZM48 58C57 58 65 66 65 75C65 84 57 92 48 92C39 92 31 84 31 75C31 66 39 58 48 58ZM50 15C50 10 54 6 59 6C64 6 68 10 68 15V65C68 75 60 83 50 83V79C58 79 64 73 64 65V15C64 12 62 10 59 10C56 10 54 12 54 15V55C54 60 50 64 45 64C40 64 36 60 36 55C36 50 40 46 45 46C47 46 49 47 50 49V15ZM45 50C42 50 40 52 40 55C40 58 42 60 45 60C48 60 50 58 50 55C50 52 48 50 45 50Z" fill="currentColor"/>
            </svg>
          </div>
          <h2 className="logo-text">peter de keijzer</h2>
        </div>
        <h1 className="hero-title">
          <span className="gradient-text">Fullstack Developer</span>
        </h1>
        <div className="hero-visual">
        <div className="code-block">
          <div className="code-header">
            <div className="code-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <pre className="code-content">
{`const peter = {
  name: 'Peter de Keijzer',
  role: 'Fullstack Developer',
  skills: ['React', 'Node.js', 'TypeScript'],
  passion: 'Building amazing experiences'
}`}
          </pre>
        </div>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero