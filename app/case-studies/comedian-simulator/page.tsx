"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { ProcessStep } from "@/components/case-study/process-step"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Users, Clock, Smile, Zap, MessageSquare, BarChart } from "lucide-react"

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
      <SectionHeading>Project Overview</SectionHeading>
      <p>
        Stand Up: Comedian Simulator puts players in the shoes of a nervous comedian about to perform their first gig.
        The game explores the anxiety, timing, and crowd dynamics of stand-up comedy through interactive gameplay.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Comedy club stage"
        caption="The intimidating view from the stage - bright lights and expectant faces"
      />

      <p>
        Players must read the crowd, time their jokes perfectly, and handle hecklers while trying to deliver a
        successful comedy set. The game captures both the terror and exhilaration of performing live comedy.
      </p>

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Users className="w-5 h-5" />}
          title="Dynamic Crowd System"
          description="AI-driven audience that reacts realistically to different types of humor"
        />
        <FeatureCard
          icon={<Clock className="w-5 h-5" />}
          title="Timing-Based Gameplay"
          description="Success depends on comedic timing and reading the room"
        />
        <FeatureCard
          icon={<Smile className="w-5 h-5" />}
          title="Multiple Joke Categories"
          description="Various types of humor with different audience reactions"
        />
        <FeatureCard
          icon={<Zap className="w-5 h-5" />}
          title="Anxiety Mechanics"
          description="Stress system that affects performance and decision-making"
        />
        <FeatureCard
          icon={<MessageSquare className="w-5 h-5" />}
          title="Heckler Interactions"
          description="Dynamic responses to audience disruptions"
        />
        <FeatureCard
          icon={<BarChart className="w-5 h-5" />}
          title="Performance Metrics"
          description="Detailed feedback on timing, crowd engagement, and overall performance"
        />
      </div>

      <SectionHeading>Crowd AI System</SectionHeading>
      <p>
        The heart of the game is the crowd AI system. Each audience member has individual preferences for humor types,
        attention spans, and reaction thresholds. The collective mood of the crowd influences individual reactions,
        creating realistic audience dynamics.
      </p>

      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <h3 className="text-hugo-text font-semibold text-lg mb-4">AI System Architecture</h3>
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Individual personality traits for each audience member (humor preferences, attention span)</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Collective mood tracking that influences individual reactions</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Dynamic reaction thresholds based on performance history</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Realistic crowd behaviors like talking, checking phones, or leaving early</span>
          </li>
        </ul>
      </div>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Audience reaction system"
        caption="Each audience member reacts individually while being influenced by the crowd"
      />

      <SectionHeading>Development Process</SectionHeading>
      <div className="ml-4 mt-8">
        <ProcessStep number={1} title="Comedy Research">
          <p>
            I studied comedy theory, timing, and audience psychology. I interviewed local comedians and attended open
            mic nights to understand the real experience of performing stand-up comedy.
          </p>
        </ProcessStep>

        <ProcessStep number={2} title="AI Development">
          <p>
            Created behavior trees for individual audience members with different personality types. The challenge was
            balancing individual reactions with realistic crowd dynamics and collective mood.
          </p>
        </ProcessStep>

        <ProcessStep number={3} title="Anxiety System">
          <p>
            Implemented a stress system that simulates performance anxiety. As stress increases, player options become
            limited and timing becomes more difficult, mirroring real stage fright.
          </p>
        </ProcessStep>

        <ProcessStep number={4} title="Audio & Feedback">
          <p>
            Developed realistic crowd sounds, individual reactions, and ambient club atmosphere that responds
            dynamically to performance. Clear feedback was crucial for timing-based mechanics.
          </p>
        </ProcessStep>
      </div>

      <SectionHeading>Comedy Research</SectionHeading>
      <p>
        Developing this game required extensive research into comedy theory and stand-up performance. I studied timing,
        audience psychology, and the structure of jokes to create authentic gameplay mechanics.
      </p>

      <QuoteBlock
        quote="Comedy is all about timing, reading the room, and connecting with your audience. The game had to capture that delicate balance between preparation and improvisation."
        author="Local Comedian Interview"
      />

      <p>
        I interviewed local comedians and attended open mic nights to understand the real experience of performing
        stand-up comedy, which informed many of the game's systems and scenarios.
      </p>

      <SectionHeading>Anxiety and Performance</SectionHeading>
      <p>
        The game includes a stress system that simulates performance anxiety. As stress increases, the player's options
        become more limited, and timing becomes more difficult - mirroring the real experience of stage fright.
      </p>

      <p>
        This creates a feedback loop where poor performance increases anxiety, making subsequent jokes harder to
        deliver, just like in real stand-up comedy.
      </p>

      <SectionHeading>Technical Implementation</SectionHeading>
      <p>
        The crowd reaction system uses a combination of individual AI agents and collective mood tracking. Each audience
        member has personality traits that influence their reactions, while the overall energy of the room affects
        everyone's responses.
      </p>

      <p>
        Audio design was crucial - the game features realistic crowd sounds, individual reactions, and ambient club
        atmosphere that responds dynamically to the performance.
      </p>

      <SectionHeading>Lessons in Game Design</SectionHeading>
      <p>
        This project taught me about designing systems that simulate real-world social dynamics. Balancing realism with
        fun gameplay required careful tuning of the crowd AI and feedback systems.
      </p>

      <QuoteBlock
        quote="The most challenging aspect was making failure feel authentic without being discouraging - players needed to learn from bombing on stage."
        author="Development Notes"
      />

      <p>
        I learned the importance of clear visual and audio feedback when dealing with timing-based mechanics - players
        needed immediate understanding of how their performance was being received.
      </p>
    </CaseStudyLayout>
  )
}
