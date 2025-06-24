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

const Header = () => {
  const activeSection = useActiveSection()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50'>
      <div className='bg-background/80 backdrop-blur-md'>
        <div className='container pt-12 pb-8'>
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
            <div className='hidden lg:flex items-center gap-10 xl:gap-14'>
              <nav className='flex items-center gap-10 xl:gap-16'>
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

              {/* Theme Toggle */}
              <ModeToggle />
            </div>

            <div className='flex lg:hidden items-center gap-4'>
              {/* Theme Toggle */}
              <ModeToggle />

              {/* Mobile Navigation Toggle */}
              <Button
                variant='ghost'
                size='icon'
                className='h-10 w-10 transition-colors duration-300 hover:text-primary hover:bg-transparent hover:dark:bg-transparent'
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <BarsStaggeredIcon width={24} height={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 h-fit bg-background/50 backdrop-blur-md z-50'
          >
            <div className='container py-14'>
              <div className='flex items-center justify-between mb-8'>
                <h2 className='text-3xl font-bold'>Menu</h2>
                <Button variant='ghost' size='icon' className='h-10 w-10' onClick={() => setIsMobileMenuOpen(false)}>
                  <XmarkIcon width={24} height={24} />
                </Button>
              </div>

              <div className='flex flex-col gap-2 mb-8'>
                <h1 className='text-2xl font-lobster'>Trương Thục Vân</h1>
                <p className='text-lg font-semibold text-primary'>Software Engineer</p>
              </div>

              <nav className='flex flex-col items-start gap-8'>
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className='flex flex-col items-start mt-8 text-primary'>
                {/* TODO: Add PDF file */}
                <NavLink key={'/'} href={'/'} onClick={() => setIsMobileMenuOpen(false)}>
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
