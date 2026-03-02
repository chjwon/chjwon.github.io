'use client'

import { portfolio } from '../data/portfolio'

export default function Education() {
  const { education } = portfolio

  return (
    <section
      id="education"
      style={{
        background: 'var(--bg)',
        padding: '120px 32px',
        maxWidth: '1120px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <SectionLabel index="02" title="Education" />

      <div>
        {education.map((edu, i) => (
          <div
            key={edu.institution}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '24px',
              alignItems: 'start',
              padding: '32px 0',
              borderBottom: '1px solid var(--border)',
              borderTop: i === 0 ? '1px solid var(--border)' : 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--hover-bg)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            {/* Left: institution + degree */}
            <div>
              <p
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-geist-mono), monospace',
                  color: 'var(--text-faint)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                {edu.institution}
              </p>
              <h3
                style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  fontWeight: 600,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                  marginBottom: '12px',
                  lineHeight: 1.2,
                }}
              >
                {edu.degree}
              </h3>
              {edu.advisor && (
                <p style={{ fontSize: '0.82rem', color: 'var(--text-faint)' }}>
                  <span
                    style={{
                      color: 'var(--text-ghost)',
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Advisor{' '}
                  </span>
                  {edu.advisor}
                </p>
              )}
              {edu.advisors && (
                <p style={{ fontSize: '0.82rem', color: 'var(--text-faint)' }}>
                  <span
                    style={{
                      color: 'var(--text-ghost)',
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Advisors{' '}
                  </span>
                  {edu.advisors.join(', ')}
                </p>
              )}
            </div>

            {/* Right: year */}
            <span
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '0.75rem',
                color: 'var(--text-faint)',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                paddingTop: '2px',
              }}
            >
              {edu.year}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/** Shared section label component used by all sections */
export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '16px',
        marginBottom: '64px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '0.65rem',
          color: 'var(--text-ghost)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {index}
      </span>
      <h2
        style={{
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 600,
          color: 'var(--text-muted)',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
    </div>
  )
}
