import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Ephraims portfolio`,
  description: 'Ephraim-Iyanda frontend developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
