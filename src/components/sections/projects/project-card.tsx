'use client'

import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import GitHubLogo from '@/components/logo/github-logo'
import VideoIcon from '@/components/icon/video-icon'
import { Project } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MagicCard } from '@/components/magicui/magic-card'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { theme } = useTheme()

  return (
    <Card className='group relative overflow-hidden w-full h-full shadow-none border-none p-0'>
      <MagicCard
        gradientSize={300}
        gradientColor={theme === 'dark' ? '#262626' : '#ffe08880'}
        gradientFrom={'#FFA001'}
        gradientTo={'#ffdd7f'}
        className='h-full flex flex-col overflow-visible [&>div:nth-child(2)]:inset-[3px] [&>div:nth-child(3)]:inset-[3px]'
      >
        <CardContent className='p-8 flex-grow flex flex-col'>
          <div className='relative mb-6'>
            {/* Project Image */}
            <div className='relative aspect-video overflow-hidden rounded-lg'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
            </div>
          </div>

          {/* Project Info */}
          <div className='flex-grow flex flex-col'>
            {/* Platform */}
            <div className='flex flex-row items-center gap-2 mb-2'>
              <div className='w-7 h-0.5 bg-muted-foreground rounded-full'></div>
              <span className='text-sm sm:text-base text-muted-foreground'>{project.platform.join(' • ')}</span>
            </div>

            {/* Title */}
            <div className='mb-4 flex items-start justify-between'>
              <div>
                <h3 className='truncate text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary-foreground group-hover:dark:text-primary transition-colors duration-300'>
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className='mb-4 text-sm sm:text-base text-foreground text-pretty flex-grow'>{project.description}</p>

            {/* Technologies Badge */}
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant='secondary'>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className='p-6 pt-0 mt-auto'>
          <div className='flex flex-row gap-2 w-full'>
            {/* Live Demo Button */}
            <Link href={project.demo} target='_blank' rel='noopener noreferrer' className='flex-1'>
              <Button variant={'default'} size={'lg'} className='w-full sm:text-base'>
                <VideoIcon width={16} height={16} />
                Live Demo
              </Button>
            </Link>

            {/* GitHub Link */}
            <Link href={project.sourceCode} target='_blank' rel='noopener noreferrer' className='flex-1'>
              <Button variant={'secondary'} size={'lg'} className='w-full sm:text-base'>
                <GitHubLogo width={16} height={16} />
                Source Code
              </Button>
            </Link>
          </div>
        </CardFooter>
      </MagicCard>
    </Card>
  )
}

export default ProjectCard
