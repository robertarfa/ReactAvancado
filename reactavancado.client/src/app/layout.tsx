import type { Metadata } from 'next'
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'

export const metadata: Metadata = {
    title: 'WonGames',
    description: 'Pagina de jogos',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
          <StyledComponentsRegistry>
            <Providers>
            {children}
            </Providers>
          </StyledComponentsRegistry>
            </body>
        </html>
    )
}
