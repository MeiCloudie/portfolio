import SectionTitle from '@/components/custom/section-title'
import React from 'react'

const EducationSection = () => {
  return (
    <section id='education' className='min-h-screen py-20 bg-background-lighter'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <SectionTitle title='Education' />
        </div>
      </div>
    </section>
  )
}

export default EducationSection
