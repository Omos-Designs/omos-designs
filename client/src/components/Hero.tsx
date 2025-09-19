import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import heroImage from "@assets/generated_images/Web_agency_hero_workspace_4ada4963.png";

export function Hero() {
  const handleGetStarted = () => {
    console.log('Get started button clicked');
  };

  const handleLearnMore = () => {
    console.log('Learn more button clicked');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
                Your Digital Success{" "}
                <span className="text-transparent bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text">
                  Starts Here
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Custom-coded websites and web applications for small businesses in Chicagoland. 
                No website builders, no templates – just personalized solutions that grow with your business.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-chart-1" />
                  <span className="text-sm font-medium">Custom Coded</span>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-chart-2" />
                  <span className="text-sm font-medium">Unique Design</span>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-chart-3" />
                  <span className="text-sm font-medium">Fast & Reliable</span>
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="flex items-center"
                data-testid="hero-cta-primary"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleLearnMore}
                data-testid="hero-cta-secondary"
              >
                View Our Work
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">50+</span> Websites Built
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">5 Years</span> Experience
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">100%</span> Satisfaction
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:order-last">
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern web design workspace showing professional development environment"
                className="w-full h-auto rounded-lg shadow-xl"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}