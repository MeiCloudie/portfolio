import AboutSection from '@/components/sections/about'
import ContactSection from '@/components/sections/contact'
import EducationSection from '@/components/sections/education'
import ProjectsSection from '@/components/sections/projects'
import SkillsSection from '@/components/sections/skills'
import WorkExperienceSection from '@/components/sections/work-experience'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <WorkExperienceSection />

      <EducationSection />

      <ContactSection />
    </div>
  )
}
