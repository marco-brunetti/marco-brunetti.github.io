import { cn } from "@/lib/utils"

interface TechBadgeProps {
  name: string
  className?: string
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-hugo-button-primary to-hugo-accent text-white px-3 py-1 rounded-full text-sm font-medium",
        className,
      )}
    >
      {name}
    </span>
  )
}
