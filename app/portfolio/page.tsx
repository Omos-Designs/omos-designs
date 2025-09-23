import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Portfolio - Omos Designs',
  description: 'View our portfolio of custom websites and web applications for small businesses across various industries.',
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 mt-5">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how Omos has helped businesses across various industries establish and enhance 
            their digital presence with custom web solutions.
          </p>
        </div>

        {/* Portfolio will be built with static data in next tasks */}
        <div className="text-center space-y-6 bg-muted/30 rounded-lg p-12">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">🚧</span>
          </div>
          <h2 className="text-2xl font-heading font-bold">Portfolio Coming Soon</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Currently revamping the portfolio design to showcase our latest projects. In the meantime, 
            contact us to see examples of our recent work and discuss your project.
          </p>
            <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
            Request Work Examples
            </a>
        </div>
      </div>
    </main>
  )
}