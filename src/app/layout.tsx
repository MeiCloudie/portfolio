import type { Metadata } from 'next'
import { Poppins, Lobster } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const lobster = Lobster({
  variable: '--font-lobster',
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Trương Thục Vân',
  description: 'Portfolio of Trương Thục Vân (MeiCloudie)',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${lobster.variable} ${poppins.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
          storageKey='theme-mode'
        >
          <Header />
          <main className='py-7'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
