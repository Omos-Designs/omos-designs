import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  monthlyPrice: string;
  lumpSumPrice?: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  href: string;
  onLearnMore?: () => void;
}

export function ServiceCard({
  title,
  description,
  monthlyPrice,
  lumpSumPrice,
  features,
  popular = false,
  icon,
  href,
  onLearnMore
}: ServiceCardProps) {
  const handleLearnMore = () => {
    window.location.href = href;
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
          <div className="text-3xl font-heading font-bold text-primary">{monthlyPrice}</div>
          <div className="text-lg font-semibold text-chart-1">Monthly Plan</div>
          <div className="text-sm text-muted-foreground">
            Includes lifetime updates & redesigns
          </div>
          {lumpSumPrice && (
            <div className="text-xs text-muted-foreground pt-2 border-t">
              Alternative: {lumpSumPrice} + hosting
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