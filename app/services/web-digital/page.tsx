"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Globe, Smartphone, MousePointerClick, Search, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WebDigitalPresencePage() {
  return (
    <main className="min-h-screen bg-muted/10 transition-colors">
      <div className="container mx-auto px-6 md:px-10 py-20 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-foreground"
          >
            Web & Digital Presence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Modern websites that don’t just look good — they build trust,
            attract customers, and turn clicks into conversations.
          </motion.p>
        </section>

        {/* Problem + Solutions */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-foreground">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              “Customers can’t find or trust your business online.”  
              You might offer great products or services — but without a credible,
              conversion-focused website, potential clients move on before they
              even contact you.
            </p>

            <h2 className="text-3xl font-bold text-foreground">Our Solution</h2>
            <ul className="space-y-4">
              {[
                "Modern, conversion-focused websites that attract leads",
                "Mobile-friendly design optimized for every device",
                "Lead capture forms, online booking, and call tracking",
                "Integrated contact and quote request systems",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Globe className="w-6 h-6 text-accent" />,
                title: "Modern Design",
                desc: "Crafted to convert — clean layouts and clear calls to action that earn trust.",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-accent" />,
                title: "Mobile-First",
                desc: "Flawless experiences across phones, tablets, and desktops.",
              },
              {
                icon: <MousePointerClick className="w-6 h-6 text-accent" />,
                title: "Interactive Forms",
                desc: "Contact forms, quote requests, and booking systems that actually work.",
              },
              {
                icon: <Search className="w-6 h-6 text-accent" />,
                title: "SEO Optimization",
                desc: "Built with modern best practices to help customers find you online.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-center mb-3">{item.icon}</div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg font-semibold text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-sm text-muted-foreground">{item.desc}</CardContent>
              </Card>
            ))}
          </motion.div>
        </section>

        {/* Packages */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Packages Designed for Every Stage
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Simple Site",
                desc: "For credibility & online presence — a polished homepage, services, and contact page that gets you seen.",
              },
              {
                title: "Complete Site",
                desc: "For conversion & growth — a full website with blog, analytics, and scalable structure.",
              },
              {
                title: "Ecommerce Store",
                desc: "For selling online — product pages, checkout, inventory management, and payment integration.",
              },
            ].map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Card className="h-full rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {pkg.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{pkg.desc}</p>
                  </CardHeader>
                  <CardContent className="flex justify-center pt-4">
                    <Button variant="outline" className="px-6">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="smallbiz-need-website">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  I'm a small business — do I really need a professional website?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Not every business needs a huge, complex site — but every business benefits
                  from a credible online presence. A clean, fast website helps new customers
                  find you, learn what you do, and trust your business before they even call.
                  If your referrals already keep you busy, that’s great — but most small
                  businesses see real, measurable growth from even a simple, well-built site.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="seo">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Will my site rank on Google?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes — every website is structured with SEO best practices, schema markup, and
                  keyword-ready content so you can build visibility over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="updates">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Can I make updates myself?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Absolutely. You’ll get an easy-to-use dashboard or CMS to edit text, images,
                  and pages without coding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="support">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Do you offer ongoing support?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes — Omos offers ongoing support plans for updates, security, performance
                  improvements, and new feature builds.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border-t border-border pt-16 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Let’s Build a Website That Works for You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to establish your online presence and start capturing leads?
            Let’s talk about your goals and build a site that drives real results.
          </p>
          <Link href="/contact" className="inline-block mt-6">
            <Button size="lg" className="px-8 py-3 font-medium">
              Schedule a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
