import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Cirujano De Rodilla | Pachuca',
  description: 'the madafakin website of the world!',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">

      <body>{children}</body>

    </html>
  )
}
