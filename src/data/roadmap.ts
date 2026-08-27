export interface RoadmapMilestone {
  id: string;
  number: string;
  phase: string;
  title: string;
  badge: string;
  colorHex: string;
  badgeBg: string;
  summary: string;
  iconName: string;
  pinX: number; // percentage or px along svg curve
  pinY: number;
  keyPoints: string[];
  capabilities: string[];
  businessImpact: string;
}

export const roadmapMilestones: RoadmapMilestone[] = [
  {
    id: 'm1',
    number: '1',
    phase: 'CURRENT (NOW)',
    title: 'Motor OD Foundation',
    badge: 'Live Platform',
    colorHex: '#ef4444',
    badgeBg: 'bg-red-500 text-white',
    summary: 'Connected 3-Actor Portal Engine & ~30-min Fast-Track',
    iconName: 'Cpu',
    pinX: 130,
    pinY: 45,
    keyPoints: [
      'Connected 3-Actor portals (Customer, Workshop, Claims Handler)',
      '~30-minute touchless Fast-Track spot settlement for minor OD',
      'AI OCR automated extraction for DL, RC & repair bills',
      'End-to-end transparent progress tracking on mobile app'
    ],
    capabilities: [
      'Digital FNOL <3 mins',
      'OCR Extraction',
      'Live Milestone Tracker',
      'Auto-Allocation'
    ],
    businessImpact: 'Reduces minor claim cycle time from 7 days to ~30 minutes with zero paperwork friction.'
  },
  {
    id: 'm2',
    number: '2',
    phase: 'HORIZON 2',
    title: 'Core & IIB Integration',
    badge: 'Near-Term',
    colorHex: '#eab308',
    badgeBg: 'bg-amber-500 text-white',
    summary: 'National Database Sync & Automated OEM Parts Master',
    iconName: 'GitMerge',
    pinX: 380,
    pinY: 95,
    keyPoints: [
      'Integration with IIB & Parivahan for cross-insurer claim history',
      'Direct core policy system sync (Guidewire / BaNCS API bridge)',
      'Automated OEM parts catalog pricing & GST tax auto-calculation',
      'Instant cashless authorization to network repair garages'
    ],
    capabilities: [
      'IIB National Bridge',
      'OEM Parts Price Lookup',
      'Cashless Garage Auth',
      'Core PAS Sync'
    ],
    businessImpact: '35% reduction in overall claims processing overhead and 85% workshop digital adoption.'
  },
  {
    id: 'm3',
    number: '3',
    phase: 'HORIZON 3',
    title: 'Multilingual & Telemetry',
    badge: 'Mid-Term',
    colorHex: '#22c55e',
    badgeBg: 'bg-emerald-500 text-white',
    summary: 'Multilingual Voice AI & Real-Time Fraud Radar',
    iconName: 'Handshake',
    pinX: 630,
    pinY: 155,
    keyPoints: [
      'Multilingual conversational AI voice agent in 8 Indian languages',
      'Real-time fraud cluster heatmaps & anomaly detection radar',
      'Automated vehicle salvage value estimator & recovery tracking',
      'SLA breach predictive routing and workload balancing'
    ],
    capabilities: [
      'Multilingual Voice FNOL',
      'Fraud Ring Radar',
      'Salvage Estimator',
      'Predictive SLA Routing'
    ],
    businessImpact: 'Cuts fraudulent leakages by 38% and expands accessible digital intake nationwide.'
  },
  {
    id: 'm4',
    number: '4',
    phase: 'FUTURE',
    title: 'Autonomous & IoT Claims',
    badge: 'Long-Term Vision',
    colorHex: '#3b82f6',
    badgeBg: 'bg-blue-600 text-white',
    summary: 'Connected Vehicle Telematics & Self-Healing Claims',
    iconName: 'Target',
    pinX: 865,
    pinY: 60,
    keyPoints: [
      'Automatic crash detection via connected vehicle IoT telematics',
      'Zero-touch proactive FNOL initiated before driver places a call',
      'Smart contract micro-settlements on verified ledger',
      'Autonomous straight-through adjudication for 60%+ standard claims'
    ],
    capabilities: [
      'IoT Crash Telematics',
      'Zero-Touch FNOL',
      'Smart Contract Payout',
      'Graph Fraud Neural Shield'
    ],
    businessImpact: 'True zero-touch claims experience with instantaneous resolution and unmatched trust.'
  }
];

export const concludingStatement = {
  quote: 'Four weeks ago, we started with a problem. Today, we leave with a possibility.',
  teamMotto: 'MISSION MAVERICKS: ONE TEAM • ONE VISION • ONE VOICE • ONE VICTORY',
  productMotto: 'CLAIMSHIELD+: FASTER. SMARTER. SIMPLER.'
};
