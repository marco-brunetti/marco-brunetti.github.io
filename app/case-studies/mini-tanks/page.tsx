"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { ProcessStep } from "@/components/case-study/process-step"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Gamepad2, Shield, Waves, Sparkles, BarChart, Music } from "lucide-react"

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
        { name: "Audio Mixer" },
        { name: "Object Pooling" },
      ]}
    >
      <SectionHeading>Project Overview</SectionHeading>
      <p>
        Mini Tanks is an action-packed survival game featuring toy war tanks in epic battles. Players must survive waves
        of enemy tanks while collecting powerups and upgrades to enhance their combat capabilities.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Mini Tanks gameplay"
        caption="Fast-paced tank battles with colorful visual effects"
      />

      <p>
        The game combines fast-paced action with strategic powerup management, creating an engaging experience that
        keeps players coming back for higher scores and longer survival runs.
      </p>

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Gamepad2 className="w-5 h-5" />}
          title="Dynamic Combat System"
          description="Fast-paced tank battles with responsive controls and satisfying feedback"
        />
        <FeatureCard
          icon={<Shield className="w-5 h-5" />}
          title="Powerup System"
          description="Collect various powerups including rapid fire, shields, and explosive rounds"
        />
        <FeatureCard
          icon={<Waves className="w-5 h-5" />}
          title="Wave-based Survival"
          description="Increasingly challenging enemy waves with different tank types"
        />
        <FeatureCard
          icon={<Sparkles className="w-5 h-5" />}
          title="Visual Effects"
          description="Polished particle effects and animations for explosions and impacts"
        />
        <FeatureCard
          icon={<BarChart className="w-5 h-5" />}
          title="Score System"
          description="Competitive scoring with combo multipliers for skilled play"
        />
        <FeatureCard
          icon={<Music className="w-5 h-5" />}
          title="Audio Design"
          description="Immersive sound effects and dynamic music that responds to gameplay"
        />
      </div>

      <SectionHeading>Technical Implementation</SectionHeading>
      <p>
        Built using Unity's 2D physics system with custom tank movement controllers and AI behavior trees for enemy
        tanks. The powerup system uses a modular design allowing for easy addition of new powerup types.
      </p>

      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <h3 className="text-hugo-text font-semibold text-lg mb-4">Technical Architecture Highlights</h3>
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Custom 2D physics-based movement system for realistic tank controls</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Object pooling system for bullets and effects to optimize performance</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Behavior tree AI for enemy tanks with different personality types</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Modular powerup system using scriptable objects for easy expansion</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Dynamic difficulty adjustment based on player performance metrics</span>
          </li>
        </ul>
      </div>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Mini Tanks powerups"
        caption="Various powerups create diverse gameplay strategies"
      />

      <SectionHeading>Development Process</SectionHeading>
      <div className="ml-4 mt-8">
        <ProcessStep number={1} title="Prototype & Core Mechanics">
          <p>
            I started with a simple prototype focusing on tank movement and shooting mechanics. Getting the feel of the
            controls right was crucial before adding more complex systems.
          </p>
        </ProcessStep>

        <ProcessStep number={2} title="Enemy AI Development">
          <p>
            Created behavior trees for enemy tanks with different personality types - some aggressive, some defensive,
            some that work in groups. This variety keeps gameplay fresh and unpredictable.
          </p>
        </ProcessStep>

        <ProcessStep number={3} title="Powerup System">
          <p>
            Implemented a modular powerup system using scriptable objects, making it easy to add new powerups and
            balance existing ones. Each powerup dramatically changes gameplay strategy.
          </p>
        </ProcessStep>

        <ProcessStep number={4} title="Polish & Optimization">
          <p>
            Added visual and audio feedback for all player actions, optimized performance with object pooling, and
            fine-tuned difficulty progression through extensive playtesting.
          </p>
        </ProcessStep>
      </div>

      <SectionHeading>Development Challenges</SectionHeading>
      <p>
        One of the main challenges was balancing the difficulty curve to keep the game challenging but fair. I
        implemented a dynamic difficulty system that adjusts enemy spawn rates and health based on player performance.
      </p>

      <QuoteBlock
        quote="The most engaging games find that perfect balance between challenge and achievability - keeping players in a state of flow where they're constantly improving."
        author="Game Design Notes"
      />

      <p>
        Performance optimization was crucial for maintaining smooth gameplay during intense battles with many
        projectiles and effects on screen. I used object pooling for bullets and enemies, and optimized particle effects
        to maintain 60 FPS.
      </p>

      <SectionHeading>Lessons Learned</SectionHeading>
      <p>
        This project taught me valuable lessons about game balance and player feedback. The importance of clear visual
        and audio cues became apparent when testing with players - every action needed immediate, satisfying feedback.
      </p>

      <p>
        I also learned about the importance of "juice" in game design - small details like screen shake, particle
        effects, and sound design can dramatically improve the player experience.
      </p>
    </CaseStudyLayout>
  )
}
