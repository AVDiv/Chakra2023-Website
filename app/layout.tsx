import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manthra 2023',
  description: 'The Ultimate Hackathon',
  themeColor: '#FFAC30',
  applicationName: "Manthra 2023",
  authors: [{name: "IEEE CS NSBM"}],
  viewport: 'width=device-width, initial-scale=1',
  colorScheme: 'dark',
  keywords: ['manthra 2023', 'manthra ieee nsbm', 'manthra ieee cs nsbm', 'ieee nsbm', 'ieee cs nsbm', 'hackathon', 'hackathon ieee nsbm', 'ieee cs nsbm hackathon', 'ieee nsbm hackathon', 'hackathon 2023'],
  openGraph:
  {
    title:'Manthra 2023 - IEEE CS NSBM',
    description:'The Ultimate Hackathon',
    url:'https://manthra.ieeensbm.org',
    type:'website',
  },
  other: {
    'google-site-verification': "-Ev-I-Jvki6tb_iB4BhnnfHcRQlGUWjVi7q7UbiqxAo",
  }
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
