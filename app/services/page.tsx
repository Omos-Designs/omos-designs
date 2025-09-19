import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Services - Omos Designs',
  description: 'Professional web design and development services for small businesses. From simple websites to complex web applications.',
}

export default function ServicesOverviewPage() {
  const services = [
    {
      title: "Simple Website",
      price: "$150/month",
      description: "Perfect for small businesses getting started online",
      features: ["1-2 page custom design", "Mobile responsive", "Contact form", "Basic SEO"],
      href: "/services/simple-website"
    },
    {
      title: "Complete Website", 
      price: "$225/month",
      description: "Multi-page solution for established businesses",
      features: ["Custom multi-page design", "Content management", "Advanced SEO", "Analytics integration"],
      href: "/services/complete-website",
      popular: true
    },
    {
      title: "E-Commerce",
      price: "$325/month", 
      description: "Full online store with payment processing",
      features: ["Complete online store", "Payment processing", "Inventory management", "Order management"],
      href: "/services/e-commerce"
    },
    {
      title: "Web Application",
      price: "Custom pricing",
      description: "Custom functionality and integrations",
      features: ["Custom functionality", "Third-party integrations", "User authentication", "Scalable architecture"],
      href: "/services/web-applications"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">
            Professional Web Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple business websites to complex web applications, we provide custom-coded solutions 
            that grow with your business. Monthly pricing with lifetime updates included.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <Card key={service.title} className={`relative ${service.popular ? 'border-primary' : ''}`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <div className="text-2xl font-bold text-primary">{service.price}</div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  <Link href={service.href}>
                    <Button className="w-full" variant={service.popular ? "default" : "outline"}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-heading font-bold text-center">Why Choose Our Approach?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-heading font-semibold">Custom Coded</h3>
              <p className="text-sm text-muted-foreground">
                No templates or page builders. Every website is hand-coded for optimal performance and uniqueness.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-heading font-semibold">Lifetime Updates</h3>
              <p className="text-sm text-muted-foreground">
                Monthly payments include unlimited updates, redesigns, and new features as your business grows.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-heading font-semibold">Personal Partnership</h3>
              <p className="text-sm text-muted-foreground">
                Direct communication with your developer. No outsourcing, no middlemen, just personalized service.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl font-heading font-bold text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                1
              </div>
              <h3 className="font-heading font-semibold">Discovery</h3>
              <p className="text-sm text-muted-foreground">
                We learn about your business, goals, and target audience
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                2
              </div>
              <h3 className="font-heading font-semibold">Design</h3>
              <p className="text-sm text-muted-foreground">
                Custom design that reflects your brand and serves your users
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                3
              </div>
              <h3 className="font-heading font-semibold">Development</h3>
              <p className="text-sm text-muted-foreground">
                Hand-coded implementation with modern technologies
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                4
              </div>
              <h3 className="font-heading font-semibold">Launch & Support</h3>
              <p className="text-sm text-muted-foreground">
                Go live with ongoing support and lifetime updates
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-heading font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs. 
            Free consultation with no obligations.
          </p>
          <Button size="lg" className="px-8">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </main>
  )
}