import './Skills.css'

const Skills = () => {
  const skills = [
    {
      icon: '⚡',
      title: 'Lightning Fast Development',
      description: 'Building applications with modern frameworks and tools for optimal performance and developer experience.',
      color: 'yellow' // Lightning = yellow
    },
    {
      icon: '🎯',
      title: 'Precise Implementation',
      description: 'Translating designs and requirements into pixel-perfect, functional web applications with attention to detail.',
      color: 'red' // Target = red
    },
    {
      icon: '🔧',
      title: 'Full Stack Expertise',
      description: 'Proficient in both frontend and backend technologies, creating end-to-end solutions from database to UI.',
      color: 'gray' // Wrench = gray/silver
    },
    {
      icon: '🚀',
      title: 'Optimized Performance',
      description: 'Implementing best practices for web performance, SEO, and user experience across all platforms.',
      color: 'orange' // Rocket = orange/red
    },
    {
      icon: '🛠️',
      title: 'Modern Toolchain',
      description: 'Leveraging the latest development tools, CI/CD pipelines, and deployment strategies for efficient workflows.',
      color: 'gray' // Tools = gray/silver
    },
    {
      icon: '🎨',
      title: 'Creative Problem Solving',
      description: 'Approaching challenges with innovative solutions and clean, maintainable code architecture.',
      color: 'rainbow' // Art palette = multicolor
    }
  ]

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'cyan' }, // React blue
    { name: 'TypeScript', icon: '📘', color: 'blue' }, // TypeScript blue
    { name: 'Node.js', icon: '🟢', color: 'green' }, // Node green
    { name: 'Next.js', icon: '▲', color: 'white' }, // Next.js black/white
    { name: 'Vue.js', icon: '💚', color: 'green' }, // Vue green
    { name: 'Python', icon: '🐍', color: 'yellow' }, // Python yellow/blue
    { name: 'PostgreSQL', icon: '🐘', color: 'blue' }, // PostgreSQL blue
    { name: 'MongoDB', icon: '🍃', color: 'green' } // MongoDB green
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
              <div className={`skill-icon skill-icon-${skill.color}`}>{skill.icon}</div>
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
                <span className={`tech-icon tech-icon-${tech.color}`}>{tech.icon}</span>
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