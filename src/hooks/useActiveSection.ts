'use client'

import { useEffect, useState } from 'react'

export type Section = 'about' | 'skills' | 'projects' | 'work-experience' | 'education' | 'contact'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<Section | null>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as Section)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    const sections = document.querySelectorAll<HTMLElement>(
      '#about, #skills, #projects, #work-experience, #education, #contact'
    )
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return activeSection
}
