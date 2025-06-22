'use client'

import { useEffect, useState } from 'react'

export type Section = 'about' | 'skills' | 'projects' | 'work-experience' | 'education' | 'contact'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<Section | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>(
        '#about, #skills, #projects, #work-experience, #education, #contact'
      )

      const scrollPosition = window.scrollY + window.innerHeight / 3 // Offset for better UX

      let currentSection: Section | null = null

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = window.scrollY + rect.top
        const sectionBottom = sectionTop + rect.height

        // Check if the scroll position is within the section
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          currentSection = section.id as Section
        }
      })

      // If no section is found with the offset, use the traditional method
      if (!currentSection) {
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect()

          // Section is considered active if it's in the upper half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.id as Section
          }
        })
      }

      // If still no section found, find the closest one
      if (!currentSection) {
        let closestSection: Section | null = null
        let closestDistance = Infinity

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect()
          const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)

          if (distance < closestDistance) {
            closestDistance = distance
            closestSection = section.id as Section
          }
        })

        currentSection = closestSection
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener with throttling
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [activeSection])

  return activeSection
}
