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

} as const;
