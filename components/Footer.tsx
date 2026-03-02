'use client'

import { portfolio } from '../data/portfolio'

export default function Footer() {
  const { name, email, github, linkedin, googleScholar } = portfolio

  const links = [
    { label: 'Email', href: `mailto:${email}`, icon: '📧' },
    { label: 'GitHub', href: github, icon: '💻' },
    { label: 'LinkedIn', href: linkedin, icon: '💼' },
    { label: 'Google Scholar', href: googleScholar, icon: '🎓' },
  ]

  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        color: 'white',
        padding: '64px 0 40px',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <h3
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '12px',
            color: 'white',
          }}
        >
          Get In Touch
        </h3>

        <p
          style={{
            fontSize: '1rem',
            color: '#9ca3af',
            maxWidth: '520px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
        >
          Interested in research collaborations, academic discussions, or just want to say hi?
          I&apos;m always happy to connect.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                borderRadius: '30px',
                background: 'rgba(255,255,255,0.08)',
                border: '1.5px solid rgba(255,255,255,0.15)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(59,130,246,0.25)'
                e.currentTarget.style.borderColor = '#3b82f6'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '28px',
            color: '#6b7280',
            fontSize: '0.85rem',
          }}
        >
          <p style={{ margin: '0 0 6px' }}>
            © {year} {name}. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: '0.78rem', color: '#4b5563' }}>
            Built with Next.js &amp; TypeScript · Deployed via GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  )
}
