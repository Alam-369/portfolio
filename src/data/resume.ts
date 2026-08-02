export const personal = {
  name: "Tasnim Alam Katha",
  title: "Senior .NET Developer",
  subtitle: "Full Stack / Backend Engineer",
  location: "Dhaka, Bangladesh",
  email: "tasnimalam064@gmail.com",
  phone: "+880 1756 974047",
  linkedin: "https://linkedin.com",
  summary:
    "Senior .NET Developer with 4+ years building scalable, high-performance web systems using .NET Core, ASP.NET, and microservice architectures. Proven track record migrating legacy platforms to modern .NET, designing asynchronous messaging microservices, and delivering backend APIs for enterprise applications serving millions of users. Strong in C#, SQL, and backend engineering, with frontend proficiency in jQuery and React. Promoted twice to Senior Software Engineer (L3) with yearly advancement.",
};

export const skillGroups = [
  {
    category: "Languages",
    skills: ["C#", "SQL", "JavaScript", "Go", "Visual Basic", "HTML", "CSS"],
  },
  {
    category: "Backend",
    skills: [
      ".NET 6 / .NET Core",
      "ASP.NET MVC",
      ".NET Framework",
      "RESTful APIs",
      "OpenAPI",
      "BFF Pattern",
    ],
  },
  {
    category: "Frontend",
    skills: ["jQuery", "React.js", "Angular"],
  },
  {
    category: "Data Access",
    skills: ["Dapper", "Entity Framework"],
  },
  {
    category: "Databases",
    skills: ["Microsoft SQL Server", "PostgreSQL", "Azure Cosmos DB", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Azure Services", "Docker", "Azure DevOps", "Git", "DataDog"],
  },
  {
    category: "Architectures",
    skills: ["Microservices", "Monolithic", "Web API"],
  },
  {
    category: "Tools & Testing",
    skills: [
      "Visual Studio",
      "VS Code",
      "SSMS",
      "SSRS",
      "Jira",
      "Postman",
      "Source Tree",
      "Unit Testing",
    ],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer (L3)",
    company: "Enosis Solutions",
    location: "Gulshan-1, Dhaka, Bangladesh",
    period: "Aug 2021 – Present",
    highlights: [
      "Promoted from Software Engineer to Senior Software Engineer (L3) with yearly level advancement.",
      "Delivered three enterprise platforms (monolithic, microservice, and API-based) for clients providing service to millions.",
      "Migrated a large-scale enterprise platform — used by ~1,200 corporate offices and serving thousands of end users who in turn provide services to millions — from legacy .NET Framework to .NET 6 with an asynchronous architecture, improving application performance by ~32%.",
      "Designed and built an automated messaging microservice integrating Twilio, processing 10,000 messages per 5-minute trigger using multiple queues, retry thresholds, and pre-send validation to minimize delivery failures.",
      "Analyzed new system requirements and designed technical solutions to meet business needs.",
      "Architected backend APIs consumed by internal admin and dashboard UIs through a Backend-for-Frontend (BFF) layer, enabling clean separation and reuse across clients.",
      "Built and integrated RESTful APIs across both monolithic and microservice-based systems.",
      "Developed 15–20 SSRS reports to support business and operational reporting needs.",
      "Designed and managed relational and NoSQL data layers using MSSQL and Azure Cosmos DB with Dapper and Entity Framework.",
      "Implemented application logging to streamline debugging and exception troubleshooting.",
      "Mentored a junior engineer and collaborated within a 3–5 member Agile Scrum team; partnered with clients to analyze requirements and visualize technical implementations.",
    ],
  },
];

export const projects = [
  {
    name: "TravelBot — NLP Travel Assistant",
    period: "Jul 2020 – Jul 2021",
    description:
      "Research initiative to identify the most effective NLP model for a travel-domain dataset collected from Facebook. Built and trained a TensorFlow model achieving 64% accuracy, integrated into a conversational chatbot for human-like responses.",
    tags: ["TensorFlow", "NLP", "Python", "Chatbot"],
  },
  {
    name: "E-Voting System Using Blockchain",
    period: "Jul 2019 – Dec 2019",
    description:
      "Developed a secure voting system using Node.js and Hyperledger Fabric, leveraging decentralized data storage and smart contracts (chaincode) for tamper-resistant management of voting data.",
    tags: ["Node.js", "Hyperledger Fabric", "Blockchain", "Smart Contracts"],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "Shahjalal University of Science and Technology (SUST), Sylhet, Bangladesh",
    period: "Feb 2017 – Jul 2021",
  },
];

export const languages = [
  { name: "Bangla", level: "Native" },
  { name: "English", level: "Intermediate" },
];
