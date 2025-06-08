import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { InfoGridItem } from "./case-study/info-grid-item"
import { TechBadge } from "./case-study/tech-badge"

interface TechTag {
  name: string
}

interface GameInfo {
  engine: string
  platform: string
  genre: string
  developmentTime: string
  status: string
  teamSize: string
}

interface CaseStudyProps {
  title: string
  subtitle: string
  gameInfo: GameInfo
  coverImage: string
  children: React.ReactNode
  techStack: TechTag[]
}

export default function CaseStudyLayout({
  title,
  subtitle,
  gameInfo,
  coverImage,
  children,
  techStack,
}: CaseStudyProps) {
  return (
    <div className="min-h-screen bg-hugo-bg text-hugo-text">
      {/* Header */}
      <header className="fixed top-0 w-full bg-hugo-darker/90 backdrop-blur-md border-b border-hugo-border z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-hugo-text leading-normal">MARCO BRUNETTI</h1>
              <p className="text-hugo-muted text-xs sm:text-sm">Game Developer Portfolio</p>
            </div>
            <Link href="/" className="text-hugo-muted hover:text-hugo-text transition-colors underline text-sm">
              Back to Portfolio
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-hugo-text mb-4">{title}</h1>
            <p className="text-hugo-muted text-lg sm:text-xl max-w-2xl mx-auto">{subtitle}</p>
          </div>

          {/* Game Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            <InfoGridItem label="Engine" value={gameInfo.engine} />
            <InfoGridItem label="Platform" value={gameInfo.platform} />
            <InfoGridItem label="Genre" value={gameInfo.genre} />
            <InfoGridItem label="Development Time" value={gameInfo.developmentTime} />
            <InfoGridItem label="Status" value={gameInfo.status} />
            <InfoGridItem label="Team Size" value={gameInfo.teamSize} />
          </div>

          {/* Cover Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 mb-12 rounded-lg overflow-hidden border-2 border-hugo-border">
            <Image
              src={coverImage || "/placeholder.svg"}
              alt={`${title} cover image`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none prose-headings:text-hugo-text prose-p:text-hugo-muted prose-p:leading-relaxed prose-li:text-hugo-muted prose-strong:text-hugo-text prose-strong:font-semibold">
            {children}
          </div>

          {/* Tech Stack */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-hugo-text mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <TechBadge key={index} name={tech.name} />
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link href="/">
              <Button
                variant="outline"
                className="border-hugo-border border-2 text-hugo-muted hover:bg-hugo-button-secondary-hover hover:text-hugo-text bg-hugo-button-secondary/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </main>

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
