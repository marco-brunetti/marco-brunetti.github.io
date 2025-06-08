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
        engine: "Unity 2022.1",
        platform: "PC (Windows)",
        genre: "Simulation / Comedy",
        developmentTime: "5 months",
        status: "Released",
        teamSize: "Solo Developer",
      }}
      coverImage="/placeholder.svg?height=600&width=1200"
      techStack={[
        { name: "Unity 2022.1" },
        { name: "C#" },
        { name: "Behavior Trees" },
        { name: "Audio System" },
        { name: "Animation System" },
        { name: "UI Toolkit" },
      ]}
    >
      <SectionHeading>Challenge</SectionHeading>
      <p>
        Simulate realistic crowd dynamics and comedy timing. Create an AI system where individual audience members
        influence collective mood while maintaining authentic comedy club atmosphere.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Comedy club stage"
        caption="Dynamic crowd AI responds realistically to different humor types"
      />

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Users className="w-5 h-5" />}
          title="Dynamic Crowd AI"
          description="Individual personalities that influence collective audience mood"
        />
        <FeatureCard
          icon={<Clock className="w-5 h-5" />}
          title="Timing-Based Gameplay"
          description="Success depends on reading the room and comedic timing"
        />
        <FeatureCard
          icon={<Zap className="w-5 h-5" />}
          title="Anxiety Simulation"
          description="Stress system affects available options and timing difficulty"
        />
        <FeatureCard
          icon={<MessageSquare className="w-5 h-5" />}
          title="Heckler System"
          description="Dynamic crowd disruptions require quick thinking and adaptation"
        />
      </div>

      <SectionHeading>Technical Solutions</SectionHeading>
      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Individual AI Agents:</strong> Each audience member has humor preferences and attention spans
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Collective Mood Tracking:</strong> Group dynamics influence individual reactions realistically
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Feedback Loop System:</strong> Poor performance increases anxiety, making timing harder
            </span>
          </li>
        </ul>
      </div>

      <QuoteBlock
        quote="Captures the real terror and excitement of stand-up comedy - the crowd AI feels genuinely unpredictable."
        author="Local Comedian"
      />

      <SectionHeading>Results</SectionHeading>
      <p>
        Created authentic comedy club experience with realistic crowd dynamics. Players reported feeling genuine stage
        fright, validating the anxiety simulation system's effectiveness.
      </p>
    </CaseStudyLayout>
  )
}
