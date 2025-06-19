import FileArrowDownIcon from '@/components/icon/file-arrow-down-icon'
import PaperPlaneIcon from '@/components/icon/paper-plane-icon'
import { SparklesText } from '@/components/magicui/sparkles-text'
import { WordRotate } from '@/components/magicui/word-rotate'
import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS, MAIN_SKILLS } from '@/lib/constants'
import { Spotlight } from '@/components/ui/spotlight'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about'>
      {/* Background */}
      <Spotlight className='-top-40 left-0 md:-top-20 md:left-60' fill='white' />

      {/* Introduction */}
      <div className='introduction flex flex-col-reverse xl:flex-row gap-10'>
        {/* Left: Content */}
        <div className='flex-1 flex flex-col text-center xl:text-left items-center xl:items-start justify-center gap-4'>
          <div className='flex items-center gap-2 text-2xl sm:text-3xl xl:text-4xl font-lobster'>
            <h3>Hello, I&apos;m</h3>
            <WordRotate duration={5000} className='text-primary pr-1' words={['Trương Thục Vân', 'MeiCloudie']} />
          </div>

          <div className='flex items-center gap-2 text-2xl sm:text-3xl xl:text-5xl'>
            <h1 className='mr-2'>I&apos;m a</h1>
            <SparklesText
              className='text-2xl sm:text-3xl xl:text-5xl font-medium'
              colors={{ first: '#ffa001', second: '#FE8FB5' }}
            >
              Software Engineer
            </SparklesText>
          </div>

          <p className='text-sm sm:text-xl xl:text-2xl text-balance leading-relaxed'>
            with a strong foundation in Web Development and UI/UX Design, focusing on user-centered experiences to
            deliver highly effective and impactful digital products.
          </p>

          {/* Main Skill Icons */}
          <div className='flex flex-col gap-2 mt-6'>
            <p className='text-md xl:text-lg font-medium mb-2'>My Main Skills:</p>
            <div className='flex items-center gap-6 text-lg'>
              {MAIN_SKILLS.map(({ icon: Icon, name }) => (
                <div key={name} className='flex items-center gap-2'>
                  <Icon width={32} height={32} />
                  <p className='hidden md:block'>{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className='flex flex-col md:flex-row items-center gap-6 mt-12 w-3/4 xl:w-full'>
            {/* TODO: Add PDF file */}
            <Link href='/' target='_blank' className='w-full'>
              <Button variant={'default'} className='w-full text-xl sm:text-2xl py-8'>
                <FileArrowDownIcon width={24} height={24} /> Download CV
              </Button>
            </Link>
            <Link href='#contact' className='w-full'>
              <Button variant={'outline'} className='w-full text-xl sm:text-2xl py-8'>
                <PaperPlaneIcon width={24} height={24} /> Contact Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Image & Social Media */}
        <div className='flex-1 flex items-center justify-center gap-10 sm:gap-18'>
          {/* Image */}
          <div className='relative'>
            <div className='w-[180px] sm:w-[220px] md:w-[350px] aspect-square'>
              <Image
                src='/images/avatar.jpg'
                alt='About'
                width={350}
                height={350}
                className='relative z-10 rounded-md'
              />
            </div>
            <div className='absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-[180px] sm:w-[220px] md:w-[350px] h-[300px] sm:h-[380px] md:h-[590px] bg-primary/20 rounded-md'></div>
          </div>

          {/* Social Media */}
          <div className='flex flex-col items-center justify-center gap-8 sm:gap-10 pt-2'>
            {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
                <Icon
                  width={28}
                  height={28}
                  className='text-foreground transition-colors duration-300 hover:text-primary'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements  */}
      <div className='achievements'></div>
    </section>
  )
}

export default AboutSection
