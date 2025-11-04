import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          The <span className="gradient-text">Fullstack Developer</span>
          <br />
          for the Web
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