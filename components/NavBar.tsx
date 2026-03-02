'use client'

import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Others', href: '#others' },
  { label: 'Now', href: '#where-am-i-now' },
]

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sectionIds = ['home', 'education', 'research', 'others', 'where-am-i-now']
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.25 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const initials = portfolio.name.split(' ').map((n) => n[0]).join('')

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(12,12,12,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px',
        }}
      >
        {/* Name / Initials */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#d4d4d4',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-geist-mono), monospace',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#e8e8e8')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#d4d4d4')}
        >
          {initials}
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }} className="nav-desktop">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                style={{
                  padding: '6px 12px',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-geist-mono), monospace',
                  color: isActive ? '#e8e8e8' : '#444',
                  transition: 'color 0.2s',
                  borderRadius: '3px',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#888' }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#444' }}
              >
                {label}
              </a>
            )
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#888',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-geist-mono), monospace',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? 'close' : 'menu'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            background: '#0e0e0e',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            padding: '16px 32px 24px',
          }}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                style={{
                  display: 'block',
                  padding: '12px 0',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: isActive ? '#e8e8e8' : '#555',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </a>
            )
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        @media (min-width: 641px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
