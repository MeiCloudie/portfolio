'use client'

import ImageModal from '@/components/custom/image-modal'
import SectionTitle from '@/components/custom/section-title'
import { AuroraText } from '@/components/magicui/aurora-text'
import { ShineBorder } from '@/components/magicui/shine-border'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const EducationSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id='education' className='min-h-screen py-20 bg-background-lighter'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center gap-16'>
          <SectionTitle title='Education' />

          {/* I - CyberSoft Academy */}
          <div id='cybersoft-academy' className='w-full'>
            <div className='flex flex-col gap-10 xl:gap-20'>
              {/* Header */}
              <div className='flex flex-col items-center justify-between gap-4 sm:gap-6'>
                {/* Duration */}
                <p className='text-xl sm:text-2xl font-semibold text-primary-foreground dark:text-primary'>
                  Apr 2024 - Oct 2024
                </p>

                {/* Role */}
                <h4 className='text-2xl sm:text-4xl md:text-5xl uppercase font-bold'>FRONT-END DEVELOPER</h4>

                {/* Organization */}
                <h3 className='text-xl sm:text-2xl text-center italic'>CyberSoft Academy</h3>
              </div>

              {/* Introduction Section */}
              <div className='flex flex-col-reverse xl:flex-row justify-between items-center xl:items-start gap-10'>
                {/* Academy Image */}
                <div
                  className='w-full lg:w-4/5 xl:w-1/2 2xl:w-2/5 relative aspect-video rounded-lg overflow-hidden cursor-pointer'
                  onClick={() => handleImageClick('/education/cybersoft-academy.jpg')}
                >
                  <Image
                    src='/education/cybersoft-academy.jpg'
                    alt='CyberSoft Academy'
                    fill
                    sizes='100vw'
                    className='object-cover w-full h-full'
                  />
                  <ShineBorder borderWidth={3} shineColor={['#FFA001', '#FE8FB5', '#FC4100']} />
                </div>

                {/* Description */}
                <div className='w-full lg:w-4/5 xl:w-1/2 2xl:w-3/5 flex flex-col gap-4'>
                  <ul className='space-y-4 list-disc pl-4 text-pretty leading-relaxed text-base sm:text-md md:text-lg 2xl:text-xl'>
                    <li>
                      Completed Front-end Developer program at CyberSoft Academy while interning to gain practical
                      experience through real-world projects and team collaboration.
                    </li>
                    <li>
                      Gained strong foundations in HTML, CSS, JavaScript, and advanced tools like React, Tailwind CSS,
                      and Next.js through a 6-month hands-on program combining theory, real projects, and continuous
                      feedback.
                    </li>
                    <li>
                      Enhanced teamwork and communication skills through Agile training. Internship on real-world
                      projects deepened my understanding of professional development and prepared me for future tech
                      roles.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Certificate Section */}
              <div className='flex flex-col-reverse xl:flex-row-reverse justify-between items-center xl:items-start text-center xl:text-left gap-10'>
                {/* Certificate Image */}
                <div
                  className='w-full lg:w-4/5 xl:w-1/2 2xl:w-2/5 relative aspect-video rounded-lg overflow-hidden cursor-pointer'
                  onClick={() => handleImageClick('/education/cybersoft-certificate.png')}
                >
                  <Image
                    src='/education/cybersoft-certificate.png'
                    alt='CyberSoft Certificate'
                    fill
                    sizes='100vw'
                    className='object-fill w-full h-full'
                  />
                  <ShineBorder borderWidth={3} shineColor={['#FFA001', '#FE8FB5', '#FC4100']} />
                </div>

                {/* Description */}
                <div className='w-full lg:w-4/5 xl:w-1/2 2xl:w-3/5 flex flex-col gap-4'>
                  <div className='text-sm sm:text-md md:text-xl 2xl:text-2xl leading-loose space-y-2'>
                    <h3>
                      I was awarded a certificate of <br className='sm:hidden' /> completion for the 6-month <br />
                    </h3>

                    <AuroraText
                      className='font-bold leading-tight text-2xl 2xl:text-4xl'
                      colors={['#FFA001', '#FE8FB5', '#FC4100']}
                    >
                      Professional Front-End <br className='sm:hidden' /> Developer program
                    </AuroraText>

                    <h3>
                      with an <span className='font-semibold text-primary'>Excellent grade</span> and{' '}
                      <br className='sm:hidden' /> a final{' '}
                      <span className='font-semibold text-primary'>Score of 10.2/11</span>
                    </h3>
                  </div>

                  <p className='mt-4 md:mt-6 xl:border-l-4 border-primary pl-4 text-balance xl:text-pretty text-sm sm:text-md md:text-lg 2xl:text-xl italic'>
                    This achievement reflects my strong commitment, consistent performance, and readiness for real-world
                    front-end development projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* II - HUTECH University */}
          <div id='hutech-university' className='w-full'>
            <div className='flex flex-col gap-10 xl:gap-20'>
              {/* Header */}
              <div className='flex flex-col items-center justify-between gap-4 sm:gap-6'>
                {/* Duration */}
                <p className='text-xl sm:text-2xl font-semibold text-primary-foreground dark:text-primary'>
                  Sep 2020 - Sep 2024
                </p>

                {/* Role */}
                <h4 className='text-2xl sm:text-4xl md:text-5xl uppercase font-bold'>SOFTWARE ENGINEERING</h4>

                {/* Organization */}
                <h3 className='text-xl sm:text-2xl text-center italic'>
                  Ho Chi Minh City University of Technology (HUTECH)
                </h3>
              </div>

              {/* Introduction Section */}
              <div className='flex flex-col-reverse xl:flex-row justify-between items-center xl:items-start gap-10 xl:gap-16'>
                {/* Certificate Image */}
                <div
                  className='w-full lg:w-4/5 xl:w-1/2 2xl:w-2/5 relative aspect-video rounded-lg overflow-hidden cursor-pointer'
                  onClick={() => handleImageClick('/education/hutech-certificate.jpg')}
                >
                  <Image
                    src='/education/hutech-certificate.jpg'
                    alt='HUTECH Certificate'
                    fill
                    sizes='100vw'
                    className='object-fill w-full h-full'
                  />
                  <ShineBorder borderWidth={3} shineColor={['#FFA001', '#FE8FB5', '#FC4100']} />
                </div>

                {/* Description */}
                <div className='w-full lg:w-4/5 xl:w-1/2 2xl:w-3/5 flex flex-col gap-4'>
                  <ul className='space-y-4 list-disc pl-4 text-pretty leading-relaxed text-base sm:text-md md:text-lg 2xl:text-xl'>
                    <li>
                      <div className='flex flex-col gap-1'>
                        <p>Achieved GPA of 3.86/4.00.</p>
                        <Button
                          variant='link'
                          size='lg'
                          className='w-fit p-0 text-base'
                          onClick={() => handleImageClick('/education/hutech-transcript.jpg')}
                        >
                          VIEW CERTIFICATE
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className='flex flex-col gap-1'>
                        <p>Graduated as Valedictorian of the Program.</p>
                        <Button
                          variant='link'
                          size='lg'
                          className='w-fit p-0 text-base'
                          onClick={() => handleImageClick('/education/hutech-certificate.jpg')}
                        >
                          VIEW CERTIFICATE
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className='flex flex-col gap-1'>
                        <p>Achieved English B1 Certificate (CEFR).</p>
                        <Button
                          variant='link'
                          size='lg'
                          className='w-fit p-0 text-base'
                          onClick={() => handleImageClick('/education/hutech-english-b1.jpg')}
                        >
                          VIEW CERTIFICATE
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className='flex flex-col gap-1'>
                        <p>Earned Certificate in Communication and Teamwork Skills.</p>
                        <Button
                          variant='link'
                          size='lg'
                          className='w-fit p-0 text-base'
                          onClick={() => handleImageClick('/education/hutech-skills.jpg')}
                        >
                          VIEW CERTIFICATE
                        </Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Achievement Section */}
              <div className='flex flex-col-reverse xl:flex-row-reverse justify-between items-center xl:items-start gap-10 xl:gap-16'>
                {/* HUTECH Friends Image */}
                <div
                  className='w-full lg:w-4/5 xl:w-1/2 2xl:w-2/5 relative aspect-video rounded-lg overflow-hidden cursor-pointer'
                  onClick={() => handleImageClick('/education/hutech-friends.jpg')}
                >
                  <Image
                    src='/education/hutech-friends.jpg'
                    alt='HUTECH Friends'
                    fill
                    sizes='100vw'
                    className='object-cover w-full h-full'
                  />
                  <ShineBorder borderWidth={3} shineColor={['#FFA001', '#FE8FB5', '#FC4100']} />
                </div>

                {/* Description */}
                <div className='w-full lg:w-4/5 xl:w-1/2 2xl:w-3/5 flex flex-col gap-4'>
                  <h3 className='text-2xl sm:text-3xl md:text-4xl uppercase font-semibold mb-3'>Achievements</h3>
                  <ul className='space-y-4 list-disc pl-4 text-pretty leading-relaxed text-base sm:text-md md:text-lg 2xl:text-xl'>
                    <li>
                      <div className='flex flex-col gap-1'>
                        <p>Top 1 student in the Information Technology Department for the academic year 2022 - 2024.</p>
                      </div>
                    </li>
                    <li>
                      <div className='flex flex-col gap-1'>
                        <p>Outstanding student for four consecutive years from December 2020 to December 2024.</p>
                      </div>
                    </li>
                    <li>
                      <div className='flex flex-col gap-1'>
                        <p>Second Prize, Group C - IT Website Programming at IT Got Talent competition in 2023.</p>
                        <Button
                          variant='link'
                          size='lg'
                          className='w-fit p-0 text-base'
                          onClick={() => handleImageClick('/education/hutech-it-got-talent.jpg')}
                        >
                          VIEW CERTIFICATE
                        </Button>
                      </div>
                    </li>
                    <li>
                      <div className='flex flex-col gap-1'>
                        <p>Third Prize, IT Contest - Code Your Future sponsored by CJ company in 2023.</p>
                        <Button
                          variant='link'
                          size='lg'
                          className='w-fit p-0 text-base'
                          onClick={() => handleImageClick('/education/hutech-code-your-future.jpg')}
                        >
                          VIEW CERTIFICATE
                        </Button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal isOpen={!!selectedImage} onClose={handleCloseModal}>
        <div className='relative w-[80vw] h-[80vh]'>
          {selectedImage && (
            <Image src={selectedImage} alt='Enlarged view' fill sizes='80vw' className='object-contain' priority />
          )}
        </div>
      </ImageModal>
    </section>
  )
}

export default EducationSection
