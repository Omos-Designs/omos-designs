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
  Cog,
  MessageCircle,
  Bot,
  Timer,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AutomationServicesPage() {
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
            Business Systems & Automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Streamline your operations, save time, and let smart systems do the
            heavy lifting — so you can focus on running your business.
          </motion.p>
        </section>

        {/* Problem + Solutions */}
        <section className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Problem + Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-foreground">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              “You’re wasting hours on tasks that could be automated.”  
              Many small businesses still rely on manual follow-ups,
              spreadsheets, and paper tracking — losing valuable time that could
              be spent growing their customer base.
            </p>

            <h2 className="text-3xl font-bold text-foreground">Our Solution</h2>
            <ul className="space-y-4">
              {[
                "Automated text-back for missed calls",
                "AI chatbots that answer FAQs and book appointments",
                "Automatic follow-ups for new leads and inquiries",
                "Internal dashboards or CRMs for tracking customers and sales",
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
                icon: <MessageCircle className="w-6 h-6 text-accent" />,
                title: "Text-Back Systems",
                desc: "Automatically text customers back when they miss a call.",
              },
              {
                icon: <Bot className="w-6 h-6 text-accent" />,
                title: "AI Chatbots",
                desc: "Engage customers 24/7 with intelligent automated assistants.",
              },
              {
                icon: <Timer className="w-6 h-6 text-accent" />,
                title: "Follow-Up Automations",
                desc: "Never forget to follow up with new leads again.",
              },
              {
                icon: <Users className="w-6 h-6 text-accent" />,
                title: "Internal Dashboards",
                desc: "Keep track of customer data, quotes, and sales pipelines.",
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
            Examples of What We Can Automate
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AI Auto-Reply System",
                desc: "Automatically responds to missed calls and messages — keeping leads warm 24/7.",
              },
              {
                title: "Client Booking Automation",
                desc: "Integrated booking flow with reminders, confirmation texts, and staff notifications.",
              },
              {
                title: "Business Management Portal",
                desc: "Custom dashboard for quotes, invoices, and client tracking.",
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
              <AccordionItem value="smallbiz-need-automation">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Do I really need automation? Can't I just handle things manually?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  You can — but it’s costing you more than you think. Every missed call,
                  every unreturned lead, every forgotten follow-up adds up to lost business.
                  Automations don’t replace people; they make sure opportunities never slip
                  through the cracks. Small businesses that automate early grow faster because
                  they spend time serving customers, not chasing reminders and admin work.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="integration">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Can these automations connect to my existing tools?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Yes — we integrate with CRMs, booking tools, payment systems,
                  and any major API-enabled platform to ensure a seamless flow.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ai">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Are these AI tools or traditional automations?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  We use both. Some automations use AI (like chatbots or lead
                  classification), while others rely on workflow logic for speed
                  and reliability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="maintenance">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Do you maintain the systems after launch?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Absolutely — we offer ongoing support and maintenance to keep
                  your automations updated, stable, and improving over time.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center border-t border-border pt-16 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Automate the Boring. Focus on What Matters.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether it’s follow-ups, bookings, or internal tracking — automation
            gives you back hours every week. Let’s make your systems work for
            you.
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
