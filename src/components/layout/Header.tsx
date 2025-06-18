'use client'

import FileArrowDownIcon from '@/components/icon/file-arrow-down-icon'
import { WordRotate } from '@/components/magicui/word-rotate'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { Button } from '@/components/ui/button'
import { useActiveSection } from '@/hooks/useActiveSection'
import { NavLink } from '@/components/custom/nav-link'
import React from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
] as const

const Header = () => {
  const activeSection = useActiveSection()

  return (
    <header className='sticky top-0 z-50'>
      <div className='bg-background'>
        <div className='container pt-12 pb-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Link href='/'>
                <WordRotate
                  duration={10000}
                  className='text-4xl font-lobster text-primary pr-1'
                  words={['Trương Thục Vân', 'MeiCloudie']}
                />
              </Link>
            </div>

            <div className='flex items-center gap-14'>
              <nav className='flex items-center gap-16 text-xl font-semibold'>
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.href} href={item.href} isActive={activeSection === item.href.slice(1)}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className='flex items-center gap-2'>
                {/* TODO: Add PDF file */}
                <Link href='/'>
                  <Button variant='default' className='font-medium text-xl py-7'>
                    <FileArrowDownIcon /> Download CV
                  </Button>
                </Link>
              </div>

              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
