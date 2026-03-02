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
  // accentColor: string;
}

export interface Experience {
  role: string;
  org: string;
  period: string;
  mentor?: string;
  advisor?: string;
  logo: string;
  abbreviation: string; // fallback if image fails
  // accentColor: string;
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

  bio: 'I am a Ph.D. student in Computer Science at the University of Southern California. My research focuses on geometric deep learning, graph neural networks, and physics-informed machine learning, with applications in computational biology.',

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
      title: 'MemeInterpret: Towards an All-in-One Dataset for Meme Understanding',
      authors: 'Park J., Nguyen K., Park J., Kim J., Lee J., Choi J., et al.',
      venue: 'EMNLP 2025 Findings',
      status: 'published',
      link: 'https://aclanthology.org/2025.findings-emnlp.871/', // Add paper URL here
    },
    {
      title: 'SNN-PDE: Learning Dynamic PDEs from Data with Simplicial Neural Networks',
      authors: 'Choi J., Chen Y., Lee H., Kim H., Gel Y.',
      venue: 'AAAI 2024',
      acceptance: '23.75%',
      status: 'published',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/29038', // Add paper URL here
    },
    {
      title: 'Revisiting Link Prediction with the Dowker Complex',
      authors: 'Choi J., Chen Y., Frías J. Castillo J., Gel Y.',
      venue: 'PAKDD 2024',
      award: 'Best Paper — ASA Statistical Graphics 2024',
      status: 'published',
      link: 'https://link.springer.com/chapter/10.1007/978-981-97-2253-2_33', // Add paper URL here
    },
    {
      title: 'Self-supervised Contrastive Learning for Wildfire Detection',
      authors: 'Choi J., LaHaye N., Chen Y., Lee H., Gel Y.',
      venue: 'Elsevier Book Chapter / GeoAI 2024',
      status: 'published',
      link: 'https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780443190773000134', // Add paper URL here
    },

    {
      title: 'Keep Your Boundaries: From Finite Elements to Simplicial Convolution',
      authors: 'Choi J., Chen Y., Xia K., Rondon I., Gel Y.',
      venue: 'Under Review',
      status: 'under_review',
      link: '', // Add paper URL here
    },
    {
      title: 'DKTM: Dynamic Keyword-based Topic Modeling for Lifelong Learning',
      authors: 'Choi J., Nguyen V.',
      venue: 'UTD Research Scholar Award',
      status: 'under_review',
      link: '', // Add paper URL here
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
    },
    {
      role: 'Naval Research Enterprise Internship Program (NREIP)',
      org: 'Naval Postgraduate School',
      period: 'May – Jul 2024',
      advisor: 'Rowe Neil',
      logo: '/images/naval-logo.png',
      abbreviation: 'NPS',
    },
    {
      role: 'Undergraduate Research Assistant',
      org: 'UTD — Human Language Technology Research Institute',
      period: 'Sep 2023 – May 2025',
      advisor: 'Vincent Ng',
      logo: '/images/utd-logo.png',
      abbreviation: 'UTD',
    },
    {
      role: 'Analytics Software Engineering Intern',
      org: 'Nasdaq Inc',
      period: 'Jun – Aug 2022',
      logo: '/images/nasdaq-logo.png',
      abbreviation: 'NDAQ',
    },
    {
      role: 'Backend Developer Intern',
      org: 'Quantit Inc',
      period: 'Mar – Jun 2021',
      logo: '/images/quantit-logo.png',
      abbreviation: 'QNTIT',
    },
  ],

  // ── Projects (Others section) ────────────────────────────────
  // Add/remove items freely — the layout auto-adjusts
  projects: [
    {
      name: 'arXiv Paper PDF Renamer',
      description: 'A Chrome extension that automatically renames arXiv paper PDFs to include the title and author information.',
      tags: ['TypeScript', 'Chrome Extension'],
      link: 'https://chromewebstore.google.com/detail/arxiv-paper-pdf-renamer/mjceeaifcoknbgoblkanebjklknnondl',
    },
    // {
    //   name: '[Project 2]',
    //   description: '[Describe what this project does and why you built it]',
    //   tags: ['[Language]', '[Tool]'],
    //   link: '',
    // },

  ],

  // ── Hobbies (Others section) ─────────────────────────────────
  // Add/remove items freely — the layout auto-adjusts
  hobbies: [
    {
      name: 'USC Overwatch Team Varsity',
      description: 'Flex dps player on the Overwatch team at USC, since 2025.',
      icon: '🎮',
    },
    {
      name: 'Badminton',
      description: 'Played badminton since 2017, competing in various local and regional tournaments.',
      icon: '🏸',
    },
    // {
    //   name: '[Hobby 3]',
    //   description: '[Brief description of this hobby]',
    //   icon: '📚',
    // },
  ],

  // ── Where Am I Now ───────────────────────────────────────────
  currentLocation: {
    city: 'Los Angeles',
    state: 'California',
    country: 'USA',
    affiliation: 'University of Southern California',
    department: 'Department of Computer Science',
    lab: 'Laboratory for Machine Learning, Health and Biomedicine',
    advisor: 'Prof. Ruishan Liu',
    status: 'Ph.D. Student (Year 1)',
    startYear: '2025',
  },
};
