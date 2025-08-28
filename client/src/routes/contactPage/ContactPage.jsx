import "./contactPage.css";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="contactContainer">
        <div className="header">
          <div className="avatar">
            <span>MH</span>
          </div>
          <h1>Get In Touch</h1>
          <p>Feel free to reach out for any project inquiries or collaborations</p>
        </div>

        <div className="contactInfo">
          <div className="infoCard">
            <div className="icon">👨‍💻</div>
            <h3>Developer</h3>
            <p>Mohammad Hifzaan</p>
          </div>

          <div className="infoCard">
            <div className="icon">📧</div>
            <h3>Email</h3>
            <p>mohammadhifzan24@gmail.com</p>
            <a 
              href="mailto:mohammadhifzan24@gmail.com"
              className="contactButton"
            >
              Send Email
            </a>
            <div className="status">
              <div className="statusIndicator"></div>
              <span>Available for hire</span>
            </div>
          </div>

          <div className="infoCard techCard">
            <div className="icon">⚡</div>
            <h3>Full Tech Stack</h3>
            <p>Production-ready AI chat application with enterprise architecture</p>
            
            <div className="techSection">
              <h4>🎨 Frontend</h4>
              <div className="techList">
                <span className="tech">React 19 (RC)</span>
                <span className="tech">Vite</span>
                <span className="tech">TanStack Query</span>
                <span className="tech">React Router</span>
                <span className="tech">Clerk React</span>
              </div>
            </div>

            <div className="techSection">
              <h4>🚀 Backend</h4>
              <div className="techList">
                <span className="tech">Node.js</span>
                <span className="tech">Express.js</span>
                <span className="tech">MongoDB</span>
                <span className="tech">Mongoose ODM</span>
                <span className="tech">Clerk SDK</span>
              </div>
            </div>

            <div className="techSection">
              <h4>🤖 AI & Services</h4>
              <div className="techList">
                <span className="tech">Google Gemini AI</span>
                <span className="tech">ImageKit</span>
                <span className="tech">Real-time Streaming</span>
              </div>
            </div>

            <div className="techSection">
              <h4>🐳 DevOps & Cloud</h4>
              <div className="techList">
                <span className="tech">Docker</span>
                <span className="tech">Docker Compose</span>
                <span className="tech">AWS ECS</span>
                <span className="tech">AWS ECR</span>
                <span className="tech">AWS ALB</span>
                <span className="tech">AWS Route 53</span>
                <span className="tech">Nginx</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="socialLinks">
            <a 
              href="https://linkedin.com/in/hifzaan-mohammad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="socialButton"
            >
              💼 LinkedIn
            </a>
            <a 
              href="https://github.com/hifzaanDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="socialButton"
            >
              👨‍💻 GitHub
            </a>
            <a 
              href="https://aicasca.click" 
              target="_blank" 
              rel="noopener noreferrer"
              className="socialButton live"
            >
              🌟 Live Demo
            </a>
          </div>
          <p>Let's build something amazing together!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
