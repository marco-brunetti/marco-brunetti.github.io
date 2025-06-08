"use client"

import CaseStudyLayout from "@/components/case-study-layout"

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
      <h2>Project Overview</h2>
      <p>
        Cursed Silence: Christmas is a special holiday-themed entry in the Cursed Silence series. This psychological
        horror experience combines the festive atmosphere of Christmas with the dark, introspective themes that define
        the series.
      </p>

      <p>
        Players follow mysterious clues while exploring the protagonist's mental struggles during what should be the
        most joyful time of year. The contrast between Christmas cheer and psychological horror creates a uniquely
        unsettling atmosphere.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Holiday Horror Atmosphere:</strong> Christmas decorations and festive music create an eerie contrast
          with dark themes
        </li>
        <li>
          <strong>Psychological Narrative:</strong> Deep exploration of mental health themes through environmental
          storytelling
        </li>
        <li>
          <strong>Mystery Elements:</strong> Cryptic clues and puzzles that reveal the protagonist's inner turmoil
        </li>
        <li>
          <strong>Atmospheric Audio:</strong> Distorted Christmas carols and ambient sounds enhance the unsettling mood
        </li>
        <li>
          <strong>Visual Symbolism:</strong> Christmas imagery used as metaphors for psychological concepts
        </li>
        <li>
          <strong>Multiple Endings:</strong> Different conclusions based on player choices and interpretation
        </li>
      </ul>

      <h2>Christmas Horror Design</h2>
      <p>
        The challenge was creating horror from traditionally comforting Christmas imagery. I used familiar holiday
        elements - twinkling lights, wrapped presents, Christmas trees - and subtly distorted them to create unease.
      </p>

      <h2>Narrative Design</h2>
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

      <h2>Audio Design</h2>
      <p>
        The audio design plays with familiar Christmas sounds. Traditional carols are slowed down, pitch-shifted, or
        played in minor keys. The sound of sleigh bells becomes ominous, and the crackling of a fireplace suggests
        something more sinister.
      </p>

      <p>
        Silence itself becomes a character - moments of complete quiet contrast sharply with the expected sounds of
        Christmas celebration, emphasizing the protagonist's isolation.
      </p>

      <h2>Visual Metaphors</h2>
      <p>
        Christmas imagery serves as powerful metaphors throughout the game. A Christmas tree losing its needles
        represents deteriorating mental health. Wrapped presents that can't be opened symbolize unfulfilled
        expectations. Burnt-out Christmas lights reflect the protagonist's dimming hope.
      </p>

      <p>
        The color palette shifts from warm Christmas reds and greens to cold blues and grays as the player progresses,
        visually representing the emotional journey.
      </p>

      <h2>Development Challenges</h2>
      <p>
        The main challenge was balancing respect for mental health themes with effective horror design. I researched
        seasonal affective disorder and holiday depression to ensure authentic representation while avoiding harmful
        stereotypes.
      </p>

      <p>
        Creating horror from Christmas imagery required careful consideration - the goal was psychological unease, not
        cheap scares or disrespect for the holiday's meaning to many people.
      </p>

      <h2>Player Reception</h2>
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
