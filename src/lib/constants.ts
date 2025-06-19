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
