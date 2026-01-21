import './Experience.css'

const Experience = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Technical Lead',
      company: 'TechFlow Solutions',
      avatar: '👩‍💻',
      quote: 'Peter delivered exceptional results on our e-commerce platform. His attention to detail and ability to solve complex problems made him invaluable to our team.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Product Manager',
      company: 'DataViz Inc',
      avatar: '👨‍💼',
      quote: 'Working with Peter was fantastic. He understood our requirements perfectly and delivered a scalable solution ahead of schedule.'
    },
    {
      name: 'Lisa Thompson',
      role: 'CTO',
      company: 'StartupHub',
      avatar: '👩‍🔬',
      quote: 'Peter\'s fullstack expertise helped us build a robust platform that scales beautifully. His code quality is outstanding.'
    },
    {
      name: 'Alex Kim',
      role: 'Engineering Manager',
      company: 'CloudTech',
      avatar: '👨‍💻',
      quote: 'Exceptional developer with great communication skills. Peter consistently delivers high-quality solutions that exceed expectations.'
    }
  ]

  const experiences = [
    {
      title: 'Senior Fullstack Developer',
      company: 'TechFlow Solutions',
      period: '2022 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Built responsive web applications and improved user experience for multiple client projects.'
    },
    {
      title: 'Junior Developer',
      company: 'Web Studios',
      period: '2019 - 2020',
      description: 'Developed websites and learned modern development practices in a collaborative team environment.'
    }
  ]

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        {/* Testimonials Section */}
        <div className="testimonials-section">
          <div className="testimonials-header animate-fade-in">
            <h2 className="animate-slide-up">Loved by teams and clients</h2>
            <p className="testimonials-subtitle animate-slide-up animate-stagger-1">
              Don't take my word for it - listen to what colleagues and clients have to say.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-card animate-slide-up animate-stagger-${index + 1}`}>
                <div className="testimonial-content">
                  <p>"{testimonial.quote}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                    <span className="company">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline - Hidden */}
        {/* <div className="timeline-section">
          <h3 className="animate-fade-in">Professional Journey</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className={`timeline-item animate-slide-left animate-stagger-${index + 1}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{exp.period}</div>
                  <h4>{exp.title}</h4>
                  <div className="timeline-company">{exp.company}</div>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience