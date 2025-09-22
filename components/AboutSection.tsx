"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Code2, Award } from "lucide-react";
// import teamImage from "@assets/generated_images/Professional_team_photo_7fcf86a6.png";

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Personal Touch",
    description: "Every project receives individual attention and custom solutions tailored to specific needs."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Local Expertise",
    description: "Based in Chicagoland with deep understanding of local business needs and markets."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Custom Development",
    description: "No templates or builders - everything is hand-coded for optimal performance and uniqueness."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Results",
    description: "5+ years of experience helping small businesses succeed online with modern solutions."
  }
];

export function AboutSection() {
  const handleLearnMore = () => {
    window.location.href = "/about";
  };

  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left: Why Omos content */}
          <div className="space-y-8 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold">
                Why Omos?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong> Your Digital Partner, Not Just Another Agency</strong>
                <br />
                <br />
                <strong>Omos</strong> means "shoulder" in Greek – symbolizing our commitment to being 
                the shoulder your business can lean on for all things digital. 
              </p>
            </div>
            <Button 
              onClick={handleLearnMore} 
              data-testid="about-learn-more"
              size="default"
              className="mt-2 px-5 py-2 text-base font-medium rounded-lg left-0"
              style={{ alignSelf: 'flex-start' }}
            >
              Learn More
            </Button>
          </div>
          {/* Right: Values Cards in 2x2 grid, smaller and stretched */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full items-stretch">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 w-full h-full flex">
                <CardContent className="px-4 py-6 text-center space-y-3 flex flex-col items-center justify-center h-full" style={{ minHeight: '80px' }}>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center text-chart-1 mb-2">
                    {value.icon}
                  </div>
                  <h4 className="font-heading font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-snug mt-2">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}