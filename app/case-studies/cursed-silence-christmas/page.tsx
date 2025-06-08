"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Ghost, Music, Puzzle, Volume2 } from "lucide-react"

export default function CursedSilenceChristmasPage() {
  return (
    <CaseStudyLayout
      title="Cursed Silence: Christmas"
      subtitle="Follow mysterious clues and discover the main character's mental struggles"
      gameInfo={{
        engine: "Unity 2022.3",
        platform: "PC (Windows)",
        genre: "Psychological Horror",
        developmentTime: "2 months",
        status: "Released",
        teamSize: "Solo Developer",
      }}
      coverImage="/placeholder.svg?height=600&width=1200"
      techStack={[
        { name: "Unity 2022.3" },
        { name: "C#" },
        { name: "Post-Processing" },
        { name: "Audio Mixer" },
        { name: "Particle Systems" },
        { name: "Timeline" },
      ]}
    >
      <SectionHeading>Challenge</SectionHeading>
      <p>
        Create psychological horror using familiar Christmas imagery. Transform festive elements into unsettling
        metaphors for mental health struggles during the holiday season.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Cursed Silence Christmas gameplay"
        caption="Distorted Christmas decorations create an unsettling atmosphere"
      />

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Ghost className="w-5 h-5" />}
          title="Holiday Horror Atmosphere"
          description="Christmas decorations and festive music create an eerie contrast with dark themes"
        />
        <FeatureCard
          icon={<Music className="w-5 h-5" />}
          title="Distorted Audio Design"
          description="Traditional carols slowed down and pitch-shifted to create unease"
        />
        <FeatureCard
          icon={<Puzzle className="w-5 h-5" />}
          title="Environmental Storytelling"
          description="Story told through visual metaphors and decaying Christmas imagery"
        />
        <FeatureCard
          icon={<Volume2 className="w-5 h-5" />}
          title="Psychological Narrative"
          description="Respectful exploration of seasonal depression and holiday isolation"
        />
      </div>

      <SectionHeading>Technical Solutions</SectionHeading>
      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Dynamic Audio System:</strong> Real-time pitch shifting and reverb effects on Christmas carols
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Visual Metaphor System:</strong> Christmas tree decay tied to protagonist's mental state
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Atmospheric Lighting:</strong> Color temperature shifts from warm to cold throughout progression
            </span>
          </li>
        </ul>
      </div>

      <QuoteBlock
        quote="The juxtaposition of cheerful Christmas elements with psychological horror creates a uniquely unsettling experience that resonates with players' own holiday experiences."
        author="Player Feedback"
      />

      <SectionHeading>Results</SectionHeading>
      <p>
        Successfully created horror from comfort, earning positive feedback for respectful mental health representation.
        Players reported the game helped them reflect on their own holiday experiences and mental health awareness.
      </p>
    </CaseStudyLayout>
  )
}
