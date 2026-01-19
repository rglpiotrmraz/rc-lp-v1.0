import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Royal Concierge | VIP Management Company',
  description: 'Premier VIP management for the distinguished few. Personal concierge, private travel, and exclusive access to the world\'s most prestigious experiences.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
