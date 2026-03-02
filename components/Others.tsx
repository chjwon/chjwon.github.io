'use client'

import { portfolio } from '../data/portfolio'
import { SectionHeader } from './Education'

export default function Others() {
  const { projects, hobbies } = portfolio

  return (
    <section
      id="others"
      style={{
        padding: '100px 0',
        background: 'white',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          title="Others"
          subtitle="Personal projects and hobbies outside of research"
        />

        {/* Projects */}
        <div style={{ marginBottom: '72px' }}>
          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '24px',
                borderRadius: '4px',
                background: 'linear-gradient(180deg, #3b82f6, #8b5cf6)',
              }}
            />
            Projects
          </h3>

          {/* Auto-flowing grid — add items to portfolio.ts, layout auto-adjusts */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {projects.map((project) => (
              <div
                key={project.name}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e5e7eb',
                  borderRadius: '14px',
                  padding: '24px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                  cursor: project.link ? 'pointer' : 'default',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'
                  e.currentTarget.style.background = 'white'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.background = '#f8fafc'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#1f2937',
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
                        fontSize: '1rem',
                        color: '#6b7280',
                        textDecoration: 'none',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#3b82f6')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
                    >
                      ↗
                    </a>
                  )}
                </div>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#4b5563',
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
                        padding: '3px 10px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        background: '#eff6ff',
                        color: '#3b82f6',
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
          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#1f2937',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '24px',
                borderRadius: '4px',
                background: 'linear-gradient(180deg, #10b981, #059669)',
              }}
            />
            Hobbies &amp; Interests
          </h3>

          {/* Auto-flowing grid for hobbies too */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '14px',
                  padding: '22px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(16,185,129,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ fontSize: '2.4rem', marginBottom: '10px' }}>{hobby.icon}</div>
                <h4
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#1f2937',
                    marginBottom: '6px',
                  }}
                >
                  {hobby.name}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#4b5563', lineHeight: 1.5 }}>
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
