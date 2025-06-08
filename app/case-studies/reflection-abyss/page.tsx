"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { ProcessStep } from "@/components/case-study/process-step"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Puzzle, Eye, Lightbulb, Search, Star, BookOpen } from "lucide-react"

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
        { name: "Timeline" },
        { name: "Shader Graph" },
      ]}
    >
      <SectionHeading>Project Overview</SectionHeading>
      <p>
        Reflection from the Abyss is a puzzle-adventure game inspired by Greek mythology. Players find themselves
        trapped in a mysterious room and must solve intricate puzzles to escape, uncovering the story of ancient gods
        and mythical creatures along the way.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Reflection from the Abyss environment"
        caption="Ancient Greek-inspired architecture with mysterious symbols"
      />

      <p>
        The game combines environmental storytelling with challenging puzzles, creating an atmospheric experience that
        draws players into the world of Greek mythology.
      </p>

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Puzzle className="w-5 h-5" />}
          title="Mythology-Inspired Puzzles"
          description="Puzzles based on Greek myths and legends, requiring both logic and knowledge"
        />
        <FeatureCard
          icon={<Eye className="w-5 h-5" />}
          title="Environmental Storytelling"
          description="Story unfolds through visual clues and environmental details"
        />
        <FeatureCard
          icon={<Lightbulb className="w-5 h-5" />}
          title="Atmospheric Design"
          description="Immersive lighting and sound design create a mysterious ambiance"
        />
        <FeatureCard
          icon={<Search className="w-5 h-5" />}
          title="Multiple Puzzle Types"
          description="Various puzzle mechanics including symbol matching, sequence solving, and spatial reasoning"
        />
        <FeatureCard
          icon={<Star className="w-5 h-5" />}
          title="Hidden Secrets"
          description="Optional content and easter eggs for players who explore thoroughly"
        />
        <FeatureCard
          icon={<BookOpen className="w-5 h-5" />}
          title="Narrative Elements"
          description="Rich backstory revealed through discovered artifacts and inscriptions"
        />
      </div>

      <SectionHeading>Design Philosophy</SectionHeading>
      <p>
        The game was designed around the concept of "discovery through exploration." Rather than explicit tutorials,
        players learn through experimentation and observation, mirroring how ancient knowledge was passed down through
        myths and stories.
      </p>

      <QuoteBlock
        quote="True wisdom comes not from being told the answers, but from discovering them through careful observation and thoughtful experimentation."
        author="Ancient Greek Philosophy"
      />

      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <h3 className="text-hugo-text font-semibold text-lg mb-4">Research & Authenticity</h3>
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Studied classical Greek pottery and sculpture for authentic visual references</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Researched ancient Greek temple architecture and construction techniques</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Incorporated actual mythological stories and symbols into puzzle design</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Used period-appropriate materials and textures in 3D modeling</span>
          </li>
        </ul>
      </div>

      <SectionHeading>Art and Atmosphere</SectionHeading>
      <p>
        The visual design draws heavily from ancient Greek architecture and art. I researched classical Greek pottery,
        sculptures, and temple designs to create authentic-feeling environments that still serve the gameplay needs.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Greek mythology puzzle elements"
        caption="Authentic Greek symbols and artifacts integrated into puzzle mechanics"
      />

      <p>
        Lighting plays a crucial role in creating atmosphere - shadows and light sources guide the player's attention
        while maintaining the mysterious, ancient feel of the setting.
      </p>

      <SectionHeading>Development Process</SectionHeading>
      <div className="ml-4 mt-8">
        <ProcessStep number={1} title="Mythology Research">
          <p>
            I spent weeks researching Greek mythology, studying classical texts, and analyzing ancient art to ensure
            authenticity. This research formed the foundation for both visual design and puzzle mechanics.
          </p>
        </ProcessStep>

        <ProcessStep number={2} title="Puzzle Design">
          <p>
            Each puzzle was designed to feel like it belonged in the ancient world. I started with mythological concepts
            and worked backwards to create mechanics that would feel natural to ancient Greeks while engaging modern
            players.
          </p>
        </ProcessStep>

        <ProcessStep number={3} title="Environmental Art">
          <p>
            Created detailed 3D environments using Unity's URP pipeline, focusing on authentic materials and lighting.
            Every texture and model was crafted to feel historically accurate while serving gameplay purposes.
          </p>
        </ProcessStep>

        <ProcessStep number={4} title="Playtesting & Iteration">
          <p>
            Extensive playtesting revealed the importance of visual feedback. I added subtle visual and audio cues to
            guide players without breaking immersion or providing explicit hand-holding.
          </p>
        </ProcessStep>
      </div>

      <SectionHeading>Puzzle Design Process</SectionHeading>
      <p>
        Each puzzle was designed to feel like it belonged in the world. I started with mythological concepts and worked
        backwards to create mechanics that would feel natural to ancient Greeks while still being engaging for modern
        players.
      </p>

      <QuoteBlock
        quote="The best puzzles don't feel like arbitrary obstacles, but natural extensions of the world's logic and history."
        author="Game Design Document"
      />

      <p>
        Playtesting revealed the importance of visual feedback - players needed clear indication when they were on the
        right track, so I added subtle visual and audio cues to guide without hand-holding.
      </p>

      <SectionHeading>Technical Challenges</SectionHeading>
      <p>
        One major challenge was creating a save system that could handle the complex state of multiple interconnected
        puzzles. I implemented a flexible state management system that could track puzzle progress and environmental
        changes.
      </p>

      <p>
        Performance optimization for the detailed environments required careful LOD management and occlusion culling to
        maintain smooth framerates on lower-end hardware.
      </p>
    </CaseStudyLayout>
  )
}
