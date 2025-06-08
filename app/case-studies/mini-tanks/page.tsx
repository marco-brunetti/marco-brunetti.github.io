"use client"

import CaseStudyLayout from "@/components/case-study-layout"

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
      <h2>Project Overview</h2>
      <p>
        Mini Tanks is an action-packed survival game featuring toy war tanks in epic battles. Players must survive waves
        of enemy tanks while collecting powerups and upgrades to enhance their combat capabilities.
      </p>

      <p>
        The game combines fast-paced action with strategic powerup management, creating an engaging experience that
        keeps players coming back for higher scores and longer survival runs.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Dynamic Combat System:</strong> Fast-paced tank battles with responsive controls and satisfying
          feedback
        </li>
        <li>
          <strong>Powerup System:</strong> Collect various powerups including rapid fire, shields, and explosive rounds
        </li>
        <li>
          <strong>Wave-based Survival:</strong> Increasingly challenging enemy waves with different tank types
        </li>
        <li>
          <strong>Visual Effects:</strong> Polished particle effects and animations for explosions and impacts
        </li>
        <li>
          <strong>Score System:</strong> Competitive scoring with combo multipliers for skilled play
        </li>
        <li>
          <strong>Audio Design:</strong> Immersive sound effects and dynamic music that responds to gameplay
        </li>
      </ul>

      <h2>Technical Implementation</h2>
      <p>
        Built using Unity's 2D physics system with custom tank movement controllers and AI behavior trees for enemy
        tanks. The powerup system uses a modular design allowing for easy addition of new powerup types.
      </p>

      <h2>Development Challenges</h2>
      <p>
        One of the main challenges was balancing the difficulty curve to keep the game challenging but fair. I
        implemented a dynamic difficulty system that adjusts enemy spawn rates and health based on player performance.
      </p>

      <p>
        Performance optimization was crucial for maintaining smooth gameplay during intense battles with many
        projectiles and effects on screen. I used object pooling for bullets and enemies, and optimized particle effects
        to maintain 60 FPS.
      </p>

      <h2>Lessons Learned</h2>
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
