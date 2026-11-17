export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
  phone: string;
}

export interface Profile {
  name: string;
  role: string;
  title: string;
  subHeadline: string;
  location: string;
  email: string;
  phone: string;
  links: SocialLinks;
}

export interface Bio {
  headline: string;
  summary: string;
  fullBio: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  clients: string[];
  via: string;
  award?: {
    title: string;
    period: string;
    description: string;
  };
  highlights: string[];
  skillsUsed: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'GenAI/LLM' | 'Data Analytics';
  domainTag: string;
  subtitle?: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

export interface SkillsData {
  genAIAndLLM: string[];
  dataAnalysisAndBI: string[];
  backendEngineering: string[];
  toolsAndDevOps: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  score: {
    type: 'CGPA' | 'Percentage';
    value: string;
  };
  highlights?: string[];
}

export const profile: Profile = {
  name: 'Nirudi Sai Karthikeya',
  role: 'AI Engineer | LLM & RAG Specialist',
  title: 'Nirudi Sai Karthikeya',
  subHeadline: 'AI Engineer | LLM & RAG Specialist',
  location: 'Sangareddy, Telangana, India',
  email: 'nirudisaikarthikeya@gmail.com',
  phone: '+91 9391108257',
  links: {
    linkedin: 'https://linkedin.com/in/sai-karthikeya-nirudi-a80030248',
    github: 'https://github.com/Karthiksai-1',
    email: 'mailto:nirudisaikarthikeya@gmail.com',
    phone: 'tel:+919391108257'
  }
};

export const bio: Bio = {
  headline: 'Applied AI & Enterprise Data',
  summary:
    'Applied AI Engineer with an enterprise data background delivering analytics for Fortune 500 clients (GAP, FedEx, SC Johnson via Accenture). I specialize in engineering production RAG systems, automated LLM evaluation harnesses, and robust Python backends.',
  fullBio:
    'Applied AI Engineer with an enterprise data background delivering analytics for Fortune 500 clients (GAP, FedEx, SC Johnson via Accenture). I specialize in engineering production RAG systems, automated LLM evaluation harnesses, and robust Python backends.',
  highlights: [
    'Maintained enterprise asset records in ServiceNow and CMDB, ensuring data integrity and audit readiness across global client environments.',
    'Engineered SQL queries to reconcile asset registers across cross-table feeds, resolving data anomalies and foreign-key mismatches.',
    'Built and deployed production Power BI dashboards to Power BI Service for executive SLA tracking.'
  ]
};

export const proofMetrics = [
  { value: '1+ Yr', label: 'Enterprise ITAM & SQL' },
  { value: '95%', label: 'RAG Citation Accuracy' },
  { value: '1.6K+', label: 'Enterprise Assets Audited' },
  { value: "Q1 '25", label: 'Certificate of Excellence' }
];

export const experience: ExperienceItem[] = [
  {
    id: 'proteam-advisory-solutions',
    role: 'Hardware Asset Management Consultant',
    company: 'Proteam Advisory Solutions',
    location: 'Hyderabad, India',
    startDate: '07/2024',
    endDate: '06/2025',
    clients: ['GAP', 'FedEx', 'SC Johnson via Accenture'],
    via: 'Accenture',
    award: {
      title: 'Q1 2025 Certificate of Excellence',
      period: 'Q1 2025',
      description: 'Awarded for outstanding data accuracy, audit readiness, and SLA adherence across enterprise client deliverables.'
    },
    highlights: [
      'Maintained enterprise asset records in ServiceNow and CMDB, ensuring data integrity and audit readiness across global client environments.',
      'Engineered SQL queries to reconcile asset registers across cross-table feeds, resolving data anomalies and foreign-key mismatches.',
      'Built and deployed production Power BI dashboards to Power BI Service for executive SLA tracking.'
    ],
    skillsUsed: [
      'SQL',
      'Power BI & DAX',
      'ServiceNow CMDB',
      'Data Reconciliation',
      'ITAM'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'rag-document-qa-assistant',
    title: 'RAG Document Q&A Assistant',
    category: 'GenAI/LLM',
    domainTag: 'GenAI',
    description:
      'Context-aware retrieval engine enabling semantic search across enterprise PDFs with source passage citations at 95% accuracy. Built with LangChain, FAISS vector search, and FastAPI endpoints.',
    techStack: ['Python', 'LangChain', 'FAISS', 'FastAPI'],
    githubUrl: 'https://github.com/Karthiksai-1',
    liveDemoUrl: 'https://rag-document-qa-assistant.streamlit.app',
    caseStudyUrl: '/projects/rag-document-assistant',
    featured: true
  },
  {
    id: 'llm-response-testing-framework',
    title: 'LLM Response Testing Framework',
    category: 'GenAI/LLM',
    domainTag: 'GenAI',
    description:
      'Automated prompt evaluation test suite validating semantic correctness, JSON schema compliance, and format regressions across model iterations, reducing regressions by 25%.',
    techStack: ['Python', 'Pytest', 'LLM APIs', 'Prompt Engineering'],
    githubUrl: 'https://github.com/Karthiksai-1',
    caseStudyUrl: '/projects/llm-response-testing-framework',
    featured: true
  },
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction',
    category: 'GenAI/LLM',
    domainTag: 'GenAI',
    description:
      'End-to-end predictive pipeline and explainability service comparing Logistic Regression, Random Forest, and XGBoost with SHAP interpretations, served via FastAPI in Docker.',
    techStack: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'FastAPI'],
    githubUrl: 'https://github.com/Karthiksai-1',
    caseStudyUrl: '/projects/customer-churn-prediction',
    featured: false
  },
  {
    id: 'it-asset-reconciliation-audit-analytics',
    title: 'IT Asset Reconciliation & Audit Analytics',
    category: 'Data Analytics',
    domainTag: 'Analytics',
    description:
      'Enterprise reconciliation engine modeling 1,600 assets in SQLite against discovery feeds, identifying an 89.1% match rate (against 95% target) and delivered via a 4-page Power BI audit scorecard.',
    techStack: ['SQL', 'Python', 'Power BI', 'DAX', 'SQLite'],
    githubUrl: 'https://github.com/Karthiksai-1',
    caseStudyUrl: '/projects/it-asset-reconciliation',
    featured: true
  },
  {
    id: 'customer-360-retention-analytics',
    title: 'Customer 360 & Retention Analytics',
    category: 'Data Analytics',
    domainTag: 'Analytics',
    description:
      'E-commerce customer analytics suite built with SQL window functions and RFM segmentation, tracking lifetime value, repeat purchases, and cohort retention across a 3-page Power BI report.',
    techStack: ['SQL', 'Power BI', 'DAX', 'RFM Analysis'],
    githubUrl: 'https://github.com/Karthiksai-1',
    caseStudyUrl: '/projects/customer-360-retention',
    featured: false
  },
  {
    id: 'supply-chain-analytics-data-quality',
    title: 'Supply Chain Analytics & Automated Data Quality',
    category: 'Data Analytics',
    domainTag: 'Analytics',
    description:
      'Architected a star-schema data warehouse analyzing shipping delay risks and revenue impact in Power BI, backed by an automated Python/SQL data quality pipeline running on GitHub Actions.',
    techStack: ['SQL', 'Power BI', 'DAX', 'Python', 'GitHub Actions'],
    githubUrl: 'https://github.com/Karthiksai-1',
    caseStudyUrl: '/projects/supply-chain-data-quality',
    featured: true
  }
];

export const skillsData: SkillsData = {
  genAIAndLLM: [
    'RAG Architectures',
    'Vector Search (FAISS)',
    'LangChain',
    'LLM APIs (OpenAI, Anthropic)',
    'Prompt Engineering',
    'Evaluation & Testing',
    'SHAP Interpretability'
  ],
  dataAnalysisAndBI: [
    'SQL (CTEs, Window Functions)',
    'Power BI & DAX',
    'Data Reconciliation',
    'Star Schema Modeling',
    'RFM & Cohort Analysis',
    'Executive KPI Dashboards'
  ],
  backendEngineering: [
    'Python',
    'FastAPI',
    'Pandas & NumPy',
    'REST APIs',
    'SQLite',
    'Docker',
    'Streamlit'
  ],
  toolsAndDevOps: [
    'Git & GitHub',
    'GitHub Actions (CI/CD)',
    'ServiceNow & CMDB',
    'Hardware Asset Management (ITAM)',
    'Pytest'
  ]
};

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'B.V. Raju Institute of Technology (BVRIT)',
    location: 'Narsapur, India',
    startDate: '2020',
    endDate: '2024',
    score: {
      type: 'CGPA',
      value: '8.50'
    },
    highlights: [
      'Coursework in Data Structures, Algorithms, Database Systems, Machine Learning, and Software Architecture.'
    ]
  }
];

export default {
  profile,
  bio,
  proofMetrics,
  experience,
  projects,
  skillsData,
  education
};
