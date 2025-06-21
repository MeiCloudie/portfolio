import AboutSection from '@/components/sections/about'
import SkillsSection from '@/components/sections/skills'

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <AboutSection />

      <SkillsSection />

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
