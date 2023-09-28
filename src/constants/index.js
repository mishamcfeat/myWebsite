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
  jobit,
  tripguide,
  restapi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
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
      "Data engineering (SQL, web scraping, AWS S3, AWS RDS)",
      "Data science (Data cleaning, preprocessing & visualisation, A/B testing, feature engineering, statistical modelling)",
      "Machine learning (machine learning model selection and implementation, recommendation systems, computer vision)",
      "Machine learning engineering (AWS EC2, AWS SageMaker, building APIs, Docker, Kubernetes)",
      "MLOps (feature stores, CI/CD/CT, AWS CloudFormation, Prometheus, Grafana)",
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
      "Backend with FastAPI: Leverage the power of FastAPI for building efficient and scalable APIs. Benefit from automatic interactive API documentation, data validation, and asynchronous request handling.",
      "Data Validation with Pydantic: Ensure that the data your application processes are accurate and in the correct format. Pydantic's data validation and settings management using Python type annotations guarantee data integrity.",
      "Database Migrations with Alembic: Maintain and upgrade your database schema seamlessly. Alembic provides the ability to autogenerate migration scripts and manage version control.",
      "OAuth2 & JWT Authentication: Implement a secure authentication system using OAuth2 with Password (and hashing), including JWT tokens. Protect your user's data and provide secure endpoints for your services.",
      "PostgreSQL Integration: Use the power of PostgreSQL for robust, scalable, and relational data storage. Ensure data integrity and benefit from powerful query capabilities.",
      "Responsive Frontend with React: Harness the React library's component-based architecture for building user interfaces. Ensure a dynamic, efficient, and smooth user experience.",
      "Styling with SCSS: Utilize SCSS to write clean, maintainable, and efficient styles. Benefit from variables, nesting, mixins, and more.",
      "Interactivity with JavaScript & JSX: Implement rich interactive UI components and enhance user interactions using the blend of JavaScript and JSX.",
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
    source_code_link: "https://github.com/mishamcfeat/FOOD_DELIVERY_APP",
  },
  {
    name: "Azure VM Metrics",
    points: [
      "Set up an Azure Virtual Machine with SSH key authentication for secure access.",
      "Enable guest-level monitoring on the VM using Azure Monitor and diagnostics extensions.",
      "Connect to the VM via SSH, and set up the required Python environment and libraries.",
      "Fetch desired VM metrics like 'Percentage CPU', 'Available Memory Bytes', and disk operations using a Python script.",
      "Process, analyze, and visualize the metric data with Pandas and Matplotlib in Python.",
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
    image: jobit,
    source_code_link: "https://github.com/mishamcfeat/Azure-Monitor-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };