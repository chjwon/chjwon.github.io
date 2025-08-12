'use client'

export default function Publications() {
  return (
    <>
      <section id="publications" className="publications-section">
        <div className="container">
          <h2 className="section-title">Publications</h2>
          
          <div className="publications-grid">
            <div className="paper-card featured">
              <div className="paper-header">
                <h3 className="paper-title">
                  SNN-PDE: Learning Dynamic PDEs from Data with Simplicial Neural Networks
                </h3>
                <div className="authors">
                  <strong>Choi J.</strong>, Chen Y., Lee H., Kim H., Gel Y.
                </div>
              </div>
              <div className="paper-meta">
                <span className="venue">AAAI 2024</span>
                <span className="badge acceptance">Acceptance: 23.75%</span>
              </div>
            </div>
            
            <div className="paper-card award">
              <div className="award-banner">🏆 Best Paper Award</div>
              <div className="paper-header">
                <h3 className="paper-title">
                  Revisiting Link Prediction with the Dowker Complex
                </h3>
                <div className="authors">
                  <strong>Choi J.</strong>, Chen Y., Frías J. Castillo J., Gel Y.
                </div>
              </div>
              <div className="paper-meta">
                <span className="venue">PAKDD 2024</span>
                <span className="badge award-badge">ASA Section on Statistical Graphics</span>
              </div>
            </div>
            
            <div className="paper-card">
              <div className="paper-header">
                <h3 className="paper-title">
                  Self-supervised Contrastive Learning for Wildfire Detection: Utility and Limitations
                </h3>
                <div className="authors">
                  <strong>Choi J.</strong>, LaHaye, N., Chen Y., Lee H., Gel Y.
                </div>
              </div>
              <div className="paper-meta">
                <span className="venue book">Elsevier Book Chapter - GeoAI</span>
                <span className="badge year">2024</span>
              </div>
            </div>
            
            <div className="paper-card">
              <div className="paper-header">
                <h3 className="paper-title">
                  MCR-LSTM: A Market Condition-Recognized Approach for the High-Frequency Trading of Cryptocurrency
                </h3>
                <div className="authors">
                  <strong>Choi J.</strong>, Choi Y.
                </div>
              </div>
              <div className="paper-meta">
                <span className="venue conference">Financial Management Asia/Pacific Conference 2024</span>
              </div>
            </div>
          </div>
          
          <div className="submitted-section">
            <h3 className="submitted-title">Submitted Publications</h3>
            <div className="submitted-grid">
              <div className="submitted-card">
                <h4 className="submitted-paper-title">Simplicial Element Network</h4>
                <p className="submitted-authors"><strong>Choi J.</strong>, Chen Y., Xia K., Rondon I., Gel Y.</p>
                <span className="status">Under Review</span>
              </div>
              
              <div className="submitted-card">
                <h4 className="submitted-paper-title">DKTM: Dynamic Keyword-based Topic Modeling for Lifelong Learning</h4>
                <p className="submitted-authors"><strong>Choi J.</strong>, Nguyen V.</p>
                <span className="status award-status">UTD Research Scholar Award</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .publications-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
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
        
        .publications-grid {
          display: grid;
          gap: 24px;
          margin-bottom: 48px;
        }
        
        .paper-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          position: relative;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .paper-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .paper-card.featured {
          border-left: 4px solid #3b82f6;
        }
        
        .paper-card.award {
          border-left: 4px solid #fbbf24;
          background: linear-gradient(135deg, #fffbeb 0%, #ffffff 100%);
        }
        
        .award-banner {
          position: absolute;
          top: -1px;
          right: 20px;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 0 0 8px 8px;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .paper-header {
          margin-bottom: 16px;
        }
        
        .paper-title {
          font-size: 1.125rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .authors {
          color: #4b5563;
          font-size: 1rem;
        }
        
        .authors strong {
          color: #1f2937;
        }
        
        .paper-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        
        .venue {
          font-weight: 600;
          font-size: 1rem;
        }
        
        .venue {
          color: #3b82f6;
        }
        
        .venue.book {
          color: #8b5cf6;
        }
        
        .venue.conference {
          color: #059669;
        }
        
        .badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .badge.acceptance {
          background: #dbeafe;
          color: #1e40af;
        }
        
        .badge.award-badge {
          background: #fef3c7;
          color: #92400e;
        }
        
        .badge.year {
          background: #f3e8ff;
          color: #6b46c1;
        }
        
        .submitted-section {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 2px solid #e5e7eb;
        }
        
        .submitted-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #374151;
          text-align: center;
          margin-bottom: 24px;
        }
        
        .submitted-grid {
          display: grid;
          gap: 16px;
        }
        
        .submitted-card {
          background: rgba(255, 255, 255, 0.7);
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
        }
        
        .submitted-paper-title {
          font-size: 1rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        
        .submitted-authors {
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 8px;
        }
        
        .submitted-authors strong {
          color: #374151;
        }
        
        .status {
          display: inline-block;
          padding: 2px 8px;
          background: #f3f4f6;
          color: #6b7280;
          border-radius: 12px;
          font-size: 0.75rem;
        }
        
        .status.award-status {
          background: #fef3c7;
          color: #92400e;
        }
        
        @media (max-width: 768px) {
          .publications-section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2.25rem;
            margin-bottom: 32px;
          }
          
          .container {
            padding: 0 24px;
          }
          
          .paper-card {
            padding: 20px;
          }
        }
      `}</style>
    </>
  )
}