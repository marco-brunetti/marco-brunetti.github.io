"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { ProcessStep } from "@/components/case-study/process-step"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Mountain, Cloud, Settings, Clock, Gamepad2, Sparkles } from "lucide-react"

export default function CrosscountryRacerPage() {
  return (
    <CaseStudyLayout
      title="Crosscountry Racer"
      subtitle="High-speed racing across diverse terrains and challenging tracks"
      gameInfo={{
        engine: "Unity 2022.2",
        platform: "PC (Windows)",
        genre: "Racing / Arcade",
        developmentTime: "4 months",
        status: "Released",
        teamSize: "Solo Developer",
      }}
      coverImage="/placeholder.svg?height=600&width=1200"
      techStack={[
        { name: "Unity 2022.2" },
        { name: "C#" },
        { name: "Physics System" },
        { name: "Particle Systems" },
        { name: "Terrain Tools" },
        { name: "Audio Mixer" },
      ]}
    >
      <SectionHeading>Project Overview</SectionHeading>
      <p>
        Crosscountry Racer is an arcade-style racing game featuring diverse terrains and challenging tracks. Players
        race through forests, deserts, mountains, and urban environments, each with unique obstacles and weather
        conditions.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Desert racing track"
        caption="High-speed racing through diverse environments with dynamic weather"
      />

      <p>
        The game emphasizes fun, accessible racing with responsive controls and exciting track design that rewards both
        speed and skillful navigation.
      </p>

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Mountain className="w-5 h-5" />}
          title="Diverse Environments"
          description="Race through forests, deserts, snow-covered mountains, and city streets"
        />
        <FeatureCard
          icon={<Cloud className="w-5 h-5" />}
          title="Dynamic Weather"
          description="Weather conditions that affect vehicle handling and visibility"
        />
        <FeatureCard
          icon={<Settings className="w-5 h-5" />}
          title="Vehicle Customization"
          description="Upgrade and customize vehicles for different terrain types"
        />
        <FeatureCard
          icon={<Clock className="w-5 h-5" />}
          title="Time Trial Mode"
          description="Challenge yourself to beat your best times on each track"
        />
        <FeatureCard
          icon={<Gamepad2 className="w-5 h-5" />}
          title="Responsive Controls"
          description="Tight, arcade-style controls that feel satisfying and precise"
        />
        <FeatureCard
          icon={<Sparkles className="w-5 h-5" />}
          title="Visual Effects"
          description="Particle effects for dust, snow, and debris that enhance immersion"
        />
      </div>

      <SectionHeading>Vehicle Physics</SectionHeading>
      <p>
        The vehicle physics system balances realism with arcade fun. Cars feel weighty and responsive while still
        allowing for exciting, over-the-top racing moments that wouldn't be possible in a pure simulation.
      </p>

      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <h3 className="text-hugo-text font-semibold text-lg mb-4">Physics System Features</h3>
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Custom vehicle controller with realistic weight distribution</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Terrain-specific handling adjustments (sand, snow, asphalt)</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Dynamic suspension system that responds to terrain changes</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Subtle driving assists that help without feeling artificial</span>
          </li>
        </ul>
      </div>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Mountain racing environment"
        caption="Snow-covered mountain tracks with challenging elevation changes"
      />

      <SectionHeading>Development Process</SectionHeading>
      <div className="ml-4 mt-8">
        <ProcessStep number={1} title="Core Mechanics">
          <p>
            Started with basic vehicle physics and controls, focusing on achieving the right balance between arcade fun
            and realistic handling. The feel of the controls was crucial before adding complexity.
          </p>
        </ProcessStep>

        <ProcessStep number={2} title="Environment Creation">
          <p>
            Used Unity's terrain tools to create diverse environments. Each track was designed with specific themes and
            challenges - tight forest turns, high-speed desert straights, and technical mountain passes.
          </p>
        </ProcessStep>

        <ProcessStep number={3} title="Weather Systems">
          <p>
            Implemented dynamic weather that affects both visuals and gameplay. Rain reduces traction, snow limits
            visibility, and dust storms create unique racing challenges.
          </p>
        </ProcessStep>

        <ProcessStep number={4} title="Polish & Optimization">
          <p>
            Added particle effects, dynamic music, and performance optimizations. Racing games demand consistent high
            framerates, so LOD systems and occlusion culling were essential.
          </p>
        </ProcessStep>
      </div>

      <SectionHeading>Track Design</SectionHeading>
      <p>
        Each track was designed with a specific theme and challenge in mind. Forest tracks feature tight turns and
        elevation changes, while desert tracks emphasize high-speed sections with long sweeping curves.
      </p>

      <QuoteBlock
        quote="Great racing tracks tell a story through their layout - they should feel like natural landscapes that happen to make perfect racecourses."
        author="Track Design Philosophy"
      />

      <p>
        I used Unity's terrain tools extensively to create natural-looking environments that still served the gameplay
        needs. Each environment required different approaches to lighting and atmosphere.
      </p>

      <SectionHeading>Performance Optimization</SectionHeading>
      <p>
        Racing games demand consistent high framerates, so optimization was crucial. I implemented LOD systems for
        vehicles and environment objects, and used occlusion culling to manage the large outdoor environments.
      </p>

      <p>
        The particle systems for dust, snow, and debris required careful optimization to maintain performance during
        intense racing moments with multiple effects on screen.
      </p>

      <SectionHeading>Audio Design</SectionHeading>
      <p>
        Engine sounds were crucial for player feedback - different vehicle types have distinct audio profiles, and
        engine pitch changes dynamically based on speed and RPM. Environmental audio helps establish the atmosphere of
        each track.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Urban racing environment"
        caption="City tracks with tight corners and urban obstacles"
      />

      <p>
        The audio system includes dynamic music that responds to race intensity, building excitement during close races
        and providing a more relaxed soundtrack during solo time trials.
      </p>

      <SectionHeading>Control Feel</SectionHeading>
      <p>
        Achieving the right control feel required extensive iteration and playtesting. The goal was to make the cars
        feel fast and exciting while remaining controllable for players of all skill levels.
      </p>

      <p>
        I implemented subtle assists like automatic counter-steering and stability control that help newer players while
        still allowing experienced players to push the limits of vehicle performance.
      </p>

      <SectionHeading>Visual Polish</SectionHeading>
      <p>
        The visual design emphasizes speed and excitement through dynamic camera work, motion blur, and particle
        effects. Each environment has its own visual identity while maintaining consistent art direction throughout the
        game.
      </p>

      <QuoteBlock
        quote="Racing games are about the feeling of speed and freedom. Every visual element should contribute to that sense of exhilaration."
        author="Art Direction Notes"
      />

      <p>
        Post-processing effects like bloom and color grading help establish the mood for each environment, from the warm
        tones of desert tracks to the cool blues of mountain environments.
      </p>
    </CaseStudyLayout>
  )
}
