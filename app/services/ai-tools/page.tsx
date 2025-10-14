"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Cpu,
  BarChart3,
  Database,
  Code2,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AIToolsServicesPage() {
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
            AI-Driven Tools & Web Apps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Smarter software, made just for you — transform manual workflows into intelligent tools that evolve with your business.
          </motion.p>
        </section>

        {/* Problem + Solutions */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Problem & Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-foreground">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              “You’ve outgrown spreadsheets and need smarter tools.”  
              When your operations depend on disconnected sheets and manual reports, growth slows — and data becomes chaos.
            </p>

            <h2 className="text-3xl font-bold text-foreground">Our Solution</h2>
            <ul className="space-y-4">
              {[
                "Custom web apps for workflow management, reporting, or client portals",
                "Internal dashboards and analytics tools",
                "SaaS development — from concept to full-scale launch",
                "Integration with APIs and AI models (OpenAI, Gemini, etc.)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Cpu className="w-6 h-6 text-accent" />,
                title: "Custom Applications",
                desc: "Tailored tools designed specifically around your business workflow.",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-accent" />,
                title: "Data Dashboards",
                desc: "Visualize metrics and make informed decisions in real-time.",
              },
              {
                icon: <Database className="w-6 h-6 text-accent" />,
                title: "Database Systems",
                desc: "Centralized storage and management of all your critical data.",
              },
              {
                icon: <Code2 className="w-6 h-6 text-accent" />,
                title: "API Integrations",
                desc: "Connect to external platforms, CRMs, or AI models seamlessly.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-sm text-muted-foreground">
                  {item.desc}
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Example Solutions We’ve Built
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Quote Calculator Tool",
                desc: "Instantly generate accurate client quotes based on custom business logic.",
              },
              {
                title: "Inventory Dashboard",
                desc: "Track products, costs, and restocks with real-time analytics and notifications.",
              },
              {
                title: "AI Content Generator",
                desc: "Produce blog posts, social captions, or reports using integrated AI models.",
              },
            ].map((ex, i) => (
              <motion.div
                key={ex.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Card className="h-full rounded-2xl border border-border bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {ex.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{ex.desc}</p>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Common Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="smallbiz-need-ai">
              <AccordionTrigger className="text-lg font-semibold text-left">
                Do I really need an AI system or custom web app for my business?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                You might not need one today — but the moment you’re juggling too many
                spreadsheets, duplicate data, or repetitive tasks, that’s a sign your
                systems are holding you back. AI tools and custom apps give you structure,
                speed, and insight. They let you scale without hiring more staff, turn
                messy data into decisions, and keep your business one step ahead of
                competitors still working from a Google Sheet.
              </AccordionContent>
            </AccordionItem>
              <AccordionItem value="ai-integration">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Can you connect these tools to AI systems?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes — we integrate directly with AI APIs like OpenAI and Gemini
                  for text, image, and analytics capabilities, allowing your tools
                  to learn, adapt, and respond intelligently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="saas">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Can you help me build a SaaS product from scratch?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Absolutely. From product design to full deployment, we can
                  develop scalable SaaS platforms ready for public launch or
                  private internal use.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ownership">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  I just have an idea for an app. Do I need more information?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Not at all! I can help you refine your idea, define features, and
                  create a roadmap to turn your concept into a functional tool. From there,
                  we’ll handle design, development, testing, and deployment. Think of me
                  as your technical co-founder, you're the idea person, I'm the tech person!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center border-t border-border pt-16 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Build Smarter?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From internal dashboards to full-scale SaaS platforms, we’ll design and develop
            systems that make your business faster, smarter, and more efficient.
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
