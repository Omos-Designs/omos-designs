import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Omos Designs',
  description: 'Transparent monthly pricing with lifetime updates. Choose the perfect web solution for your business with no hidden fees.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
  <div className="container mx-auto px-12 py-16 mt-5">
  <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-heading font-bold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monthly payments with lifetime updates. No hidden fees, no surprises. 
            Choose the option that fits your business needs.
          </p>
          <div className="text-center text-base text-muted-foreground font-bold mt-6 max-w-2xl mx-auto">
            Pricing shown is just an estimate—let's talk about your goals and budget, and we'll work together to create a website solution that fits. No matter your starting point, we'll help make it happen.
          </div>
        </div>

        {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
            {/* Simple Website */}
            <div className="bg-card border rounded-lg p-6 flex flex-col h-full">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-heading font-bold">Simple Website</h3>
              <p className="text-sm text-muted-foreground">Perfect for small businesses getting started</p>
            </div>
            <div className="text-center space-y-1 mt-4">
              <div className="text-3xl font-bold text-primary">$50+</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <ul className="space-y-2 text-sm mt-6 flex-1">
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
            </ul>
              <Button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium transition-colors mt-4 hover:bg-primary/5 hover:text-primary border border-primary" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
          </div>

          {/* Complete Website */}
          <div className="bg-card border rounded-lg p-6 flex flex-col h-full relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                Most Popular
              </span>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-xl font-heading font-bold">Complete Website</h3>
              <p className="text-sm text-muted-foreground">Multi-page solution for established businesses</p>
            </div>
            <div className="text-center space-y-1 mt-4">
              <div className="text-3xl font-bold text-primary">$100+</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <ul className="space-y-2 text-sm mt-6 flex-1">
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
                Google Analytics integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Professional domain & email setup
              </li>
            </ul>
            <div className="flex-1" />
            <Button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium transition-colors mt-4 hover:bg-primary/5 hover:text-primary border border-primary" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* E-Commerce */}
          <div className="bg-card border rounded-lg p-6 flex flex-col h-full">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-heading font-bold">E-Commerce</h3>
              <p className="text-sm text-muted-foreground">Full online store with payment processing</p>
            </div>
            <div className="text-center space-y-1 mt-4">
              <div className="text-3xl font-bold text-primary">$200+</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <ul className="space-y-2 text-sm mt-6 flex-1">
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
            <div className="flex-1" />
            <Button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium transition-colors mt-4 hover:bg-primary/5 hover:text-primary border border-primary" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Web Application */}
          <div className="bg-card border rounded-lg p-6 flex flex-col h-full">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-heading font-bold">Web Application</h3>
              <p className="text-sm text-muted-foreground">Custom functionality and integrations</p>
            </div>
            <div className="text-center space-y-1 mt-4">
              <div className="text-3xl font-bold text-primary">Custom Pricing</div>
            </div>
            <ul className="space-y-2 text-sm mt-6 flex-1">
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
            <div className="flex-1" />
            <Button className="w-full border border-primary text-primary-foreground py-2 rounded-lg font-medium transition-colors mt-4 hover:bg-primary/5 hover:text-primary" asChild>
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>

        {/* FAQ Section - Accordion Style */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="monthly">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-left">Why monthly payments?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Monthly payments make professional websites accessible to small businesses. Plus, you get lifetime updates 
                    and redesigns, ensuring your site stays current with technology and design trends.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="updates">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-left">What's included in lifetime updates?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Security updates, content changes, design refresh, new features, and complete redesigns when needed. 
                    Your site will never become outdated.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="switch">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-left">Can I switch plans later?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    I don't even think of them as plans! Rather, I see them as flexible options and starting points. As your business grows, you can upgrade to add new features and functionality.
                    We'll work together to ensure a smooth transition.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lump">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-left">Do you offer lump sum pricing?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Yes, we offer lump sum options for businesses that prefer upfront payment. However, 
                    you'll still receive all the lifetime update benefits.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-background rounded-lg p-8 mt-16">
          <h2 className="text-2xl font-heading font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schedule a free discovery call to discuss your project and find the perfect plan for your business.
          </p>
            <Button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors" asChild>
              <Link href="/contact">Schedule Discovery Call</Link>
            </Button>
        </div>
      </div>
    </main>
  )
}