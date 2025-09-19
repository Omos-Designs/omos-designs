import { ServiceCard } from "./ServiceCard";
import { Globe, Layout, ShoppingCart, Rocket } from "lucide-react";

const services = [
  {
    title: "Simple Website",
    description: "Perfect for small businesses just getting started online",
    price: "Starting $2,000",
    monthlyPrice: "$100-150/month",
    features: [
      "1-2 page custom design",
      "Mobile responsive",
      "Contact form integration",
      "Basic SEO optimization",
      "3 months free maintenance"
    ],
    icon: <Globe className="w-8 h-8 text-chart-1" />
  },
  {
    title: "Complete Website",
    description: "Multi-page solution for established businesses",
    price: "Starting $3,500",
    monthlyPrice: "$150-250/month",
    features: [
      "Custom multi-page design",
      "Content management system",
      "Advanced SEO features",
      "Google Analytics integration",
      "Professional email setup",
      "6 months free maintenance"
    ],
    popular: true,
    icon: <Layout className="w-8 h-8 text-chart-2" />
  },
  {
    title: "E-Commerce Website",
    description: "Complete online store with payment processing",
    price: "Starting $6,000",
    monthlyPrice: "$200-400/month",
    features: [
      "Custom product catalog",
      "Secure payment processing",
      "Inventory management",
      "Order tracking system",
      "Customer account portal",
      "Mobile-optimized checkout"
    ],
    icon: <ShoppingCart className="w-8 h-8 text-chart-3" />
  },
  {
    title: "Web Applications",
    description: "Custom software solutions for complex business needs",
    price: "Custom Pricing",
    monthlyPrice: "$200-500+/month",
    features: [
      "Custom functionality",
      "User authentication",
      "Database integration",
      "API development",
      "Scalable architecture",
      "Ongoing support & updates"
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
              price={service.price}
              monthlyPrice={service.monthlyPrice}
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