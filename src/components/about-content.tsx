// app/components/AboutContent.tsx
"use client"

import { BentoBox } from "@/components/bento-box"
import { TransitionLink } from "@/components/transition-link"

export function AboutContent() {
  return (
    <div className="grid grid-cols-3 gap-4 h-screen p-4 overflow-hidden">
      <BentoBox
        direction="top"
        delay={100}
        className="col-span-3 bg-blue-100 rounded-lg p-4"
      >
        <h1 className="text-2xl font-bold">About Me</h1>
        <p>Frontend developer with 5 years of experience</p>
        <TransitionLink href="/" className="mt-4 inline-block text-blue-600">
          Back to Home
        </TransitionLink>
      </BentoBox>

      <BentoBox
        direction="left"
        delay={200}
        className="bg-green-100 rounded-lg p-4"
      >
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <p>Senior Frontend Developer at TechCorp</p>
      </BentoBox>

      <BentoBox
        direction="bottom"
        delay={300}
        className="col-span-2 bg-yellow-100 rounded-lg p-4"
      >
        <h2 className="text-xl font-semibold">Education</h2>
        <p>BSc in Computer Science</p>
      </BentoBox>
    </div>
  )
}
