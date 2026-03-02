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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  /* Sync theme state with whatever the anti-flash script set */
  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme')
    if (current === 'light') setTheme('light')
  }, [])

  /* IntersectionObserver for active section */
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

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    /* Add transition class for smooth palette switch, remove after animation */
    document.documentElement.classList.add('theme-transition')
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch { /* ignore */ }
    setTimeout(() => document.documentElement.classList.remove('theme-transition'), 400)
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
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
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
            color: 'var(--text)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-geist-mono), monospace',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
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
                  color: isActive ? 'var(--text-primary)' : 'var(--text-faint)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--text-muted)' }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--text-faint)' }}
              >
                {label}
              </a>
            )
          })}

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            style={{
              marginLeft: '8px',
              padding: '5px 10px',
              background: 'none',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              fontSize: '0.62rem',
              fontFamily: 'var(--font-geist-mono), monospace',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-ghost)',
              transition: 'color 0.2s, border-color 0.2s',
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)'
              e.currentTarget.style.borderColor = 'var(--text-faint)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-ghost)'
              e.currentTarget.style.borderColor = 'var(--border)'
            }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'light' : 'dark'}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="nav-mobile-btn">
          <button
            onClick={toggleTheme}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              fontSize: '0.62rem',
              fontFamily: 'var(--font-geist-mono), monospace',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--text-ghost)',
              padding: '4px 8px',
              borderRadius: '2px',
            }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? 'light' : 'dark'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
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
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            background: 'var(--nav-mobile-bg)',
            borderTop: '1px solid var(--border)',
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
                  color: isActive ? 'var(--text-primary)' : 'var(--text-dim)',
                  borderBottom: '1px solid var(--border-subtle)',
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
          .nav-mobile-btn { display: flex !important; }
        }
        @media (min-width: 641px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
