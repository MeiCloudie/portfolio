import { SparklesText } from '@/components/magicui/sparkles-text'

interface SectionTitleProps {
  title: string
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className='text-center flex flex-col items-center justify-center'>
      <SparklesText className='text-4xl sm:text-5xl xl:text-6xl' colors={{ first: '#FFA001', second: '#FE8FB5' }}>
        {title}
      </SparklesText>
      <div className='border-b-3 border-foreground w-1/2 mt-6'></div>
    </div>
  )
}

export default SectionTitle
