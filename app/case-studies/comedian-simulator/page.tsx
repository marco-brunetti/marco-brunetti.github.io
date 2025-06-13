"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Users, Clock, Zap, MessageSquare } from "lucide-react"

export default function ComedianSimulatorPage() {
  return (
    <CaseStudyLayout
      title="Stand Up: Comedian Simulator"
      subtitle="Experience your first comedy gig - do you have what it takes?"
      gameInfo={{
        engine: "Unity 2022.3",
        platform: "PC (Windows)",
        genre: "Simulation / Comedy",
        developmentTime: "10 days",
        status: "Released",
        teamSize: "Solo Developer",
      }}
      coverImage="/images/comedian_sim_cover.png?height=600&width=1200"
      techStack={[
        { name: "Unity 2022.3" },
        { name: "C#" },
        { name: "Events"},
        { name: "Audio System" },
        { name: "Animation System" },
        { name: "UI Toolkit" },
      ]}
    >
      <SectionHeading>Challenge</SectionHeading>
      <p>
        Simulate realistic crowd dynamics and comedy timing. Create a joke selection system where timing is key to get higher scores. Develop a polished concept in only 10 days.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Comedy club stage"
        caption="Dynamic crowd responds realistically to different humor types"
      />

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Users className="w-5 h-5" />}
          title="Joke System"
          description="A system that serves random good and bad jokes dynamically"
        />
        <FeatureCard
          icon={<Clock className="w-5 h-5" />}
          title="Timing-Based Gameplay"
          description="Success depends on reading the room and comedic timing"
        />
      </div>

      <SectionHeading>Technical Solutions</SectionHeading>
      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Individual Joke Data:</strong> Each joke contains data that is used to progress in the game
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Event-Driven System:</strong> Interactions between the player and the crowd are triggered by C# events
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Minimalist Level:</strong> Minimal level design to enhance core gameplay
            </span>
          </li>
        </ul>
      </div>

      <QuoteBlock
        quote="Captures the real terror and excitement of stand-up comedy."
        author="Player"
      />

      <SectionHeading>Results</SectionHeading>
      <p>
        Created minimal but authentic comedy club experience with realistic crowd dynamics. Players reported feeling genuine stage
        fright enhanced by the short timing.
      </p>
    </CaseStudyLayout>
  )
}
