import type { Metadata } from 'next'
import { Open_Sans, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { Analytics } from "@vercel/analytics/next"

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Omos Designs - Professional Web Design & Development',
    template: '%s | Omos Designs'
  },
  description: 'Professional web design and development agency serving businesses nationwide. Custom-coded solutions, monthly pricing with lifetime updates, and exceptional support.',
  keywords: ['web design', 'web development', 'Chicago web design', 'small business websites', 'custom websites'],
  authors: [{ name: 'Omos Designs' }],
  creator: 'Omos Designs',
  metadataBase: new URL('https://omosdesigns.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omosdesigns.com',
    title: 'Omos Designs - Professional Web Design & Development',
    description: 'Professional web design and development agency serving businesses nationwide.',
    siteName: 'Omos Designs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omos Designs - Professional Web Design & Development',
    description: 'Professional web design and development agency serving businesses nationwide.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}