import type { Metadata } from 'next'
import { Figtree, Fragment_Mono } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

const fragmentMono = Fragment_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-fragment-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Analytics Group — Automatización con IA para tu negocio',
  description:
    'Ayudamos a empresas a trabajar de forma más inteligente con automatización e inteligencia artificial a medida.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${figtree.variable} ${fragmentMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
