import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  postgres,
  git,
  python,
  docker,
  oauth,
  meta,
  aicore,
  warwick,
  stolaves,
  heat,
  azure_monitor,
  tripguide,
  restapi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Technologies",
    icon: web,
  },
  {
    title: "Tools & Utilities",
    icon: mobile,
  },
  {
    title: "Back-End Technologies",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    serviceGroup: "Front-End Technologies"
  },
  {
    name: "CSS 3",
    icon: css,
    serviceGroup: "Front-End Technologies"
  },
  {
    name: "JavaScript",
    icon: javascript,
    serviceGroup: "Front-End Technologies"
  },
  {
    name: "React JS",
    icon: reactjs,
    serviceGroup: "Front-End Technologies"
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    serviceGroup: "Front-End Technologies"
  },
  {
    name: "python",
    icon: python,
    serviceGroup: "Back-End Technologies"
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    serviceGroup: "Back-End Technologies"
  },
  {
    name: "Node JS",
    icon: nodejs,
    serviceGroup: "Back-End Technologies"
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    serviceGroup: "Front-End Technologies"
  },
  {
    name: "TypeScript",
    icon: typescript,
    serviceGroup: "Front-End Technologies"
  },
  {
    name: "RESTful API",
    icon: restapi,
    serviceGroup: "Back-End Technologies"
  },
  {
    name: "git",
    icon: git,
    serviceGroup: "Tools & Utilities"
  },
  {
    name: "docker",
    icon: docker,
    serviceGroup: "Tools & Utilities"
  },
  {
    name: "OAuth 2.0",
    icon: oauth,
    serviceGroup: "Tools & Utilities"
  },
];

const experiences = [
  {
    title: "Data Engineering",
    company_name: "AiCore",
    icon: aicore,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Data Processing, Wrangling, and Transformation (Formats: JSON, CSV, XLSX, YAML; Python Libraries: Pandas, Numpy, Pyspark; ETL & ELT, Apache Spark, Kafka, AWS S3)",
      "Web APIs and SQL Databases (FastAPI routing, SQL: CRUD, JOINs, CTEs; Python Libraries: psycopg2, SQLAlchemy)",
      "Cloud and Big Data Engineering (AWS Services: IAM, CLI, S3, EC2, RDS, VPC, API Gateway, MWAA; Big Data: Data Pipelines, Data Ingestion, Batch vs. Real-Time Processing, Enterprise Data Warehouses; Kafka Tools: Kafka, Kafka-Python)",
      "Data Orchestration and Advanced Cloud Platforms (Apache Airflow, MSK, MSK Connect, Databricks, Kinesis)"
    ],
  },
  {
    title: "Electronic Engineer",
    company_name: "University of Warwick",
    icon: warwick,
    iconBg: "#E6DEDD",
    date: "September 2019 - October 2022",
    points: [
      "Dissertation: Designed 'sensorless' control methods leveraging real-time system modeling, rapid control prototyping, and Artificial Neural Networks (ANN) in MATLAB. ",
      "Computer Architecture: Deepened knowledge in hardware systems, using C for low-level operations.",
      "Digital Systems Design: Explored digital system development with FPGA for real-time prototyping.",
      "Signal Processing: Applied MATLAB for signal analysis, modification, and visualization techniques.",
      "EIBF Startup Winners:  Spearheaded SALUTEM, conceptualising a Bluetooth-controlled ingestible capsule. Demonstrated skills in bioengineering, financial planning, and regulatory compliance.",
    ],
  },
  {
    title: "Secondary School",
    company_name: "St Olaves Grammar School",
    icon: stolaves,
    iconBg: "#383E56",
    date: "Sept 2012 - July 2019",
    points: [
      "A Levels [AAB]: Maths, Physics, Biology",
      "As Levels [A]: Economics",
      "GSCEs [12 A*-A grades]: including A*s in Maths, English, Physics, Biology and Chemistry",
      "Societies: Physics Society, Cross-Country, Basketball, Tennis",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "H.EAT Delivery App",
    points: [
      "FastAPI Backend: Utilize FastAPI for efficient, scalable APIs with auto-generated documentation, data validation, and async handling.",
      "Pydantic Data Validation: Ensure data accuracy and format; Pydantic offers validation and settings management via Python annotations.",
      "OAuth2 & JWT Authentication: Securely authenticate with OAuth2, JWT tokens, and password hashing; safeguard user data and endpoints.",
      "PostgreSQL Integration: Leverage PostgreSQL for robust, scalable relational data storage with powerful querying.",
      "Alembic for Database Migrations: Seamlessly manage and upgrade database schemas; autogenerate migration scripts with Alembic.",
      "React Frontend: Use React's component-based design for dynamic and smooth UIs.",
      "SCSS Styling: Craft efficient styles with SCSS, benefiting from its variables, nesting, and mixins.",
    ],
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: heat,
    website_link: "https://www.google.com",
    source_code_link: "https://github.com/mishamcfeat/FOOD_DELIVERY_APP",
  },
  {
    name: "Azure VM Metrics",
    points: [
      "Monitored Azure VM: Successfully monitored and visualized Azure Virtual Machine metrics using Python.",
      "Established Essentials: Set up an Azure account, used Python (3.6+), managed an Azure VM, and secured SSH access.",
      "Created VM: Initiated a Linux VM on Azure and implemented SSH key authentication for enhanced security.",
      "Achieved Guest-Level Monitoring: Integrated Azure Monitor & diagnostics extensions; activated 'Basic Metrics'.",
      "Set Up Python on VM: Connected using SSH, installed Python 2, and integrated the azure-monitor library.",
      "Configured Azure Monitor: Navigated through the Azure portal to 'Monitor'; added vital metrics such as 'Percentage CPU' and 'Memory'.",
      "Fetched Metrics: Utilized Python along with libraries like azure-identity, azure-monitor-query, pandas, and matplotlib to extract and archive metrics.",
      "Conducted Data Analysis: Processed metric data using Pandas and visualized the results with matplotlib.",
    ],
    tags: [
      {
        name: "Azure",
        color: "blue-text-gradient",
      },
      {
        name: "Python SDK",
        color: "pink-text-gradient",
      },
      {
        name: "Python Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: azure_monitor,
    website_link: "https://www.google.com",
    source_code_link: "https://github.com/mishamcfeat/Azure-Monitor-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };