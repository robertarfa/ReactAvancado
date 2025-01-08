import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.css'

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
                <div id="root">{children}</div>
            </body>
        </html>
    )
}