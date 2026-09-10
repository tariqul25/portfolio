export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    name: 'Auth & Services',
    items: ['Firebase', 'JWT Authentication', 'Klaviyo API'],
  },
  {
    name: 'Shopify',
    items: ['Liquid Templating', 'Theme Development', 'Theme Customization', 'Custom Sections', 'App Integration'],
  },
];

export const shopifyCapabilities = [
  { label: 'Theme Development', description: 'Building custom themes from scratch or adapting existing ones to client specifications.' },
  { label: 'Liquid Templating', description: 'Writing clean, maintainable Liquid code for dynamic storefront logic and layouts.' },
  { label: 'Custom Sections', description: 'Creating reusable, configurable sections for theme customizer workflows.' },
  { label: 'App Integration', description: 'Integrating third-party Shopify apps — booking systems, LMS, membership platforms.' },
  { label: 'Klaviyo Integration', description: 'Connecting customer data to Klaviyo for automated marketing and email workflows.' },
  { label: 'Storefront Optimization', description: 'Performance tuning, cross-browser compatibility, and mobile-first responsive builds.' },
];
