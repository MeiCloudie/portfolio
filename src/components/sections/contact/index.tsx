import SectionTitle from '@/components/custom/section-title'
import React from 'react'

const ContactSection = () => {
  return (
    <section id='contact' className='min-h-screen'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <SectionTitle title='Contact' />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
