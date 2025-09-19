import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, HelpCircle, ArrowRight, DollarSign } from "lucide-react";
import { Globe, Layout, ShoppingCart, Rocket } from "lucide-react";

const pricingTiers = [
  {
    title: "Simple Website",
    description: "Perfect for small businesses just getting started online",
    monthlyPrice: "$150",
    monthlyIncludes: "Everything + lifetime updates",
    lumpSumPrice: "$2,000",
    lumpSumHosting: "$25/month hosting",
    keyFeatures: [
      "Complete custom website (1-2 pages)",
      "Lifetime updates & redesigns included",
      "Professional hosting & maintenance",
      "Email support & technical assistance",
      "No contracts or hidden fees"
    ],
    icon: <Globe className="w-8 h-8 text-chart-1" />
  },
  {
    title: "Complete Website",
    description: "Multi-page solution for established businesses",
    monthlyPrice: "$225",
    monthlyIncludes: "Everything + lifetime updates",
    lumpSumPrice: "$4,500",
    lumpSumHosting: "$35/month hosting",
    keyFeatures: [
      "Multi-page website with CMS",
      "Lifetime updates & redesigns included", 
      "Professional hosting & maintenance",
      "Priority email & phone support",
      "Advanced SEO & analytics setup"
    ],
    popular: true,
    icon: <Layout className="w-8 h-8 text-chart-2" />
  },
  {
    title: "E-Commerce Website",
    description: "Complete online store with payment processing",
    monthlyPrice: "$350",
    monthlyIncludes: "Everything + lifetime updates",
    lumpSumPrice: "$8,000",
    lumpSumHosting: "$50/month hosting",
    keyFeatures: [
      "Complete e-commerce solution",
      "Lifetime updates & redesigns included",
      "Premium hosting & security",
      "Priority support & maintenance",
      "Payment processing setup included"
    ],
    icon: <ShoppingCart className="w-8 h-8 text-chart-3" />
  },
  {
    title: "Web Applications",
    description: "Custom software solutions for complex business needs",
    monthlyPrice: "$450+",
    monthlyIncludes: "Everything + lifetime updates",
    lumpSumPrice: "Custom quote",
    lumpSumHosting: "$75+/month hosting",
    keyFeatures: [
      "Custom web application development",
      "Lifetime updates & maintenance included",
      "Enterprise hosting & security",
      "Dedicated support & consultation",
      "Scalable architecture & integrations"
    ],
    icon: <Rocket className="w-8 h-8 text-primary" />
  }
];

const pricingFactors = [
  {
    factor: "Number of Pages",
    description: "More pages require additional design and development time"
  },
  {
    factor: "Custom Features",
    description: "Unique functionality tailored to your business needs"
  },
  {
    factor: "Design Complexity",
    description: "Intricate designs and animations require more development"
  },
  {
    factor: "Third-party Integrations",
    description: "Connecting to external services and APIs"
  },
  {
    factor: "Content Migration",
    description: "Moving content from existing websites or systems"
  },
  {
    factor: "Timeline Requirements",
    description: "Rush projects may require additional resources"
  }
];

const faqs = [
  {
    question: "Why do you offer both upfront and monthly pricing?",
    answer: "We understand that businesses have different cash flow preferences. Pay upfront for the best value, or spread costs with monthly payments that include ongoing maintenance and support."
  },
  {
    question: "What's included in the monthly maintenance fee?",
    answer: "Monthly fees include hosting, security updates, regular backups, basic content updates, performance monitoring, and technical support. It's like having an IT department for your website."
  },
  {
    question: "Can I switch between pricing models?",
    answer: "Absolutely! You can start with monthly payments and switch to upfront payment at any time. We'll adjust your remaining balance accordingly."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees ever. All costs are discussed upfront during your free consultation. The only additional costs might be for premium third-party services you specifically request."
  },
  {
    question: "What if my needs change during development?",
    answer: "We understand that requirements can evolve. Any changes are discussed and approved before implementation, with transparent pricing for additional work."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We offer flexible payment plans for larger projects. Typically, we work with a 50% deposit and 50% on completion, but we can customize based on your needs."
  }
];

export default function Pricing() {
  const handleGetQuote = () => {
    console.log('Get custom quote clicked');
  };

  const handleContactUs = () => {
    console.log('Contact us clicked');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Transparent Pricing</Badge>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Honest, Flexible Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            <strong>Monthly plans include everything</strong> - lifetime updates, redesigns, hosting, and support.
            Lump sum options available but don't include ongoing updates or maintenance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Check className="w-5 h-5 text-chart-1" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Check className="w-5 h-5 text-chart-1" />
              <span>Custom quotes</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Check className="w-5 h-5 text-chart-1" />
              <span>Flexible payment plans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Choose Your Solution</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All pricing is starting from the listed amounts. Final costs depend on your 
              specific requirements and customizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative h-full hover-elevate transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-primary shadow-lg' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-chart-1 to-chart-2 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center">
                    {tier.icon}
                  </div>
                  <CardTitle className="font-heading text-xl mb-2">{tier.title}</CardTitle>
                  <CardDescription className="text-sm">{tier.description}</CardDescription>
                  
                  {/* Monthly Pricing - PRIMARY */}
                  <div className="bg-gradient-to-r from-primary/10 to-chart-1/10 rounded-lg p-4 mt-4">
                    <div className="text-3xl font-heading font-bold text-primary">{tier.monthlyPrice}<span className="text-lg">/month</span></div>
                    <div className="text-sm font-medium text-chart-1">{tier.monthlyIncludes}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      ✓ No contracts • ✓ Cancel anytime • ✓ All features included
                    </div>
                  </div>

                  {/* Lump Sum Alternative - SECONDARY */}
                  <div className="mt-3 pt-3 border-t">
                    <div className="text-sm text-muted-foreground">Alternative option:</div>
                    <div className="text-lg font-semibold">{tier.lumpSumPrice}</div>
                    <div className="text-xs text-muted-foreground">
                      + {tier.lumpSumHosting} • No updates included
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tier.keyFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-chart-1 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={tier.popular ? "default" : "outline"}
                    onClick={handleGetQuote}
                    data-testid={`pricing-tier-${tier.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">What Affects Project Cost?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our pricing is based on the complexity and specific needs of your project. 
              Here are the main factors we consider:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((item, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                      <DollarSign className="w-4 h-4 text-chart-1" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-semibold">{item.factor}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our pricing and payment options.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start space-x-2">
                    <HelpCircle className="w-5 h-5 text-chart-1 mt-1 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
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
            Ready for Your Custom Quote?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific needs and provide 
            a detailed, transparent quote with no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetQuote} size="lg" data-testid="pricing-get-quote">
              Get Free Custom Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              onClick={handleContactUs} 
              size="lg"
              data-testid="pricing-contact"
            >
              Ask Questions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}