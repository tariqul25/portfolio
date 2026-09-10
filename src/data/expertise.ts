export interface ExpertiseArea {
  id: string;
  title: string;
  tagline: string;
  description: string;
  skills: string[];
  primary?: boolean;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    tagline: 'Primary Specialization',
    description:
      'Crafting responsive, performant, and accessible user interfaces. I think in components, design for interaction, and write code that scales.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'Component Architecture'],
    primary: true,
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    tagline: 'MERN Stack',
    description:
      'Building complete web applications from API design to database modeling — covering the full vertical from client to server.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JWT Auth', 'REST APIs'],
  },
  {
    id: 'shopify',
    title: 'Shopify Development',
    tagline: 'E-commerce Solutions',
    description:
      'Developing and customizing Shopify storefronts with Liquid, building custom sections, and integrating third-party apps and marketing tools.',
    skills: ['Liquid', 'Theme Development', 'Custom Sections', 'App Integration', 'Klaviyo'],
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation',
    tagline: 'Klaviyo & Integrations',
    description:
      'Connecting storefronts to marketing platforms — building data capture flows, automated email sequences, and customer segmentation.',
    skills: ['Klaviyo', 'Custom Quizzes', 'Customer Data Integration', 'Automated Workflows'],
  },
];

export const workingProcess = [
  {
    step: '01',
    title: 'Understand',
    description: 'Deep dive into the business requirements, user expectations, and technical constraints before a single line is written.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Define the component structure, data flow, and implementation approach — decisions made here save time during build.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop responsive, reusable, and maintainable interfaces with attention to detail at every step of the process.',
  },
  {
    step: '04',
    title: 'Refine',
    description: 'Test across devices, troubleshoot edge cases, optimize performance, and polish the experience until it feels right.',
  },
];
