'use client'

import { useState } from 'react'
import { portfolio, type Publication, type Experience } from '../data/portfolio'
import { SectionLabel } from './Education'

export default function Research() {
  const { publications, experience, researchInterests } = portfolio
  const [tab, setTab] = useState<'publications' | 'experience'>('publications')

  const published = publications.filter((p) => p.status === 'published')
  const underReview = publications.filter((p) => p.status === 'under_review')

  return (
    <section
      id="research"
      style={{
        background: 'var(--bg)',
        padding: '120px 32px',
        maxWidth: '1120px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <SectionLabel index="03" title="Research" />

      {/* Research areas — single line */}
      <p
        style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '0.7rem',
          color: 'var(--text-ghost)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: '56px',
        }}
      >
        {researchInterests.join('  ·  ')}
      </p>

      {/* Tab toggle */}
      <div
        style={{
          display: 'flex',
          gap: '0',
          marginBottom: '48px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {(['publications', 'experience'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: '10px 0',
              marginRight: '32px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-geist-mono), monospace',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: tab === t ? 'var(--text)' : 'var(--text-ghost)',
              borderBottom: tab === t ? '1px solid var(--text)' : '1px solid transparent',
              marginBottom: '-1px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { if (tab !== t) e.currentTarget.style.color = 'var(--text-dim)' }}
            onMouseLeave={(e) => { if (tab !== t) e.currentTarget.style.color = 'var(--text-ghost)' }}
          >
            {t === 'publications' ? 'Publications' : 'Experience'}
          </button>
        ))}
      </div>

      {/* Publications view */}
      {tab === 'publications' && (
        <div>
          {published.length > 0 && (
            <div style={{ marginBottom: '56px' }}>
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
                Published
              </p>
              <div>
                {published.map((pub, i) => (
                  <PubRow key={pub.title} pub={pub} index={i + 1} />
                ))}
              </div>
            </div>
          )}

          {underReview.length > 0 && (
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
                Under Review
              </p>
              <div>
                {underReview.map((pub, i) => (
                  <PubRow key={pub.title} pub={pub} index={i + 1} dimmed />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Experience view */}
      {tab === 'experience' && (
        <div>
          {experience.map((exp, i) => (
            <ExpRow key={exp.role} exp={exp} isFirst={i === 0} />
          ))}
        </div>
      )}
    </section>
  )
}

function PubRow({ pub, index, dimmed = false }: { pub: Publication; index: number; dimmed?: boolean }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '32px 1fr auto',
        gap: '16px',
        padding: '20px 0',
        borderTop: '1px solid var(--border-subtle)',
        alignItems: 'start',
        opacity: dimmed ? 0.5 : 1,
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = dimmed ? '0.5' : '1' }}
    >
      {/* Index */}
      <span
        style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '0.65rem',
          color: 'var(--text-ghost)',
          paddingTop: '3px',
        }}
      >
        {String(index).padStart(2, '0')}
      </span>

      {/* Title + authors */}
      <div>
        <h4
          style={{
            fontSize: '0.95rem',
            fontWeight: 500,
            color: 'var(--text)',
            lineHeight: 1.4,
            marginBottom: '6px',
            letterSpacing: '-0.005em',
          }}
        >
          {pub.link ? (
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
            >
              {pub.title} ↗
            </a>
          ) : pub.title}
        </h4>
        <p
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-faint)',
            lineHeight: 1.5,
            marginBottom: pub.award ? '8px' : '0',
          }}
        >
          {pub.authors}
        </p>
        {pub.award && (
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '0.62rem',
              color: 'var(--award-color)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              borderBottom: '1px solid var(--award-border)',
              paddingBottom: '1px',
            }}
          >
            {pub.award}
          </span>
        )}
      </div>

      {/* Venue + acceptance */}
      <div style={{ textAlign: 'right', minWidth: '80px' }}>
        <span
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '0.68rem',
            color: 'var(--text-faint)',
            display: 'block',
            marginBottom: pub.acceptance ? '4px' : '0',
            whiteSpace: 'nowrap',
          }}
        >
          {pub.venue}
        </span>
        {pub.acceptance && (
          <span
            style={{
              fontFamily: 'var(--font-geist-mono), monospace',
              fontSize: '0.6rem',
              color: 'var(--text-ghost)',
            }}
          >
            {pub.acceptance} acc.
          </span>
        )}
      </div>
    </div>
  )
}

function ExpRow({ exp, isFirst }: { exp: Experience; isFirst: boolean }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '24px',
        padding: '28px 0',
        borderTop: isFirst ? '1px solid var(--border)' : '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--hover-bg-strong)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      <div>
        <p
          style={{
            fontFamily: 'var(--font-geist-mono), monospace',
            fontSize: '0.65rem',
            color: 'var(--text-ghost)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          {exp.org}
        </p>
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 500,
            color: 'var(--text)',
            marginBottom: '6px',
            letterSpacing: '-0.01em',
          }}
        >
          {exp.role}
        </h3>
        {(exp.mentor || exp.advisor) && (
          <p style={{ fontSize: '0.78rem', color: 'var(--text-faint)' }}>
            {exp.mentor ? 'Mentor' : 'Advisor'}: {exp.mentor ?? exp.advisor}
          </p>
        )}
      </div>
      <span
        style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          fontSize: '0.68rem',
          color: 'var(--text-ghost)',
          whiteSpace: 'nowrap',
          paddingTop: '2px',
        }}
      >
        {exp.period}
      </span>
    </div>
  )
}
