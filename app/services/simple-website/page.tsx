import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, Users, Building, DollarSign, Zap } from 'lucide-react'
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
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">
            Simple Website Package
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perfect for small businesses getting started online. Get a professional, 
            mobile-responsive website that establishes your digital presence.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$150</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <div className="text-muted-foreground">or</div>
            <div className="text-center">
              <div className="text-2xl font-semibold">$2,000</div>
              <div className="text-sm text-muted-foreground">one-time payment</div>
            </div>
          </div>
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

          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Perfect For</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">New Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Just starting out and need a professional online presence to establish credibility
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Service Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Consultants, freelancers, and professionals who need to showcase their services
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Local Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Restaurants, salons, and retail stores wanting to be found online
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Budget-Conscious Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Need professional web presence without the high upfront costs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Typical Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Typical Project Timeline</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                1
              </div>
              <h3 className="font-heading font-semibold">Week 1</h3>
              <p className="text-sm text-muted-foreground">
                Initial consultation and content gathering
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                2
              </div>
              <h3 className="font-heading font-semibold">Week 2</h3>
              <p className="text-sm text-muted-foreground">
                Design mockups and revisions
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                3
              </div>
              <h3 className="font-heading font-semibold">Week 3</h3>
              <p className="text-sm text-muted-foreground">
                Development and testing
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                4
              </div>
              <h3 className="font-heading font-semibold">Week 4</h3>
              <p className="text-sm text-muted-foreground">
                Launch and training
              </p>
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
                <div className="text-2xl font-bold text-primary">$150/month</div>
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
                <div className="text-2xl font-bold text-primary">$225/month</div>
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
                <div className="text-2xl font-bold text-primary">$325/month</div>
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

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-heading font-semibold">What if I need more pages later?</h3>
              <p className="text-sm text-muted-foreground">
                You can upgrade to our Complete Website package at any time. We'll apply any payments 
                you've already made toward the upgrade.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-semibold">Can I update content myself?</h3>
              <p className="text-sm text-muted-foreground">
                Simple websites are designed for businesses that prefer us to handle updates. For self-managed 
                content, consider our Complete Website package with a content management system.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-semibold">What's included in lifetime updates?</h3>
              <p className="text-sm text-muted-foreground">
                Content changes, design updates, security patches, performance improvements, and even 
                complete redesigns as your business evolves.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-semibold">Do you provide hosting?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, professional hosting is included. Your website will be fast, secure, and backed up regularly.
              </p>
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
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}