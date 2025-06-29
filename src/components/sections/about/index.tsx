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
import { AuroraText } from '@/components/magicui/aurora-text'
import ChevronRightIcon from '@/components/icon/chevron-right-icon'
import { ScratchToReveal } from '@/components/magicui/scratch-to-reveal'

const AboutSection = () => {
  return (
    <section id='about' className='min-h-screen'>
      {/* Background */}
      <Spotlight className='-top-40 left-0 md:-top-20 md:left-60' fill='white' />

      {/* I - Introduction */}
      <div id='about-introduction' className='container flex flex-col-reverse xl:flex-row gap-10'>
        {/* Left: Content */}
        <div className='flex-1 flex flex-col text-center xl:text-left items-center xl:items-start justify-center gap-4'>
          <div className='flex items-center gap-2 text-2xl sm:text-3xl xl:text-4xl font-lobster'>
            <h3>Hello, I&apos;m</h3>
            <WordRotate duration={5000} className='text-primary pr-1' words={['Trương Thục Vân', 'MeiCloudie']} />
          </div>

          <div className='flex items-center gap-0 sm:gap-2 text-2xl sm:text-3xl xl:text-5xl'>
            <h1 className='mr-2'>I&apos;m a</h1>
            <SparklesText
              className='text-2xl sm:text-3xl xl:text-5xl font-medium'
              colors={{ first: '#FFA001', second: '#FE8FB5' }}
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
            <div className='w-[180px] sm:w-[220px] md:w-[350px]'>
              <Image
                src='/images/avatar.jpg'
                alt='About'
                width={350}
                height={350}
                className='relative z-10 rounded-md object-cover w-full h-full'
                priority
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

      {/* II - Achievements  */}
      <div id='about-achievements' className='mt-40 py-20 bg-background-lighter'>
        <div className='container flex flex-col xl:flex-row gap-14 2xl:gap-12'>
          {/* Left: Images */}
          <div className='flex-1 xl:basis-2/5 flex items-center justify-center'>
            <div className='relative w-full h-[500px] flex items-center justify-center'>
              {/* Graduation Image */}
              <div className='absolute transform top-0 sm:left-20 md:left-30 lg:left-70 xl:left-8 -rotate-6 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl'>
                <div className='w-[280px] sm:w-[300px] 2xl:w-[350px]'>
                  <Image
                    src='/images/graduation.jpg'
                    alt='Graduation'
                    width={350}
                    height={350}
                    className='object-cover w-full h-full'
                    priority
                  />
                </div>
              </div>

              {/* Valedictorian Medal Image */}
              <div className='absolute transform sm:left-38 md:left-50 lg:left-88 xl:left-26 2xl:left-40 rotate-12 translate-x-15 translate-y-35 sm:translate-x-45 sm:translate-y-35'>
                <div className='relative'>
                  <ScratchToReveal
                    width={180}
                    height={250}
                    minScratchPercentage={50}
                    className='flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100 shadow-xl'
                    gradientColors={['#FE8FB5', '#FFA001', '#F0B100']}
                  >
                    <Image
                      src='/images/valedictorian-medal.jpg'
                      alt='Valedictorian Medal'
                      width={150}
                      height={150}
                      className='object-cover w-full h-full'
                      priority
                    />
                  </ScratchToReveal>
                  <p className='absolute w-full text-center sm:-top-14 sm:left-1/2 -translate-x-40 -translate-y-20 sm:-translate-x-1/2 sm:-translate-y-0 text-sm font-medium text-primary animate-bounce'>
                    Scratch to reveal <br /> ✨ my medal ✨
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className='flex-1 xl:basis-3/5 flex flex-col text-center xl:text-left text-sm sm:text-xl xl:text-2xl items-center xl:items-start justify-center gap-3 md:gap-5'>
            <h5>In September 2024, I graduated as the</h5>
            <AuroraText
              className='font-bold leading-tight text-3xl sm:text-4xl md:text-5xl'
              colors={['#FFA001', '#FE8FB5', '#FC4100']}
            >
              Valedictorian in <br />
              Information Technology
            </AuroraText>

            <div className='flex flex-col sm:flex-row items-end gap-2'>
              <h5>at HUTECH University with a</h5>
              <SparklesText
                className='text-2xl sm:text-3xl xl:text-4xl font-medium'
                colors={{ first: '#FFA001', second: '#FE8FB5' }}
                sparklesCount={8}
              >
                GPA of 3.86/4.0
              </SparklesText>
            </div>

            <p className='mt-6 xl:border-l-4 border-primary pl-4 text-balance text-md sm:text-lg xl:text-xl italic'>
              This milestone reflects not only my academic dedication, but also the support and inspiration I received
              throughout the journey — for which I&apos;m truly grateful.
            </p>

            {/* Button */}
            <div className='mt-6'>
              <Link href='#education'>
                <Button variant={'link'} className='text-md sm:text-lg'>
                  View my Education <ChevronRightIcon width={18} height={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
