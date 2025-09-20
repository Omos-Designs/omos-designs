"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";

export function Hero() {
  const handleNavigate = (path: string) => {
    window.location.href = path;
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
                Custom-coded websites and web applications for small businesses nationwide. 
                Specializing in Chicagoland businesses with personalized, remote service and solutions that grow with your business.
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
                onClick={() => handleNavigate('/contact')}
                className="flex items-center"
                data-testid="hero-cta-primary"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavigate('/services')}
                data-testid="hero-cta-secondary"
              >
                View Services
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
            <div className="relative bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded-lg p-12 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="w-12 h-12 text-primary" />
                </div>
                <p className="text-lg font-medium text-muted-foreground">
                  Professional Web Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}