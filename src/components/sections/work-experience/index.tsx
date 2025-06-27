import SectionTitle from '@/components/custom/section-title'
import { WORK_EXPERIENCES } from '@/lib/constants'
import React from 'react'
import WorkExperienceItem from './work-experience-item'
import { Spotlight } from '@/components/ui/spotlight-new'

const WorkExperienceSection = () => {
  return (
    <section id='work-experience' className='min-h-screen py-20 relative'>
      <div className='absolute inset-0 overflow-hidden'>
        <Spotlight />
      </div>
      <div className='container relative'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <SectionTitle title='Work Experience' />

          <div className='flex flex-col gap-8 w-full max-w-4xl'>
            {WORK_EXPERIENCES.map((experience, index) => (
              <WorkExperienceItem key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperienceSection
