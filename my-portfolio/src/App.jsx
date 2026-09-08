import './App.css'
import profilePhoto from './assets/profile.jpeg'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo"> Konnuru Sravani</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      
<section id="home" className="home-section">
  <div className="home-content">
    <h1>Hi, I'm Konnuru Sravani</h1>

    <h2>Web Developer</h2>

    <p>
      I am a 3rd-year B.Tech student passionate about
      learning web development and building useful projects.
    </p>

    <a href="#projects" className="primary-btn">
      View My Projects
    </a>
  </div>

  <div className="home-photo">
    <img
  src={profilePhoto}
  alt="Konnuru Sravani"
  className="profile-photo"
/>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-heading">
          <p className="section-subtitle">Get to know me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Passionate About Learning & Building</h3>

            <p>
              I am a 3rd-year B.Tech student at Gurunanak Institute
              of Technology, with a strong interest in web development
              and software engineering.
            </p>

            <p>
              I enjoy learning new technologies, developing practical
              projects, and improving my problem-solving skills.
              Through my academic work and internship experience,
              I am developing a stronger understanding of real-world
              applications.
            </p>

            <p>
              I am currently focusing on React.js, JavaScript,
              and frontend development. My goal is to become a
              skilled software developer and contribute to meaningful
              projects.
            </p>

            <div className="about-details">
              <div className="detail-card">
                <span className="detail-icon">🎓</span>
                <strong>Education</strong>
                <p>B.Tech — 3rd Year</p>
                <small>Gurunanak Institute of Technology</small>
              </div>

              <div className="detail-card">
                <span className="detail-icon">💻</span>
                <strong>Technical Interests</strong>
                <p>Web Development</p>
                <small>Software Engineering</small>
              </div>

              <div className="detail-card">
                <span className="detail-icon">📚</span>
                <strong>Currently Learning</strong>
                <p>React.js & JavaScript</p>
                <small>Frontend Development</small>
              </div>

              <div className="detail-card">
                <span className="detail-icon">🎯</span>
                <strong>Career Goal</strong>
                <p>Become a skilled developer</p>
                <small>Build meaningful projects</small>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#projects" className="primary-btn">
                View My Projects
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-heading">
          <p className="section-subtitle">My abilities</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Frontend Development</h3>

            <div className="skill">
              <div className="skill-info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress html"></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>CSS</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress css"></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress javascript"></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>React.js</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress react"></div>
              </div>
            </div>
          </div>

          <div className="skill-card">
            <h3>Programming Languages</h3>

            <div className="skill">
              <div className="skill-info">
                <span>Python</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress python"></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>Java</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress java"></div>
              </div>
            </div>

            <div className="skill">
              <div className="skill-info">
                <span>C</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress c"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-heading">
          <p className="section-subtitle">My learning journey</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-container">

          {/* Flowbit Project */}
          <div className="project-card">
            <div className="project-image">🎥</div>

            <div className="project-content">
              <h3>Flowbit</h3>

              <p>
                A video-conferencing web application similar to Zoom.
                During my internship, I learned about its application
                flow, frontend structure, and user interface.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>PostgreSQL</span>
                <span>Flowbite</span>
              </div>

              <a
                  href="https://github.com/konnurusravani-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  View GitHub
                </a>
            </div>
          </div>

          

              
          {/* Portfolio Project */}
          <div className="project-card">
            <div className="project-image">💼</div>

            <div className="project-content">
              <h3>Personal Portfolio</h3>

              <p>
                A responsive personal portfolio website created
                to showcase my skills, learning journey, and projects.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a href="#home" className="project-btn">
                Current Project
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-heading">
          <p className="section-subtitle">Get in touch</p>
          <h2>Contact Me</h2>
        </div>

        <p className="contact-message">
          I am open to learning opportunities, internships,
          and meaningful software development projects.
        </p>

        <a
          href="mailto:konnurusravani@gmail.com"
          className="primary-btn"
        >
          Email Me
        </a>
        <a
              href="https://www.linkedin.com/in/sravani-reddi-konnuru-582aa1362?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              
            
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              LinkedIn
            </a>
      </section>
            {/* Footer */}
      <footer className="footer">
        <p>© 2026 Konnuru Sravani. All rights reserved.</p>
        <p>Built with React.js and CSS</p>
      </footer>

    </div>
  )
}

export default App