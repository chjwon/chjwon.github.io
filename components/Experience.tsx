'use client'

export default function Experience() {
  return (
    <>
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item blue">
              <div className="timeline-content">
                <h3 className="job-title">JPL Visiting Student Research Program (JVSRP)</h3>
                <p className="company">NASA Jet Propulsion Laboratory</p>
                <p className="period">Aug 2024 - Feb 2025</p>
                <p className="mentor">Mentor: Kyo Lee</p>
                <p className="description">
                  Engaged in NASA AIST&apos;s Geometric Deep Learning for anomaly detection, 
                  developing innovative physics-inspired deep learning models for wildfire prediction.
                </p>
              </div>
            </div>
            
            <div className="timeline-item green">
              <div className="timeline-content">
                <h3 className="job-title">Naval Research Enterprise Internship Program (NREIP)</h3>
                <p className="company">Naval Postgraduate School</p>
                <p className="period">May 2024 - Jul 2024</p>
                <p className="mentor">Advisor: Rowe Neil</p>
              </div>
            </div>
            
            <div className="timeline-item purple">
              <div className="timeline-content">
                <h3 className="job-title">Undergraduate Research Assistant</h3>
                <p className="company">UTD, Department of Computer Science</p>
                <p className="period">Sep 2023 - May 2025</p>
                <p className="mentor">Advisor: Vincent Ng | Human Language Technology Research Institute</p>
              </div>
            </div>
            
            <div className="timeline-item orange">
              <div className="timeline-content">
                <h3 className="job-title">Analytics Software Engineering Intern</h3>
                <p className="company">Nasdaq Inc</p>
                <p className="period">Jun 2022 - Aug 2022</p>
                <p className="description">
                  Built dashboard for data validation using React.js and Django REST API. 
                  Implemented responsive web design and comprehensive testing with Snowflake integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .experience-section {
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
        
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .timeline-item {
          position: relative;
          padding-left: 24px;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 2px;
        }
        
        .timeline-item.blue::before {
          background-color: #3b82f6;
        }
        
        .timeline-item.green::before {
          background-color: #10b981;
        }
        
        .timeline-item.purple::before {
          background-color: #8b5cf6;
        }
        
        .timeline-item.orange::before {
          background-color: #f97316;
        }
        
        .timeline-content {
          background: white;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
        }
        
        .job-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 8px;
        }
        
        .company {
          font-weight: 500;
          font-size: 1.125rem;
          margin-bottom: 4px;
        }
        
        .timeline-item.blue .company { color: #3b82f6; }
        .timeline-item.green .company { color: #10b981; }
        .timeline-item.purple .company { color: #8b5cf6; }
        .timeline-item.orange .company { color: #f97316; }
        
        .period {
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 8px;
        }
        
        .mentor {
          color: #4b5563;
          font-size: 1rem;
          margin-bottom: 12px;
        }
        
        .description {
          color: #4b5563;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .experience-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2.25rem;
            margin-bottom: 32px;
          }
          
          .container {
            padding: 0 24px;
          }
          
          .timeline-content {
            padding: 20px;
          }
        }
      `}</style>
    </>
  )
}