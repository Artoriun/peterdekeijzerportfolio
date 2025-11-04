import './Skills.css'

const Skills = () => {
  const skills = [
    {
      icon: '⚡',
      title: 'Lightning Fast Development',
      description: 'Building applications with modern frameworks and tools for optimal performance and developer experience.'
    },
    {
      icon: '🎯',
      title: 'Precise Implementation',
      description: 'Translating designs and requirements into pixel-perfect, functional web applications with attention to detail.'
    },
    {
      icon: '🔧',
      title: 'Full Stack Expertise',
      description: 'Proficient in both frontend and backend technologies, creating end-to-end solutions from database to UI.'
    },
    {
      icon: '🚀',
      title: 'Optimized Performance',
      description: 'Implementing best practices for web performance, SEO, and user experience across all platforms.'
    },
    {
      icon: '🛠️',
      title: 'Modern Toolchain',
      description: 'Leveraging the latest development tools, CI/CD pipelines, and deployment strategies for efficient workflows.'
    },
    {
      icon: '🎨',
      title: 'Creative Problem Solving',
      description: 'Approaching challenges with innovative solutions and clean, maintainable code architecture.'
    }
  ]

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Python', icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' }
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Redefining developer experience</h2>
          <p className="skills-subtitle">
            Building web applications that are fast, reliable, and maintainable
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="technologies-section">
          <h3>Technologies I work with</h3>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills