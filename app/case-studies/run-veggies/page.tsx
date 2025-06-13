"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Mountain, Cloud, Gamepad2, Sparkles } from "lucide-react"

export default function CrosscountryRacerPage() {
  return (
    <CaseStudyLayout
      title="Run, Veggies!"
      subtitle="A physics‑driven 3D puzzle-platformer about runaway veggies escaping a factory."
      gameInfo={{
        engine: "Unreal 5.4.x",
        platform: "PC (Windows)",
        genre: "Plarformer / Puzzle",
        developmentTime: "6 months",
        status: "Coming Soon",
        teamSize: "17 people",
      }}
      coverImage="/images/run_veggies/cover.png?height=600&width=1200"
      techStack={[
        { name: "Unity 2022.2" },
        { name: "C#" },
        { name: "Physics System" },
        { name: "Particle Systems" },
        { name: "Terrain Tools" },
        { name: "Audio Mixer" },
      ]}
    >
      <SectionHeading>Challenge</SectionHeading>
      <p>
        Use each veggie’s unique abilities to solve puzzles, dodge deadly machinery,
        and outwit the kitchen crew in this quirky, fast-paced adventure.
      </p>

      <ImageShowcase
        src="/images/run_veggies/showcase.png?height=400&width=600"
        alt="Desert racing track"
        caption="Dynamic weather and terrain-specific handling create varied challenges"
      />

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Mountain className="w-5 h-5" />}
          title="Diverse Environments"
          description="Forest, desert, mountain, and city tracks with unique challenges"
        />
        <FeatureCard
          icon={<Cloud className="w-5 h-5" />}
          title="Dynamic Weather"
          description="Rain, snow, and dust storms affect handling and visibility"
        />
        <FeatureCard
          icon={<Gamepad2 className="w-5 h-5" />}
          title="Balanced Physics"
          description="Realistic weight distribution with arcade-style assists"
        />
        <FeatureCard
          icon={<Sparkles className="w-5 h-5" />}
          title="Performance Optimized"
          description="LOD systems and occlusion culling maintain smooth framerates"
        />
      </div>

      <SectionHeading>Technical Solutions</SectionHeading>
      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Terrain-Specific Physics:</strong> Different handling for sand, snow, and asphalt surfaces
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Subtle Driving Assists:</strong> Counter-steering and stability help without feeling artificial
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Dynamic Audio System:</strong> Engine sounds and music respond to race intensity
            </span>
          </li>
        </ul>
      </div>

      <QuoteBlock
        quote="Perfect balance of speed and control - feels fast without being overwhelming for new players."
        author="Player Review"
      />

      <SectionHeading>Results</SectionHeading>
      <p>
        Achieved consistent high framerates across all environments. Players praised the intuitive controls and visual
        variety, with the game appealing to both casual and experienced racing fans.
      </p>
    </CaseStudyLayout>
  )
}
