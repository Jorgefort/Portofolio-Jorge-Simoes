import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ULTRAKILL - MANKIND IS DEAD",
  description: "A tribute to the beauty and art style of ULTRAKILL",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/vcr-osd-mono" rel="stylesheet" />
      </head>
      <body className="font-mono antialiased bg-[#0a0a0a] text-white overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
