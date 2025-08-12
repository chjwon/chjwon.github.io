export default function Hero() {
  return (
    <section 
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}
      />
      
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        textAlign: 'center', 
        maxWidth: '800px', 
        padding: '0 24px' 
      }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: 800, 
          color: '#1f2937', 
          marginBottom: '16px',
          letterSpacing: '-0.02em'
        }}>
          Jae Won Choi
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          color: '#4b5563', 
          marginBottom: '8px', 
          fontWeight: 500 
        }}>
          Ph.D. Student in Computer Science
        </p>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#6b7280', 
          marginBottom: '40px' 
        }}>
          University of Southern California
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap', 
          gap: '12px', 
          marginBottom: '48px' 
        }}>
          <span style={{
            padding: '10px 20px',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'white',
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}>
            Machine Learning
          </span>
          <span style={{
            padding: '10px 20px',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'white',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}>
            Graph Neural Networks
          </span>
          <span style={{
            padding: '10px 20px',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'white',
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}>
            Physics-Informed ML
          </span>
          <span style={{
            padding: '10px 20px',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'white',
            background: 'linear-gradient(135deg, #ec4899, #db2777)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}>
            Computational Biology
          </span>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          marginBottom: '60px' 
        }}>
          <a 
            href="#about"
            style={{
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              minWidth: '140px',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              color: 'white',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
              border: 'none',
              display: 'inline-block',
              textAlign: 'center'
            }}
          >
            Learn More
          </a>
          <a 
            href="mailto:jwchoi@usc.edu"
            style={{
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '12px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              minWidth: '140px',
              background: 'white',
              color: '#374151',
              border: '2px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              display: 'inline-block',
              textAlign: 'center'
            }}
          >
            Contact Me
          </a>
        </div>
        
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '24px',
          color: '#9ca3af',
          animation: 'bounce 2s infinite',
          cursor: 'pointer'
        }}>
          ↓
        </div>
      </div>
    </section>
  )
}