import React from 'react'

interface ChevronRightIconProps {
  width?: number
  height?: number
  className?: string
}

const ChevronRightIcon: React.FC<ChevronRightIconProps> = ({ width = 20, height = 20, className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 320 512'
      className={className}
      style={{ display: 'block', fill: 'currentcolor', width: width, height: height }}
    >
      {/*!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
      <path d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z' />
    </svg>
  )
}

export default ChevronRightIcon
