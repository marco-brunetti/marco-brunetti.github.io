"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Play, Download, GamepadIcon, Code, Palette, Zap, Youtube, MapPin } from "lucide-react"
import Image from "next/image"

// Preloader component to cache videos
function VideoPreloader() {
  useEffect(() => {
    const videos = [
      "/videos/rv_preview.mp4",
      "/videos/cs_christmas_preview.mp4",
      "/videos/comedian_simulator_preview.mp4"
    ];

    videos.forEach(src => {
      const video = document.createElement('video');
      video.src = src;
      video.preload = "auto";
    });
  }, []);

  return null;
}

export default function MarcoPortfolio() {
  // Games data with video previews
  const games = [
    {
      title: "Run, Veggies!",
      description: "A physics‑driven 3D puzzle-platformer about runaway veggies escaping a factory. As Programmer Lead, I architected core systems (AI, input, physics interactions) and oversaw a 6‑person dev team. Coming soon on Steam.",
      image: "/images/run_veggies/icon.png",
      videoPreview: "/videos/run_veggies.mp4",
      technologies: ["Unreal Engine", "Blueprints", "Platformer"],
      status: "Coming Soon",
      links: {
        devlog: "/case-studies/run-veggies",
        download: "https://store.steampowered.com/app/3461090/Run_Veggies/",
      },
    },
    {
      title: "Cursed Silence: Christmas",
      description: "A psychological horror game developed solo over the course of a year. Follow cryptic clues and uncover the protagonist's mental unraveling in this standalone entry of the Cursed Silence series.",
      image: "/images/cursed_silence/icon.png",
      videoPreview: "/videos/cs_christmas.mp4",
      technologies: ["Unity", "C#", "Horror"],
      status: "Released",
      links: {
        devlog: "/case-studies/cursed-silence-christmas",
        download: "https://snowhorse-entertainment.itch.io/cursed-silence-christmas",
      },
    },
    {
      title: "Stand Up: Comedian Simulator",
      description: "Built solo in just 10 days, this experimental simulation lets you perform at your first stand-up gig. Test your timing, read the crowd, and see if you've got what it takes to make them laugh.",
      image: "/images/comedian_simulator/icon.png",
      videoPreview: "/videos/comedian_simulator.mp4",
      technologies: ["Unity", "C#", "Simulation"],
      status: "Released",
      links: {
        devlog: "/case-studies/comedian-simulator",
        download: "https://snowhorse-entertainment.itch.io/comedian-simulator",
      },
    }
  ]

  const skills = [
    {
      name: "Unity",
      experience: "8+ years",
      description: "Lead developer on 12+ shipped PC and mobile titles",
      icon: <GamepadIcon className="w-5 h-5" />,
    },
    {
      name: "C#",
      experience: "8+ years",
      description: "Advanced patterns, tooling, and scalable architecture",
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: "Game Design",
      experience: "5+ years",
      description: "Systems design, progression, and player psychology",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      name: "Level Design",
      experience: "1+ year",
      description: "Engaging environments, pacing, and layout flow",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      name: "UI/UX Implementation",
      experience: "3+ years",
      description: "Player-focused interfaces and responsive feedback",
      icon: <Palette className="w-5 h-5" />,
    },
    {
      name: "Performance Optimization",
      experience: "3+ years",
      description: "Mid-tier device tuning and packaging speedups",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      name: "Zenject",
      experience: "3+ years",
      description: "Dependency injection and clean, testable codebases",
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: "Team Leadership",
      experience: "1+ year",
      description: "Led and mentored two teams (6-person and 8-person) in programming and engineering roles",
      icon: <GamepadIcon className="w-5 h-5" />,
    },
    {
      name: "Unreal Engine",
      experience: "1+ year",
      description: "Blueprint scripting for gameplay and UI systems",
      icon: <Code className="w-5 h-5" />,
    },
  ];

  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Pause all videos when not hovered
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const checkDesktop = () => setIsDesktop(window.innerWidth >= 640);
      checkDesktop();
      window.addEventListener("resize", checkDesktop);
      return () => window.removeEventListener("resize", checkDesktop);
    }, []);

  return (
    <div className="min-h-screen bg-hugo-bg">
      <VideoPreloader />

      {/* Header */}
      <header className="fixed top-0 w-full bg-hugo-darker/90 backdrop-blur-md border-b border-hugo-border z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-hugo-text leading-normal">MARCO BRUNETTI</h1>
              <p className="text-hugo-muted text-xs sm:text-sm">Game Developer Portfolio</p>
            </div>

            {/* Desktop Navigation - Strategic recruiter links */}
            <div className="hidden lg:flex space-x-6">
              <a
                href="/documents/Marco_Brunetti_Resume.pdf"
                className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/marcobru"
                className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/marco-brunetti"
                className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="#contact" className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-hugo-text p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div
                  className={`w-full h-0.5 bg-hugo-text transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-hugo-text transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}
                ></div>
                <div
                  className={`w-full h-0.5 bg-hugo-text transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-hugo-border">
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="/documents/Marco_Brunetti_Resume.pdf"
                  className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/marcobru"
                  className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/marco-brunetti"
                  className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-hugo-text mb-6 sm:mb-8 leading-tight">
              Game Developer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-light to-gray-medium mt-2 leading-[1.15]">
                & Technical Lead
              </span>
            </h2>
            <div className="text-base sm:text-lg lg:text-xl text-hugo-muted mb-8 sm:mb-10 max-w-2xl mx-auto px-4 space-y-4">
              <p>Unity/C# developer with 8+ years of experience and 12+ shipped indie games on PC and mobile.</p>
              <p>Led engineering for a 6-person team on a Steam title; currently managing an 8-person team at a 50+ developer studio.</p>
              <p>Focused on performance, mentorship, and clean, scalable code.</p>
              <p>Open to full-time, contract, or consulting roles worldwide.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <a href="/documents/Marco_Brunetti_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-hugo-button-primary hover:bg-hugo-button-hover text-white w-full sm:w-auto py-6 text-base"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
              <a href="#games">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 w-full sm:w-auto py-6 text-base"
                >
                  <Play className="w-5 h-5 mr-2" />
                  View My Games
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Games Portfolio */}
      <section id="games" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-hugo-text text-center mb-10 sm:mb-14 leading-tight">
            Featured Games
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {games.map((game, index) => (
              <a
                  key={index}
                  href={game.links.devlog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-sm transform transition-all duration-300 sm:hover:scale-105"
                >
                <Card
                  className="bg-hugo-lighter border-hugo-border border-2 hover:border-hugo-accent/60 transition-all duration-300 w-full max-w-sm"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg bg-hugo-bg w-full aspect-[4/3]">
                      {/* Show video on hover, otherwise show static image */}
                      <div className="absolute inset-0 w-full h-full">
                        {hoveredCard === index ? (
                          // Video preview when hovered
                          <video
                            ref={el => videoRefs.current[index] = el}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            poster={game.image}
                          >
                            <source src={game.videoPreview} type="video/mp4" />
                            {/* Fallback to static image if video not supported */}
                            <Image
                              src={game.image}
                              alt={game.title}
                              fill
                              className="object-cover"
                            />
                          </video>
                        ) : (
                          // Static image and hover text when not hovered
                          <div className="w-full h-full relative">
                            <Image
                              src={game.image}
                              alt={game.title}
                              fill
                              className="object-cover opacity-60"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 hidden sm:flex items-center justify-center">
                              <div className="text-hugo-text font-semibold text-sm sm:text-base">Hover to preview</div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                        <Badge variant="secondary" className="bg-hugo-button-primary text-white font-medium text-xs">
                          {game.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 sm:p-6">
                    <CardTitle className="text-hugo-text mb-3 sm:mb-4 text-base sm:text-lg leading-snug">
                      {game.title}
                    </CardTitle>
                    <CardDescription className="text-hugo-muted mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed">
                      {game.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                      {game.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-hugo-border border-2 text-hugo-muted text-xs py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={game.links.devlog}
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 text-xs w-full py-2"
                        >
                          Case Study
                        </Button>
                      </a>
                      {game.links.play ? (
                        <a
                          href={game.links.play}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none"
                        >
                          <Button
                            size="sm"
                            className="bg-hugo-button-primary hover:bg-hugo-button-hover text-white text-xs w-full py-2"
                          >
                            Play
                          </Button>
                        </a>
                      ) : (
                        <a
                          href={game.links.download}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none"
                        >
                          <Button
                            size="sm"
                            className="bg-hugo-button-primary hover:bg-hugo-button-hover text-white text-xs w-full py-2"
                          >
                            Download
                          </Button>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-hugo-darker">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-hugo-text mb-6 sm:mb-8 leading-tight">About Marco</h2>
              <p className="text-hugo-muted text-base sm:text-lg mb-5 sm:mb-6 leading-relaxed">
                I'm Marco Brunetti, a Unity/C# game developer with 8+ years of experience across indie and studio projects.
              </p>
              <p className="text-hugo-muted text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                I currently lead an 8-person engineering team at a 50+ developer studio, delivering high-performance
                mobile games with over 100k downloads. I also build custom C# tools to streamline workflows and
                improve stability.
              </p>
              <p className="text-hugo-muted text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                As Programming Lead on Run, Veggies!, an upcoming Steam release, I developed core systems in Unreal
                Blueprints, mentored junior developers, and reduced build times by 87%.
              </p>
              <p className="text-hugo-muted text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                I also serve as President of IGDA Paraguay, organizing workshops, meetups, and initiatives to grow the
                local game dev scene.
              </p>
              <p className="text-hugo-muted text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                "I've shipped 12+ indie games, including The Cursed Silence series, praised for polished mechanics
                and atmosphere.
              </p>
              {/* Professional links in About section */}
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/marco-brunetti" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 py-2"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/marcobru" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 py-2"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <a href="https://www.youtube.com/@snowhorsegames" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 py-2"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 flex justify-center">
              <Image
                src="/images/profile.png"
                alt="Marco Brunetti"
                width={300}
                height={300}
                className="rounded-lg border-2 border-hugo-border w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-hugo-text text-center mb-10 sm:mb-14 leading-tight">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-hugo-lighter border-hugo-border border-2 transition-all duration-300 sm:hover:scale-105 w-full max-w-sm"
              >
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center mb-3">
                    <div className="text-hugo-accent mr-3">{skill.icon}</div>
                    <h3 className="text-hugo-text font-semibold text-sm sm:text-base">{skill.name}</h3>
                  </div>
                  <div className="mb-2">
                    <span className="text-hugo-accent font-medium text-xs sm:text-sm">{skill.experience}</span>
                  </div>
                  <p className="text-hugo-muted text-xs sm:text-sm leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-hugo-darker">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-hugo-text mb-6 sm:mb-8 leading-tight">
            Let's Work Together
          </h2>
          <p className="text-hugo-muted mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Currently open to contract work, full-time roles, or collaborative projects.
            Let's build something great together.
          </p>

          {/* Primary contact method */}
          <div className="mb-8">
            <a
              href="mailto:marcobrunetti.dev@gmail.com?subject=Portfolio%20Contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-hugo-button-primary hover:bg-hugo-button-hover text-white text-base sm:text-lg py-6 px-8">
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </Button>
            </a>
          </div>


          {/* Contact info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center text-hugo-muted text-sm sm:text-base">
              <Mail className="w-5 h-5 mr-3 text-hugo-accent flex-shrink-0" />
              <a href="mailto:marcobrunetti.dev@gmail.com" className="hover:text-hugo-accent transition-colors">
                marcobrunetti.dev@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center text-hugo-muted text-sm sm:text-base">
              <MapPin className="w-5 h-5 mr-3 text-hugo-accent flex-shrink-0" />
              <span>Asunción, Paraguay</span>
            </div>
          </div>

          {/* Secondary links for games/community */}
          <div className="pt-6 border-t border-hugo-border">
            <p className="text-hugo-muted text-sm mb-4">Check out my games and community work</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://snowhorse-entertainment.itch.io/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 py-2"
                >
                  <GamepadIcon className="w-4 h-4 mr-2" />
                  itch.io
                </Button>
              </a>
              <a href="https://www.youtube.com/@snowhorsegames" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 py-2"
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-hugo-border">
        <div className="container mx-auto text-center">
          <p className="text-hugo-muted text-xs sm:text-sm">
            © {new Date().getFullYear()} Marco Brunetti. Game Developer Portfolio.
          </p>
        </div>
      </footer>
    </div>
  )
}