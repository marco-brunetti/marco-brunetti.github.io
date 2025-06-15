import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  icon: '/images/favicon.ico',
  title: 'Marco Brunetti | Game Developer Portfolio',
  description: 'Game Developer Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
