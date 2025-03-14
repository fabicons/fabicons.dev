// app/components/TransitionLink.tsx
"use client"

import { useTransitionContext } from "./providers/transition-provider"

interface TransitionLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export function TransitionLink({
  href,
  className = "",
  children,
}: TransitionLinkProps) {
  const { handleNavigation } = useTransitionContext()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    handleNavigation(href)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
