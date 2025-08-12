'use client'

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
            background: 'white',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            borderLeft: '4px solid #3b82f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}>
            <div style={{ flex: 1 }}>
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
                {/* Engaged in NASA AIST&apos;s Geometric Deep Learning for anomaly detection, 
                developing innovative physics-inspired deep learning models for wildfire prediction. */}
              </p>
            </div>
            <div style={{
              flexShrink: 0,
              width: '80px',
              height: '80px',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white'
            }}>
              <img 
                src="/images/nasa-logo.png"
                alt="NASA Logo"
                style={{
                  width: '70px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div style="color: #3b82f6; font-weight: bold; font-size: 14px; text-align: center;">NASA</div>';
                }}
              />
            </div>
          </div>
          
          <div style={{
            background: 'white',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            borderLeft: '4px solid #d8d51fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}>
            <div style={{ flex: 1 }}>
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
                color: '#d8d51fff'
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
            <div style={{
              flexShrink: 0,
              width: '80px',
              height: '80px',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white'
            }}>
              <img 
                src="/images/naval-logo.png"
                alt="Naval Research Logo"
                style={{
                  width: '70px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div style="color: #10b981; font-weight: bold; font-size: 14px; text-align: center;">NAVAL</div>';
                }}
              />
            </div>
          </div>
          
          <div style={{
            background: 'white',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            borderLeft: '4px solid #f97316',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}>
            <div style={{ flex: 1 }}>
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
                color: '#f97316'
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
            <div style={{
              flexShrink: 0,
              width: '80px',
              height: '80px',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white'
            }}>
              <img 
                src="/images/utd-logo.png"
                alt="UTD Logo"
                style={{
                  width: '70px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div style="color: #8b5cf6; font-weight: bold; font-size: 14px; text-align: center;">UTD</div>';
                }}
              />
            </div>
          </div>
          
          <div style={{
            background: 'white',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            borderLeft: '4px solid #06b6d4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}>
            <div style={{ flex: 1 }}>
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
                color: '#06b6d4'
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
                {/* Built dashboard for data validation using React.js and Django REST API. 
                Implemented responsive web design and comprehensive testing with Snowflake integration. */}
              </p>
            </div>
            <div style={{
              flexShrink: 0,
              width: '80px',
              height: '80px',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white'
            }}>
              <img 
                src="/images/nasdaq-logo.png"
                alt="Nasdaq Logo"
                style={{
                  width: '70px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div style="color: #f97316; font-weight: bold; font-size: 14px; text-align: center;">NASDAQ</div>';
                }}
              />
            </div>
          </div>
          <div style={{
            background: 'white',
            padding: '24px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            borderLeft: '4px solid #1c47d3ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '8px'
              }}>
                Backend Developer Intern
              </h3>
              <p style={{
                fontWeight: '500',
                fontSize: '1.125rem',
                marginBottom: '4px',
                color: '#1c47d3ff'
              }}>
                Quantit, Inc
              </p>
              <p style={{
                color: '#6b7280',
                fontSize: '1rem',
                marginBottom: '8px'
              }}>
                Mar 2021 - Jun 2021
              </p>
              <p style={{
                color: '#4b5563',
                lineHeight: '1.6'
              }}>
                {/* Reviewed and wrote test code for a Python webserver based on Django framework with REST API. 
                Built foundation for code documentation and learned collaboration using Docker and GitLab. */}
              </p>
            </div>
            <div style={{
              flexShrink: 0,
              width: '80px',
              height: '80px',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white'
            }}>
              <img 
                src="/images/quantit-logo.png"
                alt="Quantit Logo"
                style={{
                  width: '70px',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div style="color: #06b6d4; font-weight: bold; font-size: 14px; text-align: center;">QUANTIT</div>';
                }}
              />
              </div>
              </div>
        </div>
      </div>
    </section>
  )
}