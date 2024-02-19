import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Dr. Marco Jardinez | Cirujano de Rodilla Experto | Tratamiento Integral de Rodilla',
  description: 'Especialista en salud de la rodilla. Ofrecemos soluciones personalizadas para aliviar el dolor, tratar lesiones y mejorar la movilidad.',
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
