import AboutSection from '@/components/sections/about'

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <AboutSection />

      <section id='skills' className='h-screen'>
        <p>Skills</p>
      </section>

      <section id='projects' className='h-screen'>
        <p>Projects</p>
      </section>

      <section id='work-experience' className='h-screen'>
        <p>Work Experience</p>
      </section>

      <section id='education' className='h-screen'>
        <p>Education</p>
      </section>

      <section id='contact' className='h-screen'>
        <p>Contact</p>
      </section>
    </div>
  )
}
