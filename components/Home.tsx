'use client'

import { portfolio } from '../data/portfolio'

export default function Home() {
  const { name, title, affiliation, email, github, linkedin, googleScholar, researchInterests, bio } = portfolio

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        background: 'var(--bg)',
        padding: '0 32px 64px',
        paddingTop: '60px',
        maxWidth: '1120px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Top metadata row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'auto',
          paddingTop: '80px',
          paddingBottom: '40px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '0.7rem',
            color: 'var(--text-faint)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          01 / Portfolio
        </span>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '0.7rem',
            color: 'var(--text-faint)',
            letterSpacing: '0.06em',
          }}
        >
          {affiliation}
        </span>
      </div>

      {/* Main hero content — anchored to bottom */}
      <div style={{ paddingTop: '120px' }}>
        {/* Name — the statement piece */}
        <h1
          style={{
            fontSize: 'clamp(3.2rem, 8.5vw, 8rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            marginBottom: '48px',
          }}
        >
          {name}
        </h1>

        {/* Bottom info row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '40px',
            flexWrap: 'wrap',
            paddingTop: '32px',
            borderTop: '1px solid var(--border)',
          }}
        >
          {/* Left: title + bio */}
          <div style={{ maxWidth: '480px' }}>
            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                marginBottom: '12px',
                fontWeight: 500,
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-dim)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              {bio}
            </p>
            {/* Research interests — inline text */}
            <p
              style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-geist-mono), monospace',
                color: 'var(--text-faint)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {researchInterests.join(' · ')}
            </p>
          </div>

          {/* Right: contact links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              alignItems: 'flex-end',
            }}
          >
            {[
              { label: 'Email', href: `mailto:${email}` },
              { label: 'GitHub', href: github },
              { label: 'LinkedIn', href: linkedin },
              { label: 'Scholar', href: googleScholar },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-faint)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-geist-mono), monospace',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-faint)')}
              >
                {label}
                <span style={{ fontSize: '0.65rem', opacity: 0.5 }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
