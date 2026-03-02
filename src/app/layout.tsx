import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jae Won Choi — Ph.D. Student in CS',
  description:
    'Personal portfolio of Jae Won Choi, Ph.D. student in Computer Science at USC. Research in machine learning, graph neural networks, and computational biology.',
  keywords: ['machine learning', 'graph neural networks', 'computational biology', 'USC', 'PhD'],
  authors: [{ name: 'Jae Won Choi' }],
  openGraph: {
    title: 'Jae Won Choi — Ph.D. Student in CS',
    description: 'Personal portfolio of Jae Won Choi at USC.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0, padding: 0, fontFamily: 'var(--font-geist-sans), sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}
