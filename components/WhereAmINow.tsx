'use client'

import { portfolio } from '../data/portfolio'
import { SectionHeader } from './Education'

export default function WhereAmINow() {
  const { currentLocation, email } = portfolio

  return (
    <section
      id="where-am-i-now"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      }}
    >
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
        <SectionHeader
          title="Where Am I Now"
          subtitle="Current location and affiliation"
        />

        {/* Main status card */}
        <div
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
            border: '1px solid #e5e7eb',
            marginBottom: '24px',
          }}
        >
          {/* Location header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
              marginBottom: '32px',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(59,130,246,0.25)',
              }}
            >
              📍
            </div>
            <div>
              <h3
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#1f2937',
                  marginBottom: '4px',
                }}
              >
                {currentLocation.city}, {currentLocation.state}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#6b7280', fontWeight: 500 }}>
                {currentLocation.country}
              </p>
            </div>
          </div>

          {/* Info grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            <InfoItem
              icon="🏫"
              label="Affiliation"
              value={currentLocation.affiliation}
              accent="#3b82f6"
            />
            <InfoItem
              icon="🔬"
              label="Department"
              value={currentLocation.department}
              accent="#8b5cf6"
            />
            <InfoItem
              icon="🧪"
              label="Lab"
              value={currentLocation.lab}
              accent="#10b981"
            />
            <InfoItem
              icon="👨‍🏫"
              label="Advisor"
              value={currentLocation.advisor}
              accent="#f59e0b"
            />
            <InfoItem
              icon="🎓"
              label="Status"
              value={currentLocation.status}
              accent="#ec4899"
            />
            <InfoItem
              icon="📅"
              label="Started"
              value={currentLocation.startYear}
              accent="#06b6d4"
            />
          </div>
        </div>

        {/* Currently open to */}
        <div
          style={{
            background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
            borderRadius: '16px',
            padding: '28px 32px',
            border: '1px solid #c7d2fe',
          }}
        >
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#1e40af',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>💬</span> Open to
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              'Research Collaborations',
              'Internship Opportunities',
              'Paper Reviews',
              'Academic Discussions',
            ].map((item) => (
              <span
                key={item}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  background: 'white',
                  color: '#3b82f6',
                  border: '1.5px solid #bfdbfe',
                }}
              >
                {item}
              </span>
            ))}
          </div>
          <p style={{ marginTop: '16px', fontSize: '0.875rem', color: '#4b5563' }}>
            Feel free to reach out at{' '}
            <a
              href={`mailto:${email}`}
              style={{ color: '#3b82f6', fontWeight: 600, textDecoration: 'none' }}
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function InfoItem({
  icon,
  label,
  value,
  accent,
}: {
  icon: string
  label: string
  value: string
  accent: string
}) {
  return (
    <div
      style={{
        background: '#f8fafc',
        borderRadius: '12px',
        padding: '16px 18px',
        border: '1px solid #e5e7eb',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '6px',
        }}
      >
        <span style={{ fontSize: '1.1rem' }}>{icon}</span>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            color: accent,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </span>
      </div>
      <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
        {value}
      </p>
    </div>
  )
}
