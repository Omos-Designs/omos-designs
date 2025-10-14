"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function PricingPage() {
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
            Transparent, Honest Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            I know small businesses don’t have money to waste. My goal is simple:
            build solutions that pay for themselves — through new customers,
            saved time, and lasting growth.
          </motion.p>
        </section>

        {/* Philosophy Section */}
        <section className="max-w-5xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-foreground">
              What You’re Really Paying For
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A website or automation isn’t an expense — it’s an investment that
              returns value. Whether that’s more leads, higher trust, or hours
              back every week, the goal is to make the project pay for itself.
              Every decision I make — from design to features — is centered on
              your bottom line.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Built Around ROI",
                text: "Every project starts with understanding your goals — so the final product makes or saves you money, not just looks good.",
              },
              {
                title: "No Agency Overhead",
                text: "You’re not paying for a big team or inflated pricing. I work directly with you to keep costs lean and transparent.",
              },
              {
                title: "Flexible Budgets",
                text: "Every small business is different. I’ll work within your budget and tailor scope to match what will drive the most impact.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Honest Talk Section */}
        <section className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-foreground"
          >
            Let’s Talk About Money — Honestly
          </motion.h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I understand that spending on technology or design feels risky —
            especially when every dollar matters. That’s why I build every
            project like it’s my own business on the line. You’ll always know
            where your money’s going, and you’ll never be upsold something that
            doesn’t deliver real value.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If the project isn’t likely to pay for itself — I’ll tell you that
            up front. My job is to help you grow, not to sell you something you
            don’t need.
          </p>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Common Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="budget">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  What if I have a small budget?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  That’s completely fine — most of my clients are small
                  businesses working within limits. I’ll help you identify what
                  actually moves the needle and build a version that fits your
                  budget. We can always scale later once you see results.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="value">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  How do I know if it’s worth it?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Because we’ll define success before a single line of code is
                  written. Whether that’s more inquiries, faster workflows, or
                  higher sales, we’ll measure against real outcomes — not design
                  trends or vanity metrics.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="custom">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Do you have fixed pricing or packages?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Every business is different, so pricing depends on goals,
                  scope, and complexity. I’ll give you a clear, transparent
                  estimate before we start — no surprises, no hidden costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="roi">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  What kind of ROI can I expect?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Most clients see a return within the first few months — either
                  through increased leads, sales, or time saved each week.
                  Websites and automations aren’t just nice to have — they’re
                  multipliers that free you to focus on growth.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center border-t border-border pt-16 space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Let’s Build Something That Pays You Back
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No pressure. No sales pitch. Just a conversation about your goals,
            what you can afford, and how we can make it work. I’ll show you how
            your website or system can become an investment — not an expense.
          </p>
          <Link href="/contact" className="inline-block mt-6">
            <Button size="lg" className="px-8 py-3 font-medium">
              Schedule a Discovery Call
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
