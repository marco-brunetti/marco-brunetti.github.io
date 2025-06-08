"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Puzzle, Eye, Lightbulb, BookOpen } from "lucide-react"

export default function ReflectionAbyssPage() {
  return (
    <CaseStudyLayout
      title="Reflection from the Abyss"
      subtitle="Escape a mysterious room in this Greek mythology inspired game"
      gameInfo={{
        engine: "Unity 2021.3",
        platform: "PC (Windows)",
        genre: "Puzzle / Adventure",
        developmentTime: "4 months",
        status: "Released",
        teamSize: "Solo Developer",
      }}
      coverImage="/placeholder.svg?height=600&width=1200"
      techStack={[
        { name: "Unity 2021.3" },
        { name: "C#" },
        { name: "Universal Render Pipeline" },
        { name: "Cinemachine" },
        { name: "Shader Graph" },
        { name: "Timeline" },
      ]}
    >
      <SectionHeading>Challenge</SectionHeading>
      <p>
        Create authentic Greek mythology puzzles that feel natural to the ancient world while engaging modern players.
        Balance historical accuracy with intuitive gameplay.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Reflection from the Abyss environment"
        caption="Authentic Greek architecture with integrated puzzle mechanics"
      />

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Puzzle className="w-5 h-5" />}
          title="Mythology-Based Puzzles"
          description="Puzzles rooted in actual Greek myths and ancient logic systems"
        />
        <FeatureCard
          icon={<Eye className="w-5 h-5" />}
          title="Environmental Storytelling"
          description="Story revealed through authentic Greek art and architecture"
        />
        <FeatureCard
          icon={<Lightbulb className="w-5 h-5" />}
          title="Discovery-Based Learning"
          description="No tutorials - players learn through experimentation and observation"
        />
        <FeatureCard
          icon={<BookOpen className="w-5 h-5" />}
          title="Historical Accuracy"
          description="Researched classical Greek pottery, sculptures, and temple designs"
        />
      </div>

      <SectionHeading>Technical Solutions</SectionHeading>
      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Flexible State Management:</strong> Complex puzzle interconnections with robust save system
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Subtle Feedback System:</strong> Visual/audio cues guide without breaking immersion
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Performance Optimization:</strong> LOD and occlusion culling for detailed environments
            </span>
          </li>
        </ul>
      </div>

      <QuoteBlock
        quote="Feels like solving actual ancient puzzles - the historical research really shows in the authentic design."
        author="Player Feedback"
      />

      <SectionHeading>Results</SectionHeading>
      <p>
        Successfully created puzzles that felt historically authentic while remaining accessible. Players appreciated
        the educational value and immersive atmosphere, with many researching Greek mythology after playing.
      </p>
    </CaseStudyLayout>
  )
}
