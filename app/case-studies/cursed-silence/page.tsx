"use client"

import CaseStudyLayout from "@/components/case-study-layout"

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
      <h2>Project Overview</h2>
      <p>
        Cursed Silence is the original psychological horror experience that started the series. The game explores themes
        of isolation, mental health, and the human psyche through atmospheric storytelling and environmental narrative.
      </p>

      <p>
        Players navigate through a series of increasingly disturbing environments that reflect the protagonist's mental
        state, uncovering a deeply personal story about trauma and recovery.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Atmospheric Horror:</strong> Psychological tension built through environment and sound design rather
          than jump scares
        </li>
        <li>
          <strong>Environmental Storytelling:</strong> Story told through visual details and environmental changes
        </li>
        <li>
          <strong>Dynamic Audio:</strong> Adaptive sound design that responds to player actions and story progression
        </li>
        <li>
          <strong>Symbolic Imagery:</strong> Visual metaphors that represent psychological concepts and emotions
        </li>
        <li>
          <strong>Multiple Interpretations:</strong> Ambiguous narrative that allows for different player
          interpretations
        </li>
        <li>
          <strong>Immersive Atmosphere:</strong> Carefully crafted lighting and post-processing effects create
          unsettling mood
        </li>
      </ul>

      <h2>Horror Design Philosophy</h2>
      <p>
        Rather than relying on traditional horror tropes, Cursed Silence focuses on psychological unease and existential
        dread. The horror comes from the unknown and the internal rather than external threats.
      </p>

      <h2>Visual Design</h2>
      <p>
        The visual design uses a muted color palette with strategic use of contrast to guide player attention. Lighting
        plays a crucial role in creating atmosphere - shadows and darkness are used to suggest rather than show.
      </p>

      <p>
        Environmental details change subtly as the player progresses, reflecting the protagonist's changing mental
        state. These changes are often barely perceptible, creating a sense of unease and uncertainty.
      </p>

      <h2>Audio Design</h2>
      <p>
        Sound design was crucial to creating the psychological atmosphere. I used a combination of ambient sounds,
        subtle audio cues, and strategic silence to build tension and guide the player's emotional journey.
      </p>

      <p>
        The audio system dynamically adjusts based on player behavior and story progression, creating a personalized
        horror experience that responds to how each player engages with the game.
      </p>

      <h2>Mental Health Themes</h2>
      <p>
        The game handles mental health themes with care and respect, drawing from research and personal experiences. The
        goal was to create empathy and understanding rather than sensationalizing mental health struggles.
      </p>

      <p>
        Player feedback indicated that many found the game's approach to these themes thoughtful and meaningful, which
        was one of the most rewarding aspects of the project.
      </p>

      <h2>Technical Challenges</h2>
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
