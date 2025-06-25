import { Badge } from '@/components/ui/badge'
import { WorkExperience } from '@/lib/constants'
import BriefcaseIcon from '@/components/icon/briefcase-icon'
import React from 'react'

interface WorkExperienceItemProps {
  experience: WorkExperience
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ experience }) => {
  return (
    <div className='relative flex flex-col gap-4 border-l-3 border-primary ml-4 sm:ml-8 lg:ml-0 pl-8 sm:pl-12 pb-10'>
      {/* Timeline Dot */}
      <div className='absolute -left-6.5 p-3 rounded-full bg-primary'>
        <BriefcaseIcon width={24} height={24} className='text-primary-foreground' />
      </div>

      {/* Duration */}
      <Badge variant='secondary' className='text-base'>
        {experience.duration}
      </Badge>

      <div className='space-y-1 mb-3'>
        {/* Position */}
        <h3 className='text-primary-foreground dark:text-primary text-2xl sm:text-3xl font-semibold'>
          {experience.position}
        </h3>

        {/* Company & Location */}
        <div className='flex sm:flex-row flex-col text-lg text-muted-foreground'>
          <div>{experience.company}</div>
          <div className='hidden sm:block'>&nbsp;-&nbsp;</div>
          <div>{experience.location}</div>
        </div>
      </div>

      {/* Description */}
      <ul className='list-disc pl-4 space-y-2 text-pretty text-base text-foreground'>
        {experience.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className='flex flex-wrap gap-2 mt-2'>
        <h4 className='text-xl dark:text-primary text-primary-foreground font-semibold'>Tech Stack:</h4>
        {experience.techStack.map((tech, index) => (
          <Badge key={index} variant='secondary' className='text-sm'>
            {tech}
          </Badge>
        ))}
      </div>

      {/* Supervisor */}
      <div className='flex flex-row items-center gap-2 mt-3 text-base text-muted-foreground'>
        <div className='flex flex-col sm:flex-row gap-0 sm:gap-2 items-start'>
          <div className='flex flex-row items-center gap-2 mb-2'>
            <div className='hidden sm:block w-7 h-0.5 bg-muted-foreground rounded-full'></div>
            <div className='font-semibold text-xl sm:text-base'>Supervisor:</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div>{experience.supervisor.fullName}</div>
            <div className='italic'>({experience.supervisor.position})</div>
            <div>{experience.supervisor.email}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceItem
