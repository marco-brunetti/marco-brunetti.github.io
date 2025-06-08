"use client"

import CaseStudyLayout from "@/components/case-study-layout"

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
      <h2>Project Overview</h2>
      <p>
        Stand Up: Comedian Simulator puts players in the shoes of a nervous comedian about to perform their first gig.
        The game explores the anxiety, timing, and crowd dynamics of stand-up comedy through interactive gameplay.
      </p>

      <p>
        Players must read the crowd, time their jokes perfectly, and handle hecklers while trying to deliver a
        successful comedy set. The game captures both the terror and exhilaration of performing live comedy.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Dynamic Crowd System:</strong> AI-driven audience that reacts realistically to different types of
          humor
        </li>
        <li>
          <strong>Timing-Based Gameplay:</strong> Success depends on comedic timing and reading the room
        </li>
        <li>
          <strong>Multiple Joke Categories:</strong> Various types of humor with different audience reactions
        </li>
        <li>
          <strong>Anxiety Mechanics:</strong> Stress system that affects performance and decision-making
        </li>
        <li>
          <strong>Heckler Interactions:</strong> Dynamic responses to audience disruptions
        </li>
        <li>
          <strong>Performance Metrics:</strong> Detailed feedback on timing, crowd engagement, and overall performance
        </li>
      </ul>

      <h2>Crowd AI System</h2>
      <p>
        The heart of the game is the crowd AI system. Each audience member has individual preferences for humor types,
        attention spans, and reaction thresholds. The collective mood of the crowd influences individual reactions,
        creating realistic audience dynamics.
      </p>

      <h2>Comedy Research</h2>
      <p>
        Developing this game required extensive research into comedy theory and stand-up performance. I studied timing,
        audience psychology, and the structure of jokes to create authentic gameplay mechanics.
      </p>

      <p>
        I interviewed local comedians and attended open mic nights to understand the real experience of performing
        stand-up comedy, which informed many of the game's systems and scenarios.
      </p>

      <h2>Anxiety and Performance</h2>
      <p>
        The game includes a stress system that simulates performance anxiety. As stress increases, the player's options
        become more limited, and timing becomes more difficult - mirroring the real experience of stage fright.
      </p>

      <p>
        This creates a feedback loop where poor performance increases anxiety, making subsequent jokes harder to
        deliver, just like in real stand-up comedy.
      </p>

      <h2>Technical Implementation</h2>
      <p>
        The crowd reaction system uses a combination of individual AI agents and collective mood tracking. Each audience
        member has personality traits that influence their reactions, while the overall energy of the room affects
        everyone's responses.
      </p>

      <p>
        Audio design was crucial - the game features realistic crowd sounds, individual reactions, and ambient club
        atmosphere that responds dynamically to the performance.
      </p>

      <h2>Lessons in Game Design</h2>
      <p>
        This project taught me about designing systems that simulate real-world social dynamics. Balancing realism with
        fun gameplay required careful tuning of the crowd AI and feedback systems.
      </p>

      <p>
        I learned the importance of clear visual and audio feedback when dealing with timing-based mechanics - players
        needed immediate understanding of how their performance was being received.
      </p>
    </CaseStudyLayout>
  )
}
