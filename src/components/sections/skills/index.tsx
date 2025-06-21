'use client'

import React from 'react'
import SectionTitle from '@/components/custom/section-title'
import { SKILLS } from '@/lib/constants'
import SkillCard from './skill-card'

const SkillsSection = () => {
  return (
    <section id='skills'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <SectionTitle title='Technical Skills' />

          {SKILLS.map((category, index) => (
            <div key={index} id={`skills-${category.title.toLowerCase().replace(' ', '-')}`} className='w-full'>
              <SkillCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
