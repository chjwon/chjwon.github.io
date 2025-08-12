'use client'

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Jae Won Choi</h1>
            <p className="hero-subtitle">Ph.D. Student in Computer Science</p>
            <p className="hero-university">University of Southern California</p>
            
            <div className="research-tags">
              <span className="tag tag-blue">Machine Learning</span>
              <span className="tag tag-green">Graph Neural Networks</span>
              <span className="tag tag-purple">Physics-Informed ML</span>
              <span className="tag tag-pink">Computational Biology</span>
            </div>
            
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">
                Learn More
              </a>
              <a href="mailto:jwchoi@usc.edu" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
            <br></br>
            <br></br>
            <div className="scroll-indicator">
              <div className="scroll-arrow">↓</div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%);
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          padding: 0 24px;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: #4b5563;
          margin-bottom: 8px;
          font-weight: 500;
        }
        
        .hero-university {
          font-size: 1.125rem;
          color: #6b7280;
          margin-bottom: 40px;
        }
        
        .research-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 48px;
        }
        
        .tag {
          padding: 10px 20px;
          border-radius: 30px;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .tag-blue {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }
        
        .tag-green {
          background: linear-gradient(135deg, #10b981, #059669);
        }
        
        .tag-purple {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        }
        
        .tag-pink {
          background: linear-gradient(135deg, #ec4899, #db2777);
        }
        
        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
        }
        
        .btn {
          padding: 14px 32px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          min-width: 140px;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }
        
        .btn-secondary {
          background: white;
          color: #374151;
          border: 2px solid #e5e7eb;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .btn-secondary:hover {
          transform: translateY(-2px);
          background: #f9fafb;
          border-color: #d1d5db;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .scroll-arrow {
          font-size: 24px;
          color: #9ca3af;
          animation: bounce 2s infinite;
          cursor: pointer;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
            margin-bottom: 12px;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 6px;
          }
          
          .hero-university {
            font-size: 1rem;
            margin-bottom: 32px;
          }
          
          .research-tags {
            gap: 8px;
            margin-bottom: 36px;
          }
          
          .tag {
            padding: 8px 16px;
            font-size: 0.75rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 16px;
            margin-bottom: 40px;
          }
          
          .btn {
            padding: 12px 28px;
            width: 200px;
          }
        }
        
        @media (max-width: 480px) {
          .hero-content {
            padding: 0 16px;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .research-tags {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  )
}