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

  useEffect(() => {
    setIsFirstRender(false)
  }, [])


  const handleNavigation = (path: string) => {
    if (path === pathname) return
    
    setIsAnimatingOut(true)
    setNextPath(path)
    
    
    setTimeout(() => {
      router.push(path)
      
      setTimeout(() => {
        setIsAnimatingOut(false)
        setNextPath(null)
      }, 100)
    }, 600) 
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