import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Award, ArrowRight } from "lucide-react";
import teamImage from "@assets/generated_images/Professional_team_photo_7fcf86a6.png";

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Personal Touch",
    description: "We believe every business has a unique story. Our approach starts with understanding your specific goals, challenges, and vision before we write a single line of code."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Focus",
    description: "As a local Chicagoland business, we understand the unique needs of small businesses and nonprofits in our community. We're not just vendors - we're neighbors."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Results-Driven",
    description: "Pretty websites are nice, but results matter more. Every design decision and feature we implement is focused on helping your business achieve its goals."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Quality Commitment",
    description: "No corners cut, no template shortcuts. Every project gets the full attention it deserves, with custom-coded solutions built to last and grow with your business."
  }
];

const timeline = [
  {
    year: "2019",
    title: "Founded",
    description: "Started with a mission to help small businesses succeed online with personalized, professional web solutions."
  },
  {
    year: "2020",
    title: "Growing Strong",
    description: "Helped local businesses pivot online during challenging times, proving the value of having a strong digital presence."
  },
  {
    year: "2022",
    title: "Expanding Services",
    description: "Added web application development and e-commerce solutions to better serve our growing client base."
  },
  {
    year: "2024",
    title: "50+ Success Stories",
    description: "Reached a milestone of 50+ successful projects, maintaining 100% client satisfaction and retention."
  }
];

export default function About() {
  const handleContact = () => {
    console.log('Contact us clicked');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">About Omos Designs</Badge>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Your Reliable Digital Partner
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong>Omos</strong> means "shoulder" in Greek – and that's exactly what we aim to be: 
              the reliable shoulder your business can lean on for all your digital needs.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Omos Designs was born from a simple observation: small businesses and nonprofits 
                  deserve the same level of professional web presence as large corporations, but 
                  with the personal attention that only comes from working with people who truly care.
                </p>
                <p>
                  Founded in 2019, we've made it our mission to bridge the gap between big agency 
                  capabilities and personal service. Every website we build is custom-coded from 
                  scratch – no templates, no limitations, just solutions tailored specifically to 
                  your business needs.
                </p>
                <p>
                  Based in the heart of Chicagoland, we understand the challenges local businesses 
                  face and the opportunities that exist in our community. We're not just building 
                  websites; we're building lasting partnerships.
                </p>
              </div>
            </div>
            <div className="lg:order-last">
              <img
                src={teamImage}
                alt="Omos Designs team working together"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide every decision we make and every project we take on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center text-chart-1 mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-heading">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From startup to trusted partner – here's how we've grown alongside our clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {item.year.slice(-2)}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-heading font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-chart-1/10 to-chart-2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help your business succeed online. 
            Every partnership starts with a conversation.
          </p>
          <Button onClick={handleContact} size="lg" data-testid="about-contact-cta">
            Start the Conversation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}