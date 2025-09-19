import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Complete Website Package - Omos Designs',
  description: 'Multi-page custom website with content management system, advanced SEO, analytics integration, and professional email setup for established businesses.',
  keywords: 'complete website, multi-page website, content management, advanced SEO, business website, Chicago web design'
}

export default function CompleteWebsitePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium mb-2">
            Most Popular
          </div>
          <h1 className="text-4xl font-heading font-bold">
            Complete Website Package
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive multi-page solution for established businesses ready to maximize 
            their online presence with advanced features and content management.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$225</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <div className="text-muted-foreground">or</div>
            <div className="text-center">
              <div className="text-2xl font-semibold">$4,500</div>
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
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Custom Multi-Page Design</h3>
                  <p className="text-sm text-muted-foreground">
                    5-15 pages including home, about, services, portfolio, blog, contact, and more
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Content Management System</h3>
                  <p className="text-sm text-muted-foreground">
                    Easy-to-use CMS for updating content, adding blog posts, and managing pages
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Advanced SEO Features</h3>
                  <p className="text-sm text-muted-foreground">
                    XML sitemaps, schema markup, social media tags, and SEO-optimized content structure
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Google Analytics Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Track visitor behavior, popular pages, and conversion metrics
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Professional Email Setup</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom email addresses using your domain (info@yourbusiness.com)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Everything from Simple Website</h3>
                  <p className="text-sm text-muted-foreground">
                    Plus mobile responsive design, contact forms, and lifetime updates
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
                  <CardTitle className="text-lg">Established Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Companies with multiple services/products that need comprehensive online presence
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Content Marketers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Businesses that regularly publish blogs, case studies, and thought leadership content
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Growing Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Organizations ready to scale their digital marketing and lead generation efforts
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Professional Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Law firms, consulting companies, agencies that need to showcase expertise and credibility
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Advanced Features Included</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                📊
              </div>
              <h3 className="font-heading font-semibold">Analytics Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Track website performance, visitor behavior, and business metrics through integrated analytics
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                📝
              </div>
              <h3 className="font-heading font-semibold">Blog System</h3>
              <p className="text-sm text-muted-foreground">
                Built-in blogging platform for content marketing and thought leadership
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                🎨
              </div>
              <h3 className="font-heading font-semibold">Brand Consistency</h3>
              <p className="text-sm text-muted-foreground">
                Cohesive design system across all pages with your brand colors, fonts, and imagery
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                🔍
              </div>
              <h3 className="font-heading font-semibold">Search Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Advanced SEO implementation to help you rank higher in search results
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                📧
              </div>
              <h3 className="font-heading font-semibold">Email Integration</h3>
              <p className="text-sm text-muted-foreground">
                Professional email setup with your domain and newsletter integration options
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                📱
              </div>
              <h3 className="font-heading font-semibold">Social Media Ready</h3>
              <p className="text-sm text-muted-foreground">
                Optimized sharing capabilities and social media integration for maximum reach
              </p>
            </div>
          </div>
        </div>

        {/* Typical Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Project Timeline</h2>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                1
              </div>
              <h3 className="font-heading font-semibold">Week 1-2</h3>
              <p className="text-sm text-muted-foreground">
                Discovery & content strategy
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                2
              </div>
              <h3 className="font-heading font-semibold">Week 3-4</h3>
              <p className="text-sm text-muted-foreground">
                Design system & wireframes
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                3
              </div>
              <h3 className="font-heading font-semibold">Week 5-6</h3>
              <p className="text-sm text-muted-foreground">
                Homepage & key pages
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                4
              </div>
              <h3 className="font-heading font-semibold">Week 7-8</h3>
              <p className="text-sm text-muted-foreground">
                CMS & content entry
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                5
              </div>
              <h3 className="font-heading font-semibold">Week 9-10</h3>
              <p className="text-sm text-muted-foreground">
                Testing & optimization
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                6
              </div>
              <h3 className="font-heading font-semibold">Week 11-12</h3>
              <p className="text-sm text-muted-foreground">
                Launch & training
              </p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Compare Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Simple Website</CardTitle>
                <div className="text-2xl font-bold text-primary">$150/month</div>
                <CardDescription>1-2 pages, basic features</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/simple-website">
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle>Complete Website</CardTitle>
                <div className="text-2xl font-bold text-primary">$225/month</div>
                <CardDescription>Multi-page with CMS</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" disabled>
                  You're Here
                </Button>
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

        {/* Success Stories Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Perfect for Growing Businesses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🏢
              </div>
              <h3 className="font-heading font-semibold mb-2">Professional Services</h3>
              <p className="text-sm text-muted-foreground">
                "Our complete website helped us showcase our expertise and attract higher-value clients."
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🌱
              </div>
              <h3 className="font-heading font-semibold mb-2">Growing Startups</h3>
              <p className="text-sm text-muted-foreground">
                "The CMS made it easy to publish content and our SEO rankings improved dramatically."
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                🎯
              </div>
              <h3 className="font-heading font-semibold mb-2">Marketing Focused</h3>
              <p className="text-sm text-muted-foreground">
                "Analytics integration helped us understand our audience and optimize our conversion rates."
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-heading font-bold">Ready for Your Complete Website?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your business with a comprehensive website that grows with you. 
            Let's discuss your goals and create a solution that drives results.
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