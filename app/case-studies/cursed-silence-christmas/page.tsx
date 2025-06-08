"use client"

import CaseStudyLayout from "@/components/case-study-layout"
import { SectionHeading } from "@/components/case-study/section-heading"
import { FeatureCard } from "@/components/case-study/feature-card"
import { ProcessStep } from "@/components/case-study/process-step"
import { QuoteBlock } from "@/components/case-study/quote-block"
import { ImageShowcase } from "@/components/case-study/image-showcase"
import { Ghost, Music, Puzzle, Volume2, Palette, Users } from "lucide-react"

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
      <SectionHeading>Project Overview</SectionHeading>
      <p>
        Cursed Silence: Christmas is a special holiday-themed entry in the Cursed Silence series. This psychological
        horror experience combines the festive atmosphere of Christmas with the dark, introspective themes that define
        the series.
      </p>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Cursed Silence Christmas gameplay"
        caption="Distorted Christmas decorations create an unsettling atmosphere"
      />

      <p>
        Players follow mysterious clues while exploring the protagonist's mental struggles during what should be the
        most joyful time of year. The contrast between Christmas cheer and psychological horror creates a uniquely
        unsettling atmosphere.
      </p>

      <SectionHeading>Key Features</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <FeatureCard
          icon={<Ghost className="w-5 h-5" />}
          title="Holiday Horror Atmosphere"
          description="Christmas decorations and festive music create an eerie contrast with dark themes"
        />
        <FeatureCard
          icon={<Users className="w-5 h-5" />}
          title="Psychological Narrative"
          description="Deep exploration of mental health themes through environmental storytelling"
        />
        <FeatureCard
          icon={<Puzzle className="w-5 h-5" />}
          title="Mystery Elements"
          description="Cryptic clues and puzzles that reveal the protagonist's inner turmoil"
        />
        <FeatureCard
          icon={<Volume2 className="w-5 h-5" />}
          title="Atmospheric Audio"
          description="Distorted Christmas carols and ambient sounds enhance the unsettling mood"
        />
        <FeatureCard
          icon={<Palette className="w-5 h-5" />}
          title="Visual Symbolism"
          description="Christmas imagery used as metaphors for psychological concepts"
        />
        <FeatureCard
          icon={<Music className="w-5 h-5" />}
          title="Multiple Endings"
          description="Different conclusions based on player choices and interpretation"
        />
      </div>

      <SectionHeading>Christmas Horror Design</SectionHeading>
      <p>
        The challenge was creating horror from traditionally comforting Christmas imagery. I used familiar holiday
        elements - twinkling lights, wrapped presents, Christmas trees - and subtly distorted them to create unease.
      </p>

      <QuoteBlock
        quote="The juxtaposition of cheerful Christmas elements with psychological horror creates a uniquely unsettling experience that stays with players long after they've finished the game."
        author="Game Design Document"
      />

      <SectionHeading>Development Process</SectionHeading>
      <div className="ml-4 mt-8">
        <ProcessStep number={1} title="Concept & Research">
          <p>
            I researched seasonal affective disorder and holiday depression to ensure authentic representation while
            avoiding harmful stereotypes. This research phase was crucial for developing a respectful approach to mental
            health themes.
          </p>
        </ProcessStep>

        <ProcessStep number={2} title="Visual Design">
          <p>
            The color palette shifts from warm Christmas reds and greens to cold blues and grays as the player
            progresses, visually representing the emotional journey. Christmas imagery serves as powerful metaphors
            throughout the game.
          </p>
        </ProcessStep>

        <ProcessStep number={3} title="Audio Implementation">
          <p>
            Traditional carols are slowed down, pitch-shifted, or played in minor keys. The sound of sleigh bells
            becomes ominous, and the crackling of a fireplace suggests something more sinister. Silence itself becomes a
            character.
          </p>
        </ProcessStep>

        <ProcessStep number={4} title="Playtesting & Refinement">
          <p>
            Player feedback helped refine the balance between horror elements and mental health themes. Many commented
            on how the game made them reflect on their own holiday experiences and mental health.
          </p>
        </ProcessStep>
      </div>

      <ImageShowcase
        src="/placeholder.svg?height=400&width=600"
        alt="Cursed Silence Christmas environment"
        caption="Environmental storytelling through decaying Christmas decorations"
      />

      <SectionHeading>Narrative Design</SectionHeading>
      <p>
        The story explores themes of isolation during the holidays, family expectations, and seasonal depression. The
        Christmas setting amplifies these themes - the contrast between societal expectations of joy and personal
        struggles creates natural tension.
      </p>

      <p>
        Environmental storytelling was crucial. Christmas cards with disturbing messages, family photos with faces
        obscured, and holiday decorations in states of decay all contribute to the narrative without explicit
        exposition.
      </p>

      <SectionHeading>Audio Design</SectionHeading>
      <p>
        The audio design plays with familiar Christmas sounds. Traditional carols are slowed down, pitch-shifted, or
        played in minor keys. The sound of sleigh bells becomes ominous, and the crackling of a fireplace suggests
        something more sinister.
      </p>

      <p>
        Silence itself becomes a character - moments of complete quiet contrast sharply with the expected sounds of
        Christmas celebration, emphasizing the protagonist's isolation.
      </p>

      <SectionHeading>Visual Metaphors</SectionHeading>
      <p>
        Christmas imagery serves as powerful metaphors throughout the game. A Christmas tree losing its needles
        represents deteriorating mental health. Wrapped presents that can't be opened symbolize unfulfilled
        expectations. Burnt-out Christmas lights reflect the protagonist's dimming hope.
      </p>

      <QuoteBlock
        quote="The most terrifying monsters are the ones we create in our own minds, especially during times when we're expected to be happy."
        author="Game Narrative"
      />

      <SectionHeading>Player Reception</SectionHeading>
      <p>
        Players appreciated the thoughtful approach to difficult themes and the unique take on holiday horror. Many
        commented on how the game made them reflect on their own holiday experiences and mental health.
      </p>

      <p>
        The game sparked discussions about seasonal depression and the pressure to be happy during holidays, achieving
        the goal of creating meaningful horror that resonates beyond the gaming experience.
      </p>
    </CaseStudyLayout>
  )
}
