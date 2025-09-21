
import { Metadata } from 'next'
import { MapPin, Mail, Smartphone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Omos Designs',
  description: 'Get in touch with Omos Designs for a free consultation. Serving businesses nationwide with Chicago area specialization.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
  <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with a professional website? 
            Let's discuss your project and find the perfect solution for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-heading font-bold">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name *</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your company name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-medium">Project Type</label>
                  <select
                    id="project"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a service</option>
                    <option value="simple">Simple Website</option>
                    <option value="complete">Complete Website</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="webapp">Web Application</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-bold">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Service Area</h3>
                  <p className="text-muted-foreground">
                    Chicagoland Area & Nationwide
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Remote consultations and development for all clients
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    hello@omosdesigns.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Consultation</h3>
                  <p className="text-muted-foreground">
                    Free video consultations available
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Schedule a call to discuss your project
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM CST
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Weekend support for urgent issues
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
          </div>
        </div>
      </div>
    </main>
  )
}