export default function Experience() {
  return (
    <section 
      id="experience" 
      style={{
        padding: '80px 0',
        backgroundColor: 'white'
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
          Experience
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div style={{
            position: 'relative',
            paddingLeft: '24px'
          }}>
            <div style={{
              content: '',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              borderRadius: '2px',
              backgroundColor: '#3b82f6'
            }} />
            <div style={{
              background: 'white',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              borderLeft: '4px solid #3b82f6'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '8px'
              }}>
                JPL Visiting Student Research Program (JVSRP)
              </h3>
              <p style={{
                fontWeight: '500',
                fontSize: '1.125rem',
                marginBottom: '4px',
                color: '#3b82f6'
              }}>
                NASA Jet Propulsion Laboratory
              </p>
              <p style={{
                color: '#6b7280',
                fontSize: '1rem',
                marginBottom: '8px'
              }}>
                Aug 2024 - Feb 2025
              </p>
              <p style={{
                color: '#4b5563',
                fontSize: '1rem',
                marginBottom: '12px'
              }}>
                Mentor: Kyo Lee
              </p>
              <p style={{
                color: '#4b5563',
                lineHeight: '1.6'
              }}>
                Engaged in NASA AIST&apos;s Geometric Deep Learning for anomaly detection, 
                developing innovative physics-inspired deep learning models for wildfire prediction.
              </p>
            </div>
          </div>
          
          <div style={{
            position: 'relative',
            paddingLeft: '24px'
          }}>
            <div style={{
              background: 'white',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              borderLeft: '4px solid #10b981'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '8px'
              }}>
                Naval Research Enterprise Internship Program (NREIP)
              </h3>
              <p style={{
                fontWeight: '500',
                fontSize: '1.125rem',
                marginBottom: '4px',
                color: '#10b981'
              }}>
                Naval Postgraduate School
              </p>
              <p style={{
                color: '#6b7280',
                fontSize: '1rem',
                marginBottom: '8px'
              }}>
                May 2024 - Jul 2024
              </p>
              <p style={{
                color: '#4b5563',
                fontSize: '1rem'
              }}>
                Advisor: Rowe Neil
              </p>
            </div>
          </div>
          
          <div style={{
            position: 'relative',
            paddingLeft: '24px'
          }}>
            <div style={{
              background: 'white',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              borderLeft: '4px solid #8b5cf6'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '8px'
              }}>
                Undergraduate Research Assistant
              </h3>
              <p style={{
                fontWeight: '500',
                fontSize: '1.125rem',
                marginBottom: '4px',
                color: '#8b5cf6'
              }}>
                UTD, Department of Computer Science
              </p>
              <p style={{
                color: '#6b7280',
                fontSize: '1rem',
                marginBottom: '8px'
              }}>
                Sep 2023 - May 2025
              </p>
              <p style={{
                color: '#4b5563',
                fontSize: '1rem'
              }}>
                Advisor: Vincent Ng | Human Language Technology Research Institute
              </p>
            </div>
          </div>
          
          <div style={{
            position: 'relative',
            paddingLeft: '24px'
          }}>
            <div style={{
              background: 'white',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              borderLeft: '4px solid #f97316'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '8px'
              }}>
                Analytics Software Engineering Intern
              </h3>
              <p style={{
                fontWeight: '500',
                fontSize: '1.125rem',
                marginBottom: '4px',
                color: '#f97316'
              }}>
                Nasdaq Inc
              </p>
              <p style={{
                color: '#6b7280',
                fontSize: '1rem',
                marginBottom: '8px'
              }}>
                Jun 2022 - Aug 2022
              </p>
              <p style={{
                color: '#4b5563',
                lineHeight: '1.6'
              }}>
                Built dashboard for data validation using React.js and Django REST API. 
                Implemented responsive web design and comprehensive testing with Snowflake integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}