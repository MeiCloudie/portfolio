'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

interface NavLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  isActive?: boolean
}

export const NavLink = ({ isActive, className, ...props }: NavLinkProps) => {
  return (
    <Link
      className={cn(
        'relative transition-colors duration-300',
        'flex items-center gap-2 text-xl font-semibold',
        'after:absolute after:left-0 after:bottom-[-4px]',
        'after:h-[2px] after:bg-primary',
        'after:transition-all after:duration-300',
        'hover:text-primary hover:after:w-1/2',
        isActive ? 'text-primary after:w-1/2' : 'after:w-0',
        className
      )}
      {...props}
    />
  )
}
