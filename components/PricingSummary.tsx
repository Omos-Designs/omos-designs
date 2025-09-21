"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Layout, ShoppingCart, Rocket } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
  {
    title: "Simple Website",
    description: "Perfect for small businesses just getting started online",
    monthlyPrice: "$50+",
    icon: <Globe className="w-6 h-6 text-chart-1" />,
    highlight: "Great Start",
  link: "/services/simple-website"
  },
  {
    title: "Complete Website", 
    description: "Multi-page solution for established businesses",
    monthlyPrice: "$100+",
    icon: <Layout className="w-6 h-6 text-chart-2" />,
    popular: true,
    highlight: "Most Popular",
    link: "/services/complete-website"
  },
  {
    title: "E-Commerce",
    description: "Complete online store with payment processing",
    monthlyPrice: "$200+",
    icon: <ShoppingCart className="w-6 h-6 text-chart-3" />,
    highlight: "Sell Online",
  link: "/services/e-commerce"
  },
  {
    title: "Web Applications",
    description: "Custom software solutions for complex needs",
    monthlyPrice: "Custom",
    icon: <Rocket className="w-6 h-6 text-primary" />,
    highlight: "Custom Solution",
  link: "/services/web-applications"
  }
];

export function ServicesPricingOverview() {
  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Transparent Monthly Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            <strong>Monthly plans include everything</strong> - lifetime updates, redesigns, hosting, and support.
            Lump sum options available with custom quotes.
          </p>
          <p className="text-md font-bold text-primary">
            All prices are estimates and I am happy to work within your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
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
            <Link href={`${tier.link}`} key={index} className="group">
              <Card className="text-center hover-elevate transition-all duration-300 cursor-pointer group relative">
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
                    <div>✓ Everything included monthly</div>
                    <div>✓ Lifetime updates & redesigns</div>
                    <div>✓ No contracts or hidden fees</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-muted-foreground">
            <strong>Monthly pricing includes lifetime updates & redesigns</strong> • All features included • No contracts
          </p>
          <p className="text-xs text-muted-foreground">
            Lump sum options available but don't include updates • Serving nationwide, specializing in Chicagoland
          </p>
        </div>
      </div>
    </section>
  );
}