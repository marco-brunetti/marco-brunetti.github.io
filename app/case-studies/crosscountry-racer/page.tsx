"use client"

import CaseStudyLayout from "@/components/case-study-layout"

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
      <h2>Project Overview</h2>
      <p>
        Crosscountry Racer is an arcade-style racing game featuring diverse terrains and challenging tracks. Players
        race through forests, deserts, mountains, and urban environments, each with unique obstacles and weather
        conditions.
      </p>

      <p>
        The game emphasizes fun, accessible racing with responsive controls and exciting track design that rewards both
        speed and skillful navigation.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Diverse Environments:</strong> Race through forests, deserts, snow-covered mountains, and city streets
        </li>
        <li>
          <strong>Dynamic Weather:</strong> Weather conditions that affect vehicle handling and visibility
        </li>
        <li>
          <strong>Vehicle Customization:</strong> Upgrade and customize vehicles for different terrain types
        </li>
        <li>
          <strong>Time Trial Mode:</strong> Challenge yourself to beat your best times on each track
        </li>
        <li>
          <strong>Responsive Controls:</strong> Tight, arcade-style controls that feel satisfying and precise
        </li>
        <li>
          <strong>Visual Effects:</strong> Particle effects for dust, snow, and debris that enhance immersion
        </li>
      </ul>

      <h2>Vehicle Physics</h2>
      <p>
        The vehicle physics system balances realism with arcade fun. Cars feel weighty and responsive while still
        allowing for exciting, over-the-top racing moments that wouldn't be possible in a pure simulation.
      </p>

      <h2>Track Design</h2>
      <p>
        Each track was designed with a specific theme and challenge in mind. Forest tracks feature tight turns and
        elevation changes, while desert tracks emphasize high-speed sections with long sweeping curves.
      </p>

      <p>
        I used Unity's terrain tools extensively to create natural-looking environments that still served the gameplay
        needs. Each environment required different approaches to lighting and atmosphere.
      </p>

      <h2>Performance Optimization</h2>
      <p>
        Racing games demand consistent high framerates, so optimization was crucial. I implemented LOD systems for
        vehicles and environment objects, and used occlusion culling to manage the large outdoor environments.
      </p>

      <p>
        The particle systems for dust, snow, and debris required careful optimization to maintain performance during
        intense racing moments with multiple effects on screen.
      </p>

      <h2>Audio Design</h2>
      <p>
        Engine sounds were crucial for player feedback - different vehicle types have distinct audio profiles, and
        engine pitch changes dynamically based on speed and RPM. Environmental audio helps establish the atmosphere of
        each track.
      </p>

      <p>
        The audio system includes dynamic music that responds to race intensity, building excitement during close races
        and providing a more relaxed soundtrack during solo time trials.
      </p>

      <h2>Control Feel</h2>
      <p>
        Achieving the right control feel required extensive iteration and playtesting. The goal was to make the cars
        feel fast and exciting while remaining controllable for players of all skill levels.
      </p>

      <p>
        I implemented subtle assists like automatic counter-steering and stability control that help newer players while
        still allowing experienced players to push the limits of vehicle performance.
      </p>

      <h2>Visual Polish</h2>
      <p>
        The visual design emphasizes speed and excitement through dynamic camera work, motion blur, and particle
        effects. Each environment has its own visual identity while maintaining consistent art direction throughout the
        game.
      </p>

      <p>
        Post-processing effects like bloom and color grading help establish the mood for each environment, from the warm
        tones of desert tracks to the cool blues of mountain environments.
      </p>
    </CaseStudyLayout>
  )
}
