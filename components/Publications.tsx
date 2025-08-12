'use client'

export default function Publications() {
  return (
    <section 
      id="publications" 
      style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
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
          Publications
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            borderLeft: '4px solid #3b82f6',
            position: 'relative',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}>
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '8px',
                lineHeight: '1.3',
                minHeight: '2.6rem'
              }}>
                SNN-PDE: Learning Dynamic PDEs from Data with Simplicial Neural Networks
              </h3>
              <div style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#1f2937' }}>Choi J.</strong>, Chen Y., Lee H., Kim H., Gel Y.
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <span style={{
                fontWeight: '600',
                fontSize: '0.875rem',
                color: '#3b82f6'
              }}>
                AAAI 2024
              </span>
              <span style={{
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '500',
                background: '#dbeafe',
                color: '#1e40af',
                textAlign: 'center'
              }}>
                Acceptance: 23.75%
              </span>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            borderLeft: '4px solid #fbbf24',
            position: 'relative',
            background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-1px',
              right: '12px',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '0 0 8px 8px',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}>
              🏆 Best Paper Award
            </div>
            <div style={{ marginBottom: '12px', paddingTop: '20px' }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '8px',
                lineHeight: '1.3',
                minHeight: '2.6rem'
              }}>
                Revisiting Link Prediction with the Dowker Complex
              </h3>
              <div style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#1f2937' }}>Choi J.</strong>, Chen Y., Frías J. Castillo J., Gel Y.
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <span style={{
                fontWeight: '600',
                fontSize: '0.875rem',
                color: '#92400e'
              }}>
                PAKDD 2024
              </span>
              <span style={{
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '500',
                background: '#fef3c7',
                color: '#92400e',
                textAlign: 'center'
              }}>
                Best Paper in ASA Statistical Graphics
              </span>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            borderLeft: '4px solid #8b5cf6'
          }}>
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '8px',
                lineHeight: '1.3',
                minHeight: '2.6rem'
              }}>
                Self-supervised Contrastive Learning for Wildfire Detection
              </h3>
              <div style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#1f2937' }}>Choi J.</strong>, LaHaye, N., Chen Y., Lee H., Gel Y.
              </div>
              {/* 간단한 설명 추가 */}
              <div style={{
                color: '#6b7280',
                fontSize: '0.8rem',
                fontStyle: 'italic',
                marginBottom: '8px'
              }}>
                Satellite imagery analysis for early wildfire detection
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <span style={{
                fontWeight: '600',
                fontSize: '0.875rem',
                color: '#8b5cf6'
              }}>
                Elsevier Book Chapter 2024
              </span>
              <span style={{
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '500',
                background: '#f3e8ff',
                color: '#6b46c1',
                textAlign: 'center'
              }}>
                GeoAI 2024
              </span>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            borderLeft: '4px solid #ec4899'
          }}>
            <div style={{ marginBottom: '12px' }}>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '8px',
                lineHeight: '1.3',
                minHeight: '2.6rem'
              }}>
                MCR-LSTM: Market Condition-Recognized Approach for Cryptocurrency Trading
              </h3>
              <div style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#1f2937' }}>Choi J.</strong>, Choi Y.
              </div>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <span style={{
                fontWeight: '600',
                fontSize: '0.875rem',
                color: '#ec4899'
              }}>
                Financial Management Conference 2024
              </span>
              <span style={{
                padding: '4px 8px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '500',
                background: '#fce7f3',
                color: '#be185d',
                textAlign: 'center'
              }}>
                Asia/Pacific 2024
              </span>
            </div>
          </div>
        </div>
        
        <div style={{
          marginTop: '48px',
          paddingTop: '32px',
          borderTop: '2px solid #e5e7eb'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#374151',
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            Submitted Publications
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.7)',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #d1d5db'
            }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Keep Your Boundaries: From Finite Elements to Simplicial Convolution
              </h4>
              <p style={{
                color: '#6b7280',
                fontSize: '0.875rem',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#374151' }}>Choi J.</strong>, Chen Y., Xia K., Rondon I., Gel Y.
              </p>
              <span style={{
                display: 'inline-block',
                padding: '2px 8px',
                background: '#f3f4f6',
                color: '#6b7280',
                borderRadius: '12px',
                fontSize: '0.75rem'
              }}>
                Under Review
              </span>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.7)',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #d1d5db'
            }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '8px'
              }}>
                DKTM: Dynamic Keyword-based Topic Modeling for Lifelong Learning
              </h4>
              <p style={{
                color: '#6b7280',
                fontSize: '0.875rem',
                marginBottom: '8px'
              }}>
                <strong style={{ color: '#374151' }}>Choi J.</strong>, Nguyen V.
              </p>
              <span style={{
                display: 'inline-block',
                padding: '2px 8px',
                background: '#fef3c7',
                color: '#92400e',
                borderRadius: '12px',
                fontSize: '0.75rem'
              }}>
                UTD Research Scholar Award
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}