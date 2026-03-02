'use client'

import { portfolio } from '../data/portfolio'
import { SectionLabel } from './Education'

export default function WhereAmINow() {
  const { currentLocation, email } = portfolio

  const fields: Array<{ label: string; value: string }> = [
    { label: 'Location', value: `${currentLocation.city}, ${currentLocation.state}, ${currentLocation.country}` },
    { label: 'Affiliation', value: currentLocation.affiliation },
    { label: 'Department', value: currentLocation.department },
    { label: 'Lab', value: currentLocation.lab },
    { label: 'Advisor', value: currentLocation.advisor },
    { label: 'Status', value: currentLocation.status },
    { label: 'Since', value: currentLocation.startYear },
  ]

  const openTo = [
    'Research Collaborations',
    'Internship Opportunities',
    'Paper Reviews',
    'Academic Discussions',
  ]

  return (
    <section
      id="where-am-i-now"
      style={{
        background: '#0c0c0c',
        padding: '120px 32px 160px',
        maxWidth: '1120px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <SectionLabel index="05" title="Where Am I Now" />

      {/* Statement line */}
      <p
        style={{
          fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
          fontWeight: 600,
          color: '#555',
          letterSpacing: '-0.02em',
          lineHeight: 1.3,
          marginBottom: '64px',
          maxWidth: '600px',
        }}
      >
        Currently at{' '}
        <span style={{ color: '#c8c8c8' }}>{currentLocation.affiliation}</span>
        {' '}pursuing a Ph.D. in{' '}
        <span style={{ color: '#c8c8c8' }}>Computer Science</span>.
      </p>

      {/* Two-column: fields + open to */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '64px',
        }}
      >
        {/* Key-value table */}
        <div>
          {fields.map((field, i) => (
            <div
              key={field.label}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '16px',
                padding: '12px 0',
                borderTop: i === 0 ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono), monospace',
                  fontSize: '0.65rem',
                  color: '#2d2d2d',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  paddingTop: '2px',
                }}
              >
                {field.label}
              </span>
              <span
                style={{
                  fontSize: '0.85rem',
                  color: '#888',
                  lineHeight: 1.4,
                }}
              >
                {field.value}
              </span>
            </div>
          ))}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }} />
        </div>

        {/* Open to */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '0.65rem',
              color: '#2d2d2d',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Open To
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
            {openTo.map((item) => (
              <span
                key={item}
                style={{
                  fontSize: '0.85rem',
                  color: '#555',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '3px',
                    borderRadius: '50%',
                    background: '#2d2d2d',
                    flexShrink: 0,
                  }}
                />
                {item}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '0.82rem', color: '#333' }}>
            Reach out at{' '}
            <a
              href={`mailto:${email}`}
              style={{
                color: '#555',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '1px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#d4d4d4'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#555'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
