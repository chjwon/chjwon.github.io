'use client'

import { portfolio } from '../data/portfolio'

export default function Footer() {
  const { name, email, github, linkedin, googleScholar } = portfolio
  const year = new Date().getFullYear()

  const links = [
    { label: 'Email', href: `mailto:${email}` },
    { label: 'GitHub', href: github },
    { label: 'LinkedIn', href: linkedin },
    { label: 'Scholar', href: googleScholar },
  ]

  return (
    <footer
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '32px 32px',
        maxWidth: '1120px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        {/* Left: name + year */}
        <span
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '0.68rem',
            color: 'var(--text-ghost)',
            letterSpacing: '0.06em',
          }}
        >
          {name} © {year}
        </span>

        {/* Right: links */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-geist-mono), monospace',
                fontSize: '0.68rem',
                color: 'var(--text-ghost)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-ghost)')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
