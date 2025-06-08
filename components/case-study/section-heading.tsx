import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-6", className)}>
      <h2 className="text-2xl sm:text-3xl font-bold text-hugo-text mb-2">{children}</h2>
      <div className="h-1 w-16 bg-gradient-to-r from-hugo-button-primary to-hugo-accent rounded-full"></div>
    </div>
  )
}
