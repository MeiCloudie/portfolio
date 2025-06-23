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
