import XmarkIcon from '@/components/icon/xmark-icon'
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const ImageModal = ({ isOpen, onClose, children }: ImageModalProps) => {
  const [shouldRender, setShouldRender] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      // Trigger animation after a small delay to ensure DOM is ready
      setTimeout(() => setIsAnimating(true), 10)
    } else {
      setIsAnimating(false)
      // Wait for animation to complete before unmounting
      setTimeout(() => setShouldRender(false), 300)
    }
  }, [isOpen])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out
        ${isAnimating ? 'bg-black/50 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-none'}`}
      onClick={onClose}
    >
      <div
        className={`relative max-w-[90vw] max-h-[90vh] transition-all duration-300 ease-in-out
          ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          onClick={onClose}
          variant='default'
          className={`absolute -top-10 right-0 p-2 transition-all duration-300
            ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          size='icon'
        >
          <XmarkIcon className='w-6 h-6' />
        </Button>
        <div className={`transition-all duration-300 ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ImageModal
