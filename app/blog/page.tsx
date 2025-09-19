import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Omos Designs',
  description: 'Read our latest insights on web design, development trends, and digital marketing tips for small businesses.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">
            Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest web design trends, development tips, and digital marketing 
            strategies to help your business succeed online.
          </p>
        </div>

        {/* Blog will be built with markdown system in next tasks */}
        <div className="text-center space-y-6 bg-muted/30 rounded-lg p-12">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">📝</span>
          </div>
          <h2 className="text-2xl font-heading font-bold">Articles Coming Soon</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're preparing valuable content about web development, design trends, and business growth strategies. 
            Subscribe to our newsletter to be notified when we publish new articles.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </main>
  )
}