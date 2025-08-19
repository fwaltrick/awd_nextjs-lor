import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lord Of The Rings',
  description: 'Explore the world of Tolkien',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`}
      >
        <nav className="flex flex-col sm:flex-row items-center justify-between px-8 py-4 mb-8 bg-neutral-800 ">
          <Link href="/">
            <Image
              src="/images/logo_lotr.png"
              alt="Lord Of The Rings Logo"
              height={62}
              width={300}
            />
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <ul className="flex gap-6 text-lg font-semibold">
              <li>
                <Link
                  href="/volumes"
                  className="hover:text-blue-400 transition"
                >
                  Volumes
                </Link>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About Tolkien
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
