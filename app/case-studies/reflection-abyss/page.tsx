"use client"

import CaseStudyLayout from "@/components/case-study-layout"

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
      <h2>Project Overview</h2>
      <p>
        Reflection from the Abyss is a puzzle-adventure game inspired by Greek mythology. Players find themselves
        trapped in a mysterious room and must solve intricate puzzles to escape, uncovering the story of ancient gods
        and mythical creatures along the way.
      </p>

      <p>
        The game combines environmental storytelling with challenging puzzles, creating an atmospheric experience that
        draws players into the world of Greek mythology.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Mythology-Inspired Puzzles:</strong> Puzzles based on Greek myths and legends, requiring both logic
          and knowledge
        </li>
        <li>
          <strong>Environmental Storytelling:</strong> Story unfolds through visual clues and environmental details
        </li>
        <li>
          <strong>Atmospheric Design:</strong> Immersive lighting and sound design create a mysterious ambiance
        </li>
        <li>
          <strong>Multiple Puzzle Types:</strong> Various puzzle mechanics including symbol matching, sequence solving,
          and spatial reasoning
        </li>
        <li>
          <strong>Hidden Secrets:</strong> Optional content and easter eggs for players who explore thoroughly
        </li>
        <li>
          <strong>Narrative Elements:</strong> Rich backstory revealed through discovered artifacts and inscriptions
        </li>
      </ul>

      <h2>Design Philosophy</h2>
      <p>
        The game was designed around the concept of "discovery through exploration." Rather than explicit tutorials,
        players learn through experimentation and observation, mirroring how ancient knowledge was passed down through
        myths and stories.
      </p>

      <h2>Art and Atmosphere</h2>
      <p>
        The visual design draws heavily from ancient Greek architecture and art. I researched classical Greek pottery,
        sculptures, and temple designs to create authentic-feeling environments that still serve the gameplay needs.
      </p>

      <p>
        Lighting plays a crucial role in creating atmosphere - shadows and light sources guide the player's attention
        while maintaining the mysterious, ancient feel of the setting.
      </p>

      <h2>Puzzle Design Process</h2>
      <p>
        Each puzzle was designed to feel like it belonged in the world. I started with mythological concepts and worked
        backwards to create mechanics that would feel natural to ancient Greeks while still being engaging for modern
        players.
      </p>

      <p>
        Playtesting revealed the importance of visual feedback - players needed clear indication when they were on the
        right track, so I added subtle visual and audio cues to guide without hand-holding.
      </p>

      <h2>Technical Challenges</h2>
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
