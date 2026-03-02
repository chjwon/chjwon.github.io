'use client'

import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Others', href: '#others' },
  { label: 'Where Am I Now', href: '#where-am-i-now' },
]

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ['home', 'education', 'research', 'others', 'where-am-i-now']
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{
            fontWeight: 700,
            fontSize: '1.1rem',
            color: scrolled ? '#1f2937' : '#1f2937',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          {portfolio.name.split(' ').slice(0, 2).join(' ')}
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
          className="nav-desktop"
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
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#3b82f6' : '#374151',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  background: isActive ? '#eff6ff' : 'transparent',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#f9fafb'
                    e.currentTarget.style.color = '#1f2937'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#374151'
                  }
                }}
              >
                {label}
              </a>
            )
          })}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#374151',
            fontSize: '1.5rem',
          }}
          className="nav-mobile-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid #e5e7eb',
            padding: '12px 24px 20px',
          }}
          className="nav-mobile-menu"
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
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#3b82f6' : '#374151',
                  textDecoration: 'none',
                  background: isActive ? '#eff6ff' : 'transparent',
                  marginBottom: '4px',
                }}
              >
                {label}
              </a>
            )
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
