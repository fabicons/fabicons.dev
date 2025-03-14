// app/about/page.tsx
import { TransitionProvider } from '@/components/providers/transition-provider'
import { AboutContent } from '@/components/about-content'

export default function About() {
  return (
    <TransitionProvider>
      <AboutContent />
    </TransitionProvider>
  )
}