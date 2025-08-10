import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/footer'
import { ThemeProvider } from '@/context/ThemeContext'
import { MenuProvider } from '@/context/MenuContext'

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
        <ThemeProvider>
          <MenuProvider>
            <Nav />
            {children}
            <Footer />
          </MenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
