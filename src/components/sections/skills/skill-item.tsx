import React from 'react'
import AwardIcon from '@/components/icon/award-icon'
import { type Skill } from '@/lib/constants'

type SkillItemProps = {
  skill: Skill
}

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div className='flex items-start gap-6 hover:text-primary transition-colors duration-300'>
      {/* Icon */}
      <div className='flex items-center justify-center relative'>
        <div className='bg-secondary p-2 rounded-full relative z-10'>
          <AwardIcon width={20} height={20} className='text-foreground' />
        </div>
        <div className='absolute -bottom-2 -right-2 w-[34px] h-[34px] rounded-full bg-primary'></div>
      </div>

      <div className='flex flex-col gap-1'>
        {/* Name */}
        <h3 className='text-xl sm:text-2xl font-bold'>{skill.name}</h3>
        {/* Level */}
        <p className='text-lg sm:text-xl text-muted-foreground'>{skill.level}</p>
      </div>
    </div>
  )
}

export default SkillItem
