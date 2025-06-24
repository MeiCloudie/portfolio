import Link from 'next/link'
import React from 'react'
import { SOCIAL_LINKS, SPECIAL_THANKS } from '@/lib/constants'

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
    <footer className='py-8 sm:py-10 border-t bg-background-lighter'>
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
