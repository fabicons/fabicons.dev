"use client"

import { useRef, useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import confetti from "canvas-confetti"
import { buttonVariants } from "@/components/ui/button"

const HeartButton = () => {
  const [likesCount, setLikesCount] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Spring animation for the heart fill
  const fillAnimation = useSpring({
    y: likesCount > 0 ? `${100 - likesCount * 33}%` : "100%",
    config: { tension: 300, friction: 10 },
  })

  const showConfettiAnimation = () => {
    if (!buttonRef.current) return

    const { clientWidth, clientHeight } = document.documentElement
    const boundingBox = buttonRef.current.getBoundingClientRect()

    const targetY = boundingBox.y
    const targetX = boundingBox.x
    const targetWidth = boundingBox.width

    const targetCenterX = targetX + targetWidth / 2

    confetti({
      zIndex: 999,
      particleCount: 150,
      spread: 100,
      origin: {
        y: targetY / clientHeight,
        x: targetCenterX / clientWidth,
      },
    })
  }

  const handleLikeButtonClick = () => {
    if (likesCount >= 3) return

    const newCount = likesCount + 1
    setLikesCount(newCount)

    if (newCount === 3) {
      showConfettiAnimation()
    }
  }

  return (
    <animated.button
      ref={buttonRef}
      className={`w-auto lg:col-span-1 lg:row-span-1 lg:col-start-4 lg:h-full ${buttonVariants(
        {
          variant: "brutalist",
        }
      )} `}

      
      onClick={handleLikeButtonClick}
      aria-label="Like"
      style={{ transform: useSpring({ scale: likesCount >= 3 ? 1 : 1 }).scale }}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#ef4444"
        className="relative overflow-hidden"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <clipPath id="clip-path">
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
          </clipPath>
        </defs>
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        <g clipPath="url(#clip-path)">
          <animated.rect
            x="0"
            y="0"
            width="24"
            height="24"
            fill="#ef4444"
            style={{ y: fillAnimation.y }}
          />
        </g>
      </svg>
      {/* <span className="border-l border-zinc-700 ml-1 pl-2">{likesCount}</span> */}
    </animated.button>
  )
}

export default HeartButton
