import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Globe, Layout, ShoppingCart, Rocket, Plus, ArrowRight } from "lucide-react";

const services = [
  {
    id: "simple",
    title: "Simple Website",
    description: "Perfect for small businesses just getting started online",
    price: "Starting $2,000+",
    monthlyPrice: "$100-150/month",
    timeline: "2-3 weeks",
    features: [
      "1-2 page custom design",
      "Mobile responsive layout",
      "Contact form integration",
      "Basic SEO optimization",
      "Google Analytics setup",
      "3 months free maintenance",
      "Professional email setup",
      "Social media integration"
    ],
    icon: <Globe className="w-12 h-12 text-chart-1" />,
    color: "chart-1"
  },
  {
    id: "complete",
    title: "Complete Website",
    description: "Multi-page solution for established businesses",
    price: "Starting $3,500-6,000+",
    monthlyPrice: "$150-250/month",
    timeline: "4-6 weeks",
    features: [
      "Custom multi-page design",
      "Content management system",
      "Advanced SEO features",
      "Google Analytics & Search Console",
      "Professional email setup",
      "Blog functionality",
      "6 months free maintenance",
      "Training & documentation",
      "Performance optimization"
    ],
    icon: <Layout className="w-12 h-12 text-chart-2" />,
    popular: true,
    color: "chart-2"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    description: "Complete online store with payment processing",
    price: "Starting $6,000-10,000+",
    monthlyPrice: "$200-400/month",
    timeline: "6-8 weeks",
    features: [
      "Custom product catalog",
      "Secure payment processing",
      "Inventory management system",
      "Order tracking & management",
      "Customer account portal",
      "Mobile-optimized checkout",
      "Email marketing integration",
      "Analytics & reporting",
      "SSL certificate included"
    ],
    icon: <ShoppingCart className="w-12 h-12 text-chart-3" />,
    color: "chart-3"
  },
  {
    id: "webapp",
    title: "Web Applications & SaaS",
    description: "Custom software solutions for complex business needs",
    price: "Custom Pricing ($10K+)",
    monthlyPrice: "$200-500+/month",
    timeline: "8-16 weeks",
    features: [
      "Custom functionality development",
      "User authentication & roles",
      "Database design & integration",
      "API development & integration",
      "Scalable cloud architecture",
      "Ongoing support & updates",
      "Performance monitoring",
      "Security implementation",
      "Documentation & training"
    ],
    icon: <Rocket className="w-12 h-12 text-primary" />,
    color: "primary"
  }
];

const addOnServices = [
  {
    title: "SEO Optimization",
    description: "Improve your search engine rankings",
    price: "$500-1,500/month"
  },
  {
    title: "Google Ads Management",
    description: "Professional pay-per-click advertising",
    price: "$800-2,000/month"
  },
  {
    title: "Branding & Logo Design",
    description: "Complete brand identity package",
    price: "$1,500-3,000"
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing website updates and support",
    price: "$150-500/month"
  },
  {
    title: "Content Creation",
    description: "Professional copywriting and imagery",
    price: "$500-1,500/project"
  },
  {
    title: "Analytics & Reporting",
    description: "Monthly performance reports",
    price: "$200-500/month"
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
                  
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    {/* Service Info */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 flex items-center justify-center flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-2xl font-heading font-bold">{service.title}</h2>
                          <p className="text-lg text-muted-foreground">{service.description}</p>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">Timeline</Badge>
                          <span>{service.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">Maintenance</Badge>
                          <span>{service.monthlyPrice}</span>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <Check className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="space-y-6">
                      <Card className="p-6 text-center">
                        <div className="space-y-4">
                          <div>
                            <div className="text-3xl font-heading font-bold">{service.price}</div>
                            <div className="text-sm text-muted-foreground">One-time setup</div>
                          </div>
                          <Separator />
                          <div>
                            <div className="text-lg font-semibold">{service.monthlyPrice}</div>
                            <div className="text-sm text-muted-foreground">Monthly maintenance</div>
                          </div>
                          <Button 
                            className="w-full" 
                            onClick={() => handleGetQuote(service.title)}
                            data-testid={`get-quote-${service.id}`}
                          >
                            Get Free Quote
                          </Button>
                        </div>
                      </Card>
                      
                      <div className="text-center text-sm text-muted-foreground">
                        <p>All projects include:</p>
                        <p>• Free consultation</p>
                        <p>• Custom design</p>
                        <p>• Training & support</p>
                        <p>• Performance guarantee</p>
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
                <CardContent className="space-y-3">
                  <div className="text-lg font-semibold text-primary">{addon.price}</div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => handleGetQuote(addon.title)}
                    data-testid={`addon-${addon.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Learn More
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