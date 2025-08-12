'use client'

export default function Education() {
  return (
    <>
      <section id="education" className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3 className="degree-title">Ph.D in Computer Science</h3>
              <p className="institution">University of Southern California</p>
              <p className="period">2025 - Present</p>
              <p className="advisor">Advisor: Prof. Ruishan Liu</p>
            </div>
            
            <div className="education-card">
              <h3 className="degree-title">B.S in Computer Science</h3>
              <p className="institution">University of Texas at Dallas</p>
              <p className="period">2020 - 2025</p>
              <p className="advisor">Advisors: Prof. Yulia Gel, Prof. Vincent Ng | GPA: 3.6/4.0</p>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .education-section {
          padding: 80px 0;
          background-color: #f9fafb;
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
        
        .education-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        
        .education-card {
          background-color: white;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .degree-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 8px;
        }
        
        .institution {
          color: #3b82f6;
          font-weight: 500;
          font-size: 1.125rem;
          margin-bottom: 4px;
        }
        
        .period {
          color: #6b7280;
          font-size: 1rem;
          margin-bottom: 8px;
        }
        
        .advisor {
          color: #4b5563;
          font-size: 1rem;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .education-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2.25rem;
            margin-bottom: 32px;
          }
          
          .container {
            padding: 0 24px;
          }
          
          .education-card {
            padding: 20px;
          }
        }
      `}</style>
    </>
  )
}