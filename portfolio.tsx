"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Play, Download, GamepadIcon, Code, Palette, Zap, Youtube, MapPin } from "lucide-react"
import Image from "next/image"

export default function MarcoPortfolio() {
  // Games data with static images and GIF previews
  const games = [
    {
      title: "Cursed Silence: Christmas",
      description: "Follow mysterious clues and discover the main character's mental struggles.",
      image: "/images/cs_christmas_icon.png",
      gifPreview: "/gif/cc_christmas.gif",
      technologies: ["Unity", "C#", "Horror"],
      status: "Released",
      links: {
        devlog: "/devlogs/cursed-silence-christmas.html",
        download: "https://marco-brunetti.github.io/",
      },
    },
    {
      title: "Mini Tanks",
      description: "An epic survival battle between toy war tanks, with nice visuals and plenty of powerups.",
      image: "/images/mini_tanks_icon.png",
      gifPreview: "/gif/mini_tanks.gif",
      technologies: ["Unity", "C#", "Action"],
      status: "Released",
      links: {
        devlog: "/devlogs/mini-tanks.html",
        play: "https://marco-brunetti.github.io/",
      },
    },
    {
      title: "Reflection from the Abyss",
      description: "Escape a mysterious room in this greek mythology inspired game.",
      image: "/images/reflejos_icon.png",
      gifPreview: "/gif/abismo.gif",
      technologies: ["Unity", "C#", "Puzzle"],
      status: "Released",
      links: {
        devlog: "/devlogs/reflection-abyss.html",
        download: "https://marco-brunetti.github.io/",
      },
    },
    {
      title: "Stand Up: Comedian Simulator",
      description: "Play the role of a stand up comedian at their first gig. Discover if you got it takes to be one.",
      image: "/images/comedian_sim_icon.png",
      gifPreview: "/gif/comedian_simulator.gif",
      technologies: ["Unity", "C#", "Simulation"],
      status: "Released",
      links: {
        devlog: "/devlogs/comedian-simulator.html",
        download: "https://marco-brunetti.github.io/",
      },
    },
    {
      title: "Cursed Silence",
      description: "A psychological horror experience that explores the depths of the human mind.",
      image: "/images/cs_demo_icon.png",
      gifPreview: "/gif/cc_demo.gif",
      technologies: ["Unity", "C#", "Horror"],
      status: "Released",
      links: {
        devlog: "/devlogs/cursed-silence.html",
        download: "https://marco-brunetti.github.io/",
      },
    },
    {
      title: "Crosscountry Racer",
      description: "High-speed racing across diverse terrains and challenging tracks.",
      image: "/images/cc_racer_icon.png",
      gifPreview: "/gif/cc_racer.gif",
      technologies: ["Unity", "C#", "Racing"],
      status: "Released",
      links: {
        devlog: "/devlogs/crosscountry-racer.html",
        download: "https://marco-brunetti.github.io/",
      },
    },
  ]

  const skills = [
    { name: "Unity", level: 95, icon: <GamepadIcon className="w-5 h-5" /> },
    { name: "C#", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "Game Design", level: 88, icon: <Palette className="w-5 h-5" /> },
    { name: "3D Modeling", level: 75, icon: <Palette className="w-5 h-5" /> },
    { name: "Level Design", level: 85, icon: <Zap className="w-5 h-5" /> },
    { name: "UI/UX Design", level: 80, icon: <Palette className="w-5 h-5" /> },
    { name: "Zenject/VContainer", level: 85, icon: <Code className="w-5 h-5" /> },
    { name: "Performance Optimization", level: 90, icon: <Zap className="w-5 h-5" /> },
    { name: "Team Leadership", level: 88, icon: <GamepadIcon className="w-5 h-5" /> },
    { name: "Unreal Engine", level: 75, icon: <Code className="w-5 h-5" /> },
  ]

  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-hugo-bg">
      {/* Header */}
      <header className="fixed top-0 w-full bg-hugo-darker/90 backdrop-blur-md border-b border-hugo-border z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-hugo-text leading-normal">MARCO BRUNETTI</h1>
              <p className="text-hugo-muted text-xs sm:text-sm">Game Developer Portfolio</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6">
              <a
                href="https://www.linkedin.com/in/marco199609/"
                className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="/documents/Marco_Brunetti_Resume.pdf"
                className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                href="https://github.com/marco-brunetti"
                className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://snowhorse-entertainment.itch.io/"
                className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                itch.io
              </a>
              <a
                href="https://www.youtube.com/@snowhorsegames"
                className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
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
                  href="https://www.linkedin.com/in/marco199609/"
                  className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LinkedIn
                </a>
                <a
                  href="/documents/Marco_Brunetti_Resume.pdf"
                  className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume
                </a>
                <a
                  href="https://github.com/marco-brunetti"
                  className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Github
                </a>
                <a
                  href="https://snowhorse-entertainment.itch.io/"
                  className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  itch.io
                </a>
                <a
                  href="https://www.youtube.com/@snowhorsegames"
                  className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  YouTube
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
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-light to-gray-medium mt-2">
                & Designer
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-hugo-muted mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              8+ years of Unity and C# expertise, leading teams and shipping 12+ indie titles. Currently Team Lead at
              Posibillian Tech and President of IGDA Paraguay, passionate about mentoring developers and growing the
              gaming community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <a 
                href="https://snowhorse-entertainment.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 w-full sm:w-auto py-6 text-base"
                >
                  <Download className="w-5 h-5 mr-2" />
                  View All My Games
                </Button>
              </a>
              <a 
                href="/documents/Marco_Brunetti_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 w-full sm:w-auto py-6 text-base"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
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
              <Card
                key={index}
                className="bg-hugo-lighter border-hugo-border border-2 hover:border-hugo-accent/60 transition-all duration-300 hover:transform hover:scale-105 w-full max-w-sm"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg bg-hugo-bg w-full aspect-[4/3]">
                    {/* Show GIF on hover, otherwise show static image */}
                    <div className="absolute inset-0 w-full h-full">
                      {hoveredCard === index ? (
                        // GIF preview when hovered
                        <div className="w-full h-full relative">
                          <Image
                            src={game.gifPreview || "/placeholder.svg?height=300&width=400"}
                            alt={`${game.title} preview`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      ) : (
                        // Static image and hover text when not hovered
                        <div className="w-full h-full relative">
                          <Image
                            src={game.image || "/placeholder.svg?height=300&width=400"}
                            alt={game.title}
                            fill
                            className="object-cover opacity-60"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
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
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 text-xs flex-1 sm:flex-none py-2"
                      as="a"
                      href={game.links.devlog}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Devlog
                    </Button>
                    {game.links.play ? (
                      <Button
                        size="sm"
                        className="bg-hugo-button-primary hover:bg-hugo-button-hover text-white text-xs flex-1 sm:flex-none py-2"
                        as="a"
                        href={game.links.play}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Play
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="bg-hugo-button-primary hover:bg-hugo-button-hover text-white text-xs flex-1 sm:flex-none py-2"
                        as="a"
                        href={game.links.download}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
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
                I'm Marco Brunetti, a seasoned game developer with 8+ years of experience specializing in Unity and C#
                development. Currently serving as Team Lead at Posibillian Tech, where I lead a team of 8 engineers
                developing top-performing mobile games with 100k+ downloads.
              </p>
              <p className="text-hugo-muted text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                As President of IGDA Paraguay, I'm passionate about fostering the local game development community
                through workshops, meetups, and advocacy for industry growth. My portfolio spans 12+ shipped indie
                titles, including The Cursed Silence series, which earned 4.5/5 ratings for polished mechanics and
                design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 py-2"
                  as="a"
                  href="https://github.com/marco-brunetti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 py-2"
                  as="a"
                  href="https://www.linkedin.com/in/marco199609/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20 py-2"
                  as="a"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 flex justify-center">
              <Image
                src="/images/profile.jpg"
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
              <Card key={index} className="bg-hugo-lighter border-hugo-border border-2">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-5">
                    <div className="text-hugo-accent mr-3">{skill.icon}</div>
                    <h3 className="text-hugo-text font-semibold text-sm sm:text-base">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-hugo-bg rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-hugo-button-primary to-hugo-accent h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-hugo-muted text-xs sm:text-sm mt-3">{skill.level}% Proficiency</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-hugo-darker">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-hugo-text text-center mb-10 sm:mb-14 leading-tight">
            Get In Touch
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-hugo-text mb-5 sm:mb-6 leading-snug">
                Let's Work Together
              </h3>
              <p className="text-hugo-muted mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or
                want to discuss game development, feel free to reach out!
              </p>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-center text-hugo-muted text-sm sm:text-base">
                  <Mail className="w-5 h-5 mr-3 text-hugo-accent flex-shrink-0" />
                  <span className="break-all">marcobrunetti.dev@gmail.com</span>
                </div>
                <div className="flex items-center text-hugo-muted text-sm sm:text-base">
                  <Github className="w-5 h-5 mr-3 text-hugo-accent flex-shrink-0" />
                  <span className="break-all">github.com/marco-brunetti</span>
                </div>
                <div className="flex items-center text-hugo-muted text-sm sm:text-base">
                  <Linkedin className="w-5 h-5 mr-3 text-hugo-accent flex-shrink-0" />
                  <span className="break-all">linkedin.com/in/marco199609</span>
                </div>
                <div className="flex items-center text-hugo-muted text-sm sm:text-base">
                  <MapPin className="w-5 h-5 mr-3 text-hugo-accent flex-shrink-0" />
                  <span>Asunción, Paraguay</span>
                </div>
              </div>
            </div>
            <Card className="bg-hugo-lighter border-hugo-border border-2">
              <CardContent className="p-5 sm:p-6">
                <form className="space-y-5">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-hugo-button-secondary border-hugo-border border-2 text-hugo-text placeholder:text-hugo-muted focus:border-hugo-accent text-sm sm:text-base py-6"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-hugo-button-secondary border-hugo-border border-2 text-hugo-text placeholder:text-hugo-muted focus:border-hugo-accent text-sm sm:text-base py-6"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={4}
                      className="bg-hugo-button-secondary border-hugo-border border-2 text-hugo-text placeholder:text-hugo-muted focus:border-hugo-accent text-sm sm:text-base resize-none py-3"
                    />
                  </div>
                  <Button className="w-full bg-hugo-button-primary hover:bg-hugo-button-hover text-white text-sm sm:text-base py-6">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
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
