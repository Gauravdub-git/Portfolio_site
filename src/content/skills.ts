export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "C++", "JavaScript", "TypeScript", "C"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "Node.js", "Express", "REST APIs", "JWT", "bcrypt"],
  },
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Vite", "HTML", "CSS"],
  },
  {
    title: "AI / ML",
    items: [
      "TensorFlow",
      "Scikit-learn",
      "CNN",
      "NLP",
      "RAG",
      "LangChain",
      "Vector Search",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "SQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Docker", "Linux", "Postman", "AWS", "VS Code"],
  },
];

export const coreCS = [
  "Data Structures & Algorithms",
  "Database Management",
  "Object-Oriented Programming",
  "Operating Systems",
  "Computer Networks",
];
