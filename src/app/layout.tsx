import type { Metadata } from 'next'
import './globals.css'
import React from "react";

export const metadata: Metadata = {
  title: 'Usman Iqbal — Full Stack Developer',
  description: 'Senior Software Engineer specializing in Next.js, MERN Stack, and Laravel. Building scalable web applications from Lahore, Pakistan.',
  keywords: ['Usman Iqbal', 'Full Stack Developer', 'Next.js', 'MERN Stack', 'Laravel', 'Lahore', 'Pakistan'],
  authors: [{ name: 'Usman Iqbal' }],
  openGraph: {
    title: 'Usman Iqbal — Full Stack Developer',
    description: 'Senior Software Engineer | Next.js • MERN • Laravel',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
