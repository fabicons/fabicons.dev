// app/components/BentoBox.tsx
'use client'

import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useTransitionContext } from './providers/transition-provider'

interface BentoBoxProps {
  direction: 'top' | 'right' | 'bottom' | 'left'
  delay: number
  className?: string
  children: React.ReactNode
}

const directionMap = {
  top: { y: -100, x: 0 },
  right: { x: 100, y: 0 },
  bottom: { y: 100, x: 0 },
  left: { x: -100, y: 0 },
}

export function BentoBox({
  direction,
  delay,
  className = '',
  children,
}: BentoBoxProps) {
  const { isAnimatingOut } = useTransitionContext()
  const [isVisible, setIsVisible] = useState(false)
  
  // Get the appropriate transform values based on direction
  const { x: initialX = 0, y: initialY = 0 } = directionMap[direction] || {}

  useEffect(() => {
    // Trigger entrance animation after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [delay])

  // Create the animation for the box
  const props = useSpring({
    from: { opacity: 0, x: initialX, y: initialY },
    to: {
      opacity: isVisible && !isAnimatingOut ? 1 : 0,
      x: isVisible && !isAnimatingOut ? 0 : initialX,
      y: isVisible && !isAnimatingOut ? 0 : initialY,
    },
    config: { mass: 1, tension: 280, friction: 60 },
    delay: isAnimatingOut ? 0 : delay,
  })

  return (
    <animated.div 
      style={props} 
      className={`bento-box ${className}`}
    >
      {children}
    </animated.div>
  )
}