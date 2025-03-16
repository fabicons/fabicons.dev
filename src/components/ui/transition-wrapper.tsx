"use client"

import { useSpring, animated } from "@react-spring/web"
import { useEffect, useState, ReactNode } from "react"
import { useTransitionContext } from "../providers/transition-provider"
import { cn } from "@/lib/utils"

const directionMap: Record<string, { x?: number; y?: number; scale?: number }> =
  {
    top: { y: -1500, x: 0 },
    right: { x: 1500, y: 0 },
    bottom: { y: 1500, x: 0 },
    left: { x: -1500, y: 0 },
    center: { scale: 0.5, x: 0, y: 0 },
  }

export interface TransitionWrapperProps {
  children: ReactNode
  animate?: boolean
  direction?: "top" | "right" | "bottom" | "left" | "center"
  delay?: number
  className?: string
}

export function TransitionWrapper({
  children,
  animate = true,
  direction = "bottom",
  delay = 0,
  className,
}: TransitionWrapperProps) {
  const { isAnimatingOut } = useTransitionContext()
  const [isVisible, setIsVisible] = useState(!animate)

  const {
    x: initialX = 0,
    y: initialY = 0,
    scale: initialScale = 1,
  } = animate ? directionMap[direction] || {} : { x: 0, y: 0, scale: 1 }

  useEffect(() => {
    if (!animate) return

    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, animate])

  const springProps = useSpring({
    from: animate
      ? {
          // opacity:0,
          opacity: direction === "center" ? 0 : 1,
          x: initialX,
          y: initialY,
          scale: direction === "center" ? initialScale : 1,
        }
      : {},
    to: animate
      ? {
          // opacity: isVisible && !isAnimatingOut ? 1: 0,
          opacity: direction === "center" ? 1 : 1,
          x: isVisible && !isAnimatingOut ? 0 : initialX,
          y: isVisible && !isAnimatingOut ? 0 : initialY,
          scale:
            isVisible && !isAnimatingOut
              ? 1
              : direction === "center"
              ? initialScale
              : 1,
        }
      : {},
    config: { mass: 1, tension: 250, friction: 60 },
    delay: delay,
    // delay: isAnimatingOut ? 0 : delay,
  }) as unknown

  if (!animate) {
    return <>{children}</>
  }

  return (
    <animated.div
      style={springProps}
      className={cn("box-transition", className)}
    >
      {children}
    </animated.div>
  )
}
