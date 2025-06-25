import FacebookLogo from '@/components/logo/facebook-logo'
import GitHubLogo from '@/components/logo/github-logo'
import LinkedinLogo from '@/components/logo/linkedin-logo'
import XLogo from '@/components/logo/x-logo'
import TypescriptLogo from '@/components/logo/typescript-logo'
import NodejsLogo from '@/components/logo/nodejs-logo'
import ReactLogo from '@/components/logo/react-logo'
import NextjsLogo from '@/components/logo/nextjs-logo'
import NestjsLogo from '@/components/logo/nestjs-logo'
import { ComponentType } from 'react'

export type SocialLink = {
  href: string
  icon: ComponentType<{ width: number; height: number; className?: string }>
  label: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/truongthucvan/',
    icon: LinkedinLogo,
    label: 'LinkedIn'
  },
  {
    href: 'https://github.com/MeiCloudie',
    icon: GitHubLogo,
    label: 'GitHub'
  },
  {
    href: 'https://www.facebook.com/ttvan1242/',
    icon: FacebookLogo,
    label: 'Facebook'
  },
  {
    href: 'https://x.com/MeiCloudie1242',
    icon: XLogo,
    label: 'X (Twitter)'
  }
]

export type MainSkill = {
  icon: ComponentType<{ width: number; height: number; className?: string }>
  name: string
}

export const MAIN_SKILLS: MainSkill[] = [
  {
    icon: TypescriptLogo,
    name: 'Typescript'
  },
  {
    icon: NodejsLogo,
    name: 'Nodejs'
  },
  {
    icon: ReactLogo,
    name: 'React'
  },
  {
    icon: NextjsLogo,
    name: 'Next.js'
  },
  {
    icon: NestjsLogo,
    name: 'NestJS'
  }
]

export type SpecialThanks = {
  href: string
  label: string
}

export const SPECIAL_THANKS: SpecialThanks[] = [
  { href: 'https://nextjs.org', label: 'Next.js' },
  { href: 'https://ui.shadcn.com', label: 'Shadcn UI' },
  { href: 'https://magicui.design/', label: 'Magic UI' },
  { href: 'https://ui.aceternity.com', label: 'Aceternity UI' }
]

export type SkillLevel = 'Basic' | 'Intermediate' | 'Experienced'

export type Skill = {
  name: string
  level: SkillLevel
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}

export const SKILL_COLORS = ['#FFA001', '#FE8FB5', '#FC4100']

export const SKILLS: SkillCategory[] = [
  {
    title: 'Front End',
    skills: [
      { name: 'HTML', level: 'Experienced' },
      { name: 'CSS', level: 'Experienced' },
      { name: 'SASS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'React', level: 'Intermediate' },
      { name: 'Next.js', level: 'Intermediate' },
      { name: 'Angular', level: 'Basic' },
      { name: 'React Native', level: 'Basic' },
      { name: 'Flutter', level: 'Basic' },
      { name: 'Bootstrap', level: 'Experienced' },
      { name: 'Tailwind CSS', level: 'Experienced' },
      { name: 'ShadcnUI', level: 'Experienced' },
      { name: 'MUI', level: 'Intermediate' },
      { name: 'Ant Design', level: 'Intermediate' },
      { name: 'MobX', level: 'Basic' },
      { name: 'Zustand', level: 'Intermediate' },
      { name: 'Redux', level: 'Basic' }
    ]
  },
  {
    title: 'Back End',
    skills: [
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'MySQL', level: 'Basic' },
      { name: 'REST API', level: 'Basic' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'NestJS', level: 'Basic' },
      { name: 'Express.js', level: 'Basic' },
      { name: 'Python', level: 'Basic' }
    ]
  },
  {
    title: 'Tool Stack',
    skills: [
      { name: 'VS Code', level: 'Experienced' },
      { name: 'Cursor', level: 'Experienced' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'DBML', level: 'Intermediate' },
      { name: 'Docker', level: 'Basic' },
      { name: 'Git/GitHub', level: 'Experienced' },
      { name: 'CI/CD', level: 'Basic' },
      { name: 'Jira', level: 'Intermediate' },
      { name: 'Figma', level: 'Intermediate' }
    ]
  }
]

export type Platform = 'Website' | 'Mobile' | 'Desktop'

export type Project = {
  image: string
  sourceCode: string
  platform: Platform[]
  title: string
  description: string
  demo: string
  technologies: string[]
}

export const PROJECTS: Project[] = [
  {
    image: '/projects/airbnb-clone-client.png',
    sourceCode: 'https://github.com/MeiCloudie/airbnb-clone-client',
    platform: ['Website'],
    title: 'Airbnb Clone Client',
    description:
      'Developed a client-side Airbnb clone replicating core platform features as a Booking Marketplace Platform, focusing on building key functionalities such as search with Google Maps, calendar-based booking, and payment integration.',
    demo: 'https://airbnb-clone-client-meicloudie.vercel.app',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ShadcnUI', 'Zustand']
  },
  {
    image: '/projects/hutech-classroom.png',
    sourceCode: 'https://github.com/MeiCloudie/hutech-classroom-client-app',
    platform: ['Website', 'Desktop'],
    title: 'HUTECH Classroom',
    description:
      'Developed a Classroom Management System for HUTECH to simplify classroom tasks, support teachers and staff, and improve the student learning experience.',
    demo: 'https://hutech-classroom-edu.vercel.app',
    technologies: ['React', 'TypeScript', 'MUI', 'MobX', 'Flutter', 'PostgreSQL']
  },
  {
    image: '/projects/fiverr-clone.png',
    sourceCode: 'https://github.com/MeiCloudie/react-fiverr-clone',
    platform: ['Website'],
    title: 'Fiverr Clone',
    description:
      'Developed a Fiverr Clone – a freelance service marketplace platform inspired by the real Fiverr – to practice and enhance Front-End development skills. The project replicates core features such as service listings, user profiles, and order management.',
    demo: 'https://react-fiverr-clone-meicloudie.vercel.app',
    technologies: ['React', 'JavaScript', 'Redux', 'Tailwind CSS', 'Ant Design']
  },
  {
    image: '/projects/cyber-shoe-shop.png',
    sourceCode: 'https://github.com/MeiCloudie/cyber-shoe-shop',
    platform: ['Website'],
    title: 'Cyber Shoe Shop',
    description:
      'Developed a fashion e-commerce website interface focused on shoe sales, practicing API calls to fetch and render data dynamically. Built using vanilla HTML, CSS, and JavaScript.',
    demo: 'https://cyber-shoe-shop-group5-bcs12.vercel.app',
    technologies: ['HTML', 'CSS', 'SASS', 'JavaScript']
  },
  {
    image: '/projects/corpvision.png',
    sourceCode: 'https://github.com/MeiCloudie/corpvision',
    platform: ['Website'],
    title: 'Corpvision',
    description:
      'Developed an informational interface for Corp Vision, built using HTML, CSS, JavaScript, and Bootstrap.',
    demo: 'https://corpvision-group9-bcs12.vercel.app',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
  }
]

export type Supervisor = {
  fullName: string
  position: string
  email: string
}

export type WorkExperience = {
  duration: string
  position: string
  company: string
  location: string
  description: string[]
  techStack: string[]
  supervisor: Supervisor
}

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    duration: 'Feb 2025 – Apr 2025',
    position: 'FREELANCE FRONT-END DEVELOPER',
    company: 'MXANH',
    location: 'Ho Chi Minh City, Vietnam',
    description: [
      'Led the design and development of a Smart Waste Collection and Recycling System, defining system requirements and technical specifications.',
      'Designed user-friendly UI/UX interfaces with Figma, focusing on intuitive navigation and accessibility across devices.',
      'Researched and applied Flutter to prototype key mobile features like waste categorization, scheduling, and notifications.'
    ],
    techStack: ['Flutter', 'Figma', 'Business Analysis'],
    supervisor: {
      fullName: 'Mr. Nguyen Duc An',
      position: 'Project Manager',
      email: 'nguyenducan.vn@gmail.com'
    }
  },
  {
    duration: 'Dec 2024 – Apr 2025',
    position: 'FREELANCE FRONT-END DEVELOPER',
    company: 'Garago',
    location: 'Ho Chi Minh City, Vietnam',
    description: [
      'Contributed to defining system requirements and planning key functionalities for the Automotive Service Search and Evaluation System.',
      'Designed modern, user-friendly UI/UX using Figma, with a focus on responsive layout and intuitive user flow.',
      'Assisted in developing the web application using Angular, implementing core features such as garage location search, service evaluation, and garage sales management.'
    ],
    techStack: ['Angular', 'Figma', 'Business Analysis'],
    supervisor: {
      fullName: 'Mr. Nguyen Duc An',
      position: 'Project Manager',
      email: 'nguyenducan.vn@gmail.com'
    }
  },
  {
    duration: 'Apr 2024 – Oct 2024',
    position: 'FULLSTACK DEVELOPER',
    company: 'CyberSoft Academy',
    location: 'Ho Chi Minh City, Vietnam',
    description: [
      'Developed TypeScript documentation by researching and organizing over 20 key resources, enhancing content creation by 50% as a valuable company asset.',
      "Built a Transaction Management project in Python, meeting approximately 90% of the company's specifications, with potential for future development to expand capabilities by an estimated 20%.",
      'Compiled a structured documentation set by consolidating around 50 resources, including applicable datasets, for Data Analysis with Python.'
    ],
    techStack: ['TypeScript', 'Python', 'Data Analysis'],
    supervisor: {
      fullName: 'Ms. Tran Chau Thanh Nguyen',
      position: 'Chief Technology Officer',
      email: 'ntran44.cybersoft@gmail.com'
    }
  }
]
