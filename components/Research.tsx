'use client'

import { useState } from 'react'
import { portfolio, type Publication } from '../data/portfolio'
import { SectionHeader } from './Education'

export default function Research() {
  const { publications, experience, researchInterests } = portfolio
  const [activeTab, setActiveTab] = useState<'publications' | 'experience'>('publications')

  const published = publications.filter((p) => p.status === 'published')
  const underReview = publications.filter((p) => p.status === 'under_review')

  return (
    <section
      id="research"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          title="Research"
          subtitle="Publications, research interests, and academic experience"
        />

        {/* Research interest pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          {researchInterests.map((interest) => (
            <span
              key={interest}
              style={{
                padding: '7px 16px',
                borderRadius: '30px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#3b82f6',
                background: '#eff6ff',
                border: '1.5px solid #bfdbfe',
              }}
            >
              {interest}
            </span>
          ))}
        </div>

        {/* Tab switcher */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '36px',
            background: 'white',
            padding: '6px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            width: 'fit-content',
          }}
        >
          {(['publications', 'experience'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '9px 22px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                background: activeTab === tab ? '#3b82f6' : 'transparent',
                color: activeTab === tab ? 'white' : '#6b7280',
                textTransform: 'capitalize',
              }}
            >
              {tab === 'publications' ? 'Publications' : 'Experience'}
            </button>
          ))}
        </div>

        {/* Publications */}
        {activeTab === 'publications' && (
          <div>
            {published.length > 0 && (
              <>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#374151',
                    marginBottom: '16px',
                  }}
                >
                  Published
                </h3>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}
                >
                  {published.map((pub) => (
                    <PublicationCard key={pub.title} pub={pub} />
                  ))}
                </div>
              </>
            )}

            {underReview.length > 0 && (
              <>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#374151',
                    marginBottom: '16px',
                  }}
                >
                  Under Review
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {underReview.map((pub) => (
                    <PublicationCard key={pub.title} pub={pub} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Experience */}
        {activeTab === 'experience' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {experience.map((exp) => (
              <div
                key={exp.role}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  background: 'white',
                  borderRadius: '14px',
                  padding: '22px 24px',
                  border: '1px solid #e5e7eb',
                  borderLeft: `4px solid ${exp.accentColor}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(4px)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                {/* Logo */}
                <div
                  style={{
                    flexShrink: 0,
                    width: '64px',
                    height: '64px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f8fafc',
                    border: '1px solid #e5e7eb',
                  }}
                >
                  <img
                    src={exp.logo}
                    alt={exp.org}
                    style={{ width: '52px', height: 'auto', objectFit: 'contain' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerHTML = `<span style="color:${exp.accentColor};font-weight:700;font-size:11px;text-align:center;padding:4px">${exp.abbreviation}</span>`
                      }
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1f2937', marginBottom: '3px' }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600, color: exp.accentColor, marginBottom: '2px' }}>
                    {exp.org}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '4px' }}>
                    {exp.period}
                  </p>
                  {(exp.mentor || exp.advisor) && (
                    <p style={{ fontSize: '0.85rem', color: '#4b5563' }}>
                      <span style={{ fontWeight: 600 }}>
                        {exp.mentor ? 'Mentor' : 'Advisor'}:
                      </span>{' '}
                      {exp.mentor ?? exp.advisor}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '14px',
        padding: '22px 24px',
        border: '1px solid #e5e7eb',
        borderLeft: `4px solid ${pub.accentColor}`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'
      }}
    >
      {pub.award && (
        <div
          style={{
            position: 'absolute',
            top: '-1px',
            right: '16px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            color: 'white',
            fontSize: '0.72rem',
            fontWeight: 700,
            padding: '3px 10px',
            borderRadius: '0 0 8px 8px',
          }}
        >
          🏆 {pub.award}
        </div>
      )}

      <h4
        style={{
          fontSize: '0.95rem',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '6px',
          lineHeight: 1.4,
          paddingTop: pub.award ? '12px' : '0',
        }}
      >
        {pub.link ? (
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#3b82f6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#1f2937')}
          >
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h4>

      <p style={{ fontSize: '0.85rem', color: '#4b5563', marginBottom: '10px' }}>
        {pub.authors}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: pub.status === 'published' ? pub.accentColor : '#9ca3af',
          }}
        >
          {pub.venue}
        </span>

        {pub.acceptance && (
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '10px',
              background: '#dbeafe',
              color: '#1e40af',
            }}
          >
            Acceptance: {pub.acceptance}
          </span>
        )}

        {pub.status === 'under_review' && (
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '10px',
              background: '#f3f4f6',
              color: '#6b7280',
            }}
          >
            Under Review
          </span>
        )}
      </div>
    </div>
  )
}
