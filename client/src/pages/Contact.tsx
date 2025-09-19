import { ContactSection } from "@/components/ContactSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Users } from "lucide-react";

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    description: "Call us for immediate assistance",
    contact: "(312) 555-0123",
    availability: "Mon-Fri, 9AM-6PM CST"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    description: "Send us a detailed message",
    contact: "hello@omosdesigns.com",
    availability: "Response within 24 hours"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Live Chat",
    description: "Chat with our team in real-time",
    contact: "Available on our website",
    availability: "Mon-Fri, 9AM-5PM CST"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Free Consultation",
    description: "We start with a no-obligation conversation about your goals, timeline, and budget."
  },
  {
    step: "2",
    title: "Project Planning",
    description: "We create a detailed project plan with milestones, deliverables, and transparent pricing."
  },
  {
    step: "3",
    title: "Design & Development",
    description: "Your custom solution is built with regular updates and opportunities for feedback."
  },
  {
    step: "4",
    title: "Launch & Support",
    description: "We launch your project and provide ongoing maintenance and support as needed."
  }
];

export default function Contact() {
  const handleScheduleCall = () => {
    console.log('Schedule call clicked');
  };

  const handleViewPortfolio = () => {
    console.log('View portfolio clicked');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Let's Build Something Great Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to take your business online or improve your existing web presence? 
            We're here to help. Every successful project starts with a conversation.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">How to Reach Us</h2>
            <p className="text-lg text-muted-foreground">
              Choose the contact method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover-elevate transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded-full flex items-center justify-center text-chart-1">
                    {method.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-xl">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold">{method.contact}</p>
                    <p className="text-sm text-muted-foreground">{method.availability}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleScheduleCall} size="lg" data-testid="schedule-call">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button variant="outline" onClick={handleViewPortfolio} size="lg" data-testid="view-portfolio">
              <Users className="w-4 h-4 mr-2" />
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Process Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">What Happens Next?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's our proven process for turning your vision into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="font-heading font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-chart-1/10 to-chart-2/10">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded-full flex items-center justify-center text-chart-1 mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Proudly Serving Chicagoland</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Based in the heart of Chicago, we understand the unique needs of local businesses. 
                We also work with clients nationwide for remote projects.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold">Primary Service Area</div>
                  <div className="text-muted-foreground">Chicago & Suburbs</div>
                </div>
                <div>
                  <div className="font-semibold">Remote Projects</div>
                  <div className="text-muted-foreground">Nationwide</div>
                </div>
                <div>
                  <div className="font-semibold">Meeting Options</div>
                  <div className="text-muted-foreground">In-person or Virtual</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-chart-1/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let another day pass with an outdated or missing web presence. 
            Your competitors aren't waiting – and neither should you.
          </p>
          <Button size="lg" data-testid="final-cta-contact">
            <MessageSquare className="w-4 h-4 mr-2" />
            Start Your Project Today
          </Button>
        </div>
      </section>
    </div>
  );
}