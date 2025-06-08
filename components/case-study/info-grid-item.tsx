import { cn } from "@/lib/utils"

interface InfoGridItemProps {
  label: string
  value: string
  className?: string
}

export function InfoGridItem({ label, value, className }: InfoGridItemProps) {
  return (
    <div className={cn("bg-hugo-lighter border border-hugo-border rounded-lg p-4 relative overflow-hidden", className)}>
      <div className="absolute top-0 right-0 w-12 h-12 bg-hugo-accent/10 rounded-bl-full" />
      <div className="text-hugo-accent font-medium text-sm mb-1">{label}</div>
      <div className="text-hugo-text font-semibold">{value}</div>
    </div>
  )
}
