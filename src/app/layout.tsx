import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nextjs 13.4 image gallery',
  description: 'Tutorial on how to use nextjs 13.4 image component',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <div>This div is sherd all over the app</div>
        {children}
      </body>
    </html>
  )
}
