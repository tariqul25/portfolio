export interface WorkExperience {
  type: 'work';
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  current: boolean;
}

export interface TrainingExperience {
  type: 'training';
  program: string;
  institution: string;
  focus: string;
}

export interface Education {
  type: 'education';
  degree: string;
  institution: string;
  gradeType?: 'CGPA' | 'GPA';
  grade?: string;
  period: string;
}

export type ExperienceEntry = WorkExperience | TrainingExperience | Education;

export const workExperience: WorkExperience[] = [
  {
    type: 'work',
    role: 'Jr. Web Developer',
    company: 'Softvence Agency Delta',
    period: 'December 2025 – Present',
    current: true,
    responsibilities: [
      'Develop responsive and user-focused web interfaces using HTML, CSS, JavaScript, React, Next.js and Liquid.',
      'Build and customize homepage, product, and collection layouts based on client requirements.',
      'Create reusable and responsive sections with clean, maintainable frontend code.',
      'Troubleshoot interface issues and improve cross-browser and cross-device compatibility.',
      'Implement custom functionality and optimize frontend performance for a smooth user experience.',
    ],
  },
];

export const trainingExperience: TrainingExperience[] = [
  {
    type: 'training',
    program: 'Industrial Attachment',
    institution: 'Bdcalling Academy',
    focus: 'Backend Development (Node.js, Express, MongoDB)',
  },
  {
    type: 'training',
    program: 'Complete Web Development Bootcamp',
    institution: 'Programming Hero',
    focus: 'Full-Stack MERN Development',
  },
];

export const education: Education[] = [
  {
    type: 'education',
    degree: 'Diploma in Computer Science & Technology',
    institution: 'Kishoreganj Polytechnic Institute',
    gradeType: 'CGPA',
    grade: '3.71 / 4.00',
    period: '2022 – 2026',
  },
  {
    type: 'education',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Shamsurnnahar Osman Ghani Shikka Niketon',
    gradeType: 'GPA',
    grade: '4.50 / 5.00',
    period: '2021',
  },
];
