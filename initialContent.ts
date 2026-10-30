import { SiteConfig, TimelineEntry } from '../types/content';

export const initialSiteConfig: SiteConfig = {
  name: "Avishi Khare",
  identity: "15 · Class 11",
  signatureQuote: "Possibility begins where the assumption of impossibility ends.",
  explorerTag: "The explorer is exploring",
  introLead: "Student builder in Class 11, working on experiential learning at Project Polaris, studying the science of flight and aviation, and investigating questions where physical curiosity meets honest execution.",
  email: "avishi.khare@example.com",
  polaris: {
    guidingIdea: "Learn by building, rather than building after learning.",
    pipChallenge: "How can science, technology, and innovation make exploration smarter, safer, and more sustainable?",
    pipTagline: "Discover, Build, Investigate, Showcase",
    role: "Strategic decisions, team structure, execution, and operational workflows.",
    aim: "Making meaningful, hands-on learning experiences accessible to all students, especially those with limited lab access."
  }
};

export const initialTimeline: TimelineEntry[] = [
  {
    id: "t1",
    date: "2024 – PRESENT",
    title: "Project Polaris & Polaris Innovation Program (PIP) Rollout",
    description: "Structured the execution framework and workshop problem statements for hands-on experiential science learning. Formulated the core PIP challenge and established curriculum blueprints focused on tangible building before theory.",
    category: "education",
    status: "ongoing",
    outcome: "Active Program Blueprint"
  },
  {
    id: "t2",
    date: "2023 – PRESENT",
    title: "Aeronautical Ground School Studies & Flight Mechanics",
    description: "Self-directed coursework in Private Pilot License (PPL) theoretical ground fundamentals: aerodynamics, air law, meteorology, dead reckoning navigation, altimetry, and standard flight instrument operations.",
    category: "aviation",
    status: "ongoing",
    outcome: "Systematic Flight Log & Study Notes"
  },
  {
    id: "t3",
    date: "2024",
    title: "Aerodynamic Wing-Section Wind Tunnel Simulation Prototype",
    description: "Constructed a desktop testing rig to observe angle-of-attack effects on lift and airflow detachment using tuft visualization and scale force measurements.",
    category: "engineering",
    status: "completed",
    outcome: "Documented Stall Characteristic Curves"
  },
  {
    id: "t4",
    date: "FUTURE HORIZON",
    title: "Solo Flight & Student Pilot Certificate",
    description: "Transitioning from theoretical ground school to certified dual-control flight hours, aiming for first solo takeoff and circuit landing once minimum age and regulatory requirements are reached.",
    category: "future",
    status: "future",
    outcome: "Target: Flight School Training Logbook"
  }
];
