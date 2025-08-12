export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
      color: 'white',
      padding: '60px 0 40px 0'
    }}>
      <div style={{
        maxWidth: '1024px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: 'white'
          }}>
            Get In Touch
          </h3>
          <p style={{
            color: '#d1d5db',
            fontSize: '1.125rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 40px auto'
          }}>
            I&apos;m always interested in discussing research opportunities, collaborations, 
            and exciting projects in machine learning and computational biology.
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '40px'
          }}>
            <a 
              href="mailto:jwchoi@usc.edu"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid transparent',
                borderRadius: '25px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>📧</span>
              <span style={{ fontSize: '1rem' }}>Email</span>
            </a>
            <a 
              href="https://github.com/chjwon"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid transparent',
                borderRadius: '25px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>💻</span>
              <span style={{ fontSize: '1rem' }}>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/jae-won-choi/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid transparent',
                borderRadius: '25px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>💼</span>
              <span style={{ fontSize: '1rem' }}>LinkedIn</span>
            </a>
            <a 
              href="https://scholar.google.com/citations?user=4s95lKgAAAAJ&hl=ko"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid transparent',
                borderRadius: '25px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>🎓</span>
              <span style={{ fontSize: '1rem' }}>Google Scholar</span>
            </a>
          </div>
          
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '24px'
          }}>
            <div style={{ color: '#9ca3af' }}>
              <p style={{
                margin: '0',
                fontSize: '0.875rem'
              }}>
                © 2025 Jae Won Choi. All rights reserved.
              </p>
              <p style={{
                marginTop: '8px',
                fontSize: '0.75rem',
                color: '#6b7280',
                margin: '8px 0 0 0'
              }}>
                Built with Next.js, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}