import type React from "react"
import { cn } from "@/lib/utils"

interface ProcessStepProps {
  number: number
  title: string
  children: React.ReactNode
  className?: string
}

export function ProcessStep({ number, title, children, className }: ProcessStepProps) {
  return (
    <div className={cn("relative pl-12 pb-8 border-l-2 border-hugo-border last:border-l-0 last:pb-0", className)}>
      <div className="absolute left-[-15px] top-0 flex items-center justify-center w-7 h-7 rounded-full bg-hugo-button-primary text-white font-bold text-sm">
        {number}
      </div>
      <h3 className="text-hugo-text font-semibold text-lg mb-2">{title}</h3>
      <div className="text-hugo-muted">{children}</div>
    </div>
  )
}
