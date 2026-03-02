'use client'

import { portfolio } from '../data/portfolio'
import { SectionLabel } from './Education'

export default function Others() {
  const { projects, hobbies } = portfolio

  return (
    <section
      id="others"
      style={{
        background: 'var(--bg)',
        padding: '120px 32px',
        maxWidth: '1120px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <SectionLabel index="04" title="Others" />

      {/* Projects */}
      <div style={{ marginBottom: '80px' }}>
        <p
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '0.65rem',
            color: 'var(--text-ghost)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Projects
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1px',
            background: 'var(--grid-gap)',
            border: '1px solid var(--grid-gap)',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                background: 'var(--bg)',
                padding: '28px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg)')}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px',
                }}
              >
                <h4
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {project.name}
                </h4>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: '0.65rem',
                      color: 'var(--text-ghost)',
                      transition: 'color 0.2s',
                      flexShrink: 0,
                      marginLeft: '8px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-ghost)')}
                  >
                    ↗
                  </a>
                )}
              </div>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-faint)',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}
              >
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-geist-mono), monospace',
                      fontSize: '0.62rem',
                      color: 'var(--text-ghost)',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      border: '1px solid var(--border)',
                      padding: '2px 7px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies */}
      <div>
        <p
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '0.65rem',
            color: 'var(--text-ghost)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Interests &amp; Hobbies
        </p>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {hobbies.map((hobby, i) => (
            <div
              key={hobby.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: '24px',
                padding: '16px 0',
                borderTop: i === 0 ? '1px solid var(--border)' : '1px solid var(--border-subtle)',
                alignItems: 'start',
              }}
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-dim)',
                  fontWeight: 500,
                }}
              >
                {hobby.name}
              </span>
              <span
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-ghost)',
                  lineHeight: 1.6,
                }}
              >
                {hobby.description}
              </span>
            </div>
          ))}
          <div style={{ borderBottom: '1px solid var(--border-subtle)' }} />
        </div>
      </div>
    </section>
  )
}
