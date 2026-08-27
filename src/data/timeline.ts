export interface TimelineWeek {
  weekNumber: string;
  title: string;
  subtitle: string;
  themeColor: string;
  borderColor: string;
  glowColor: string;
  iconName: string;
  focus: string;
  deliverables: string[];
  learnings: string[];
  milestones: string[];
}

export interface DomainPillar {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  tag: string;
}

export const timelineWeeks: TimelineWeek[] = [
  {
    weekNumber: 'WEEK 01',
    title: 'UNDERSTAND',
    subtitle: 'Domain Discovery & Problem Framing',
    themeColor: 'text-white',
    borderColor: 'border-white/20',
    glowColor: 'rgba(255, 255, 255, 0.2)',
    iconName: 'Compass',
    focus: 'Insurance • Motor • Claims • Stakeholders • Pain Points',
    deliverables: [
      'Comprehensive stakeholder pain-point inventory across Customer, Repairer & Claims Handler',
      'Indian General Insurance & IRDAI compliance baseline assessment',
      'Motor OD & TP regulatory and operational lifecycle mapping'
    ],
    learnings: [
      'Identified 42% of customer friction is driven by lack of status visibility during inspection',
      'Repairer invoice-to-settlement lag averages 12-18 business days in legacy manual pipelines',
      'Claims handlers spend over 55% of their working hours on repetitive document transcriptions'
    ],
    milestones: [
      'Kickoff & Mission Charter signing',
      'Stakeholder empathy interviews conducted',
      'Problem definition consensus achieved'
    ]
  },
  {
    weekNumber: 'WEEK 02',
    title: 'DESIGN',
    subtitle: 'Current vs Future State Architecture',
    themeColor: 'text-white',
    borderColor: 'border-white/20',
    glowColor: 'rgba(255, 255, 255, 0.2)',
    iconName: 'Layout',
    focus: 'Current State • Future State • Journeys • Opportunities',
    deliverables: [
      'Target Operating Model (TOM) and unified Claims Ecosystem blueprint',
      'Frictionless 3-actor journey maps: Customer, Repairer, and Claims Handler',
      'FRD & FRS specification drafts with ~30-minute Fast-Track business logic'
    ],
    learnings: [
      'Straight-through processing (STP) is highly feasible for minor scratch, dent, and windshield claims',
      'Digital FNOL with voice intelligence reduces claim intimation abandonment by 70%',
      'Automated surveyor allocation rules based on geography & workload eliminates dispatch delays'
    ],
    milestones: [
      'Architecture & Journey Review signoff',
      'Fast-track eligibility matrix formalized',
      'Wireframe & UX user flow approval'
    ]
  },
  {
    weekNumber: 'WEEK 03',
    title: 'BUILD',
    subtitle: 'Intelligent Prototyping & AI Workflows',
    themeColor: 'text-white',
    borderColor: 'border-white/20',
    glowColor: 'rgba(255, 255, 255, 0.2)',
    iconName: 'Code2',
    focus: 'UI/UX • Workflow • AI • Automation • Prototype',
    deliverables: [
      'Interactive High-Fidelity UI/UX design system with dark futuristic aesthetics',
      'AI OCR engine prototype for RC, Driving License & Repair Estimates',
      'ClaimShield+ interactive multi-portal application architecture'
    ],
    learnings: [
      'AI OCR pre-filling cuts FNOL completion time from 15 minutes to under 3 minutes',
      'Computer vision confidence thresholds safeguard underwriting loss ratios while enabling instant payout',
      'Automated liability calculation sheets empower claims handlers to approve payouts with 1 click'
    ],
    milestones: [
      'Core UI Component library release',
      'End-to-End Fast-Track automated flow demo',
      'AI anomaly and fraud scoring model integration'
    ]
  },
  {
    weekNumber: 'WEEK 04',
    title: 'DELIVER',
    subtitle: 'Validation, PMO Governance & Showcase',
    themeColor: 'text-white',
    borderColor: 'border-white/20',
    glowColor: 'rgba(255, 255, 255, 0.2)',
    iconName: 'Award',
    focus: 'Refine • Validate • Document • QA • Showcase',
    deliverables: [
      'Production-ready presentation showcase website and interactive deck',
      'Complete evidence repository: FRD, FRS, Process Maps, UI/UX Kit & Video Demos',
      'Turnaround Time (TAT) benchmark report confirming ~30-minute claim resolution'
    ],
    learnings: [
      'Rigorous PMO cadence and structured milestone gating ensured 100% on-time delivery',
      'Cross-functional synergy between domain experts and engineers produced a truly viable solution',
      'Seamless transition from reactive legacy claims to intelligent digital claims'
    ],
    milestones: [
      'Complete E2E regression and cross-device testing',
      'Executive showcase dress rehearsal',
      'ClaimShield+ platform launch readiness'
    ]
  }
];

export const domainPillars: DomainPillar[] = [
  {
    id: 'domain',
    icon: 'BookOpen',
    title: 'Domain Learning',
    tag: 'Insurance Expertise',
    description: 'Indian General Insurance • Motor products • OD/TP • claims lifecycle • IRDAI • IIB • market dynamics • opportunity areas.',
    bullets: [
      'Deep exploration of Own Damage (OD) vs Third Party (TP) regulatory mandates',
      'IRDAI turnaround time (TAT) compliance standards and grievance frameworks',
      'Insurance Information Bureau (IIB) claim verification integration patterns'
    ]
  },
  {
    id: 'pmo',
    icon: 'ClipboardCheck',
    title: 'PMO Discipline',
    tag: 'Governance & Execution',
    description: 'Governance • requirements • process • FRD/FRS • UI/UX • architecture • QA • documentation • reviews.',
    bullets: [
      'Weekly milestone gating with executive steering reviews',
      'Standardized FRD / FRS functional traceability matrix',
      'Continuous quality validation and SLA boundary stress testing'
    ]
  },
  {
    id: 'evidence',
    icon: 'FolderArchive',
    title: 'Evidence & Artifacts',
    tag: 'Verifiable Work',
    description: 'Photos, workshops, milestones and artefacts from the four-week program.',
    bullets: [
      'Comprehensive architecture diagrams and journey flowcharts',
      'High-fidelity interactive prototypes across all 3 portals',
      'Recorded showcase videos, sprint retrospectives, and workshop media'
    ]
  }
];
