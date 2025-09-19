import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Omos Designs',
  description: 'Learn about Omos Designs - your reliable partner for professional web development with personalized service and custom solutions.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">
            About Omos Designs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your reliable partner for professional web development. We're the "shoulder to lean on" 
            for businesses looking to establish or enhance their digital presence.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              Founded with the vision of making professional web development accessible to small businesses, 
              Omos Designs specializes in creating custom-coded solutions that grow with your business.
            </p>
            <p className="text-muted-foreground">
              Based in the Chicagoland area but serving businesses nationwide, we understand that every 
              business is unique and deserves a website that reflects their individual story and goals.
            </p>
            <p className="text-muted-foreground">
              Our name "Omos" means "shoulder" in Greek - symbolizing our role as the reliable support 
              system businesses need for their digital transformation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="font-heading font-semibold mb-2">Partnership Approach</h3>
            <p className="text-sm text-muted-foreground">
              We believe in building long-term partnerships, not just delivering projects.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                💝
              </div>
              <h3 className="font-heading font-semibold">Personal Touch</h3>
              <p className="text-sm text-muted-foreground">
                Every project receives individual attention and custom solutions tailored to specific needs.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                🏢
              </div>
              <h3 className="font-heading font-semibold">Local Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Based in Chicagoland with deep understanding of local business needs and markets.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                💻
              </div>
              <h3 className="font-heading font-semibold">Custom Development</h3>
              <p className="text-sm text-muted-foreground">
                No templates or builders - everything is hand-coded for optimal performance and uniqueness.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                🏆
              </div>
              <h3 className="font-heading font-semibold">Proven Results</h3>
              <p className="text-sm text-muted-foreground">
                5+ years of experience helping small businesses succeed online with modern solutions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-heading font-bold">Ready to Partner With Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with a professional web presence 
            that truly represents your brand and serves your customers.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </main>
  )
}