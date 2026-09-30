export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'mern' | 'shopify';
  featured: boolean;
  image?: string;
  badge?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  githubUrl?: string;
  clientRepo?: string;
  serverRepo?: string;
}

export const projects: Project[] = [
  {
    id: 'gardenhub',
    title: 'Garden Guidance',
    description:
      'A community platform for gardening enthusiasts to share tips, find local gardeners, post events, and connect with others.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    category: 'mern',
    featured: true,
    image: '/projects/gardenhub.jpg',
    badge: 'Botanical Community',
    ctaLabel: 'Live Preview',
    ctaUrl: 'https://garden-guidance.web.app/',
    githubUrl: 'https://github.com/tariqul25/garden-guidance',
    clientRepo: 'https://github.com/tariqul25/garden-guidance',
    serverRepo: 'https://github.com/tariqul25/garden-guidance-server',
  },
  {
    id: 'swifttasks',
    title: 'SwiftTasks',
    description:
      'A task marketplace where buyers post jobs and workers earn coins, with role-based dashboards and coin payout workflows.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'JavaScript', 'MongoDB', 'JWT', 'Firebase'],
    category: 'mern',
    featured: true,
    image: '/projects/swifttasks.jpg',
    badge: 'Micro-Tasking Platform',
    ctaLabel: 'Live Preview',
    ctaUrl: 'https://swift-tasks-87d89.web.app/',
    githubUrl: 'https://github.com/tariqul25/swift-task',
    clientRepo: 'https://github.com/tariqul25/swift-task',
    serverRepo: 'https://github.com/tariqul25/swift-tasks-server',
  },
  {
    id: 'artifact-atlas',
    title: 'Artifact Atlas',
    description:
      'A full-stack web app for browsing, adding, and managing historical artifacts with secure authentication and a like system.',
    technologies: ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'JWT', 'MongoDB', 'Firebase'],
    category: 'mern',
    featured: true,
    image: '/projects/historical.jpg',
    badge: 'Curated History Portal',
    ctaLabel: 'Live Preview',
    ctaUrl: 'https://artifact-atlas-e6058.web.app/',
    githubUrl: 'https://github.com/tariqul25/Historical-Artifacts-Client',
    clientRepo: 'https://github.com/tariqul25/Historical-Artifacts-Client',
    serverRepo: 'https://github.com/tariqul25/Historical-Artifacts-Server',
  },
];

