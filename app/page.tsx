import { Metadata } from 'next'
import { Hero } from "@/components/Hero"
import { ServicesOverview } from "@/components/ServicesOverview"

export const metadata: Metadata = {
  title: 'Professional Web Design & Development',
  description: 'Transform your business with custom web design and development. Monthly pricing with lifetime updates, serving businesses nationwide with Chicago specialization.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ServicesOverview />
      
      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-heading font-bold">
              Why Choose Omos Designs?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're your reliable partner for professional web development, offering personalized service and custom solutions that grow with your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                💝
              </div>
              <h3 className="font-heading font-semibold">Personal Touch</h3>
              <p className="text-sm text-muted-foreground">Every project gets individual attention and custom solutions.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                🤝
              </div>
              <h3 className="font-heading font-semibold">Local Partnership</h3>
              <p className="text-sm text-muted-foreground">Based in Chicagoland, we understand local businesses.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                💻
              </div>
              <h3 className="font-heading font-semibold">Custom Code</h3>
              <p className="text-sm text-muted-foreground">Hand-coded solutions for optimal performance.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                🏆
              </div>
              <h3 className="font-heading font-semibold">Proven Results</h3>
              <p className="text-sm text-muted-foreground">5+ years helping businesses succeed online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how we can help your business succeed online with a custom website solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Free Consultation
            </button>
            <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}