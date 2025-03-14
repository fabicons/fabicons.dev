// app/components/HomeContent.tsx
'use client'

import { BentoBox } from './bento-box'
import { TransitionLink } from './transition-link'


export function HomeContent() {
  return (
    // Add overflow-hidden to the main container on larger screens
    <div className="grid grid-cols-3 gap-4 h-screen p-4 overflow-hidden">
      <BentoBox 
        direction="right" 
        delay={100}
        className="col-span-2 bg-blue-100 rounded-lg p-4"
      >
        <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
        <p>Frontend developer specializing in React and Next.js</p>
      </BentoBox>
      
      <BentoBox 
        direction="right" 
        delay={200}
        className="bg-green-100 rounded-lg p-4 flex items-center justify-center"
      >
        <TransitionLink href="/about" className="text-lg font-medium">
          About Me
        </TransitionLink>
      </BentoBox>
      
      <BentoBox 
        direction="left" 
        delay={300}
        className="bg-yellow-100 rounded-lg p-4"
      >
        <h2 className="text-xl font-semibold">Latest Project</h2>
        <p>E-commerce platform built with Next.js</p>
      </BentoBox>
      
      <BentoBox 
        direction="bottom" 
        delay={400}
        className="col-span-2 bg-purple-100 rounded-lg p-4"
      >
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex gap-2 mt-2 flex-wrap">
          <span className="px-2 py-1 bg-purple-200 rounded">React</span>
          <span className="px-2 py-1 bg-purple-200 rounded">Next.js</span>
          <span className="px-2 py-1 bg-purple-200 rounded">TypeScript</span>
          <span className="px-2 py-1 bg-purple-200 rounded">Tailwind</span>
        </div>
      </BentoBox>
    </div>
  )
}