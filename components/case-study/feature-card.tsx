import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <Card className={cn("bg-hugo-lighter border-hugo-border border-2 overflow-hidden", className)}>
      <CardContent className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          {icon && <div className="text-hugo-accent mt-1">{icon}</div>}
          <div>
            <h3 className="text-hugo-text font-semibold text-base sm:text-lg mb-2">{title}</h3>
            <p className="text-hugo-muted text-sm sm:text-base">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
