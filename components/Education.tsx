export default function Education() {
  return (
    <section 
      id="education" 
      style={{
        padding: '80px 0',
        backgroundColor: '#f9fafb'
      }}
    >
      <div style={{
        maxWidth: '1024px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#1f2937',
          marginBottom: '48px'
        }}>
          Education
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '8px'
            }}>
              Ph.D in Computer Science
            </h3>
            <p style={{
              color: '#3b82f6',
              fontWeight: '500',
              fontSize: '1.125rem',
              marginBottom: '4px'
            }}>
              University of Southern California
            </p>
            <p style={{
              color: '#6b7280',
              fontSize: '1rem',
              marginBottom: '8px'
            }}>
              2025 - Present
            </p>
            <p style={{
              color: '#4b5563',
              fontSize: '1rem',
              lineHeight: '1.5'
            }}>
              Advisor: Prof. Ruishan Liu
            </p>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '8px'
            }}>
              B.S in Computer Science
            </h3>
            <p style={{
              color: '#3b82f6',
              fontWeight: '500',
              fontSize: '1.125rem',
              marginBottom: '4px'
            }}>
              University of Texas at Dallas
            </p>
            <p style={{
              color: '#6b7280',
              fontSize: '1rem',
              marginBottom: '8px'
            }}>
              2020 - 2025
            </p>
            <p style={{
              color: '#4b5563',
              fontSize: '1rem',
              lineHeight: '1.5'
            }}>
              Advisors: Prof. Yulia Gel, Prof. Vincent Ng | GPA: 3.6/4.0
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}