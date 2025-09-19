import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Layout, ShoppingCart, Rocket } from "lucide-react";
import { Link } from "wouter";

const pricingTiers = [
  {
    title: "Simple Website",
    description: "Perfect for small businesses just getting started online",
    monthlyPrice: "$150",
    icon: <Globe className="w-6 h-6 text-chart-1" />,
    highlight: "Most Popular"
  },
  {
    title: "Complete Website", 
    description: "Multi-page solution for established businesses",
    monthlyPrice: "$225",
    icon: <Layout className="w-6 h-6 text-chart-2" />,
    popular: true
  },
  {
    title: "E-Commerce",
    description: "Complete online store with payment processing",
    monthlyPrice: "$350", 
    icon: <ShoppingCart className="w-6 h-6 text-chart-3" />
  },
  {
    title: "Web Applications",
    description: "Custom software solutions for complex needs",
    monthlyPrice: "$450",
    icon: <Rocket className="w-6 h-6 text-primary" />
  }
];

export function PricingSummary() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Transparent Monthly Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Custom-coded solutions with lifetime updates included. 
            Choose the tier that fits your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/services">
              <Button size="lg" data-testid="pricing-summary-services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" data-testid="pricing-summary-pricing">
                See Detailed Pricing
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="text-center hover-elevate transition-all duration-300 cursor-pointer group relative">
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="pb-3">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {tier.icon}
                </div>
                <CardTitle className="font-heading text-lg mb-2">{tier.title}</CardTitle>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-primary">{tier.monthlyPrice}</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 min-h-[2.5rem]">
                  {tier.description}
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div>✓ Custom-coded (no templates)</div>
                  <div>✓ Lifetime updates included</div>
                  <div>✓ Mobile responsive design</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-muted-foreground">
            All plans include <strong>lifetime updates & redesigns</strong> • Lump sum options available
          </p>
          <p className="text-xs text-muted-foreground">
            Serving businesses nationwide • Specializing in Chicagoland
          </p>
        </div>
      </div>
    </section>
  );
}