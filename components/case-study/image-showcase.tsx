import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageShowcaseProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function ImageShowcase({ src, alt, caption, className }: ImageShowcaseProps) {
  return (
    <div className={cn("my-8", className)}>
      <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden border-2 border-hugo-border">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      {caption && <p className="text-center text-hugo-muted text-sm mt-2">{caption}</p>}
    </div>
  )
}
