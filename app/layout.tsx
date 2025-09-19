import type { Metadata } from 'next'
import { Open_Sans, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import { Navigation } from '../components/Navigation'

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
          
          {/* Simple Footer */}
          <footer className="bg-muted/30 border-t mt-16">
            <div className="container mx-auto px-4 py-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-heading font-semibold mb-4">Omos Designs</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional web design and development for small businesses nationwide.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Services</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Simple Websites</li>
                    <li>Complete Websites</li>
                    <li>E-Commerce</li>
                    <li>Web Applications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Company</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>About Us</li>
                    <li>Our Process</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Contact</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>📍 Chicagoland Area</li>
                    <li>📧 hello@omosdesigns.com</li>
                    <li>📱 Remote Consultations</li>
                  </ul>
                </div>
              </div>
              <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
                <p>&copy; 2024 Omos Designs. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}