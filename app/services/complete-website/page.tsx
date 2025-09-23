import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Building, Users, Zap, DollarSign, Briefcase, TrendingUp, BarChart3, MailIcon } from 'lucide-react'
import { IconSocial } from '@tabler/icons-react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Complete Website Package - Omos Designs',
  description: 'Multi-page custom website with content management system, advanced SEO, analytics integration, and professional email setup for established businesses.',
  keywords: 'complete website, multi-page website, content management, advanced SEO, business website, Chicago web design'
}

export default function CompleteWebsitePage() {
  return (
    <main className="min-h-screen bg-background">
  <div className="container mx-auto px-12 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="mt-5 inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium mb-2">
            Most Popular
          </div>
          <h1 className="text-4xl font-heading font-bold">
            Complete Website Package
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive multi-page solution for established businesses ready to maximize 
            their online presence with advanced features and content management.
          </p>
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

          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="text-3xl font-heading font-bold">Perfect For</h2>
            <div className="space-y-3">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Established Businesses</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Companies with multiple services/products that need comprehensive online presence
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Content Marketers</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Businesses that regularly publish blogs, case studies, and thought leadership content
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Growing Companies</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Organizations ready to scale their digital marketing and lead generation efforts
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Professional Services</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Law firms, consulting companies, agencies that need to showcase expertise and credibility
                      </p>
                    </CardContent>
                  </div>
                </div>
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
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold">Analytics Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Track website performance, visitor behavior, and business metrics through integrated analytics
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold">Blog System</h3>
              <p className="text-sm text-muted-foreground">
                Built-in blogging platform for content marketing and thought leadership
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold">Brand Consistency</h3>
              <p className="text-sm text-muted-foreground">
                Cohesive design system across all pages with your brand colors, fonts, and imagery
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold">Search Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Advanced SEO implementation to help you rank higher in search results
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <MailIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold">Email Integration</h3>
              <p className="text-sm text-muted-foreground">
                Professional email setup with your domain and newsletter integration options
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <IconSocial className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold">Social Media Ready</h3>
              <p className="text-sm text-muted-foreground">
                Optimized sharing capabilities and social media integration for maximum reach
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
                <div className="text-2xl font-bold text-primary">$50+/month</div>
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
                <div className="text-2xl font-bold text-primary">$100+/month</div>
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
                <div className="text-2xl font-bold text-primary">$200/month</div>
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
                <AccordionItem value="cms">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-left">Can I update my website content myself?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Yes! The included content management system (CMS) lets you easily update text, images, blog posts, and add new pages without any coding required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="seo">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-left">What advanced SEO features are included?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Your site will have XML sitemaps, schema markup, social media tags, and SEO-optimized content structure to help you rank higher and get found online.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="analytics">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-left">How does analytics integration work?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    We can set up Google Analytics so you can track visitor behavior, popular pages, and conversion metrics from a user-friendly dashboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="email">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-left">Is professional domain & setup included?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Yes, we can manage your domain & create custom email addresses using your domain (e.g., info@yourbusiness.com) using a provider of your choosing (Microsoft Office, Google Workspace, etc.) and can integrate with newsletter platforms.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                  <AccordionTrigger className="text-lg font-heading font-semibold text-left">What kind of support do I get?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    You get ongoing support for updates, redesigns, security patches, and performance improvements—your site grows with your business.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
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
            <Button size="lg" className="px-8" asChild>
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