// app/components/TransitionProvider.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type TransitionContextType = {
  isAnimatingOut: boolean
  nextPath: string | null
  handleNavigation: (path: string) => void
}

const TransitionContext = createContext<TransitionContextType>({
  isAnimatingOut: false,
  nextPath: null,
  handleNavigation: () => {},
})

export function useTransitionContext() {
  return useContext(TransitionContext)
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [nextPath, setNextPath] = useState<string | null>(null)
  const [isFirstRender, setIsFirstRender] = useState(true)

  // Control body overflow based on screen size and animation state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // For larger screens, always keep overflow hidden
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      } else {
        // For smaller screens, allow scrolling
        document.documentElement.style.overflow = 'auto'
        document.body.style.overflow = 'auto'
      }
    }

    // Set initial state
    handleResize()
    
    // Listen for resize events
    window.addEventListener('resize', handleResize)
    
    // Set first render to false after mounting
    setIsFirstRender(false)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Function to handle custom navigation with animations
  const handleNavigation = (path: string) => {
    if (path === pathname) return
    
    setIsAnimatingOut(true)
    setNextPath(path)
    
    // Wait for exit animations to complete before navigating
    setTimeout(() => {
      router.push(path)
      
      // Reset animation state after pushing the route
      setTimeout(() => {
        setIsAnimatingOut(false)
        setNextPath(null)
      }, 100)
    }, 600) // Match this with your animation duration
  }

  return (
    <TransitionContext.Provider 
      value={{ 
        isAnimatingOut, 
        nextPath, 
        handleNavigation 
      }}
    >
      {children}
    </TransitionContext.Provider>
  )
}