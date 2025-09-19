import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

// TODO: Replace with real testimonials from actual clients
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Owner, Local Bakery",
    content: "Omos Designs transformed our online presence completely. Our new website perfectly captures our bakery's warmth and has increased our online orders by 40%.",
    rating: 5,
    company: "Sweet Dreams Bakery"
  },
  {
    name: "Michael Chen",
    role: "Executive Director",
    content: "Working with Omos was a game-changer for our nonprofit. They understood our mission and created a website that truly resonates with our community.",
    rating: 5,
    company: "Community Hope Foundation"
  },
  {
    name: "Lisa Rodriguez",
    role: "Small Business Owner",
    content: "The personal attention and ongoing support from Omos is incredible. They're not just our web developers - they're our digital partners.",
    rating: 5,
    company: "Rodriguez Consulting"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Client Success Stories</Badge>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what small business owners and nonprofits 
            in Chicagoland say about working with Omos Designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-muted-foreground" />
                </div>
                
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-chart-1 font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold">5.0</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}