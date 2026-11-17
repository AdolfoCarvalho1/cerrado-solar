import type { Metadata } from 'next'
import { Anton, Archivo, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const display = Anton({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
})

const body = Archivo({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cerrado Solar — engenharia fotovoltaica em Planaltina e no DF',
  description:
    'Projeto, homologação e instalação de sistemas solares em Planaltina e no Distrito Federal. Simule potência, investimento, economia e payback a partir da sua conta de luz.',
  openGraph: {
    title: 'Cerrado Solar — engenharia fotovoltaica',
    description:
      'O sol do Cerrado no seu telhado: dimensionamento, homologação na Neoenergia e monitoramento. Simulação em 8 segundos.',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
