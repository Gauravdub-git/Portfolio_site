import potatoCover from "@/assets/projects/potato-disease.jpg";
import doctorCover from "@/assets/projects/doctor-appointment.jpg";
import studynotionCover from "@/assets/projects/studynotion.jpg";
import outbreakCover from "@/assets/projects/disease-outbreak.jpg";
import policyCover from "@/assets/projects/policy-compliance.jpg";

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  year: string;
  role: string;
  category: string;
  stack: string[];
  featured: boolean;
  cover: string;
  links: { github?: string; demo?: string };
  overview: string;
  problem: string;
  architecture: string[];
  features: string[];
  challenges: string[];
  results: string[];
  lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-policy-compliance-intelligence",
    title: "AI-Driven Policy & Compliance Intelligence System",
    oneLiner:
      "End-to-end NLP platform that turns regulatory PDFs into searchable compliance intelligence — semantic search, risk scoring, and cross-document conflict detection.",
    year: "2025",
    role: "Solo build — NLP pipeline, risk engine, dashboard",
    category: "AI · NLP · Compliance",
    stack: [
      "Python",
      "Streamlit",
      "Sentence Transformers",
      "spaCy",
      "NLTK",
      "Scikit-learn",
      "pdfplumber",
    ],
    featured: true,
    cover: policyCover,
    links: {
      github:
        "https://github.com/Gauravdub-git/AI-Driven-Policy-Compliance-Intelligence-System.git",
    },
    overview:
      "An end-to-end NLP platform that automates the analysis of policy and regulatory documents. Users upload multiple PDFs or text files and the system runs an 8-stage pipeline — preprocessing, clause segmentation, knowledge extraction, embedding, semantic search, risk assessment, conflict detection, and AI summarization — behind a single Streamlit dashboard. The output is structured, explainable compliance intelligence rather than raw documents.",
    problem:
      "Compliance teams routinely wade through hundreds of pages of overlapping regulations, corporate policies, and legal manuals. Manual review is slow, obligations get missed, and conflicts across documents are almost impossible to catch by eye. The goal was to compress that workflow into an interactive tool that surfaces obligations, risks, and contradictions in minutes while remaining transparent about how it got there.",
    architecture: [
      "Ingestion: PDF and TXT documents parsed with pdfplumber, normalized, and sentence-tokenized with NLTK.",
      "Clause segmentation: a rule-based engine detects headers and numbered clauses and splits documents into logical compliance units with preserved metadata.",
      "Knowledge extraction: keyword classification tags each clause as obligation, prohibition, penalty, or permission, combined with spaCy NER for organizations, laws, dates, and regulatory entities.",
      "Embeddings: every clause is encoded with all-MiniLM-L6-v2 (Sentence Transformers) into 384-dim vectors for semantic comparison.",
      "Semantic search & similarity: cosine similarity over cached embeddings powers natural-language queries and all-pairs clause comparison.",
      "Risk engine: hybrid rule-based + similarity signals classify clauses into Low / Medium / High risk with explainable reasoning.",
      "Conflict detection: identifies direct contradictions, overlapping obligations, missing requirements, and inconsistent regulations across documents.",
      "UI: multi-page Streamlit dashboard with resource caching, pagination, and persistent artifact storage (pickle) so embeddings and reports reload instantly.",
    ],
    features: [
      "Multi-document PDF and text ingestion with automated preprocessing",
      "Clause-level segmentation and structured compliance metadata",
      "Named-entity extraction for organizations, laws, dates, and regulators",
      "Semantic search using Sentence Transformer embeddings and cosine similarity",
      "Explainable Low / Medium / High risk scoring for every clause",
      "Automated conflict detection across contradictions, overlaps, and gaps",
      "AI-generated document summaries and actionable recommendations",
      "Natural-language Q&A over the uploaded compliance corpus",
      "Streamlit dashboard with analytics, filters, and conflict visualization",
    ],
    challenges: [
      "Clause boundaries in legal PDFs are inconsistent — solved with a layered segmentation strategy combining header detection, numbering patterns, and paragraph heuristics.",
      "Similarity thresholds needed careful calibration to separate true conflicts from paraphrased duplicates without flooding the dashboard with noise.",
      "Streamlit reruns on every widget change; introduced resource caching and persistent pickle artifacts so embeddings and analyses are computed once and reused.",
      "Keeping risk scoring explainable — combined rule signals with similarity evidence so every score carries a human-readable rationale.",
    ],
    results: [
      "8-stage NLP pipeline running end-to-end on multi-document uploads",
      "Semantic search and conflict detection working across mixed policy corpora",
      "Cached embeddings and lazy rendering keep the dashboard responsive on repeat runs",
      "Reusable extraction and risk modules structured for future rule additions",
    ],
    lessons: [
      "For legal text, clause-level granularity beats document-level analysis — everything downstream gets sharper.",
      "Small, well-chosen embedding models (MiniLM) are more than enough when the retrieval surface is well-scoped.",
      "Explainability is a feature, not a nice-to-have — a risk score without a reason is useless to a compliance reviewer.",
      "Persisting intermediate artifacts is what makes a Streamlit app feel like a real product instead of a notebook.",
    ],
  },
  {
    slug: "potato-disease-classification",
    title: "Potato Disease Classification",
    oneLiner:
      "Deep learning model that identifies potato leaf diseases with 95%+ accuracy, deployed as a FastAPI service with a Streamlit interface.",
    year: "2024",
    role: "Solo build — model, API, UI",
    category: "Deep Learning · Agri-tech",
    stack: ["Python", "TensorFlow", "CNN", "FastAPI", "Streamlit"],
    featured: true,
    cover: potatoCover,
    links: {
      github: "https://github.com/Gauravdub-git/Potato-disease-classification.git",
    },
    overview:
      "An end-to-end computer vision system that classifies potato leaves as Healthy, Early Blight, or Late Blight from a single photo. Trained on the PlantVillage dataset with a convolutional neural network, packaged behind a FastAPI inference endpoint, and served through a lightweight Streamlit interface intended for farmers and field workers.",
    problem:
      "Late diagnosis of potato foliar diseases is a major yield-loss driver for smallholder farmers. Existing tooling is either lab-bound or requires strong connectivity. The goal was to ship a fast, offline-friendly classifier that runs on a phone photo and returns actionable output in under a second.",
    architecture: [
      "Data pipeline: PlantVillage images resized to 256×256, augmented with random flips, rotations, and zoom to reduce overfitting on background artifacts.",
      "Model: a compact CNN (3 conv-pool blocks → dense head) trained with sparse categorical cross-entropy and Adam. Class weights tuned to handle mild dataset imbalance.",
      "Serving: model exported to TensorFlow SavedModel format and loaded once per FastAPI worker; predictions returned as JSON with class probabilities.",
      "UI: Streamlit front-end for drag-and-drop images that calls the FastAPI endpoint over HTTP.",
    ],
    features: [
      "Real-time inference under 300ms per image on CPU",
      "Confidence score returned alongside the predicted class",
      "Image preprocessing handled server-side so mobile clients stay thin",
      "Swagger docs auto-generated from FastAPI schemas for easy integration",
    ],
    challenges: [
      "Class imbalance between healthy and late-blight samples was hurting recall — solved by class weighting and targeted augmentation.",
      "Streamlit and FastAPI had to run as separate processes; introduced a small shared config module to avoid drift between the two.",
      "Cold-start latency on first inference — solved by warming the model with a dummy tensor at startup.",
    ],
    results: [
      "95%+ accuracy on held-out test set across all three classes",
      "Sub-300ms average inference on commodity CPU",
      "Reusable inference module packaged for other crop-disease datasets",
    ],
    lessons: [
      "A small, well-augmented CNN beats a large under-regularized one on niche image datasets.",
      "Serving and modelling are two very different disciplines — keeping them in separate modules paid off during iteration.",
      "Streamlit is great for demos but the real product surface belongs behind a proper HTTP API.",
    ],
  },
  {
    slug: "doctor-appointment-system",
    title: "Doctor Appointment System",
    oneLiner:
      "Full-stack healthcare platform where patients book appointments and doctors manage schedules, with role-based auth and real-time updates.",
    year: "2024",
    role: "Full stack — MERN",
    category: "Full Stack · Healthcare",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    featured: true,
    cover: doctorCover,
    links: {
      github: "https://github.com/Gauravdub-git/Doctor_Appointment_System.git",
    },
    overview:
      "A three-role MERN application (patient, doctor, admin) that handles the full appointment lifecycle: discovery, booking, confirmation, rescheduling, and history. Built to explore realistic role-based access control patterns and clean separation between the API and the SPA.",
    problem:
      "Small clinics rely on WhatsApp and phone calls to manage bookings, leading to double-booking, missed appointments, and no audit trail. The goal was a lightweight web app that any clinic can self-host without paying for a heavyweight SaaS.",
    architecture: [
      "Backend: Express REST API with modular route/controller/service layers and Mongoose schemas for User, Doctor, Appointment.",
      "Auth: JWT access tokens with bcrypt-hashed passwords; middleware enforces role checks on every protected route.",
      "Frontend: React SPA with protected routes; per-role dashboards for patient, doctor, and admin.",
      "Data model: appointments reference doctor and patient by ObjectId with compound indexes on (doctorId, slot) to prevent double-booking at the database layer.",
    ],
    features: [
      "Role-based dashboards for patients, doctors, and admins",
      "Slot-based booking with server-side conflict detection",
      "JWT-authenticated REST API with per-route role guards",
      "Admin approval workflow for new doctor registrations",
    ],
    challenges: [
      "Preventing double-booking under concurrent requests — solved with unique compound indexes and idempotent booking endpoints.",
      "Keeping the three role UIs consistent without duplicating code — extracted a shared layout and hook set.",
      "Managing token refresh cleanly on the client without leaking auth state into every component.",
    ],
    results: [
      "Full booking flow working end-to-end across three roles",
      "Zero double-bookings under load testing with 50 concurrent clients",
      "Reusable auth + role-guard middleware later reused in other projects",
    ],
    lessons: [
      "Push consistency constraints down to the database whenever possible — the API layer is not a good place to guard uniqueness.",
      "A shared UI shell keeps multi-role apps sane; duplication grows fast otherwise.",
      "REST is still perfectly good for CRUD-shaped apps; GraphQL would have been overkill here.",
    ],
  },
  {
    slug: "disease-outbreak-prediction",
    title: "Disease Outbreak Prediction",
    oneLiner:
      "Multi-disease prediction system covering diabetes, heart disease, and Parkinson's, served through a single Streamlit application.",
    year: "2025",
    role: "ML engineer — TechSaksham / AICTE",
    category: "Machine Learning · Healthcare",
    stack: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "Logistic Regression",
      "SVM",
    ],
    featured: true,
    cover: outbreakCover,
    links: {
      github:
        "https://github.com/Gauravdub-git/Prediction-of-Disease-Outbreaks-.git",
    },
    overview:
      "An interactive tool that lets a user enter clinical parameters and returns a risk prediction for three diseases using three separately trained scikit-learn models. Built during the AICTE / TechSaksham AI: Transformative Learning internship.",
    problem:
      "Early screening tools for chronic disease often exist as isolated notebooks that a non-technical user can never touch. The goal was to expose three well-known clinical datasets (Pima Indians, Cleveland heart, Parkinson's voice) behind one unified interface.",
    architecture: [
      "Three separate models, each trained and evaluated in its own notebook: logistic regression for diabetes, SVM with RBF kernel for heart disease, and a tuned SVM for Parkinson's voice features.",
      "Model artifacts serialized with pickle and lazy-loaded by the Streamlit app on first request.",
      "Single Streamlit multi-page app with one page per disease, sharing common validation and result-rendering components.",
    ],
    features: [
      "Three prediction workflows in one interface",
      "Input validation with sensible medical bounds per field",
      "Probability-style confidence output rather than raw class labels",
    ],
    challenges: [
      "Feature scales varied wildly across datasets — solved with a StandardScaler saved alongside each model.",
      "Small dataset sizes made cross-validation results noisy; used stratified k-fold with fixed seeds for comparable numbers.",
      "Streamlit reruns on every widget change; had to be careful not to reload models on each interaction.",
    ],
    results: [
      "Three working classifiers with acceptable accuracy across held-out splits",
      "Single deployable app that runs anywhere Python does",
      "Clean template for adding more diseases without touching the UI",
    ],
    lessons: [
      "Persisting scalers next to models is not optional — training-time preprocessing must ship with inference.",
      "Streamlit's caching primitives are underrated for keeping demos snappy.",
      "Small models trained carefully beat larger models trained lazily.",
    ],
  },
  {
    slug: "studynotion-edtech",
    title: "StudyNotion — EdTech Platform",
    oneLiner:
      "Course marketplace with video streaming, cloud media storage, and real-time notifications for instructors and learners.",
    year: "2024",
    role: "Full stack — MERN",
    category: "Full Stack · EdTech",
    stack: ["React", "Node.js", "MongoDB", "WebSockets", "Cloudinary"],
    featured: false,
    cover: studynotionCover,
    links: {},
    overview:
      "A course-selling platform with instructor and student roles. Instructors upload video lessons and structure them into sections; students purchase courses, track progress, and receive real-time updates when new content lands.",
    problem:
      "Most course platforms bundle too many features and hide the primitives an engineer would want to see: media upload, progress tracking, and live notifications. StudyNotion was built to keep those primitives visible.",
    architecture: [
      "Backend: Node/Express REST API with MongoDB, Cloudinary integration for video and image uploads, and a WebSocket channel for real-time notifications.",
      "Frontend: React SPA with Redux Toolkit for cart / auth state and React Query for server data.",
      "Media: signed uploads directly to Cloudinary from the client to avoid streaming through the API.",
    ],
    features: [
      "Instructor course builder with sections and sub-sections",
      "Student dashboard with per-lesson progress tracking",
      "Direct-to-cloud media uploads with signed URLs",
      "Real-time notifications when new lessons are published",
    ],
    challenges: [
      "Large video uploads had to bypass the API — solved with signed Cloudinary URLs generated server-side.",
      "Keeping cart, auth, and course-progress state consistent across tabs — solved with a small storage sync layer.",
    ],
    results: [
      "End-to-end course lifecycle working from creation to consumption",
      "Zero API traffic for actual media bytes",
    ],
    lessons: [
      "For media, get the bytes off your own servers as fast as possible.",
      "Redux for global UI state and React Query for server state is a good split; mixing them is where bugs live.",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}
