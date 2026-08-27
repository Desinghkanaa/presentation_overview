export interface AppLinks {
  // Main ClaimShield+ Application
  claimShieldLiveApp: string;
  
  // Dedicated Portals
  customerPortal: string;
  repairerPortal: string;
  claimsHandlerPortal: string;

  // Video assets
  openingVideoUrl: string;
  pitchVideoUrl: string;
  demoWalkthroughUrl: string;

  // Evidence Hub documents & links
  frdDocumentUrl: string;
  frsDocumentUrl: string;
  processJourneysUrl: string;
  uiUxDesignUrl: string;
  galleryUrl: string;
}

export const links: AppLinks = {
  // Application endpoints (Configurable - defaults provide functional in-app previews/demo links)
  claimShieldLiveApp: 'https://claimshield-plus.demo.internal',
  customerPortal: 'https://customer.claimshield-plus.demo.internal',
  repairerPortal: 'https://repairer.claimshield-plus.demo.internal',
  claimsHandlerPortal: 'https://handler.claimshield-plus.demo.internal',

  // Video sources
  openingVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  pitchVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  demoWalkthroughUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',

  // Evidence links
  frdDocumentUrl: 'https://docs.google.com/document/d/claimshield-frd',
  frsDocumentUrl: 'https://docs.google.com/document/d/claimshield-frs',
  processJourneysUrl: 'https://miro.com/app/board/claimshield-process-journeys',
  uiUxDesignUrl: 'https://www.figma.com/file/claimshield-uiux-design-system',
  galleryUrl: 'https://photos.app.goo.gl/claimshield-mission-mavericks'
};

export interface EvidenceItem {
  id: string;
  title: string;
  code: string;
  icon: string;
  category: 'Document' | 'Process' | 'Design' | 'Video' | 'Gallery';
  tagline: string;
  description: string;
  url: string;
  actionText: string;
  previewType: 'document' | 'process' | 'design' | 'video' | 'gallery';
  previewData?: {
    pages?: string[];
    steps?: { step: string; detail: string }[];
    designScreens?: { title: string; desc: string; tag: string }[];
    videos?: { title: string; duration: string; desc: string; url: string }[];
    galleryImages?: { title: string; subtitle: string; date: string; category: string }[];
  };
}

export const evidenceItems: EvidenceItem[] = [
  {
    id: 'frd',
    title: 'Functional Requirements Document',
    code: 'FRD',
    icon: 'FileText',
    category: 'Document',
    tagline: 'Open project document',
    description: 'Comprehensive business capabilities, scope boundaries, IRDAI compliance matrices, and ~30-min Fast-Track requirement specifications.',
    url: links.frdDocumentUrl,
    actionText: 'View FRD Specification',
    previewType: 'document',
    previewData: {
      pages: [
        '1. Executive Summary & Vision Statement: Intelligent Motor OD Claims Platform',
        '2. Regulatory & Compliance: IRDAI Claims Settlement Guidelines, TAT Benchmarks & Grievance SLA',
        '3. Scope Boundaries: Own Damage (OD) Private Car, Two-Wheeler & Light Commercial Vehicles',
        '4. Fast-Track Eligibility Criteria: Minor scratch (<INR 15,000), minor dent, windshield damage',
        '5. Core Business Rules: Automated allocation matrix, surveyor threshold guidelines, spot settlement limits',
        '6. Non-Functional Requirements: 99.9% Uptime, sub-second API response, zero-trust data residency'
      ]
    }
  },
  {
    id: 'frs',
    title: 'Functional Requirements Specification',
    code: 'FRS',
    icon: 'FileCode2',
    category: 'Document',
    tagline: 'Open technical specification',
    description: 'Detailed API schemas, state machines, OCR integration contracts, fraud scoring thresholds, and role-based data models.',
    url: links.frsDocumentUrl,
    actionText: 'View FRS Specification',
    previewType: 'document',
    previewData: {
      pages: [
        '1. Data Models: ClaimEntity, CustomerProfile, VehicleRegistration, SurveyReport, LiabilitySheet',
        '2. State Machine: FNOL_INTIMATED → AUTO_VALIDATED → ASSESSED → APPROVED → SETTLED',
        '3. OCR API Contracts: Driving License, RC Book, Repair Estimate Itemized Parser',
        '4. Fraud Engine: 14 Anomaly Detection Rules, Risk Scoring (0-100), Threshold Actions',
        '5. Role-Based Permissions: Customer (Self-Service), Repairer (Workshop), Claims Handler (Underwriter)'
      ]
    }
  },
  {
    id: 'process',
    title: 'Process & Journeys',
    code: 'PROCESS',
    icon: 'GitPullRequest',
    category: 'Process',
    tagline: 'View process artefacts',
    description: 'Current State vs Future State BPMN workflows, friction analysis, and 3-actor collaborative sequence blueprints.',
    url: links.processJourneysUrl,
    actionText: 'Explore Interactive Journeys',
    previewType: 'process',
    previewData: {
      steps: [
        { step: '01. FNOL Capture', detail: 'Customer initiates via voice/web; automated GPS & RC pre-fill with zero repetitive fields.' },
        { step: '02. Instant Verification', detail: 'Policy validity, active coverage, IIB blacklists and duplicate claims checked in <3 seconds.' },
        { step: '03. AI Damage Assessment', detail: 'Computer vision inspects submitted photos; assesses part damage level and parts repair vs replace.' },
        { step: '04. Smart Triage & Allocation', detail: 'Fast-track eligible claims bypass manual survey; complex claims dynamically assigned to top-rated surveyor.' },
        { step: '05. Automated Liability Sheet', detail: 'Calculates depreciation, deductible, salvage, and GST; generates one-click approval packet.' },
        { step: '06. Instant Payment & Closeout', detail: 'Direct bank payout via UPI/IMPS upon 1-click handler sign-off; full customer tracking.' }
      ]
    }
  },
  {
    id: 'uiux',
    title: 'UI / UX Design System',
    code: 'UI/UX',
    icon: 'Palette',
    category: 'Design',
    tagline: 'View designs & Figma system',
    description: 'High-fidelity design components, glassmorphism tokens, accessible ergonomics, and responsive multi-device design system.',
    url: links.uiUxDesignUrl,
    actionText: 'Inspect Design System',
    previewType: 'design',
    previewData: {
      designScreens: [
        { title: 'Customer Mobile App', desc: 'Frictionless 3-step FNOL with voice assistant, live photo upload guide, and real-time payout tracker.', tag: 'Mobile First' },
        { title: 'Repairer Workshop Portal', desc: 'Multi-bay vehicle queue, one-click survey document upload, and transparent invoice settlement timeline.', tag: 'Desktop & Tablet' },
        { title: 'Claims Handler Cockpit', desc: 'Decision augmentation dashboard with AI damage confidence metrics, fraud alerts, and 1-click settlement.', tag: 'Desktop Pro' },
        { title: 'Design Tokens & Glassmorphism', desc: 'Vibrant neon gradients, WCAG AAA contrast compliance, dark keynote aesthetics, and micro-animations.', tag: 'Design Tokens' }
      ]
    }
  },
  {
    id: 'videos',
    title: 'Project Videos',
    code: 'VIDEOS',
    icon: 'Film',
    category: 'Video',
    tagline: 'Play project videos',
    description: 'Recorded milestone presentations, customer empathy interviews, Fast-Track live demo captures, and team showcase trailers.',
    url: links.pitchVideoUrl,
    actionText: 'Watch Video Showcase',
    previewType: 'video',
    previewData: {
      videos: [
        { title: 'Opening Teaser: "Every Claim Has a Story"', duration: '0:45', desc: 'The emotional narrative of accident friction and the vision for instant resolution.', url: links.openingVideoUrl },
        { title: 'ClaimShield+ End-to-End Walkthrough', duration: '3:20', desc: 'Complete interactive demonstration of the ~30-minute Fast-Track flow from FNOL to UPI payout.', url: links.demoWalkthroughUrl },
        { title: 'Mission Mavericks 4-Week Journey', duration: '2:15', desc: 'Behind-the-scenes workshops, collaboration sprints, and solution delivery milestones.', url: links.pitchVideoUrl }
      ]
    }
  },
  {
    id: 'gallery',
    title: 'Showcase Gallery',
    code: 'GALLERY',
    icon: 'Camera',
    category: 'Gallery',
    tagline: 'View photographs & moments',
    description: 'Sprint planning sessions, architectural whiteboard workshops, design critique huddles, and milestone celebrations.',
    url: links.galleryUrl,
    actionText: 'Open Photo Gallery',
    previewType: 'gallery',
    previewData: {
      galleryImages: [
        { title: 'Week 1: Problem Framing Workshop', subtitle: 'Mapping customer and repairer pain points on the physical canvas', date: 'Day 03', category: 'Discovery' },
        { title: 'Week 2: Architectural Blueprints', subtitle: 'Target operating model design & IRDAI compliance alignment', date: 'Day 09', category: 'Architecture' },
        { title: 'Week 3: AI Model Training Sprint', subtitle: 'Fine-tuning OCR parsing & vehicle damage segmentation rules', date: 'Day 16', category: 'Engineering' },
        { title: 'Week 3: UX Usability & Prototype Testing', subtitle: 'Hands-on review with claims handlers and survey experts', date: 'Day 19', category: 'Design' },
        { title: 'Week 4: Executive Dress Rehearsal', subtitle: 'Simulating the live ~30-minute Fast-Track claim scenario', date: 'Day 25', category: 'Showcase' },
        { title: 'Mission Mavericks Team Showcase Ready', subtitle: '11 Mavericks, One Vision, One Victory', date: 'Day 28', category: 'Celebration' }
      ]
    }
  }
];
