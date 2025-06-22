import AboutSection from '@/components/sections/about'
import ContactSection from '@/components/sections/contact'
import ProjectsSection from '@/components/sections/projects'
import SkillsSection from '@/components/sections/skills'

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <section id='work-experience' className='h-screen'>
        <p>Work Experience</p>
      </section>

      <section id='education' className='h-screen'>
        <p>Education</p>
      </section>

      <ContactSection />
    </div>
  )
}
