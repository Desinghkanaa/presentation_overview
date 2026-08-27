import chandraImg from '../Assets/Chandra sekar (Coach).jpg';
import thiyagarajanImg from '../Assets/Thiyagarajan(Mentor).jpg';
import ishaImg from '../Assets/Isha(Member 1 BA).jpg';
import jijendraImg from '../Assets/Jijendra(Member 2 BA).jpg';
import pavitharaImg from '../Assets/Pavithara(Member 3 Scrum Master).jpg';
import dharunImg from '../Assets/Dharun(Member 4 Backend Developer).jpg';
import gowthamImg from '../Assets/Gowtham(Member 5 Frontend Developer).jpg';
import monishaImg from '../Assets/Monisha(Member 6 Developer).jpg';
import dharaniImg from '../Assets/Dharani(Member 7 Data).jpg';
import varunImg from '../Assets/Varun(Member 8 QA).jpg';
import desinghImg from '../Assets/Desingh(Member 9 QA).jpg';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  category: string;
  image: string;
  responsibilities: string[];
  contribution: string;
  highlights: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'chandra-sekar',
    name: 'Chandra Sekhar Siddabattula',
    role: 'Coach',
    badge: 'Coach',
    category: 'Leadership & Strategy',
    image: chandraImg,
    contribution: 'Strategic program oversight, team coaching, executive alignment, and overarching vision orchestration.',
    responsibilities: [
      'Strategic program governance & roadmap alignment',
      'Team enablement, executive storytelling & pitch reviews',
      'Cross-functional stakeholder orchestration'
    ],
    highlights: ['Program Architecture', 'Executive Alignment', 'Vision Direction']
  },
  {
    id: 'thiyagarajan',
    name: 'Thiyagarajan Mani',
    role: 'Mentor, Domain Expertise',
    badge: 'Mentor',
    category: 'Architecture & Mentorship',
    image: thiyagarajanImg,
    contribution: 'Domain architecture guidance, insurance best practices, technical advisory, and solution validation.',
    responsibilities: [
      'General Insurance domain advisory & regulatory alignment',
      'Technical architecture review and system feasibility',
      'Continuous mentorship and quality governance'
    ],
    highlights: ['Insurance Architecture', 'Domain Guidance', 'Technical Mentorship']
  },
  {
    id: 'isha',
    name: 'Isha Subash',
    role: 'Business Analyst, Project Discovery, Innovation, Solution Design',
    badge: 'Business Analyst',
    category: 'Product & Solution Design',
    image: ishaImg,
    contribution: 'Functional requirements gathering, customer journey workflows, and business specification documentation.',
    responsibilities: [
      'Business requirements analysis & FRD authoring',
      'Customer claim intimation & tracking process modeling',
      'Project discovery, innovation & solution design'
    ],
    highlights: ['Project Discovery', 'Solution Design', 'Innovation']
  },
  {
    id: 'jijendra',
    name: 'Jijendra Manoharan',
    role: 'Business Analyst, Project Discovery, Innovation, Solution Design',
    badge: 'Business Analyst',
    category: 'Product & Solution Design',
    image: jijendraImg,
    contribution: 'Workshop and repairer ecosystem requirements, business case modeling, and process flow definitions.',
    responsibilities: [
      'Repairer & handler workflow specification',
      'Cost-benefit business case & SLA turnaround analysis',
      'Project discovery, innovation & solution design'
    ],
    highlights: ['Project Discovery', 'Solution Design', 'Innovation']
  },
  {
    id: 'dharani',
    name: 'Dharani Veerapathiran',
    role: 'Business Analyst, Project Discovery, Innovation, Solution Design',
    badge: 'Business Analyst',
    category: 'Product & Solution Design',
    image: dharaniImg,
    contribution: 'Process modeling, domain requirements engineering, innovation modeling, and journey mapping.',
    responsibilities: [
      'Domain requirements engineering & process modeling',
      'Claims analytics and business rule discovery',
      'Project discovery, innovation & solution design'
    ],
    highlights: ['Project Discovery', 'Solution Design', 'Innovation']
  },
  {
    id: 'gowdham',
    name: 'Gowdham Gokul',
    role: 'Front End Developer, QA, Solution Design',
    badge: 'Frontend & QA',
    category: 'Engineering & Quality',
    image: gowthamImg,
    contribution: 'Interactive deck interface, reactive slide state, quality testing, and responsive UI architecture.',
    responsibilities: [
      'Frontend presentation deck UI implementation in React & Tailwind',
      'Component architecture, smooth slide transitions & animations',
      'Quality assurance testing and interactive solution design'
    ],
    highlights: ['Frontend Dev', 'QA Testing', 'Solution Design']
  },
  {
    id: 'dharun',
    name: 'Dharun Krishna Manoharan',
    role: 'Front End & Back End Developer, QA, Solution Design',
    badge: 'Full Stack & QA',
    category: 'Engineering & Quality',
    image: dharunImg,
    contribution: 'Full stack server & client architecture, API services, quality verification, and rule engine logic.',
    responsibilities: [
      'REST API development & data persistence layer',
      'Frontend UI components and full-stack integration',
      'QA test coverage, solution design & validation'
    ],
    highlights: ['Full Stack Dev', 'QA Testing', 'Solution Design']
  },
  {
    id: 'monisha',
    name: 'Monisha Murugavel',
    role: 'Front End Developer, QA, Solution Design',
    badge: 'Frontend & QA',
    category: 'Engineering & Quality',
    image: monishaImg,
    contribution: 'Feature engineering, component integrations, quality testing, and user journey modules.',
    responsibilities: [
      'Portal UI modules and functional component integration',
      'Document upload pipeline & validation UI',
      'QA test execution and solution design verification'
    ],
    highlights: ['Frontend Dev', 'QA Testing', 'Solution Design']
  },
  {
    id: 'desingh',
    name: 'Desingh Kannan',
    role: 'QA, Front End Developer',
    badge: 'QA & Frontend',
    category: 'Quality & Engineering',
    image: desinghImg,
    contribution: 'End-to-end quality validation, frontend development, benchmark verification, and UI testing.',
    responsibilities: [
      'QA strategy formulation and test execution governance',
      'Frontend component implementation and UI bug fixing',
      'System integration testing, final walkthrough QA and delivery sign-off'
    ],
    highlights: ['Quality Assurance', 'Frontend Dev', 'End-to-End Testing']
  },
  {
    id: 'varun',
    name: 'Varun Sai Addepalli',
    role: 'QA, Front End Developer',
    badge: 'QA & Frontend',
    category: 'Quality & Engineering',
    image: varunImg,
    contribution: 'Quality assurance planning, frontend feature engineering, cross-device testing, and defect resolution.',
    responsibilities: [
      'Comprehensive test case design for multi-portal journeys',
      'Frontend UI styling, layout fixes and responsiveness',
      'Functional test validation and edge case coverage'
    ],
    highlights: ['Quality Assurance', 'Frontend Dev', 'Defect Management']
  },
  {
    id: 'pavithra',
    name: 'Pavithra Aruchamy',
    role: 'Scrum Master, QA, Innovation, PMO',
    badge: 'Scrum & PMO',
    category: 'Governance & PMO',
    image: pavitharaImg,
    contribution: 'Agile sprint facilitation, PMO governance, quality tracking, and innovation oversight across 4 weeks.',
    responsibilities: [
      'Agile sprint planning, standups & retrospective governance',
      'PMO milestone tracking, QA validation & blocker resolution',
      'Innovation initiative governance & delivery assurance'
    ],
    highlights: ['Scrum Master', 'PMO Governance', 'QA & Innovation']
  }
];

export const teamMotto = {
  pillars: ['ONE TEAM', 'ONE VISION', 'ONE VOICE', 'ONE VICTORY'],
  summary: '11 professionals. One unified purpose.'
};

