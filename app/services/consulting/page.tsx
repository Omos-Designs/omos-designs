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
  LineChart,
  Compass,
  Network,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ConsultingServicesPage() {
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
            Technical Consulting & Growth Strategy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Get clarity, direction, and a reliable technical partner to help you
            make smarter decisions, scale faster, and use technology effectively.
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
              “You know your business needs tech — but don’t know where to
              start.”  
              Many teams struggle to identify which systems, automations, or
              integrations actually move the needle. You don’t need more tools;
              you need the right ones.
            </p>

            <h2 className="text-3xl font-bold text-foreground">Our Solution</h2>
            <ul className="space-y-4">
              {[
                "Technology audits and tailored recommendations",
                "System integration consulting (CRMs, booking, payments, AI tools)",
                "Process improvement through automation and efficiency mapping",
                "Ongoing technical partnership and implementation support",
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
                icon: <Compass className="w-6 h-6 text-accent" />,
                title: "Technical Roadmaps",
                desc: "A clear, step-by-step plan for implementing digital tools and improvements.",
              },
              {
                icon: <LineChart className="w-6 h-6 text-accent" />,
                title: "Growth Strategy",
                desc: "Align technology with your business goals to drive measurable results.",
              },
              {
                icon: <Network className="w-6 h-6 text-accent" />,
                title: "System Integration",
                desc: "Ensure all your tools — from CRMs to AI — work seamlessly together.",
              },
              {
                icon: <Briefcase className="w-6 h-6 text-accent" />,
                title: "Long-Term Partnership",
                desc: "Ongoing support and insight as your business scales and evolves.",
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

        {/* Example Use Cases */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Consulting Use Cases
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Technology Audit",
                desc: "We assess your current tools and identify inefficiencies, integrations, and areas for improvement.",
              },
              {
                title: "System Integration Plan",
                desc: "Design and implement connected systems for CRM, payments, and communication.",
              },
              {
                title: "Ongoing Technical Advisory",
                desc: "Continuous consulting and support as your systems evolve and grow.",
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
              <AccordionItem value="smallbiz-need-consulting">
              <AccordionTrigger className="text-lg font-semibold text-left">
                I'm a small business — do I really need technical consulting?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Only if you want to stop guessing. Most small businesses waste thousands
                each year on tools they don’t need or systems that don’t work together.
                Consulting gives you clarity and direction — a roadmap for what to invest
                in, what to avoid, and how to make technology actually pay off. It’s not an
                expense; it’s the insurance policy for every decision you’ll make next.
              </AccordionContent>
            </AccordionItem>
              <AccordionItem value="audit">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  What’s included in a technology audit?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  We review your current tech stack, map your workflows, and
                  provide a written report detailing inefficiencies, risks, and
                  opportunities for automation or integration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="implementation">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Do you help with implementation, or just strategy?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Both — Omos provides strategy first, then helps you execute it.
                  We don’t just recommend tools; we help you set them up and
                  maintain them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ongoing">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Can we keep you on as a long-term partner?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Absolutely. Many of our clients work with us on a retainer
                  basis for continuous improvement, monitoring, and feature
                  development as their business grows.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center border-t border-border pt-16 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Let’s Plan Your Next Move — Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We’ll help you identify what’s holding your systems back, choose the
            right solutions, and create a roadmap to move forward with
            confidence.
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
