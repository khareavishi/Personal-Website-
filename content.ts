export interface SiteConfig {
  name: string;
  identity: string;
  signatureQuote: string;
  explorerTag: string;
  introLead: string;
  email: string;
  polaris: {
    guidingIdea: string;
    pipChallenge: string;
    pipTagline: string;
    role: string;
    aim: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  sections: { title: string; content: string }[];
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  category: 'aviation' | 'education' | 'engineering' | 'future';
  status: 'completed' | 'ongoing' | 'exploring' | 'future';
  outcome: string;
}
