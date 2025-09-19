import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  monthlyPrice?: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  onLearnMore?: () => void;
}

export function ServiceCard({
  title,
  description,
  price,
  monthlyPrice,
  features,
  popular = false,
  icon,
  onLearnMore
}: ServiceCardProps) {
  const handleLearnMore = () => {
    console.log(`Learn more about ${title} clicked`);
    onLearnMore?.();
  };

  return (
    <Card className={`relative h-full hover-elevate transition-all duration-300 ${
      popular ? 'ring-2 ring-primary shadow-lg' : ''
    }`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-chart-1 to-chart-2 text-white">
            Most Popular
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center">
          {icon}
        </div>
        <CardTitle className="font-heading text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        
        <div className="space-y-1 pt-4">
          <div className="text-3xl font-heading font-bold">{price}</div>
          {monthlyPrice && (
            <div className="text-sm text-muted-foreground">
              or {monthlyPrice}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Check className="w-5 h-5 text-chart-1 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className="w-full flex items-center justify-center gap-2" 
          variant={popular ? "default" : "outline"}
          onClick={handleLearnMore}
          data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}