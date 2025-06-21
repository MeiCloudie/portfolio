import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShineBorder } from '@/components/magicui/shine-border'
import { AuroraText } from '@/components/magicui/aurora-text'
import { type SkillCategory, SKILL_COLORS } from '@/lib/constants'
import SkillItem from './skill-item'

type SkillCardProps = {
  category: SkillCategory
}

const SkillCard = ({ category }: SkillCardProps) => {
  return (
    <Card className='relative overflow-hidden w-full p-10'>
      <ShineBorder borderWidth={3} shineColor={SKILL_COLORS} />
      <CardHeader>
        <CardTitle>
          <AuroraText className='font-bold leading-tight text-3xl sm:text-4xl' colors={SKILL_COLORS}>
            {category.title}
          </AuroraText>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10'>
          {category.skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default SkillCard
