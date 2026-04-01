import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans, Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700'],
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Mohamed Bash — Software Developer',
  description: 'Full-stack developer building precise, beautiful digital products from Nairobi.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${fraunces.variable} ${jakarta.variable} ${firaCode.variable} bg-obsidian text-ivory antialiased`}
      >
        <Navbar />
        <main className="pt-[68px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}