"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // TODO: Implement actual form submission
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your vision and how we can help bring it to life. 
            Free consultation for all Chicagoland businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-chart-1 mt-1" />
                  <div>
                    <h4 className="font-semibold">Service Area</h4>
                    <p className="text-sm text-muted-foreground">
                      Chicagoland Area<br />
                      Remote projects welcome
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-chart-1 mt-1" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-sm text-muted-foreground">
                      (312) 555-0123
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-chart-1 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      hello@omosdesigns.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-chart-1 mt-1" />
                  <div>
                    <h4 className="font-semibold">Response Time</h4>
                    <p className="text-sm text-muted-foreground">
                      Within 24 hours<br />
                      Monday - Friday
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-chart-1/10 to-chart-2/10">
              <CardContent className="p-6">
                <h4 className="font-heading font-semibold mb-2">Free Consultation</h4>
                <p className="text-sm text-muted-foreground">
                  Every project starts with a free consultation where we discuss your goals, 
                  timeline, and how we can help your business succeed online.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Start Your Project</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        data-testid="input-company"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Input
                        id="projectType"
                        name="projectType"
                        placeholder="e.g., Website, E-commerce, Web App"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        data-testid="input-project-type"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="min-h-32"
                      value={formData.message}
                      onChange={handleInputChange}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button type="submit" className="w-full" data-testid="submit-contact">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}