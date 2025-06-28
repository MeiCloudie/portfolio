'use client'

import SectionTitle from '@/components/custom/section-title'
import CopyIcon from '@/components/icon/copy-icon'
import EnvelopeOpenTextIcon from '@/components/icon/envelope-open-text-icon'
import MapLocationDotIcon from '@/components/icon/map-location-dot-icon'
import { ShineBorder } from '@/components/magicui/shine-border'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { GRADIENT_COLORS, SOCIAL_LINKS } from '@/lib/constants'
import Link from 'next/link'
import React, { useState } from 'react'

const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('tthvan.dev@gmail.com')
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <section id='contact' className='py-20'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center gap-8'>
          <SectionTitle title='Contact Me' />

          <div className='flex flex-col gap-10'>
            {/* Paragraph */}
            <div className='flex flex-col gap-2'>
              <h3 className='text-center text-balance text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium'>
                I&apos;m always open to freelance opportunities, long-term collaborations, or meaningful partnerships.
              </h3>
              <h3 className='text-center text-balance text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-medium'>
                Feel free to reach out — I read every message and will get back to you as soon as I can.
              </h3>
            </div>

            {/* Card List */}
            <div className='flex flex-col justify-center items-center gap-10 w-full'>
              {/* Address Card */}
              <Card className='relative overflow-hidden w-full p-4 sm:p-10'>
                <ShineBorder borderWidth={3} shineColor={GRADIENT_COLORS} />

                <CardContent>
                  <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-center sm:justify-start'>
                    <MapLocationDotIcon width={40} height={40} className='text-primary sm:w-[60px] sm:h-[60px]' />
                    <div className='flex flex-col gap-2 text-center sm:text-left'>
                      <h4 className='text-lg md:text-xl uppercase font-medium text-muted-foreground'>Address Point</h4>
                      <p className='text-xl md:text-2xl font-semibold'>Ho Chi Minh City, Vietnam</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mail me Card */}
              <Link href='mailto:tthvan.dev@gmail.com' className='block w-full'>
                <Card className='relative overflow-hidden w-full p-4 sm:p-10 group hover:bg-accent/40 transition-colors duration-300 cursor-pointer'>
                  <ShineBorder borderWidth={3} shineColor={GRADIENT_COLORS} />

                  <CardContent className='flex flex-col sm:flex-row gap-4 sm:gap-8 items-center'>
                    <EnvelopeOpenTextIcon width={40} height={40} className='text-primary sm:w-[60px] sm:h-[60px]' />
                    <div className='flex flex-col gap-2 text-center sm:text-left'>
                      <h4 className='text-lg md:text-xl uppercase font-medium text-muted-foreground'>Mail Me</h4>
                      <div className='flex items-center gap-2 flex-wrap justify-center sm:justify-start'>
                        <p className='text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors duration-300 break-all sm:break-normal'>
                          tthvan.dev@gmail.com
                        </p>
                        <Button
                          variant='ghost'
                          size='icon'
                          className='h-8 w-8 shrink-0'
                          onClick={(e) => {
                            e.preventDefault()
                            handleCopyEmail()
                          }}
                          aria-label='Copy email address'
                        >
                          <CopyIcon
                            width={16}
                            height={16}
                            className={`transition-all duration-200 ${isCopied ? 'text-primary scale-110' : ''}`}
                          />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* Social Links */}
              <div className='flex flex-col gap-8'>
                <h3 className='text-center text-xl md:text-2xl'>Or just connect with me via:</h3>

                <div className='flex items-center justify-center gap-8'>
                  {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                    <Link key={href} href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
                      <Icon
                        width={40}
                        height={40}
                        className='text-foreground transition-colors duration-300 hover:text-primary'
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
