'use client'

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <h3 className="footer-title">Get In Touch</h3>
            <p className="footer-description">
              I&apos;m always interested in discussing research opportunities, collaborations, 
              and exciting projects in machine learning and computational biology.
            </p>
            
            <div className="social-links">
              <a href="mailto:jwchoi@usc.edu" className="social-link email">
                <span className="icon">📧</span>
                <span className="text">Email</span>
              </a>
              <a 
                href="https://github.com/chjwon" 
                className="social-link github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">💻</span>
                <span className="text">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/jaewon-choi" 
                className="social-link linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">💼</span>
                <span className="text">LinkedIn</span>
              </a>
              <a 
                href="https://scholar.google.com/citations?user=your-id" 
                className="social-link scholar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">🎓</span>
                <span className="text">Google Scholar</span>
              </a>
            </div>
            
            <div className="footer-bottom">
              <div className="copyright">
                <p>© 2024 Jae Won Choi. All rights reserved.</p>
                <p className="tech-stack">Built with Next.js, TypeScript, and Tailwind CSS</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <style jsx>{`
        .footer-section {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
          color: white;
          padding: 60px 0 40px 0;
        }
        
        .container {
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 16px;
        }
        
        .footer-content {
          text-align: center;
        }
        
        .footer-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 16px;
          color: white;
        }
        
        .footer-description {
          color: #d1d5db;
          font-size: 1.125rem;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto 40px auto;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 40px;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid transparent;
          border-radius: 25px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
        
        .social-link.email:hover {
          background: #ef4444;
          border-color: #ef4444;
        }
        
        .social-link.github:hover {
          background: #6b7280;
          border-color: #6b7280;
        }
        
        .social-link.linkedin:hover {
          background: #0077b5;
          border-color: #0077b5;
        }
        
        .social-link.scholar:hover {
          background: #4285f4;
          border-color: #4285f4;
        }
        
        .icon {
          font-size: 1.25rem;
        }
        
        .text {
          font-size: 1rem;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 24px;
        }
        
        .copyright {
          color: #9ca3af;
        }
        
        .copyright p {
          margin: 0;
          font-size: 0.875rem;
        }
        
        .tech-stack {
          margin-top: 8px;
          font-size: 0.75rem !important;
          color: #6b7280;
        }
        
        @media (max-width: 768px) {
          .footer-section {
            padding: 40px 0 30px 0;
          }
          
          .footer-title {
            font-size: 1.5rem;
            margin-bottom: 12px;
          }
          
          .footer-description {
            font-size: 1rem;
            margin-bottom: 30px;
          }
          
          .social-links {
            gap: 16px;
            margin-bottom: 30px;
          }
          
          .social-link {
            padding: 10px 16px;
            font-size: 0.875rem;
          }
          
          .container {
            padding: 0 24px;
          }
        }
        
        @media (max-width: 480px) {
          .social-links {
            flex-direction: column;
            align-items: center;
          }
          
          .social-link {
            width: 200px;
            justify-content: center;
          }
        }
      `}</style>
    </>
  )
}