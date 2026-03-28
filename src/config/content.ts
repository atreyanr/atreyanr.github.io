// ============================================================
// CONTENT CONFIGURATION
// Edit this file to update all personal data on the site.
// No HTML files need to be touched to add projects/experience.
// ============================================================

export const content = {
  personal: {
    name: 'Atreyan Raman',
    titles: ['Data Scientist', 'ML Engineer', 'Optimization Specialist'],
    bio: 'Data Scientist specializing in machine learning, combinatorial optimization, and AI systems. I build models that go to production and solutions that move the needle on real business problems.',
    location: 'San Francisco, CA',
    email: '',
    github: '',
    linkedin: '',
    resumePdf: '/resume.pdf',
  },

  stats: [
    { value: 10, suffix: '+', label: 'Projects Shipped' },
    { value: 5,  suffix: '+', label: 'Models in Production' },
    { value: 3,  suffix: '+', label: 'Years Experience' },
  ],

  skills: [
    { name: 'Python',                    category: 'Data & SQL',    proficiency: 0.95, tools: ['pandas', 'numpy', 'polars', 'FastAPI'] },
    { name: 'SQL',                       category: 'Data & SQL',    proficiency: 0.90, tools: ['PostgreSQL', 'BigQuery', 'dbt', 'Snowflake'] },
    { name: 'pandas',                    category: 'Data & SQL',    proficiency: 0.95, tools: ['GroupBy', 'Merge', 'Pivot', 'Time Series'] },
    { name: 'Data Pipelines',            category: 'Data & SQL',    proficiency: 0.80, tools: ['Airflow', 'dbt', 'Spark', 'Prefect'] },
    { name: 'CatBoost',                  category: 'ML Models',     proficiency: 0.90, tools: ['optuna', 'cross-validation', 'feature importance'] },
    { name: 'SHAP',                      category: 'ML Models',     proficiency: 0.85, tools: ['TreeExplainer', 'summary_plot', 'force_plot'] },
    { name: 'scikit-learn',              category: 'ML Models',     proficiency: 0.90, tools: ['Pipeline', 'GridSearchCV', 'cross_val_score'] },
    { name: 'Mixed Integer Programming', category: 'Optimization',  proficiency: 0.85, tools: ['PuLP', 'Gurobi', 'OR-Tools', 'CPLEX'] },
    { name: 'PuLP',                      category: 'Optimization',  proficiency: 0.85, tools: ['LpProblem', 'LpVariable', 'CBC solver'] },
    { name: 'RAG Pipelines',             category: 'NLP / RAG',     proficiency: 0.80, tools: ['LangChain', 'LlamaIndex', 'FAISS'] },
    { name: 'LangChain',                 category: 'NLP / RAG',     proficiency: 0.75, tools: ['LCEL', 'Agents', 'Retrieval chains'] },
    { name: 'Vector Databases',          category: 'NLP / RAG',     proficiency: 0.75, tools: ['Chroma', 'Pinecone', 'Weaviate', 'pgvector'] },
  ],

  skillCategories: {
    'ML Models':    '#FF6B35',
    'Optimization': '#22D3A5',
    'NLP / RAG':    '#A78BFA',
    'Data & SQL':   '#60A5FA',
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
      company: 'Company Name',
      role: 'Data Scientist',
      start: 'Jan 2023',
      end: 'Present',
      description: 'Brief description of the role and team context.',
      highlights: [
        'Built and deployed an ML model that improved X by Y%',
        'Led data science workstream for Z initiative',
        'Optimized supply chain allocation using MIP, reducing costs by $Xk',
      ],
    },
  ],
} as const;
