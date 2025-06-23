import SectionTitle from '@/components/custom/section-title'
import { PROJECTS } from '@/lib/constants'
import ProjectCard from './project-card'
import React from 'react'

const ProjectsSection = () => {
  return (
    <section id='projects' className='min-h-screen py-20'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <SectionTitle title='Projects' />

          {/* Projects Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full'>
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
