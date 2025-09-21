"use client";

import { Metadata } from 'next'
import { ColourfulText } from '@/components/ui/colorful-text'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
// No direct icon imports needed here


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-muted/10">
      <div className="container mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-heading font-bold mb-2">
            Who is <ColourfulText text="Omos Designs" />?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your reliable partner for professional web development. We're the "shoulder to lean on" 
            for businesses looking to establish or enhance their digital presence.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              Founded with the vision of making professional web development accessible to small businesses, 
              Omos Designs specializes in creating custom-coded solutions that grow with your business.
            </p>
            <p className="text-muted-foreground">
              Based in the Chicagoland area but serving businesses nationwide, we understand that every 
              business is unique and deserves a website that reflects their individual story and goals.
            </p>
            <p className="text-muted-foreground">
              Our name "Omos" means "shoulder" in Greek - symbolizing our role as the reliable support 
              system businesses need for their digital transformation.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="font-heading font-semibold mb-2">Partnership Approach</h3>
            <p className="text-sm text-muted-foreground">
              We believe in building long-term partnerships, not just delivering projects.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Values</h2>
          <InfiniteMovingCards
            items={[ 
              {
                icon: "Heart",
                title: "Personal Touch",
                description: "Every project receives individual attention and custom solutions tailored to specific needs.",
              },
              {
                icon: "Users",
                title: "Local Expertise",
                description: "Based in Chicagoland with deep understanding of local business needs and markets.",
              },
              {
                icon: "Code2",
                title: "Custom Development",
                description: "No templates or builders - everything is hand-coded for optimal performance and uniqueness.",
              },
              {
                icon: "Award",
                title: "Proven Results",
                description: "5+ years of experience helping small businesses succeed online with modern solutions.",
              },
            ]}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="my-4"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 rounded-lg p-8">
          <h2 className="text-2xl font-heading font-bold ">Ready to Partner With Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with a professional web presence 
            that truly represents your brand and serves your customers.
          </p>
          <a href="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Schedule Discovery Call
          </a>
        </div>
      </div>
    </main>
  )
}