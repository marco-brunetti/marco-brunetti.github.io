"use client"

// This is a custom image loader to handle your website's images
export default function imageLoader({ src, width, quality }) {
  // If the source is already an absolute URL (like your website's images)
  if (src.startsWith("http")) {
    return src
  }

  // For local images in the public folder
  return `${src}?w=${width}&q=${quality || 75}`
}
