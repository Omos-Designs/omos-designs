import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Code2, Award } from "lucide-react";
import teamImage from "@assets/generated_images/Professional_team_photo_7fcf86a6.png";

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Personal Touch",
    description: "Every project gets individual attention and custom solutions tailored to your specific needs."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Local Partnership",
    description: "Based in Chicagoland, we understand local businesses and provide ongoing support when you need it."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Custom Code",
    description: "No website builders or templates. Everything is hand-coded for optimal performance and uniqueness."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Proven Results",
    description: "5+ years helping small businesses succeed online with modern, professional web solutions."
  }
];

export function AboutSection() {
  const handleLearnMore = () => {
    console.log('Learn more about us clicked');
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">About Omos Designs</Badge>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold">
                Your Digital Partner, Not Just Another Agency
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Omos</strong> means "shoulder" in Greek – symbolizing our commitment to being 
                the reliable support your business can lean on. We're not just building websites; 
                we're building lasting partnerships with small businesses and nonprofits in Chicagoland.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Unlike large agencies that treat you like a number, we take time to understand your 
                unique story, goals, and challenges. Every website we create is hand-coded from scratch, 
                ensuring you get exactly what your business needs – not what a template allows.
              </p>
              <p className="text-muted-foreground">
                With transparent pricing and ongoing support, we're here for the long haul, 
                helping your digital presence grow as your business evolves.
              </p>
            </div>

            <Button onClick={handleLearnMore} data-testid="about-learn-more">
              Learn More About Our Story
            </Button>
          </div>

          {/* Team Image */}
          <div className="lg:order-last">
            <div className="relative">
              <img
                src={teamImage}
                alt="Omos Designs team - professional web developers and designers"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-background border rounded-lg p-4 shadow-lg">
                <div className="text-sm font-medium">5+ Years</div>
                <div className="text-xs text-muted-foreground">Building Success</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Why Choose Omos Designs?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center text-chart-1">
                    {value.icon}
                  </div>
                  <h4 className="font-heading font-semibold">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}