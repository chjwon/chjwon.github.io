import React, { useState } from 'react';
import './App.css';


const Sidebar = ({ profileData }) => {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <div className="profile-image">
          {profileData.image || '👤'}
        </div>
        <h1 className="profile-name">{profileData.name}</h1>
        <p className="profile-title">{profileData.title}</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <i>📍</i>
          <span>{profileData.location}</span>
        </div>
        <div className="contact-item">
          <i>📧</i>
          <span>{profileData.email}</span>
        </div>
        {/* <div className="contact-item">
          <i>🌐</i>
          <span>{profileData.website}</span>
        </div> */}
      </div>

      <div className="social-links">
        {profileData.socialLinks.map((link, index) => (
          <a key={index} href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">
            {link.icon} {link.name}
          </a>
        ))}
      </div>
    </aside>
  );
};

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="main-nav">
      <ul className="nav-list">
        {navItems.map(item => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Card = ({ title, meta, description, tags, link, linkText = "자세히 보기 →" }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      {meta && <div className="card-meta">{meta}</div>}
      <p className="card-description">{description}</p>
      {tags && (
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      )}
      {link && (
        <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      )}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="content-section">
      <h2 className="section-title">About Me</h2>
      <div className="intro-text">
      Hello! I'm Jae Won Choi, a Ph.D. student in Computer Science at the University of Southern California (USC), advised by Ruishan Liu.
      </div>
      <div className="intro-text">
      My research interests span Machine Learning, Graph Neural Networks, Physics-Informed Machine Learning, and Computational Biology.
      </div>
      <div className="intro-text">
      I completed my B.S. in Computer Science at the University of Texas at Dallas, where I was advised by Prof. Yulia Gel and Prof. Vincent Ng. 
      </div>
      <div className="intro-text">
      During my undergraduate years, I had the opportunity to intern at NASA Jet Propulsion Laboratory through the Visiting Student Research Program (VSRP), 
      the Naval Postgraduate School via the Naval Research Enterprise Internship Program (NREIP), and Nasdaq Inc. as an Analytics Software Engineering Intern.
      </div>
    </section>
  );
};

const PublicationsSection = ({ publications }) => {
  return (
    <section className="content-section">
      <h2 className="section-title">Publications</h2>
      <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
        {publications.map((pub, index) => (
          <li key={index} style={{ marginBottom: '12px' }}>
            <strong>{pub.title}</strong> ({pub.year}) - <span style={{ color: '#666' }}>{pub.venue}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const ProjectsSection = ({ projects }) => {
  return (
    <section className="content-section">
      <h2 className="section-title">Projects</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            meta={`${project.year} • ${project.type}`}
            description={project.description}
            tags={project.technologies}
            link={project.link}
            linkText="View Project →"
          />
        ))}
      </div>
    </section>
  );
};

const AwardsSection = ({ awards }) => {
  return (
    <section className="content-section">
      <h2 className="section-title">Awards & Honors</h2>
      <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
        {awards.map((award, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <strong>{award.title}</strong> ({award.year}) - {award.organization}
            {award.description && <div style={{ marginTop: '5px', fontSize: '14px' }}>{award.description}</div>}
          </li>
        ))}
      </ul>
    </section>
  );
};

const ExperienceSection = ({ experiences }) => {
  return (
    <section className="content-section">
      <h2 className="section-title">Experience</h2>
      <div className="card-grid">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            title={exp.position}
            meta={`${exp.period} • ${exp.company}`}
            description={exp.description}
            tags={exp.skills}
          />
        ))}
      </div>
    </section>
  );
};

const ContactSection = ({ contactInfo }) => {
  return (
    <section className="content-section">
      <h2 className="section-title">Contact</h2>
      <div className="intro-text">
        I'm happy to discuss you about any topic of research related to ML. But no spam.
      </div>
      
      <div className="card">
        <h3 className="card-title">Contact</h3>
        <div className="contact-info">
          <div className="contact-item">
            <i>📧</i>
            <span>{contactInfo.email}</span>
          </div>
          <div className="contact-item">
            <i>💼</i>
            <span>LinkedIn: {contactInfo.linkedin}</span>
          </div>
          <div className="contact-item">
            <i>🔗</i>
            <span>GitHub: {contactInfo.github}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const profileData = {
    name: 'Jae Won Choi',
    title: 'PhD Computer Science Student',
    location: 'Los Angeles, CA',
    email: 'skip',
    // website: '',
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/chjwon', icon: '🔗' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jae-won-choi/', icon: '💼' },
      { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=4s95lKgAAAAJ&hl=en', icon: '📚' },
      // { name: 'Twitter', url: '#', icon: '🐦' },
      // { name: 'Resume/CV', url: '#', icon: '📄' }
    ]
  };

  const publications = [
    {
      title: 'Revisiting Link Prediction with the Dowker Complex',
      year: '2024',
      venue: 'PAKDD',
    },
    {
      title: 'SNN-PDE: learning dynamic PDEs from data with simplicial neural networks',
      year: '2024',
      venue: 'AAAI',
    },
    {
      title: 'Self-supervised contrastive learning for wildfire detection: utility and limitations',
      year: '2024',
      venue: 'Elsevier Book Chapter-Advances in Machine Learning and Image Analysis GeoAI',
    }
  ];

  const projects = [
    {
      title: 'DKTM',
      year: '2025',
      type: 'NLP PRoject',
      description: 'DKTM means Dynamic Keyword-based Topic Modeling. Life-long Learning typed document categorizing model. Still adding more models to apply',
      technologies: ['NLP'],
      link: 'https://github.com/chjwon/DKTM'
    },
    {
      title: 'IAM',
      year: '2025',
      type: 'Senior Project (Undergraduate)',
      description: 'Senior Project for UTD. IAM means Intelligence Assest Management. In the website, users can add company tickers what they are interested in. In every 8am, website send notification with report. Report have the reulst of analysis recent news of the company. Analysis is based on LLM-agent model. Sorry currently closed service',
      technologies: ['Next.js', 'Django', 'LLM', 'AI-agent'],
      link: '#'
    }
  ];

  const awards = [
    {
      title: 'Best Paper Award from ASA Section on Statistical Graphics',
      year: '2024',
      organization: 'American Statistical Association',
      description: 'Best Paper Award from ASA Section on Statistical Graphics'
    },
    {
      title: 'Undergraduate Research Scholar Award',
      year: '2024',
      organization: 'University of Texas at Dallas',
      description: 'Undergraduate Research Scholar Award (URSA) with DKTM project'
    },
    {
      title: 'Bronze Medal, Sungkyunkwan University Mathematics Competition, South Korea — Fall 2016',
      year: '2016',
      organization: 'Sungkyunkwan University Mathematics Competition',
      description: 'Bronze Medal, Sungkyunkwan University Mathematics Competition in Korea'
    }
  ];

  const experiences = [
    {
      position: 'JPL Visiting Student Research Program (JVSRP)',
      period: 'Aug 2024 - Feb 2025',
      company: 'NASA JPL',
      description: '• Mentor: Kyo Lee | Utilized graph neural networks with physics-informed machine learning to predict geological symptoms, such as wildfires. Leveraged topology and simplicial neural networks to enhance model performance in scientific applications.',
      skills: ['Research', 'GNN']
    },
    {
      position: 'Naval Research Enterprise Internship Program(NREIP)',
      period: 'May 2024 - Jul 2024',
      company: 'Office of Naval Research',
      description: '• Advisor: Rowe Neil | As a Research Intern, I developed machine learning algorithms to generate document summaries, focusing on intent summarization and domain-specific content extraction to enhance data usability and insights.',
      skills: ['Research', 'NLP']
    },
    {
      position: 'Analytics Software Engineering Intern',
      period: 'Jun 2022 - Aug 2022',
      company: 'Nasdaq',
      description: 'Collaborated on constructing a responsive dashboard using React JS and a Restful Django API for real-time data validation. The dashboard offered comprehensive database status insights, utilizing API-driven SQL queries with snowflake architecture to identify erroneous data. Implemented robust testing through the Django test module to ensure precision and dependability.',
      skills: ['SWE']
    },
    {
      position: 'Backend Developer Intern',
      period: 'Mar 2021 - Jun 2021',
      company: 'Quantit',
      description: 'Performed code reviews and testing for a Django web server featuring REST API and React JS frontend. Oversaw dashboard maintenance and integrated a Jupyter notebook link. Hosted a knowledge-sharing conference on the server framework and implemented a code documentation system for onboarding new staff and interns.',
      skills: ['SWE']
    }
  ];

  const contactInfo = {
    email: 'skip',
    linkedin: 'linkedin.com/in/jae-won-choi',
    github: 'github.com/chjwon'
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'publications':
        return <PublicationsSection publications={publications} />;
      case 'projects':
        return <ProjectsSection projects={projects} />;
      case 'awards':
        return <AwardsSection awards={awards} />;
      case 'experience':
        return <ExperienceSection experiences={experiences} />;
      case 'contact':
        return <ContactSection contactInfo={contactInfo} />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Sidebar profileData={profileData} />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;