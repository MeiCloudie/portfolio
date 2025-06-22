import SectionTitle from '@/components/custom/section-title'
import React from 'react'

const ProjectsSection = () => {
  return (
    <section id='projects' className='min-h-screen'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <SectionTitle title='Projects' />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
