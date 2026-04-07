export interface Capability {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export const capabilities: Capability[] = [
  {
    id: 'manufacturing',
    title: 'Manufacturing & Systems Integration',
    icon: 'circuit-board',
    description: 'Defence-grade manufacturing and full-stack system integration',
    details: [
      'Defence-grade manufacturing (electronics & mechanical systems)',
      'SDR (Software Defined Radio) Integration',
      'Slip ring systems for naval & rotating platforms',
      'Lifeboats & naval equipment systems',
      'Embedded systems and electronics assembly',
      'Full-stack system integration for SCA 2.2.2 and similar programs'
    ]
  },
  {
    id: 'ai-intelligence',
    title: 'AI for Defence & Intelligence',
    icon: 'brain-circuit',
    description: 'Applied AI for intelligence workflows—imagery, fusion, and operator-facing tools',
    details: [
      'Satellite image analytics (ISR, threat detection, terrain intelligence)',
      'AI-based surveillance & reconnaissance',
      'Predictive maintenance for defence equipment',
      'Data fusion from multi-source intelligence',
      'Decision support systems for command operations'
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management & Execution',
    icon: 'clipboard-list',
    description: 'End-to-end program delivery for mission-critical systems',
    details: [
      'End-to-end program and project management',
      'Multi-location execution (India + global deployments)',
      'Defence procurement & compliance handling',
      'Vendor coordination and system delivery',
      'Risk-controlled execution for mission-critical systems'
    ]
  },
  {
    id: 'supply-chain',
    title: 'Global Supply Chain Management',
    icon: 'waypoints',
    description: 'Strategic sourcing and end-to-end supply chain excellence',
    details: [
      'Network Design',
      'Sourcing and Supplier Management',
      'Demand Planning & Forecasting',
      'Manufacturing and Capacity Management',
      'Risk Management & Compliance',
      'Sustainability and Ethics'
    ]
  },
  {
    id: 'interior-design',
    title: 'Interior Design & Infrastructure Development',
    icon: 'building',
    description: 'Designing high-performance spaces for industrial & commercial environments',
    details: [
      'End-to-end interior design and infrastructure development for showrooms, warehouses, and factories',
      'Visually impactful, functional, and scalable spaces aligned with modern industrial requirements',
      'Showroom design: experience-led spaces, product display optimization, digital integration, and premium finishes',
      'Warehouse design: layout planning, zoning, space utilization, and supply chain integration',
      'Factory & industrial interiors: workflow-driven layouts, safety-compliant infrastructure, and equipment integration',
      'Turnkey execution: concept to final delivery, vendor management, civil/electrical/finishing work, and quality control',
      'Approach: design thinking (aesthetic + brand), engineering mindset (efficiency + functionality), execution excellence (timely delivery + quality)',
      'Value for: industrial manufacturing units, commercial showrooms, warehousing/logistics hubs, large-scale operational facilities',
      'Positioning: Designing spaces that perform as powerfully as the business within them.'
    ]
  },
  {
    id: 'support',
    title: 'Onsite & Offshore Support',
    icon: 'hard-hat',
    description: 'Flexible engagement models for defence operations',
    details: [
      'Onsite Support (Onbase): Deployment, installation & testing, field engineering support, operational readiness',
      'Offsite Support (Offbase): Remote monitoring & diagnostics, AI model support & upgrades, engineering & integration assistance'
    ]
  },
  {
    id: 'training',
    title: 'Training & Capability Building',
    icon: 'book-open',
    description: 'Hands-on training for operators and engineering teams on SDR, AI tooling, and integration',
    details: [
      'SDR and system integration training',
      'AI applications for defence teams',
      'Technical and operational training modules',
      'Customized programs for armed forces & partners'
    ]
  }
];

export const keyPrograms = [
  'SCA 2.2.2 Programs',
  'SDR Integration',
  'Slip Ring Systems',
  'Naval & Maritime Systems',
  'High Altitude Deployments',
  'Defence Electronics & Communication Systems',
  'DataScience and AI'
];

export const projectExperience = [
  'Naval systems & maritime platforms',
  'High-altitude operational deployments',
  'Slip ring manufacturing & integration',
  'Lifeboat and safety systems',
  'AI-powered intelligence platforms',
  'OSINT (Open Source Intelligence)'
];

export const certifications = {
  title: 'Certifications & Compliance',
  items: [
    'Defence-grade quality standards',
    'Compliance with global and Indian defence regulations',
    'Proven execution frameworks for sensitive projects'
  ]
};

export const whitepapers = [
  {
    id: 'ai-defence',
    title: 'AI in Defence & Applied Intelligence',
    description: 'Case study on Col Lamba use case of arms testing',
    downloadLink: '#'
  },
  {
    id: 'ai-surveillance',
    title: 'AI in Defence & Surveillance',
    description: 'Comprehensive analysis of AI applications in modern defence',
    downloadLink: '#'
  },
  {
    id: 'sdr-systems',
    title: 'SDR & Communication Systems',
    description: 'Technical whitepaper on Software Defined Radio integration',
    downloadLink: '#'
  },
  {
    id: 'integration',
    title: 'Integration Architectures',
    description: 'Best practices for defence systems integration',
    downloadLink: '#'
  },
  {
    id: 'manufacturing',
    title: 'Future of Defence Manufacturing',
    description: 'Strategic insights on indigenisation and Make in India',
    downloadLink: '#'
  },
  {
    id: 'training',
    title: 'Training and Capability Development',
    description: 'Framework for defence capability building',
    downloadLink: '#'
  }
];
