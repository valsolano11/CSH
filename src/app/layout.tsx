import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

import SiteHeader from './components/Header'
import Footer from './components/Footer'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'CSH Tech Solution | Tecnología que impulsa tu negocio',
  description:
    'Soluciones tecnológicas, software, hardware, licencias e infraestructura para empresas y profesionales.',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="font-sans antialiased">
        <SiteHeader />

        {children}

        <Footer />
      </body>
    </html>
  )
}