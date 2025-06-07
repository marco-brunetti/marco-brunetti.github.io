import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Marco Brunetti - Game Developer Portfolio</title>
        <meta name="description" content="Marco Brunetti's Game Developer Portfolio" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
