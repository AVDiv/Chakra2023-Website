import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chakra 2023',
  description: 'The CTF hackath0n we never imag1ned 0f...',
  themeColor: '#FFAC30'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
