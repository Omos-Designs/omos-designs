import { ServiceCard } from '../ServiceCard';
import { Globe, ShoppingCart } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <ServiceCard
          title="Simple Website"
          description="Perfect for small businesses just getting started online"
          monthlyPrice="$150/month"
          lumpSumPrice="$2,000"
          features={[
            "1-2 page custom design",
            "Mobile responsive",
            "Contact form integration",
            "Basic SEO optimization",
            "Lifetime updates & redesigns"
          ]}
          icon={<Globe className="w-8 h-8 text-chart-1" />}
        />
        
        <ServiceCard
          title="E-Commerce Website"
          description="Complete online store with payment processing"
          monthlyPrice="$350/month"
          lumpSumPrice="$8,000"
          features={[
            "Custom product catalog",
            "Secure payment processing",
            "Inventory management",
            "Order tracking system",
            "Customer account portal",
            "Mobile-optimized checkout",
            "Lifetime updates & redesigns"
          ]}
          popular={true}
          icon={<ShoppingCart className="w-8 h-8 text-chart-2" />}
        />
      </div>
    </div>
  );
}