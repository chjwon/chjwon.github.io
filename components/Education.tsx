'use client'

import { portfolio } from '../data/portfolio'

export default function Education() {
  const { education } = portfolio

  return (
    <section
      id="education"
      style={{
        padding: '100px 0',
        background: 'white',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader title="Education" subtitle="Academic background and training" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {education.map((edu) => (
            <div
              key={edu.institution}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                flexWrap: 'wrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'
              }}
            >
              {/* Logo */}
              <div
                style={{
                  flexShrink: 0,
                  width: '80px',
                  height: '80px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f8fafc',
                  border: '1px solid #e5e7eb',
                }}
              >
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  style={{ width: '68px', height: 'auto', objectFit: 'contain' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.innerHTML = `<span style="color:#3b82f6;font-weight:700;font-size:13px;text-align:center;padding:4px">${edu.abbreviation}</span>`
                    }
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#1f2937',
                    marginBottom: '4px',
                  }}
                >
                  {edu.degree}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#3b82f6',
                    marginBottom: '4px',
                  }}
                >
                  {edu.institution}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '8px' }}>
                  {edu.year}
                </p>
                {edu.advisor && (
                  <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                    <span style={{ fontWeight: 600 }}>Advisor:</span> {edu.advisor}
                  </p>
                )}
                {edu.advisors && (
                  <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                    <span style={{ fontWeight: 600 }}>Advisors:</span>{' '}
                    {edu.advisors.join(', ')}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '56px' }}>
      <h2
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          color: '#1f2937',
          marginBottom: '10px',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: '1rem', color: '#6b7280', fontWeight: 500 }}>{subtitle}</p>
      )}
      <div
        style={{
          width: '48px',
          height: '4px',
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
          borderRadius: '2px',
          margin: '16px auto 0',
        }}
      />
    </div>
  )
}
