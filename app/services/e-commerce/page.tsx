import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ShoppingCart, CreditCard, Box, BarChart3, Smartphone, ShieldCheck, Store, Users, Truck, Repeat } from 'lucide-react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'E-Commerce Website Package - Omos Designs',
  description: 'Complete online store with payment processing, inventory management, order tracking, and customer accounts. Perfect for businesses selling products online.',
  keywords: 'e-commerce website, online store, payment processing, inventory management, Chicago web design, custom shopping cart'
}

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-background">
  <div className="container mx-auto px-12 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">
            E-Commerce Website Package
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete online store solution with secure payment processing, inventory management, 
            and customer accounts. Everything you need to sell products online successfully.
          </p>
        </div>

        {/* What's Included */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">E-Commerce Features</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Complete Online Store</h3>
                  <p className="text-sm text-muted-foreground">
                    Product catalog with categories, detailed product pages, and search functionality
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Secure Payment Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Accept credit cards, PayPal, and other payment methods with SSL encryption
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Inventory Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Track stock levels, set up automated low-stock alerts, and manage variants
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Order Management System</h3>
                  <p className="text-sm text-muted-foreground">
                    Process orders, print shipping labels, and track fulfillment status
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">Customer Accounts</h3>
                  <p className="text-sm text-muted-foreground">
                    User registration, order history, wish lists, and account management
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-lg">✓</span>
                <div>
                  <h3 className="font-semibold">All Complete Website Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Plus CMS, advanced SEO, analytics, and professional email setup
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
                  <Store className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Product-Based Businesses</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Retailers, manufacturers, and artisans selling physical or digital products
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Truck className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Brick & Mortar Expansion</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Existing stores looking to expand their reach with online sales
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Wholesale Businesses</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        B2B companies needing customer-specific pricing and bulk order capabilities
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <Repeat className="w-6 h-6 text-purple-500 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-base">Subscription Services</CardTitle>
                    <CardContent className="p-0">
                      <p className="text-xs text-muted-foreground">
                        Businesses offering recurring deliveries or membership-based products
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Advanced E-Commerce Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Advanced E-Commerce Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <ShoppingCart className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold">Shopping Cart</h3>
              <p className="text-sm text-muted-foreground">
                Persistent cart, guest checkout, abandoned cart recovery, and promotional codes
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <CreditCard className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold">Payment Gateway</h3>
              <p className="text-sm text-muted-foreground">
                Stripe, PayPal, and multiple payment options with PCI compliance
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Box className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold">Shipping Integration</h3>
              <p className="text-sm text-muted-foreground">
                Real-time shipping rates, label printing, and tracking integration
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <BarChart3 className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold">Sales Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Revenue tracking, product performance, and customer behavior insights
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Smartphone className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold">Mobile Optimized</h3>
              <p className="text-sm text-muted-foreground">
                Touch-friendly mobile shopping experience with mobile payment options
              </p>
            </div>
            <div className="text-center space-y-4 p-6 bg-card rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-heading font-semibold">Security Features</h3>
              <p className="text-sm text-muted-foreground">
                SSL certificates, fraud protection, and secure customer data handling
              </p>
            </div>
          </div>
        </div>

        {/* ROI Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Return on Investment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Cost Comparison</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Monthly Platform Fees</span>
                  <span className="text-sm font-medium text-green-600">$0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Transaction Fees</span>
                  <span className="text-sm font-medium">Standard payment processing only</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Setup & Development</span>
                  <span className="text-sm font-medium text-green-600">Included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Hosting & Maintenance</span>
                  <span className="text-sm font-medium text-green-600">Included</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>Total Monthly Cost</span>
                  <span className="text-primary">$200+</span>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Break-Even Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Average Order Value: $50</span>
                  <span className="text-sm font-medium">4 orders needed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average Order Value: $100</span>
                  <span className="text-sm font-medium">2 order needed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average Order Value: $200</span>
                  <span className="text-sm font-medium">1 order needed</span>
                </div>
                <div className="border-t pt-2">
                  <p className="text-xs text-muted-foreground">
                    * To break even on monthly costs
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Compare Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
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
            <Card className="border-2 border-primary">
              <CardHeader className="text-center">
                <CardTitle>E-Commerce</CardTitle>
                <div className="text-2xl font-bold text-primary">$200+/month</div>
                <CardDescription>Complete online store</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" disabled>
                  You're Here
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Web Application</CardTitle>
                <div className="text-2xl font-bold text-primary">Custom</div>
                <CardDescription>Custom functionality</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/web-applications">
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
          <h2 className="text-3xl font-heading font-bold text-center mb-8">E-Commerce FAQ</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="payment">
                  <AccordionTrigger className="text-lg font-heading font-semibold">What payment methods can I accept?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    We integrate with Stripe and PayPal to accept all major credit cards, debit cards, 
                    digital wallets, and bank transfers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-lg font-heading font-semibold">How do shipping costs work?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    We can set up flat rates, free shipping thresholds, real-time carrier rates, 
                    or custom shipping rules based on your business needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="inventory">
                  <AccordionTrigger className="text-lg font-heading font-semibold">Can I manage inventory myself?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Yes, you'll have full access to manage products, inventory levels, and variants 
                    through an easy-to-use admin dashboard.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="fees">
                  <AccordionTrigger className="text-lg font-heading font-semibold">Are there transaction fees?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    You only pay standard payment processing fees (typically 2.9% + 30¢). 
                    No additional transaction fees from us.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-heading font-bold">Ready to Start Selling Online?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your product business with a professional e-commerce solution. 
            Let's discuss your products and create a store that converts visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <Link href="/contact">
                Start Your Store
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}