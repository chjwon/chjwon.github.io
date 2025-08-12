export default function About() {
  return (
    <section 
      id="about" 
      style={{
        padding: '80px 0',
        backgroundColor: 'white'
      }}
    >
      <div style={{
        maxWidth: '1024px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#1f2937',
          marginBottom: '48px'
        }}>
          About Me
        </h2>
        <div style={{
          maxWidth: 'none',
          margin: '0 auto'
        }}>
          <div style={{
            color: '#4b5563',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <p>
              Hello! I&apos;m Jae Won Choi, a Ph.D. student in Computer Science at the 
              University of Southern California (USC), advised by Prof. Ruishan Liu. 
              My research interests span <strong style={{ color: '#1f2937', fontWeight: '600' }}>Machine Learning</strong>, <strong style={{ color: '#1f2937', fontWeight: '600' }}>Graph Neural Networks</strong>, 
              <strong style={{ color: '#1f2937', fontWeight: '600' }}> Physics-Informed Machine Learning</strong>, and <strong style={{ color: '#1f2937', fontWeight: '600' }}>Computational Biology</strong>.
            </p>
            <p>
              I completed my B.S. in Computer Science at the University of Texas at Dallas, 
              where I was advised by Prof. Yulia Gel, Prof. Vincent Ng, and Prof. Yuzhou Chen.
            </p>
            <p>
              During my undergraduate years, I had the opportunity to intern at:
            </p>
            <ul style={{
              listStyleType: 'disc',
              paddingLeft: '24px',
              marginLeft: '16px',
              color: '#4b5563',
              fontSize: '1.125rem',
              lineHeight: '1.75',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <li><strong style={{ color: '#1f2937', fontWeight: '600' }}>NASA Jet Propulsion Laboratory</strong> through the Visiting Student Research Program (JVSRP)</li>
              <li><strong style={{ color: '#1f2937', fontWeight: '600' }}>Naval Postgraduate School</strong> via the Naval Research Enterprise Internship Program (NREIP)</li>
              <li><strong style={{ color: '#1f2937', fontWeight: '600' }}>Nasdaq Inc.</strong> as an Analytics Software Engineering Intern</li>
              <li><strong style={{ color: '#1f2937', fontWeight: '600' }}>Quantit Inc.</strong> as an Backend Developer Intern</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}