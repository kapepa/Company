import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News | Company',
  description: 'news page',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return children
}