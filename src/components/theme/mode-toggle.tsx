'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import SunIcon from '@/components/icon/sun-icon'
import MoonIcon from '@/components/icon/moon-icon'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label='Toggle theme'
      className='cursor-pointer transition-colors hover:text-primary'
    >
      <div className='relative w-6 h-6'>
        <div className='absolute inset-0 transform transition-transform duration-500 scale-100 rotate-0 dark:scale-0 dark:-rotate-90'>
          <SunIcon width={24} height={24} />
        </div>
        <div className='absolute inset-0 transform transition-transform duration-240 scale-0 rotate-90 dark:scale-100 dark:rotate-0'>
          <MoonIcon width={24} height={24} />
        </div>
      </div>
    </button>
  )
}
