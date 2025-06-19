import FacebookLogo from '@/components/logo/facebook-logo'
import GitHubLogo from '@/components/logo/github-logo'
import LinkedinLogo from '@/components/logo/linkedin-logo'
import XLogo from '@/components/logo/x-logo'
import Link from 'next/link'
import React from 'react'

type SocialLink = {
  href: string
  icon: React.ComponentType<{ width: number; height: number; className?: string }>
  label: string
}

const SOCIAL_LINKS: SocialLink[] = [
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

type SpecialThanks = {
  href: string
  label: string
}

const SPECIAL_THANKS: SpecialThanks[] = [
  { href: 'https://nextjs.org', label: 'Next.js' },
  { href: 'https://ui.shadcn.com', label: 'Shadcn UI' },
  { href: 'https://magicui.design/', label: 'Magic UI' },
  { href: 'https://ui.aceternity.com', label: 'Aceternity UI' }
]

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='transition-colors duration-300 hover:text-primary'
  >
    {children}
  </a>
)

const Footer = () => {
  return (
    <footer className='py-8 sm:py-10 border-t bg-background'>
      <div className='container px-4 sm:px-6 text-center space-y-4 sm:space-y-2'>
        <p className='text-xs sm:text-sm'>
          &copy; {new Date().getFullYear()}{' '}
          <FooterLink href='https://github.com/MeiCloudie'>Truong Thuc Van</FooterLink>. All rights reserved.
        </p>

        <p className='text-xs sm:text-sm max-w-md xl:max-w-4xl mx-auto'>
          Special thanks to{' '}
          {SPECIAL_THANKS.map((item, index) => (
            <React.Fragment key={item.href}>
              <FooterLink href={item.href}>{item.label}</FooterLink>
              {index < SPECIAL_THANKS.length - 1 && ', '}
              {index === SPECIAL_THANKS.length - 2 && 'and '}
            </React.Fragment>
          ))}{' '}
          for empowering the development of this website.
        </p>

        <div className='flex items-center justify-center gap-4 sm:gap-5 pt-2'>
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
              <Icon
                width={20}
                height={20}
                className='text-foreground transition-colors duration-300 hover:text-primary'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
