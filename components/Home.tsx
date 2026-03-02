'use client'

import { portfolio } from '../data/portfolio'

const INTEREST_COLORS = [
  { bg: 'linear-gradient(135deg, #3b82f6, #2563eb)', shadow: 'rgba(59,130,246,0.3)' },
  { bg: 'linear-gradient(135deg, #10b981, #059669)', shadow: 'rgba(16,185,129,0.3)' },
  { bg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', shadow: 'rgba(139,92,246,0.3)' },
  { bg: 'linear-gradient(135deg, #ec4899, #db2777)', shadow: 'rgba(236,72,153,0.3)' },
  { bg: 'linear-gradient(135deg, #f59e0b, #d97706)', shadow: 'rgba(245,158,11,0.3)' },
]

export default function Home() {
  const { name, title, affiliation, email, github, linkedin, googleScholar, researchInterests, bio } = portfolio

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* Decorative background blobs */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139,92,246,0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(16,185,129,0.06) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '780px',
          padding: '60px 24px',
          width: '100%',
        }}
      >
        {/* Avatar placeholder */}
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            margin: '0 auto 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            boxShadow: '0 8px 24px rgba(59,130,246,0.25)',
          }}
        >
          👨‍💻
        </div>

        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 800,
            color: '#1f2937',
            marginBottom: '12px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          {name}
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: '#3b82f6',
            marginBottom: '6px',
            fontWeight: 600,
          }}
        >
          {title}
        </p>

        <p
          style={{
            fontSize: '1rem',
            color: '#6b7280',
            marginBottom: '28px',
            fontWeight: 500,
          }}
        >
          {affiliation}
        </p>

        <p
          style={{
            fontSize: '1rem',
            color: '#4b5563',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 36px',
          }}
        >
          {bio}
        </p>

        {/* Research interest pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '44px',
          }}
        >
          {researchInterests.map((interest, i) => {
            const color = INTEREST_COLORS[i % INTEREST_COLORS.length]
            return (
              <span
                key={interest}
                style={{
                  padding: '8px 18px',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'white',
                  background: color.bg,
                  boxShadow: `0 4px 12px ${color.shadow}`,
                }}
              >
                {interest}
              </span>
            )
          })}
        </div>

        {/* Contact buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <ContactLink href={`mailto:${email}`} label="📧 Email" primary />
          <ContactLink href={github} label="💻 GitHub" />
          <ContactLink href={linkedin} label="💼 LinkedIn" />
          <ContactLink href={googleScholar} label="🎓 Scholar" />
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: '60px',
            color: '#9ca3af',
            fontSize: '1.4rem',
            animation: 'bounce 2s ease-in-out infinite',
            cursor: 'pointer',
          }}
          onClick={() =>
            document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          ↓
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  )
}

function ContactLink({
  href,
  label,
  primary = false,
}: {
  href: string
  label: string
  primary?: boolean
}) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{
        padding: '11px 24px',
        borderRadius: '10px',
        fontSize: '0.9rem',
        fontWeight: 600,
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        background: primary ? 'linear-gradient(135deg, #3b82f6, #2563eb)' : 'white',
        color: primary ? 'white' : '#374151',
        border: primary ? 'none' : '1.5px solid #e5e7eb',
        boxShadow: primary
          ? '0 4px 14px rgba(59,130,246,0.3)'
          : '0 2px 8px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = primary
          ? '0 6px 20px rgba(59,130,246,0.4)'
          : '0 4px 14px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = primary
          ? '0 4px 14px rgba(59,130,246,0.3)'
          : '0 2px 8px rgba(0,0,0,0.06)'
      }}
    >
      {label}
    </a>
  )
}
