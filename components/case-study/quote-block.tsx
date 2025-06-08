import { cn } from "@/lib/utils"

interface QuoteBlockProps {
  quote: string
  author?: string
  className?: string
}

export function QuoteBlock({ quote, author, className }: QuoteBlockProps) {
  return (
    <div className={cn("bg-hugo-darker border-l-4 border-hugo-accent p-6 my-6", className)}>
      <blockquote className="text-hugo-text italic text-lg mb-2">"{quote}"</blockquote>
      {author && <div className="text-hugo-muted text-sm">— {author}</div>}
    </div>
  )
}
