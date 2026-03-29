// ============================================================
// CONTENT CONFIGURATION
// Edit this file to update all personal data on the site.
// No HTML files need to be touched to add projects/experience.
// ============================================================

export const content = {
  personal: {
    name: 'Atreyan Raman',
    titles: ['Data Scientist', 'ML Engineer', 'Full-Stack Engineer'],
    bio: 'I go where the problem is — whether that\'s a gradient-boosted model, a sensor pipeline, or a Kotlin codebase. I\'ve worked at airlines, a retail giant, and an IoT startup, and the thread connecting all of it is figuring out what the data is actually trying to say.',
    location: 'San Francisco, CA',
    email: 'hello@atreyan.dev',
    github: 'https://github.com/atreyanr',
    linkedin: 'https://linkedin.com/in/atreyan-raman',
    resumePdf: '/resume.pdf',
  },

  stats: [
    { value: 5,  suffix: '+', label: 'Companies & Clients' },
    { value: 2,  suffix: '+', label: 'Years Experience' },
    { value: 4,  suffix: '',  label: 'Industries Served' },
  ],

  skills: [
    { name: 'Python',          category: 'Data & ML',   proficiency: 0.95, tools: ['pandas', 'numpy', 'polars', 'FastAPI'] },
    { name: 'SQL',             category: 'Data & ML',   proficiency: 0.90, tools: ['PostgreSQL', 'BigQuery', 'dbt', 'Snowflake'] },
    { name: 'CatBoost',        category: 'Data & ML',   proficiency: 0.90, tools: ['optuna', 'cross-validation', 'feature importance'] },
    { name: 'SHAP',            category: 'Data & ML',   proficiency: 0.85, tools: ['TreeExplainer', 'summary_plot', 'force_plot'] },
    { name: 'scikit-learn',    category: 'Data & ML',   proficiency: 0.88, tools: ['Pipeline', 'GridSearchCV', 'cross_val_score'] },
    { name: 'React',           category: 'Full-Stack',  proficiency: 0.75, tools: ['Hooks', 'Context', 'Vite', 'TypeScript'] },
    { name: 'Kotlin',          category: 'Full-Stack',  proficiency: 0.70, tools: ['Android SDK', 'Lazy init', 'Coroutines'] },
    { name: '.NET',            category: 'Full-Stack',  proficiency: 0.70, tools: ['ASP.NET Core', 'REST APIs', 'C#'] },
    { name: 'Node-RED',        category: 'IoT & Data',  proficiency: 0.80, tools: ['Modbus TCP', 'MQTT', 'Flow design'] },
    { name: 'InfluxDB',        category: 'IoT & Data',  proficiency: 0.78, tools: ['Time-series storage', 'Flux', 'Telegraf'] },
    { name: 'Grafana',         category: 'IoT & Data',  proficiency: 0.80, tools: ['Dashboards', 'Alerting', 'InfluxDB datasource'] },
    { name: 'Data Pipelines',  category: 'IoT & Data',  proficiency: 0.82, tools: ['Sensor ingestion', 'ETL', 'Airflow'] },
  ],

  skillCategories: {
    'Data & ML':   '#FF6B35',
    'Full-Stack':  '#22D3A5',
    'IoT & Data':  '#60A5FA',
  },

  projects: [
    {
      title: 'Project Title',
      description: 'Short description of the project. What problem did it solve? What impact did it have?',
      tags: ['Python', 'CatBoost', 'SHAP'],
      link: '#',
      image: null as string | null,
      featured: true,
    },
  ],

  experience: [
    {
      company: 'Santech',
      role: 'Data Scientist & Software Engineer',
      start: 'Nov 2025',
      end: 'Present',
      logo: '/logos/santech.png',
      description: 'First data hire at an early-stage IoT startup — building the product, the pipeline, and sometimes packing the truck.',
      highlights: [
        'Building a full-stack dashboard (React + .NET + InfluxDB + Grafana) to turn raw vibration data into equipment health signals',
        'Owning the data pipeline end-to-end: Modbus TCP ingestion, Node-RED flows, time-series storage, AI-driven anomaly detection',
        'On-site when needed — coordinating installs, validating sensors, making sure the data that comes in actually means something',
      ],
    },
    {
      company: 'Walmart',
      role: 'Software Engineer — Contractor',
      start: 'Jun 2025',
      end: 'Aug 2025',
      logo: '/logos/walmart.svg',
      description: 'Embedded on the Glass platform team keeping the Walmart Android app running for tens of millions of users.',
      highlights: [
        'Refactored startup initialization from eager to lazy loading in Kotlin — a small change with a measurable footprint reduction at scale',
      ],
    },
    {
      company: 'KGS Technology Group',
      role: 'Data Engineering Consultant',
      start: 'Dec 2024',
      end: 'Jun 2025',
      logo: '/logos/kgs.png',
      description: 'Built the data layer for a manufacturing client putting sensors on the factory floor for the first time.',
      highlights: [
        'Designed ingestion pipelines to pull sensor telemetry off plant equipment and land it in structured tables for downstream use',
        'Bridged the gap between plant ops and data infrastructure — translating physical signals into queryable, reliable data',
      ],
    },
    {
      company: 'American Airlines',
      role: 'Digital Analytics Analyst',
      start: 'Feb 2024',
      end: 'Nov 2024',
      logo: '/logos/american-airlines.png',
      description: 'Promoted from intern to full-time on the Digital Analytics team, owning customer satisfaction intelligence for leadership.',
      highlights: [
        'Dug into NPS and CSAT data to find the real story — separating causation from correlation across loyalty tiers, routes, and promotions',
        'Turned ambiguous score drops into concrete narratives that shaped how executives prioritized CX investments',
      ],
    },
    {
      company: 'American Airlines',
      role: 'Data Science Intern',
      start: 'Sep 2023',
      end: 'Dec 2023',
      logo: '/logos/american-airlines.png',
      description: 'Started in the Operations Research & Advanced Analytics group, where the work converted into a full-time offer.',
      highlights: [
        'Built a CatBoost model to predict Likelihood to Recommend scores and connect them to business KPIs',
        'Used SHAP to explain what actually drives customer loyalty — and tuned the model output to align with how the business thinks, not just how it scores',
      ],
    },
  ],
} as const;
