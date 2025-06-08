"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { ProcessStep } from "@/components/case-study/process-step"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Ghost, Eye, Volume2, Palette, Brain, Lightbulb } from "lucide-react"

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
      <SectionHeading>Project Overview</SectionHeading>
      <p>
        Cursed Silence is the original psychological horror experience that started the series. The game explores themes
        of isolation, mental health, and the human psyche through atmospheric storytelling and environmental narrative.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Cursed Silence environment"
        caption="Subtle environmental changes reflect the protagonist's deteriorating mental state"
      />

      <p>
        Players navigate through a series of increasingly disturbing environments that reflect the protagonist's mental
        state, uncovering a deeply personal story about trauma and recovery.
      </p>

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Ghost className="w-5 h-5" />}
          title="Atmospheric Horror"
          description="Psychological tension built through environment and sound design rather than jump scares"
        />
        <FeatureCard
          icon={<Eye className="w-5 h-5" />}
          title="Environmental Storytelling"
          description="Story told through visual details and environmental changes"
        />
        <FeatureCard
          icon={<Volume2 className="w-5 h-5" />}
          title="Dynamic Audio"
          description="Adaptive sound design that responds to player actions and story progression"
        />
        <FeatureCard
          icon={<Palette className="w-5 h-5" />}
          title="Symbolic Imagery"
          description="Visual metaphors that represent psychological concepts and emotions"
        />
        <FeatureCard
          icon={<Brain className="w-5 h-5" />}
          title="Multiple Interpretations"
          description="Ambiguous narrative that allows for different player interpretations"
        />
        <FeatureCard
          icon={<Lightbulb className="w-5 h-5" />}
          title="Immersive Atmosphere"
          description="Carefully crafted lighting and post-processing effects create unsettling mood"
        />
      </div>

      <SectionHeading>Horror Design Philosophy</SectionHeading>
      <p>
        Rather than relying on traditional horror tropes, Cursed Silence focuses on psychological unease and existential
        dread. The horror comes from the unknown and the internal rather than external threats.
      </p>

      <QuoteBlock
        quote="The most terrifying monsters are the ones we create in our own minds. True horror comes from recognizing ourselves in the darkness."
        author="Game Design Philosophy"
      />

      <div className="bg-hugo-darker border border-hugo-border rounded-lg p-6 my-8">
        <h3 className="text-hugo-text font-semibold text-lg mb-4">Mental Health Research</h3>
        <ul className="space-y-3 text-hugo-muted">
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Consulted with mental health professionals for authentic representation</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Studied psychological literature on trauma and recovery</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Incorporated real therapeutic concepts into environmental design</span>
          </li>
          <li className="flex items-start">
            <span className="text-hugo-accent mr-2">•</span>
            <span>Ensured respectful portrayal without sensationalizing mental illness</span>
          </li>
        </ul>
      </div>

      <SectionHeading>Development Process</SectionHeading>
      <div className="ml-4 mt-8">
        <ProcessStep number={1} title="Concept & Research">
          <p>
            I began with extensive research into psychological horror and mental health themes. The goal was to create
            empathy and understanding rather than sensationalizing mental health struggles.
          </p>
        </ProcessStep>

        <ProcessStep number={2} title="Visual Design">
          <p>
            Developed a muted color palette with strategic contrast to guide attention. Environmental details change
            subtly as players progress, reflecting the protagonist's changing mental state.
          </p>
        </ProcessStep>

        <ProcessStep number={3} title="Audio Implementation">
          <p>
            Created an adaptive audio system using ambient sounds, subtle cues, and strategic silence. The audio
            responds to player behavior and story progression for a personalized experience.
          </p>
        </ProcessStep>

        <ProcessStep number={4} title="Testing & Refinement">
          <p>
            Extensive playtesting with focus on emotional impact and respectful representation. Player feedback helped
            refine the balance between horror elements and meaningful themes.
          </p>
        </ProcessStep>
      </div>

      <SectionHeading>Visual Design</SectionHeading>
      <p>
        The visual design uses a muted color palette with strategic use of contrast to guide player attention. Lighting
        plays a crucial role in creating atmosphere - shadows and darkness are used to suggest rather than show.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Environmental storytelling"
        caption="Subtle visual metaphors tell the story without explicit exposition"
      />

      <p>
        Environmental details change subtly as the player progresses, reflecting the protagonist's changing mental
        state. These changes are often barely perceptible, creating a sense of unease and uncertainty.
      </p>

      <SectionHeading>Audio Design</SectionHeading>
      <p>
        Sound design was crucial to creating the psychological atmosphere. I used a combination of ambient sounds,
        subtle audio cues, and strategic silence to build tension and guide the player's emotional journey.
      </p>

      <QuoteBlock
        quote="Silence can be more terrifying than any scream. It's in the quiet moments that our minds fill in the blanks with our deepest fears."
        author="Audio Design Notes"
      />

      <p>
        The audio system dynamically adjusts based on player behavior and story progression, creating a personalized
        horror experience that responds to how each player engages with the game.
      </p>

      <SectionHeading>Mental Health Themes</SectionHeading>
      <p>
        The game handles mental health themes with care and respect, drawing from research and personal experiences. The
        goal was to create empathy and understanding rather than sensationalizing mental health struggles.
      </p>

      <p>
        Player feedback indicated that many found the game's approach to these themes thoughtful and meaningful, which
        was one of the most rewarding aspects of the project.
      </p>

      <SectionHeading>Technical Challenges</SectionHeading>
      <p>
        Creating subtle environmental changes required a flexible system for managing scene states and transitions. I
        developed a custom event system that could trigger changes based on player progress and actions.
      </p>

      <p>
        Performance optimization was crucial for maintaining the atmospheric lighting and post-processing effects while
        ensuring smooth gameplay on a variety of hardware configurations.
      </p>
    </CaseStudyLayout>
  )
}
