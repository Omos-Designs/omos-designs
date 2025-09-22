import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, BarChart3, Workflow, Link2, Users, Smartphone, Hospital, School, Briefcase, Factory, HeartHandshake, Rocket } from 'lucide-react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'Custom Web Applications - Omos Designs',
  description: 'Custom web applications with advanced functionality, third-party integrations, user authentication, and scalable architecture for unique business needs.',
  keywords: 'custom web application, software development, business automation, API integration, user authentication, Chicago web development'
}

export default function WebApplicationsPage() {
  return (
    <main className="min-h-screen bg-background">
  <div className="container mx-auto px-12 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">
            Custom Web Applications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations with custom web applications featuring advanced functionality, 
            third-party integrations, and scalable architecture tailored to your unique needs.
          </p>
        </div>

        {/* What We Build */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Samples of What We Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-7 h-7 text-primary mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Customer Portals</h3>
              <p className="text-sm text-muted-foreground">
                Secure client dashboards with account management, project tracking, and document sharing
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-primary mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Business Dashboards</h3>
              <p className="text-sm text-muted-foreground">
                Real-time analytics, KPI tracking, and business intelligence tools for data-driven decisions
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="w-7 h-7 text-primary mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Workflow Automation</h3>
              <p className="text-sm text-muted-foreground">
                Streamline operations with automated processes, approvals, and task management systems
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Link2 className="w-7 h-7 text-primary mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">API Integrations</h3>
              <p className="text-sm text-muted-foreground">
                Connect with CRMs, payment systems, marketing tools, and other business software
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Team Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Project management, communication tools, and resource sharing platforms
              </p>
            </Card>
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-7 h-7 text-primary mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Mobile-First Apps</h3>
              <p className="text-sm text-muted-foreground">
                Progressive web applications that work seamlessly across all devices and platforms
              </p>
            </Card>
          </div>
        </div>

        {/* Technical Capabilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Technical Capabilities</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold">Core Features</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">User Authentication & Authorization</h4>
                    <p className="text-sm text-muted-foreground">
                      Secure login systems with role-based permissions and multi-factor authentication
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">Database Design & Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimized database architecture with data backup and recovery systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">RESTful API Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Custom APIs for third-party integrations and mobile app connectivity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">Real-time Updates</h4>
                    <p className="text-sm text-muted-foreground">
                      Live notifications, chat systems, and collaborative editing features
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold">Advanced Features</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">Scalable Architecture</h4>
                    <p className="text-sm text-muted-foreground">
                      Built to handle growth with cloud deployment and performance optimization
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">Data Analytics & Reporting</h4>
                    <p className="text-sm text-muted-foreground">
                      Custom reports, data visualization, and business intelligence tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">Third-party Integrations</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect with existing business tools, payment processors, and external services
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <div>
                    <h4 className="font-semibold">Security & Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Enterprise-level security with compliance support for GDPR, HIPAA, and more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Development Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                1
              </div>
              <h3 className="font-heading font-semibold">Discovery & Planning</h3>
              <p className="text-sm text-muted-foreground">
                Deep dive into requirements, user flows, and technical specifications
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                2
              </div>
              <h3 className="font-heading font-semibold">Prototyping</h3>
              <p className="text-sm text-muted-foreground">
                Interactive prototypes and wireframes to validate concepts early
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                3
              </div>
              <h3 className="font-heading font-semibold">Iterative Development</h3>
              <p className="text-sm text-muted-foreground">
                Agile development with regular demos and feedback incorporation
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold">
                4
              </div>
              <h3 className="font-heading font-semibold">Testing & Launch</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive testing, deployment, and ongoing support
              </p>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hospital className="w-9 h-9 text-blue-600 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground">
                Patient portals, appointment systems, and HIPAA-compliant solutions
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="w-9 h-9 text-green-600 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                Learning management systems, student portals, and administrative tools
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-9 h-9 text-purple-600 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Professional Services</h3>
              <p className="text-sm text-muted-foreground">
                Client management, project tracking, and billing automation
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-9 h-9 text-orange-600 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm text-muted-foreground">
                Inventory management, quality control, and supplier portals
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-9 h-9 text-red-600 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Non-profits</h3>
              <p className="text-sm text-muted-foreground">
                Donor management, volunteer coordination, and program tracking
              </p>
            </Card>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-9 h-9 text-teal-600 mx-auto" />
              </div>
              <h3 className="font-heading font-semibold mb-2">Startups</h3>
              <p className="text-sm text-muted-foreground">
                MVP development, rapid prototyping, and scalable foundations
              </p>
            </Card>
          </div>
        </div>

        {/* Investment & ROI */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Investment & ROI</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Typical Project Investment</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Simple automation tool</span>
                  <span className="text-sm font-medium">$5,000 - $15,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Customer portal</span>
                  <span className="text-sm font-medium">$10,000 - $25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Business dashboard</span>
                  <span className="text-sm font-medium">$15,000 - $35,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Complex workflow system</span>
                  <span className="text-sm font-medium">$25,000 - $75,000</span>
                </div>
                <div className="border-t pt-2">
                  <p className="text-xs text-muted-foreground">
                    * Pricing varies based on complexity and requirements
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Potential ROI Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm">↗</span>
                  <span className="text-sm">50-80% reduction in manual processes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm">↗</span>
                  <span className="text-sm">25-40% improvement in team productivity</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm">↗</span>
                  <span className="text-sm">60-90% faster data access and reporting</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm">↗</span>
                  <span className="text-sm">Improved customer satisfaction and retention</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 text-sm">↗</span>
                  <span className="text-sm">Reduced errors and operational costs</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ - Accordion Style */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              <Accordion type="single" collapsible>
                <AccordionItem value="custom">
                  <AccordionTrigger className="text-lg font-heading font-semibold">What is a custom web application?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    A custom web application is software built specifically for your needs, with unique features, integrations, and workflows that off-the-shelf solutions can't provide.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="process">
                  <AccordionTrigger className="text-lg font-heading font-semibold">How does the development process work?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    We follow a collaborative process: discovery & planning, prototyping, iterative development, and thorough testing before launch. You'll get regular demos and feedback opportunities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="security">
                  <AccordionTrigger className="text-lg font-heading font-semibold">How do you ensure security and compliance?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    We implement enterprise-level security, data encryption, and compliance support for standards like GDPR and HIPAA, tailored to your industry requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="integration">
                  <AccordionTrigger className="text-lg font-heading font-semibold">Can you integrate with our existing tools?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Yes! We build APIs and integrations for CRMs, payment processors, marketing platforms, and other business software you already use.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                  <AccordionTrigger className="text-lg font-heading font-semibold">What kind of support is included?</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    You get ongoing support for updates, bug fixes, feature enhancements, and scaling as your business grows.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center space-y-6 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-heading font-bold">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your unique requirements and explore how a custom web application 
            can streamline your operations and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="/contact">Build your App</a>
            </Button>
          </div>
        </div>
        </div>
    </main>
  )
}