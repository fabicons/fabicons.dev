// app/page.tsx
import { TransitionProvider } from '@/components/providers/transition-provider'
import { HomeContent } from '@/components/home-content'

export default function Home() {
  return (
    <TransitionProvider>
      <HomeContent />
    </TransitionProvider>
  )
}