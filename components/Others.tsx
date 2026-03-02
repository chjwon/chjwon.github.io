'use client'

import { portfolio } from '../data/portfolio'
import { SectionLabel } from './Education'

export default function Others() {
  const { projects, hobbies } = portfolio

  return (
    <section
      id="others"
      style={{
        background: '#0c0c0c',
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
            color: '#2d2d2d',
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
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                background: '#0c0c0c',
                padding: '28px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#111')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#0c0c0c')}
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
                    color: '#c8c8c8',
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
                      color: '#2d2d2d',
                      transition: 'color 0.2s',
                      flexShrink: 0,
                      marginLeft: '8px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#888')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#2d2d2d')}
                  >
                    ↗
                  </a>
                )}
              </div>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: '#3d3d3d',
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
                      color: '#2d2d2d',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(255,255,255,0.06)',
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
            color: '#2d2d2d',
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
                borderTop: i === 0 ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.04)',
                alignItems: 'start',
              }}
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  color: '#555',
                  fontWeight: 500,
                }}
              >
                {hobby.name}
              </span>
              <span
                style={{
                  fontSize: '0.82rem',
                  color: '#333',
                  lineHeight: 1.6,
                }}
              >
                {hobby.description}
              </span>
            </div>
          ))}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }} />
        </div>
      </div>
    </section>
  )
}
