export const careerNodes = [
  {
    id: 'current',
    title: 'Current Position',
    description: 'Your current role based on skills and experience',
    timeframe: 'Now',
    salary: 'Current',
    skills: ['Problem Solving', 'Communication', 'Adaptability'],
    x: 80,
    y: 280,
    level: 0,
    type: 'current' as const,
    difficulty: 'easy' as const,
    growth: 0
  },
  {
    id: 'cloud-eng',
    title: 'Cloud Engineer',
    description: 'Leverage AWS certifications for cloud infrastructure role',
    timeframe: '3-6 months',
    salary: 'R75k-R95k',
    skills: ['AWS', 'DevOps', 'Linux', 'Docker'],
    x: 220,
    y: 180,
    level: 1,
    type: 'future' as const,
    difficulty: 'medium' as const,
    growth: 85
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Apply analytical skills to business intelligence',
    timeframe: '4-8 months',
    salary: 'R60k-R80k',
    skills: ['SQL', 'Python', 'Tableau', 'Statistics'],
    x: 240,
    y: 240,
    level: 1,
    type: 'future' as const,
    difficulty: 'easy' as const,
    growth: 75
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Lead product strategy and development',
    timeframe: '12-18 months',
    salary: 'R90k-R120k',
    skills: ['Product Strategy', 'Stakeholder Management', 'Analytics', 'Leadership'],
    x: 400,
    y: 300,
    level: 2,
    type: 'future' as const,
    difficulty: 'medium' as const,
    growth: 85
  },
  {
    id: 'tech-lead',
    title: 'Technical Lead',
    description: 'Lead technical teams and architecture decisions',
    timeframe: '18-24 months',
    salary: 'R110k-R140k',
    skills: ['Leadership', 'Architecture', 'Team Management', 'Technical Vision'],
    x: 420,
    y: 160,
    level: 2,
    type: 'future' as const,
    difficulty: 'hard' as const,
    growth: 95
  }
];

export const careerEdges = [
  { id: 'e1', source: 'current', target: 'cloud-eng', animated: true },
  { id: 'e2', source: 'current', target: 'data-analyst', animated: true },
  { id: 'e3', source: 'cloud-eng', target: 'tech-lead', animated: true },
  { id: 'e4', source: 'data-analyst', target: 'product-manager', animated: true },
  { id: 'e5', source: 'product-manager', target: 'tech-lead', animated: false }
];

export const careerPathContent = [
  {
    path: "Cloud Engineer",
    description: "Based on your technical foundation and problem-solving skills, this path leads to advanced cloud infrastructure roles.",
    steps: [
      "Master AWS services and cloud architecture",
      "Learn DevOps practices and automation",
      "Gain experience with containerization",
      "Develop infrastructure as code skills"
    ],
  },
  {
    path: "Data Analyst",
    description: "Your analytical skills make you ideal for business intelligence and data-driven decision making roles.",
    steps: [
      "Master SQL and database management",
      "Learn data visualization tools",
      "Develop statistical analysis skills",
      "Practice business intelligence reporting"
    ],
  },
  {
    path: "Product Manager",
    description: "Your technical background combined with business acumen makes you ideal for product strategy roles.",
    steps: [
      "Learn product strategy frameworks",
      "Develop stakeholder management skills",
      "Practice data-driven decision making",
      "Build roadmap planning expertise"
    ],
  },
  {
    path: "Technical Lead",
    description: "Leverage your technical expertise while developing leadership skills to guide engineering teams.",
    steps: [
      "Develop team leadership skills",
      "Master system architecture design",
      "Learn project management techniques",
      "Build mentoring and coaching abilities"
    ],
  },
];