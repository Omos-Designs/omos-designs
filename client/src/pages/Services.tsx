import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Globe, Layout, ShoppingCart, Rocket, Plus, ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "simple",
    title: "Simple Website",
    description: "Perfect for small businesses just getting started online",
    timeline: "2-3 weeks",
    scope: "1-2 pages",
    deliverables: [
      "Custom homepage showcasing your business",
      "About page with your story and values", 
      "Professional contact form with lead capture",
      "Mobile-responsive design for all devices",
      "Basic search engine optimization (SEO)",
      "Google Analytics setup and integration",
      "Professional business email configuration",
      "Social media links and integration",
      "SSL certificate for security",
      "Performance optimization for fast loading"
    ],
    process: [
      "Discovery call to understand your business goals",
      "Custom design mockups for your approval",
      "Professional content writing and optimization",
      "Development with clean, maintainable code",
      "Testing across all devices and browsers",
      "Launch with full training and documentation"
    ],
    ideal_for: [
      "Local service businesses",
      "Professional consultants",
      "Small retail stores",
      "Freelancers and contractors"
    ],
    icon: <Globe className="w-12 h-12 text-chart-1" />,
    color: "chart-1"
  },
  {
    id: "complete",
    title: "Complete Website",
    description: "Multi-page solution for established businesses",
    timeline: "4-6 weeks",
    scope: "5-10 pages",
    deliverables: [
      "Custom multi-page design with consistent branding",
      "Easy-to-use content management system",
      "Professional blog with category organization",
      "Advanced SEO optimization for higher rankings",
      "Google Analytics and Search Console setup",
      "Professional email system with your domain",
      "Contact forms with automated responses",
      "Image galleries and media management",
      "Customer testimonials and reviews section",
      "Newsletter signup and lead capture",
      "Social media integration and feeds"
    ],
    process: [
      "In-depth strategy session and competitor analysis",
      "Complete site architecture and wireframes",
      "Custom design system and brand guidelines",
      "Professional content writing and photography coordination",
      "Development with advanced functionality",
      "SEO optimization and local search setup",
      "Comprehensive testing and quality assurance",
      "Launch with full training and ongoing support"
    ],
    ideal_for: [
      "Growing businesses with multiple services",
      "Professional service firms",
      "Restaurants and hospitality",
      "Nonprofits and organizations"
    ],
    icon: <Layout className="w-12 h-12 text-chart-2" />,
    popular: true,
    color: "chart-2"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    description: "Complete online store with payment processing",
    timeline: "6-8 weeks",
    scope: "Full online store",
    deliverables: [
      "Custom product catalog with categories and filters",
      "Secure payment processing (Stripe, PayPal, etc.)",
      "Advanced inventory management system",
      "Order tracking and management dashboard",
      "Customer account portal with order history",
      "Mobile-optimized checkout process",
      "Shopping cart with save-for-later functionality",
      "Product reviews and rating system",
      "Coupon and discount code system",
      "Email marketing integration (Mailchimp, Klaviyo)",
      "Sales analytics and reporting dashboard",
      "Automated order confirmation emails",
      "Shipping calculator and tax management"
    ],
    process: [
      "E-commerce strategy and competitor research",
      "Product catalog organization and setup",
      "Payment gateway integration and testing",
      "Custom design with conversion optimization",
      "Advanced functionality development",
      "Payment security and compliance setup",
      "Inventory and shipping system integration", 
      "Comprehensive testing with real transactions",
      "Launch with full training on order management"
    ],
    ideal_for: [
      "Retail businesses expanding online",
      "Product manufacturers",
      "Subscription-based services",
      "Digital product sellers"
    ],
    icon: <ShoppingCart className="w-12 h-12 text-chart-3" />,
    color: "chart-3"
  },
  {
    id: "webapp",
    title: "Web Applications & SaaS",
    description: "Custom software solutions for complex business needs",
    timeline: "8-16 weeks",
    scope: "Custom application",
    deliverables: [
      "Custom business logic and workflow automation",
      "User authentication with role-based permissions",
      "Database design and optimization",
      "RESTful API development for integrations",
      "Admin dashboard with analytics and reporting",
      "Automated email notifications and alerts",
      "File upload and document management",
      "Search and filtering capabilities", 
      "Data export and import functionality",
      "Third-party service integrations",
      "Scalable cloud hosting architecture",
      "Performance monitoring and optimization",
      "Comprehensive security implementation",
      "User training and technical documentation"
    ],
    process: [
      "Discovery and requirements analysis",
      "Technical architecture and database design",
      "User experience design and prototyping",
      "Agile development with regular check-ins",
      "Integration with your existing systems",
      "Security audit and penetration testing",
      "Performance optimization and scalability testing",
      "User training and comprehensive documentation",
      "Deployment with monitoring and support"
    ],
    ideal_for: [
      "Businesses with unique workflows", 
      "SaaS and subscription services",
      "Data-driven organizations",
      "Companies needing custom automation"
    ],
    icon: <Rocket className="w-12 h-12 text-primary" />,
    color: "primary"
  }
];

const addOnServices = [
  {
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website",
    features: ["Keyword research & strategy", "On-page optimization", "Local SEO setup", "Monthly progress reports"]
  },
  {
    title: "Google Ads Management",
    description: "Professional pay-per-click advertising campaigns that deliver results",
    features: ["Campaign setup & optimization", "Audience targeting", "Ad copy creation", "Conversion tracking"]
  },
  {
    title: "Branding & Logo Design",
    description: "Complete brand identity package to establish your professional presence",
    features: ["Logo design & variations", "Brand guidelines", "Color palette & fonts", "Business card design"]
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing website updates, security monitoring, and technical support",
    features: ["Regular updates & backups", "Security monitoring", "Technical support", "Performance optimization"]
  },
  {
    title: "Content Creation",
    description: "Professional copywriting and imagery that engages your audience",
    features: ["Website copywriting", "Blog content creation", "Image sourcing & editing", "Social media content"]
  },
  {
    title: "Analytics & Reporting",
    description: "Detailed insights into your website performance and visitor behavior",
    features: ["Google Analytics setup", "Monthly performance reports", "Conversion tracking", "Actionable insights"]
  }
];

export default function Services() {
  const handleGetQuote = (serviceTitle: string) => {
    console.log(`Get quote for ${serviceTitle} clicked`);
  };

  const handleContactUs = () => {
    console.log('Contact us clicked');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Custom Solutions for Every Business Need
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From simple websites to complex web applications, we provide personalized solutions 
            that grow with your business. No templates, no limitations – just custom-coded excellence.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <Card className={`relative overflow-hidden hover-elevate transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-primary shadow-lg' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-chart-1 to-chart-2 text-white px-6 py-2 rounded-bl-lg">
                      <span className="text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="grid lg:grid-cols-5 gap-6 p-6">
                    {/* Service Info */}
                    <div className="lg:col-span-3 space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 flex items-center justify-center flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div className="space-y-1">
                          <h2 className="text-xl font-heading font-bold">{service.title}</h2>
                          <p className="text-muted-foreground">{service.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {service.timeline}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {service.scope}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-3">
                        <h3 className="font-heading font-semibold">Key Features:</h3>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {service.deliverables.slice(0, 4).map((deliverable, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-chart-1 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                        {service.deliverables.length > 4 && (
                          <p className="text-xs text-muted-foreground">
                            + {service.deliverables.length - 4} more features included
                          </p>
                        )}
                      </div>

                      {/* Ideal For */}
                      <div className="space-y-2">
                        <h3 className="font-heading font-semibold text-sm">Perfect for:</h3>
                        <div className="flex flex-wrap gap-1">
                          {service.ideal_for.map((type, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs px-2 py-1">
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Section */}
                    <div className="lg:col-span-2 space-y-4">
                      <Card className="p-4 text-center bg-gradient-to-br from-chart-1/10 to-chart-2/10 h-fit">
                        <div className="space-y-3">
                          <h3 className="font-heading font-semibold">Get Started</h3>
                          <Button 
                            className="w-full" 
                            onClick={() => handleGetQuote(service.title)}
                            data-testid={`get-quote-${service.id}`}
                          >
                            Free Consultation
                          </Button>
                          <div className="text-xs text-muted-foreground">
                            <Link href="/pricing" className="text-primary hover:underline" data-testid="link-pricing-services">View pricing</Link>
                          </div>
                        </div>
                      </Card>
                      
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-xs text-muted-foreground space-y-1">
                          <p className="font-medium text-foreground">Always included:</p>
                          <p>✓ Free consultation</p>
                          <p>✓ Custom design</p>
                          <p>✓ Full training</p>
                          <p>✓ Lifetime updates*</p>
                          <p className="text-xs italic">*with monthly plans</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Add-On Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your website with additional services designed to maximize your online success.
              <span className="block mt-2 text-base">
                <Link href="/pricing" className="text-primary hover:underline font-medium" data-testid="link-pricing-addons">View add-on pricing</Link> on our dedicated Pricing page.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((addon, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded-md flex items-center justify-center mb-3">
                    <Plus className="w-5 h-5 text-chart-1" />
                  </div>
                  <CardTitle className="text-lg">{addon.title}</CardTitle>
                  <CardDescription>{addon.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {addon.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-chart-1 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleGetQuote(addon.title)}
                    data-testid={`addon-${addon.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-chart-1/10 to-chart-2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every successful project starts with a conversation. Let's discuss your goals 
            and find the perfect solution for your business.
          </p>
          <Button onClick={handleContactUs} size="lg" data-testid="services-contact-cta">
            Get Your Free Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}