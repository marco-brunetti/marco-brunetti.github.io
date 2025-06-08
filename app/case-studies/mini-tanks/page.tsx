"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Gamepad2, Shield, Waves, Sparkles } from "lucide-react"

export default function MiniTanksPage() {
  return (
    <CaseStudyLayout
      title="Mini Tanks"
      subtitle="An epic survival battle between toy war tanks"
      gameInfo={{
        engine: "Unity 2022.3",
        platform: "PC (Windows)",
        genre: "Action / Survival",
        developmentTime: "3 months",
        status: "Released",
        teamSize: "Solo Developer",
      }}
      coverImage="/placeholder.svg?height=600&width=1200"
      techStack={[
        { name: "Unity 2022.3" },
        { name: "C#" },
        { name: "2D Physics" },
        { name: "Particle Systems" },
        { name: "Object Pooling" },
        { name: "Behavior Trees" },
      ]}
    >
      <SectionHeading>Challenge</SectionHeading>
      <p>
        Create fast-paced tank combat with smooth performance during intense battles. Balance arcade fun with strategic
        depth through powerups and enemy variety.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Mini Tanks gameplay"
        caption="Fast-paced tank battles with colorful visual effects"
      />

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Gamepad2 className="w-5 h-5" />}
          title="Responsive Controls"
          description="Physics-based movement with tight, arcade-style controls"
        />
        <FeatureCard
          icon={<Shield className="w-5 h-5" />}
          title="Strategic Powerups"
          description="Rapid fire, shields, and explosive rounds change gameplay dynamics"
        />
        <FeatureCard
          icon={<Waves className="w-5 h-5" />}
          title="Dynamic AI"
          description="Behavior trees create varied enemy personalities and tactics"
        />
        <FeatureCard
          icon={<Sparkles className="w-5 h-5" />}
          title="Performance Optimized"
          description="Object pooling maintains 60 FPS during intense battles"
        />
      </div>

      <SectionHeading>Technical Solutions</SectionHeading>
      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Object Pooling System:</strong> Eliminated garbage collection spikes during intense combat
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Modular Powerup Architecture:</strong> ScriptableObject-based system for easy balancing
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>
              <strong>Dynamic Difficulty:</strong> AI adapts spawn rates based on player performance
            </span>
          </li>
        </ul>
      </div>

      <QuoteBlock
        quote="The perfect balance of challenge and fun - every death feels fair and motivates another attempt."
        author="Player Review"
      />

      <SectionHeading>Results</SectionHeading>
      <p>
        Achieved consistent 60 FPS performance with up to 50+ entities on screen. Players praised the tight controls and
        addictive gameplay loop, with average session times of 15+ minutes.
      </p>
    </CaseStudyLayout>
  )
}
