"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Ghost, Eye, Volume2, Brain } from "lucide-react"

export default function CursedSilencePage() {
  return (
    <CaseStudyLayout
      title="Cursed Silence"
      subtitle="A psychological horror experience exploring the depths of the human mind"
      gameInfo={{
        engine: "Unity 2021.2",
        platform: "PC (Windows)",
        genre: "Psychological Horror",
        developmentTime: "6 months",
        status: "Released",
        teamSize: "Solo Developer",
      }}
      coverImage="/placeholder.svg?height=600&width=1200"
      techStack={[
        { name: "Unity 2021.2" },
        { name: "C#" },
        { name: "Post-Processing" },
        { name: "Audio Mixer" },
        { name: "Cinemachine" },
        { name: "Shader Graph" },
      ]}
    >
      <SectionHeading>Challenge</SectionHeading>
      <p>
        Create psychological horror without jump scares or violence. Build tension through environmental storytelling
        and respectful mental health representation.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Cursed Silence environment"
        caption="Subtle environmental changes reflect the protagonist's mental state"
      />

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Ghost className="w-5 h-5" />}
          title="Atmospheric Horror"
          description="Psychological tension through environment and sound, not jump scares"
        />
        <FeatureCard
          icon={<Eye className="w-5 h-5" />}
          title="Environmental Storytelling"
          description="Story told through subtle visual changes and symbolic imagery"
        />
        <FeatureCard
          icon={<Volume2 className="w-5 h-5" />}
          title="Adaptive Audio"
          description="Sound design responds to player behavior and story progression"
        />
        <FeatureCard
          icon={<Brain className="w-5 h-5" />}
          title="Mental Health Themes"
          description="Respectful exploration of trauma and recovery with professional consultation"
        />
      </div>

      <SectionHeading>Technical Solutions</SectionHeading>
      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Dynamic Environment System:</strong> Subtle changes reflect protagonist's mental state
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Personalized Audio:</strong> Adaptive sound system responds to player behavior
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>State Management:</strong> Complex scene transitions triggered by player progress
            </span>
          </li>
        </ul>
      </div>

      <QuoteBlock
        quote="A thoughtful approach to mental health in gaming - creates empathy rather than sensationalizing struggle."
        author="Mental Health Professional"
      />

      <SectionHeading>Results</SectionHeading>
      <p>
        Successfully created meaningful horror that resonated beyond gaming. Players reported increased mental health
        awareness and empathy, achieving the goal of respectful representation.
      </p>
    </CaseStudyLayout>
  )
}
