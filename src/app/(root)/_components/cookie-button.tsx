"use client"

import { useRef, useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import { toast } from "sonner"
import { buttonVariants } from "@/components/ui/button"
import { Cookie as Cookie1 } from "lucide-react"
import { Cookie2, Cookie } from "~/icons"

const CookieButton = () => {
  const [clickCount, setClickCount] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Spring animation for button press
  const buttonAnimation = useSpring({
    scale: clickCount >= 3 ? 1.05 : 1,
    config: { tension: 300, friction: 10 },
  })

  const handleCookieClick = () => {
    if (clickCount >= 3) return

    const newCount = clickCount + 1
    setClickCount(newCount)

    if (newCount === 3) {
      // Show toast when cookie is fully eaten
      toast(
        <pre className="font-mono text-[0.5rem] sm:text-xs leading-[0.5rem] sm:leading-[0.7rem] whitespace-pre overflow-hidden w-full">
          {`
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬜⬜⬜⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬜⬜⬛⬛⬛⬜⬜⬜⬛⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬜⬛⬛⬜⬛⬜⬜⬜⬜⬜⬛⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬜⬛⬛⬜⬛⬜⬛⬛⬜⬜⬛⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬜⬜⬜⬜⬛⬜⬛⬛⬜⬜⬛⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬛⬛⬛⬜⬜⬜⬛🟦⬛⬜⬜⬜⬛⬛⬛⬛⬛⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬛🟦🟦🟦🟦🟦⬛⬛⬛⬛🟦⬛⬛⬛⬛🟦🟦🟦🟦🟦⬛⬛⬜
⬜⬜⬜⬜⬜⬜⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬜
⬜⬜⬜⬜⬜⬜⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛
⬜⬜⬜⬜⬜⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛
⬜⬜⬜⬜⬜⬛🟦🟦🟦⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬜⬜⬜⬜⬛⬛🟦🟦🟦🟦⬛⬛🟦🟦🟦🟦🟦🟦🟦⬛⬛⬛🟦🟦🟦🟦🟦🟦⬛⬜
⬜⬜⬜⬜⬜⬜⬛🟦🟦🟦🟦🟦🟦⬛⬛⬛⬛⬛⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛
⬜⬜⬜⬜⬜⬜⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛
⬜⬜⬜⬜⬜⬜⬜⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬛⬜
⬜⬜⬜⬜⬜⬜⬛🟦⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬛⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬛🟦🟦⬛⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬛🟦🟦🟦🟦🟦🟦⬛⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬛🟦🟦⬛⬛⬛⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬛🟦⬛🟧🟧🟧🟧🟧⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬛🟦⬛🟧🟧🟫🟧🟧🟫🟧🟧⬛🟦🟦🟦🟦🟦🟦🟦🟦⬛⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬛🟦⬛🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧⬛🟦🟦🟦🟦🟦🟦🟦⬛⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬛🟦⬛🟧🟧🟧⬛⬛⬛⬛⬛⬛🟧⬛🟦🟦🟦🟦🟦🟦⬛⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬛🟦🟦⬛🟧🟧🟧⬛🟦🟦🟦🟦🟦⬛⬛⬛🟦🟦🟦🟦🟦⬛⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬛🟦🟦⬛🟧🟫🟧🟧⬛⬛🟦🟦🟦🟦🟦🟦⬛⬛🟦🟦🟦⬛⬜⬜⬜⬜⬜⬜⬜
⬜⬛🟦🟦🟦⬛🟧🟧🟧⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛🟦🟦⬛⬜⬜⬜⬜⬜⬜⬜
⬜⬛🟦🟦🟦⬛🟧🟧🟧⬛⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛🟦🟦⬛⬜⬜⬜⬜⬜⬜
⬛🟦🟦🟦🟦🟦⬛🟧⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛🟦⬛⬜⬜⬜⬜⬜⬜
⬛🟦🟦🟦🟦🟦⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬛⬜⬜⬜⬜⬜⬜
⬛🟦🟦🟦🟦🟦🟦⬛⬛⬛⬛⬛⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬛⬜⬜⬜⬜⬜
⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬛🟦🟦🟦🟦🟦🟦🟦🟦🟦⬛⬜⬜⬜⬜⬜
            `}
        </pre>
      )
    }
  }

  // Choose the correct cookie icon based on click count
  const renderCookieIcon = () => {
    switch (clickCount) {
      case 0:
        return <Cookie width={28} height={28} />
      case 1:
        return <Cookie1 width={28} height={28} />
      case 2:
        return <Cookie2 width={28} height={28} />
      default:
        return null // No icon on third click
    }
  }

  return (
    <animated.button
      ref={buttonRef}
      className={`w-auto lg:col-span-1 lg:row-span-1 lg:col-start-5 lg:h-full ${buttonVariants(
        {
          variant: "brutalist",
        }
      )} `}
      onClick={handleCookieClick}
      aria-label="Eat cookie"
      style={{
        transform: buttonAnimation.scale.to((scale) => `scale(${scale})`),
      }}
      type="button"
    >
      {renderCookieIcon()}
    </animated.button>
  )
}

export default CookieButton
