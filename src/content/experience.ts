export type Experience = {
  kind: "work" | "internship" | "education" | "activity";
  role: string;
  org: string;
  location?: string;
  period: string;
  summary: string;
  bullets?: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    kind: "work",
    role: "Software Development Intern",
    org: "MPOnline Limited",
    location: "Bhopal, MP",
    period: "Nov 2025 — Present",
    summary:
      "Building RESTful services for AI chatbot and grievance-management systems used across government portals.",
    bullets: [
      "Developed FastAPI endpoints powering an AI chatbot and grievance workflows.",
      "Implemented document processing, text chunking, and knowledge-base creation for retrieval-augmented query handling.",
      "Integrated SQL databases, validated endpoints with Postman, and assisted in frontend testing and deployment.",
    ],
    stack: ["FastAPI", "Python", "SQL", "Postman", "NLP"],
  },
  {
    kind: "internship",
    role: "AI Intern — TechSaksham",
    org: "AICTE · AI: Transformative Learning",
    period: "Jan 2025 — Feb 2025",
    summary:
      "Built ML-based disease prediction systems for early detection of diabetes, heart disease, and Parkinson's.",
    stack: ["Machine Learning", "Streamlit", "Scikit-learn"],
  },
  {
    kind: "education",
    role: "B.Tech in Computer Science & Engineering",
    org: "Rewa Engineering College",
    location: "Madhya Pradesh",
    period: "2021 — 2025",
    summary:
      "Coursework across data structures, algorithms, DBMS, operating systems, and computer networks. Active in coding events and technical clubs.",
  },
  {
    kind: "activity",
    role: "E-Cell Member · Volleyball",
    org: "Rewa Engineering College",
    period: "2021 — 2025",
    summary:
      "Organized entrepreneurship workshops with the E-Cell. Represented the college in inter-college volleyball tournaments.",
  },
];

export const certifications = [
  "Mastering Data Structures & Algorithms — Udemy",
  "Full Stack Web Development — CodeHelp",
  "C++ Programming Foundation — GeeksforGeeks",
  "Python Pro Bootcamp (100 Days of Code) — Udemy",
];
