'use client'

export default function About() {
  return (
    <>
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="content">
            <p className="intro-text">
              Hello! I&apos;m Jae Won Choi, a Ph.D. student in Computer Science at the 
              University of Southern California (USC), advised by Prof. Ruishan Liu. 
              My research interests span <strong>Machine Learning</strong>, <strong>Graph Neural Networks</strong>, 
              <strong>Physics-Informed Machine Learning</strong>, and <strong>Computational Biology</strong>.
            </p>
            <p className="intro-text">
              I completed my B.S. in Computer Science at the University of Texas at Dallas, 
              where I was advised by Prof. Yulia Gel and Prof. Vincent Ng.
            </p>
            <p className="intro-text">
              During my undergraduate years, I had the opportunity to intern at:
            </p>
            <ul className="internship-list">
              <li><strong>NASA Jet Propulsion Laboratory</strong> through the Visiting Student Research Program (VSRP)</li>
              <li><strong>Naval Postgraduate School</strong> via the Naval Research Enterprise Internship Program (NREIP)</li>
              <li><strong>Nasdaq Inc.</strong> as an Analytics Software Engineering Intern</li>
            </ul>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .about-section {
          padding: 80px 0;
          background-color: white;
        }
        
        .container {
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 16px;
        }
        
        .section-title {
          font-size: 3rem;
          font-weight: bold;
          text-align: center;
          color: #1f2937;
          margin-bottom: 48px;
        }
        
        .content {
          max-width: none;
          margin: 0 auto;
        }
        
        .intro-text {
          color: #4b5563;
          font-size: 1.125rem;
          line-height: 1.75;
          margin-bottom: 24px;
        }
        
        .intro-text strong {
          color: #1f2937;
          font-weight: 600;
        }
        
        .internship-list {
          list-style-type: disc;
          padding-left: 24px;
          margin-left: 16px;
          color: #4b5563;
          font-size: 1.125rem;
          line-height: 1.75;
        }
        
        .internship-list li {
          margin-bottom: 8px;
        }
        
        .internship-list strong {
          color: #1f2937;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .about-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2.25rem;
            margin-bottom: 32px;
          }
          
          .intro-text, .internship-list {
            font-size: 1rem;
          }
          
          .container {
            padding: 0 24px;
          }
        }
      `}</style>
    </>
  )
}