"use client"

import { ServiceCard } from "./ServiceCard";
import { Globe, Layout, ShoppingCart, Rocket } from "lucide-react";

const services = [
  {
    title: "Simple Website",
    description: "Perfect for small businesses just getting started online",
    monthlyPrice: "$100/month",
    lumpSumPrice: "$1,000",
    features: [
      "1-2 page custom design",
      "Mobile responsive",
      "Contact form integration",
      "Basic SEO optimization",
      "Lifetime updates & redesigns"
    ],
    icon: <Globe className="w-8 h-8 text-chart-1" />,
    href: "/services/simple-website"
  },
  {
    title: "Complete Website",
    description: "Multi-page solution for established businesses",
    monthlyPrice: "$200/month",
    lumpSumPrice: "$3,000",
    features: [
      "Custom multi-page design",
      "Content management system",
      "Advanced SEO features",
      "Google Analytics integration",
      "Professional email setup",
      "Lifetime updates & redesigns"
    ],
    popular: true,
    icon: <Layout className="w-8 h-8 text-chart-2" />,
    href: "/services/complete-website"
  },
  {
    title: "E-Commerce Website",
    description: "Complete online store with payment processing",
    monthlyPrice: "$300/month",
    lumpSumPrice: "Custom quote",
    features: [
      "Custom product catalog",
      "Secure payment processing",
      "Inventory management",
      "Order tracking system",
      "Customer account portal",
      "Mobile-optimized checkout",
      "Lifetime updates & redesigns"
    ],
    icon: <ShoppingCart className="w-8 h-8 text-chart-3" />,
    href: "/services/e-commerce"
  },
  {
    title: "Web Applications",
    description: "Custom software solutions for complex business needs",
    monthlyPrice: "$400/month",
    lumpSumPrice: "Custom quote",
    features: [
      "Custom functionality",
      "User authentication",
      "Database integration",
      "API development",
      "Scalable architecture",
      "Lifetime updates & redesigns"
    ],
    icon: <Rocket className="w-8 h-8 text-primary" />,
    href: "/services/web-applications"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Services Tailored to Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From simple websites to complex web applications, we provide custom-coded solutions 
            that grow with your business. No templates, no limitations.
          </p>
          <p className="text-lg font-bold text-primary mt-4">
            All prices are estimates and I am happy to work within your budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              monthlyPrice={service.monthlyPrice}
              lumpSumPrice={service.lumpSumPrice}
              features={service.features}
              popular={service.popular}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All services include free consultation, project planning, and post-launch support
          </p>
        </div>
      </div>
    </section>
  );
}