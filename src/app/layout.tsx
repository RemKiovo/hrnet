import type { Metadata } from 'next'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import { Providers } from '@/lib/providers'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'HRNet',
  description: 'HRNet is a HR management application',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Header />
        <main className='container mx-auto md:py-8 pt-4'>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  )
}
