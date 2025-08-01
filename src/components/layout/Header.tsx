'use client'

import BarsStaggeredIcon from '@/components/icon/bars-staggered-icon'
import FileArrowDownIcon from '@/components/icon/file-arrow-down-icon'
import { WordRotate } from '@/components/magicui/word-rotate'
import { ModeToggle } from '@/components/theme/mode-toggle'
import { Button } from '@/components/ui/button'
import { useActiveSection } from '@/hooks/useActiveSection'
import { NavLink } from '@/components/custom/nav-link'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import XmarkIcon from '@/components/icon/xmark-icon'
import { CV_URL } from '@/lib/constants'

type NavItem = {
  href: string
  label: string
  icon?: React.ReactNode
}

const NAV_ITEMS: NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

const NAV_ITEMS_IN_MENU: NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#work-experience', label: 'Work Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' }
]

const Header = () => {
  const activeSection = useActiveSection()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50'>
      <div className='bg-background/80 backdrop-blur-md'>
        <div className='container pt-6 sm:pt-12 pb-4 sm:pb-8'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Link href='/'>
                <WordRotate
                  duration={10000}
                  className='text-3xl xl:text-4xl font-lobster text-primary pr-1'
                  words={['Trương Thục Vân', 'MeiCloudie']}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className='flex items-center gap-10'>
              <nav className='hidden xl:flex items-center me-3 gap-10 xl:gap-16'>
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.href} href={item.href} isActive={activeSection === item.href.slice(1)}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className='hidden xl:flex items-center gap-2'>
                <Link href={CV_URL} target='_blank'>
                  <Button variant='default' className='font-medium text-xl py-7'>
                    <FileArrowDownIcon /> Download CV
                  </Button>
                </Link>
              </div>

              <div className='flex items-center gap-4'>
                {/* Theme Toggle */}
                <ModeToggle />

                {/*  Navigation Toggle */}
                <Button
                  variant='ghost'
                  size='icon'
                  className='h-10 w-10 transition-colors duration-300 hover:text-primary hover:bg-transparent hover:dark:bg-transparent'
                  onClick={() => setIsMenuOpen(true)}
                >
                  <BarsStaggeredIcon width={24} height={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 h-fit bg-background/50 backdrop-blur-md z-50'
          >
            <div className='container py-8 sm:py-14'>
              <div className='flex items-center justify-between mb-8'>
                <h2 className='text-3xl font-bold'>Menu</h2>
                <Button variant='ghost' size='icon' className='h-10 w-10' onClick={() => setIsMenuOpen(false)}>
                  <XmarkIcon width={24} height={24} />
                </Button>
              </div>

              <div className='flex flex-col gap-2 mb-8'>
                <h1 className='text-2xl font-lobster'>Trương Thục Vân</h1>
                <p className='text-lg font-semibold text-primary'>Software Engineer</p>
              </div>

              <nav className='flex flex-col items-start gap-8'>
                {NAV_ITEMS_IN_MENU.map((item) => (
                  <NavLink key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className='flex flex-col items-start mt-8 text-primary'>
                <NavLink key={CV_URL} href={CV_URL} onClick={() => setIsMenuOpen(false)} target='_blank'>
                  DOWNLOAD CV
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
