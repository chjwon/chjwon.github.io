// ============================================================
// PORTFOLIO DATA — Edit this file to update your website!
// ============================================================
// To add a publication: add an object to the `publications` array
// To add a project/hobby: add an object to `projects` / `hobbies`
// To update your location: edit `currentLocation`
// ============================================================

export interface Education {
  degree: string;
  institution: string;
  year: string;
  advisor?: string;
  advisors?: string[];
  logo: string;
  abbreviation: string; // fallback if image fails
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  acceptance?: string;
  award?: string;
  status: 'published' | 'under_review';
  link?: string;
  accentColor: string;
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  mentor?: string;
  advisor?: string;
  logo: string;
  abbreviation: string; // fallback if image fails
  accentColor: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface Hobby {
  name: string;
  description: string;
  icon: string;
}

export interface CurrentLocation {
  city: string;
  state: string;
  country: string;
  affiliation: string;
  department: string;
  lab: string;
  advisor: string;
  status: string;
  startYear: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  affiliation: string;
  email: string;
  github: string;
  linkedin: string;
  googleScholar: string;
  researchInterests: string[];
  bio: string;
  education: Education[];
  publications: Publication[];
  experience: Experience[];
  projects: Project[];
  hobbies: Hobby[];
  currentLocation: CurrentLocation;
}

export const portfolio: PortfolioData = {
  // ── Basic Info ──────────────────────────────────────────────
  name: 'Jae Won Choi',
  title: 'Ph.D. Student in Computer Science',
  affiliation: 'University of Southern California',
  email: 'jwchoi@usc.edu',
  github: 'https://github.com/chjwon',
  linkedin: 'https://www.linkedin.com/in/jae-won-choi/',
  googleScholar: 'https://scholar.google.com/citations?user=4s95lKgAAAAJ&hl=ko',

  bio: 'I am a Ph.D. student in Computer Science at the University of Southern California. My research focuses on geometric deep learning, graph neural networks, and physics-informed machine learning, with applications in computational biology and environmental science.',

  // ── Research Interests ──────────────────────────────────────
  researchInterests: [
    'Machine Learning',
    'Graph Neural Networks',
    'Physics-Informed ML',
    'Computational Biology',
  ],

  // ── Education ───────────────────────────────────────────────
  education: [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'University of Southern California',
      year: '2025 – Present',
      advisor: 'Prof. Ruishan Liu',
      logo: '/images/usc-logo.png',
      abbreviation: 'USC',
    },
    {
      degree: 'B.S. in Computer Science',
      institution: 'University of Texas at Dallas',
      year: '2020 – 2025',
      advisors: ['Prof. Yulia Gel', 'Prof. Vincent Ng', 'Prof. Yuzhou Chen'],
      logo: '/images/utd-logo.png',
      abbreviation: 'UTD',
    },
  ],

  // ── Publications ────────────────────────────────────────────
  // status: 'published' | 'under_review'
  publications: [
    {
      title: 'SNN-PDE: Learning Dynamic PDEs from Data with Simplicial Neural Networks',
      authors: 'Choi J., Chen Y., Lee H., Kim H., Gel Y.',
      venue: 'AAAI 2024',
      acceptance: '23.75%',
      status: 'published',
      accentColor: '#3b82f6',
    },
    {
      title: 'Revisiting Link Prediction with the Dowker Complex',
      authors: 'Choi J., Chen Y., Frías J. Castillo J., Gel Y.',
      venue: 'PAKDD 2024',
      award: 'Best Paper — ASA Statistical Graphics',
      status: 'published',
      accentColor: '#f59e0b',
    },
    {
      title: 'Self-supervised Contrastive Learning for Wildfire Detection',
      authors: 'Choi J., LaHaye N., Chen Y., Lee H., Gel Y.',
      venue: 'Elsevier Book Chapter / GeoAI 2024',
      status: 'published',
      accentColor: '#10b981',
    },
    {
      title: 'MCR-LSTM: Market Condition-Recognized Approach for Cryptocurrency Trading',
      authors: 'Choi J., Choi Y.',
      venue: 'Financial Management Conference 2024 (Asia/Pacific)',
      status: 'published',
      accentColor: '#8b5cf6',
    },
    {
      title: 'Keep Your Boundaries: From Finite Elements to Simplicial Convolution',
      authors: 'Choi J., Chen Y., Xia K., Rondon I., Gel Y.',
      venue: 'Under Review',
      status: 'under_review',
      accentColor: '#6b7280',
    },
    {
      title: 'DKTM: Dynamic Keyword-based Topic Modeling for Lifelong Learning',
      authors: 'Choi J., Nguyen V.',
      venue: 'UTD Research Scholar Award',
      status: 'under_review',
      accentColor: '#6b7280',
    },
  ],

  // ── Experience ──────────────────────────────────────────────
  experience: [
    {
      role: 'JPL Visiting Student Research Program (JVSRP)',
      org: 'NASA Jet Propulsion Laboratory',
      period: 'Aug 2024 – Feb 2025',
      mentor: 'Kyo Lee',
      logo: '/images/nasa-logo.png',
      abbreviation: 'NASA',
      accentColor: '#3b82f6',
    },
    {
      role: 'Naval Research Enterprise Internship Program (NREIP)',
      org: 'Naval Postgraduate School',
      period: 'May – Jul 2024',
      advisor: 'Rowe Neil',
      logo: '/images/naval-logo.png',
      abbreviation: 'NPS',
      accentColor: '#1c47d3',
    },
    {
      role: 'Undergraduate Research Assistant',
      org: 'UTD — Human Language Technology Research Institute',
      period: 'Sep 2023 – May 2025',
      advisor: 'Vincent Ng',
      logo: '/images/utd-logo.png',
      abbreviation: 'UTD',
      accentColor: '#f97316',
    },
    {
      role: 'Analytics Software Engineering Intern',
      org: 'Nasdaq Inc',
      period: 'Jun – Aug 2022',
      logo: '/images/nasdaq-logo.png',
      abbreviation: 'NDAQ',
      accentColor: '#06b6d4',
    },
    {
      role: 'Backend Developer Intern',
      org: 'Quantit Inc',
      period: 'Mar – Jun 2021',
      logo: '/images/quantit-logo.png',
      abbreviation: 'QNTIT',
      accentColor: '#ec4899',
    },
  ],

  // ── Projects (Others section) ────────────────────────────────
  // Add/remove items freely — the layout auto-adjusts
  projects: [
    {
      name: '[Project 1]',
      description: '[Describe what this project does and why you built it]',
      tags: ['[Language]', '[Framework]'],
      link: '',
    },
    {
      name: '[Project 2]',
      description: '[Describe what this project does and why you built it]',
      tags: ['[Language]', '[Tool]'],
      link: '',
    },
  ],

  // ── Hobbies (Others section) ─────────────────────────────────
  // Add/remove items freely — the layout auto-adjusts
  hobbies: [
    {
      name: '[Hobby 1]',
      description: '[Brief description of this hobby]',
      icon: '🎯',
    },
    {
      name: '[Hobby 2]',
      description: '[Brief description of this hobby]',
      icon: '🎨',
    },
    {
      name: '[Hobby 3]',
      description: '[Brief description of this hobby]',
      icon: '📚',
    },
  ],

  // ── Where Am I Now ───────────────────────────────────────────
  currentLocation: {
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    affiliation: 'University of Southern California',
    department: 'Department of Computer Science',
    lab: '[Lab Name — e.g., Ruishan Liu Lab]',
    advisor: 'Prof. Ruishan Liu',
    status: 'Ph.D. Student (Year 1)',
    startYear: '2025',
  },
};
