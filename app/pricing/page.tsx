import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Omos Designs',
  description: 'Transparent monthly pricing with lifetime updates. Choose the perfect web solution for your business with no hidden fees.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monthly payments with lifetime updates. No hidden fees, no surprises. 
            Choose the plan that fits your business needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Simple Website */}
          <div className="bg-card border rounded-lg p-6 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-heading font-bold">Simple Website</h3>
              <p className="text-sm text-muted-foreground">Perfect for small businesses getting started</p>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl font-bold text-primary">$150</div>
              <div className="text-sm text-muted-foreground">per month</div>
              <div className="text-xs text-muted-foreground">or $2,000 lump sum</div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                1-2 page custom design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Mobile responsive
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Contact form integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Basic SEO optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Lifetime updates & redesigns
              </li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Complete Website */}
          <div className="bg-card border rounded-lg p-6 space-y-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                Most Popular
              </span>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-heading font-bold">Complete Website</h3>
              <p className="text-sm text-muted-foreground">Multi-page solution for established businesses</p>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl font-bold text-primary">$225</div>
              <div className="text-sm text-muted-foreground">per month</div>
              <div className="text-xs text-muted-foreground">or $4,500 lump sum</div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Custom multi-page design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Content management system
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Advanced SEO features
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Google Analytics integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Professional email setup
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Lifetime updates & redesigns
              </li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* E-Commerce */}
          <div className="bg-card border rounded-lg p-6 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-heading font-bold">E-Commerce</h3>
              <p className="text-sm text-muted-foreground">Full online store with payment processing</p>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl font-bold text-primary">$325</div>
              <div className="text-sm text-muted-foreground">per month</div>
              <div className="text-xs text-muted-foreground">or $6,500 lump sum</div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Complete online store
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Payment processing setup
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Inventory management
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Order management system
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Customer accounts
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                All Complete Website features
              </li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Web Application */}
          <div className="bg-card border rounded-lg p-6 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-heading font-bold">Web Application</h3>
              <p className="text-sm text-muted-foreground">Custom functionality and integrations</p>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl font-bold text-primary">Custom</div>
              <div className="text-sm text-muted-foreground">pricing</div>
              <div className="text-xs text-muted-foreground">based on requirements</div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Custom functionality
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Third-party integrations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                User authentication
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Database management
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                API development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Scalable architecture
              </li>
            </ul>
            <button className="w-full border border-primary text-primary py-2 rounded-lg font-medium hover:bg-primary/5 transition-colors">
              Request Quote
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-heading font-bold text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-heading font-semibold">Why monthly payments?</h3>
              <p className="text-sm text-muted-foreground">
                Monthly payments make professional websites accessible to small businesses. Plus, you get lifetime updates 
                and redesigns, ensuring your site stays current with technology and design trends.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-semibold">What's included in lifetime updates?</h3>
              <p className="text-sm text-muted-foreground">
                Security updates, content changes, design refresh, new features, and complete redesigns when needed. 
                Your site will never become outdated.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-semibold">Can I switch plans later?</h3>
              <p className="text-sm text-muted-foreground">
                Absolutely! As your business grows, you can upgrade to add new features and functionality. 
                We'll work with you to ensure a smooth transition.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-semibold">Do you offer lump sum pricing?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we offer lump sum options for businesses that prefer upfront payment. However, 
                you'll still receive all the lifetime update benefits.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-muted/30 rounded-lg p-8 mt-16">
          <h2 className="text-2xl font-heading font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project and find the perfect plan for your business.
          </p>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </main>
  )
}