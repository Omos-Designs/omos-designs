import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Users, Building, DollarSign, Zap } from 'lucide-react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Simple Website Package - Omos Designs',
  description: 'Perfect for small businesses getting started online. Custom 1-2 page website with mobile responsive design, contact forms, and basic SEO optimization.',
  keywords: 'simple website, small business website, affordable web design, responsive website, Chicago web design',
  openGraph: {
    title: 'Simple Website Package - Omos Designs',
    description: 'Perfect for small businesses getting started online. Custom 1-2 page website with mobile responsive design, contact forms, and basic SEO optimization.',
    url: '/services/simple-website',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple Website Package - Omos Designs',
    description: 'Perfect for small businesses getting started online. Custom 1-2 page website with mobile responsive design, contact forms, and basic SEO optimization.',
  },
  alternates: {
    canonical: '/services/simple-website'
  }
}

export default function SimpleWebsitePage() {
  return (
    <main className="min-h-screen bg-background">
  <div className="container mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">
            Simple Website Package
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perfect for small businesses getting started online. Get a professional, 
            mobile-responsive website that establishes your digital presence.
          </p>
        </div>

        {/* What's Included */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">What's Included</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">1-2 Page Custom Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Typically includes a homepage and an about/contact page tailored to your business
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Mobile Responsive Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Looks perfect on all devices - phones, tablets, and desktops
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Contact Form Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional contact form that sends inquiries directly to your email
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Basic SEO Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Title tags, meta descriptions, and structured data to help customers find you
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Lifetime Updates & Redesigns</h3>
                  <p className="text-sm text-muted-foreground">
                    All future updates, content changes, and redesigns included at no extra cost
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Fast Loading Performance</h3>
                  <p className="text-sm text-muted-foreground">
                    Hand-coded for optimal speed and performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="text-3xl font-heading font-bold">Perfect For</h2>
            <div className="space-y-3">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">New Businesses</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Just starting out and need a professional online presence to establish credibility
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Service Providers</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Consultants, freelancers, and professionals who need to showcase their services
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Local Businesses</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Restaurants, salons, and retail stores wanting to be found online
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Budget-Conscious Businesses</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Need professional web presence without the high upfront costs
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Need More Features?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle>Simple Website</CardTitle>
                <div className="text-2xl font-bold text-primary">$50+/month</div>
                <CardDescription>Current package</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" disabled>
                  You're Here
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Complete Website</CardTitle>
                <div className="text-2xl font-bold text-primary">$100+/month</div>
                <CardDescription>Multi-page with CMS</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/complete-website">
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle>E-Commerce</CardTitle>
                <div className="text-2xl font-bold text-primary">$200+/month</div>
                <CardDescription>Online store</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/e-commerce">
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ - Accordion Style */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="pages">
                  <AccordionTrigger className="text-lg font-heading font-semibold">What if I need more pages later?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    You can upgrade to our Complete Website package at any time. We'll apply any payments 
                    you've already made toward the upgrade.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="content">
                  <AccordionTrigger className="text-lg font-heading font-semibold">Can I update content myself?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Simple websites are designed for businesses that prefer us to handle updates. For self-managed 
                    content, consider our Complete Website package with a content management system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="updates">
                  <AccordionTrigger className="text-lg font-heading font-semibold">What's included in lifetime updates?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Content changes, design updates, security patches, performance improvements, and even 
                    complete redesigns as your business evolves.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="hosting">
                  <AccordionTrigger className="text-lg font-heading font-semibold">Do you provide hosting?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Yes, professional hosting is included. Your website will be fast, secure, and backed up regularly.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-heading font-bold">Ready to Get Your Simple Website?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your business goals and create a professional website that helps you 
            establish credibility and attract new customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Link href="/contact">
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}