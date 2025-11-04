import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🛒',
      status: 'Live',
      link: '#',
      color: 'orange' // Shopping cart = orange
    },
    {
      title: 'Project Management SaaS',
      description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.',
      tech: ['Next.js', 'Prisma', 'tRPC', 'WebSockets', 'Tailwind'],
      image: '📊',
      status: 'In Development',
      link: '#',
      color: 'blue' // Chart = blue
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Data visualization platform that uses machine learning to provide insights and predictions for business intelligence.',
      tech: ['Vue.js', 'Python', 'FastAPI', 'TensorFlow', 'D3.js'],
      image: '🤖',
      status: 'Live',
      link: '#',
      color: 'gray' // Robot = gray/silver
    },
    {
      title: 'Real-time Chat App',
      description: 'Scalable chat application with file sharing, video calls, and team channels. Built for enterprise-level communication.',
      tech: ['React', 'Socket.io', 'Redis', 'WebRTC', 'Docker'],
      image: '💬',
      status: 'Live',
      link: '#',
      color: 'blue' // Chat bubble = blue
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p className="projects-subtitle">
            A showcase of applications I've built using modern web technologies
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className={`project-icon project-icon-${project.color}`}>{project.image}</div>
                <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Interested in working together?</h3>
          <p>Let's build something amazing with the latest web technologies</p>
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Projects