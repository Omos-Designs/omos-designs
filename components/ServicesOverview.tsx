import { ServiceCard } from "./ServiceCard";
import { Globe, Layout, ShoppingCart, Rocket } from "lucide-react";

const services = [
  {
    title: "Simple Website",
    description: "Perfect for small businesses just getting started online",
    monthlyPrice: "$150/month",
    lumpSumPrice: "$2,000",
    features: [
      "1-2 page custom design",
      "Mobile responsive",
      "Contact form integration",
      "Basic SEO optimization",
      "Lifetime updates & redesigns"
    ],
    icon: <Globe className="w-8 h-8 text-chart-1" />
  },
  {
    title: "Complete Website",
    description: "Multi-page solution for established businesses",
    monthlyPrice: "$225/month",
    lumpSumPrice: "$4,500",
    features: [
      "Custom multi-page design",
      "Content management system",
      "Advanced SEO features",
      "Google Analytics integration",
      "Professional email setup",
      "Lifetime updates & redesigns"
    ],
    popular: true,
    icon: <Layout className="w-8 h-8 text-chart-2" />
  },
  {
    title: "E-Commerce Website",
    description: "Complete online store with payment processing",
    monthlyPrice: "$350/month",
    lumpSumPrice: "$8,000",
    features: [
      "Custom product catalog",
      "Secure payment processing",
      "Inventory management",
      "Order tracking system",
      "Customer account portal",
      "Mobile-optimized checkout",
      "Lifetime updates & redesigns"
    ],
    icon: <ShoppingCart className="w-8 h-8 text-chart-3" />
  },
  {
    title: "Web Applications",
    description: "Custom software solutions for complex business needs",
    monthlyPrice: "$450/month",
    lumpSumPrice: "Custom quote",
    features: [
      "Custom functionality",
      "User authentication",
      "Database integration",
      "API development",
      "Scalable architecture",
      "Lifetime updates & redesigns"
    ],
    icon: <Rocket className="w-8 h-8 text-primary" />
  }
];

export function ServicesOverview() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Services Tailored to Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From simple websites to complex web applications, we provide custom-coded solutions 
            that grow with your business. No templates, no limitations.
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