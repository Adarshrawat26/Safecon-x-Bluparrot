export interface LeadershipProfile {
  id: string;
  name: string;
  title: string;
  role: string;
  imagePath: string;
  bio: string[];
  expertise: string[];
  focus: string[];
}

export const leadership: LeadershipProfile[] = [
  {
    id: 'nitin-kalra',
    name: 'Nitin Kalra',
    title: 'Co-Founder',
    role: 'Technology Strategist & Defence Innovation Enabler',
    imagePath: '/src/assets/images/leadership/nitin-kalra.png',
    bio: [
      'Nitin Kalra is a technology strategist and defence innovation enabler, leading Safecon Blu Parrot\'s vision of integrating Artificial Intelligence with real-world defence execution.',
      'With a strong track record of building global AI and data-driven platforms, Nitin has positioned Blu Parrot at the forefront of AI-powered defence systems.'
    ],
    expertise: [
      'AI-powered intelligence systems',
      'Satellite image analytics & ISR platforms',
      'Predictive analytics for mission-critical environments',
      'Digital transformation for defence and government ecosystems'
    ],
    focus: [
      'AI in Modern Warfare & Defence Digitisation',
      'Data Fusion & Multi-Source Intelligence Systems',
      'Autonomous Decision Support Platforms',
      'Defence AI Ecosystems & Future Readiness'
    ]
  },
  {
    id: 'aditya-arora',
    name: 'Aditya Arora',
    title: 'Co-Founder',
    role: 'Defence Engineering & Systems Integration Lead',
    imagePath: '/src/assets/images/leadership/aditya-arora.png',
    bio: [
      'Aditya Arora leads the defence engineering and systems integration vertical, bringing deep expertise in mission-critical programs, naval systems, and complex defence deployments.',
      'He has successfully driven execution across strategic defence programs with precision engineering and battlefield-ready reliability.'
    ],
    expertise: [
      'SCA 2.2.2 and strategic defence programs',
      'SDR (Software Defined Radio) integration',
      'Slip ring systems & rotating platforms',
      'Naval systems, lifeboats, and high-altitude solutions'
    ],
    focus: [
      'Systems Engineering & Integration Architecture',
      'Defence Manufacturing & Indigenisation (Make in India)',
      'Program & Lifecycle Management',
      'Global Supply Chain & Vendor Ecosystems',
      'Onsite (Onbase) & Offshore (Offbase) Execution Models',
      'Future of Defence Systems Integration',
      'Indigenous Defence Manufacturing Ecosystems',
      'Modular & Scalable Defence Architectures',
      'Operational Readiness & Deployment Frameworks'
    ]
  }
];

export const leadershipThought = {
  title: 'Thought Leadership',
  subtitle: 'Positioning as Industry Innovators',
  description: 'Our leads publish, prototype, and sit on programmes—not just slide decks.',
  contributions: [
    'Defence AI whitepapers and research publications',
    'System integration frameworks for next-gen warfare',
    'Indigenisation strategies aligned with national priorities',
    'Emerging technologies: AI, ISR, SDR, autonomous systems'
  ]
};
