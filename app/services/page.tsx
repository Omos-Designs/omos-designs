"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Cog, Cpu, LineChart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesOverviewPage() {
  const categories = [
    {
      title: "Web & Digital Presence",
      icon: <Globe className="w-6 h-6 text-accent" />,
      problem: "Customers can’t find or trust your business online.",
      solutions: [
        "Modern, conversion-focused websites",
        "Mobile-friendly design and SEO optimization",
        "Lead capture forms, online booking, and call tracking",
        "Integrated contact and quote request systems",
      ],
      packages: [
        "Simple Site (for credibility & online presence)",
        "Complete Site (for conversion & growth)",
        "Ecommerce Store (for selling online)",
      ],
      href: "/services/web-digital",
    },
    {
      title: "Business Systems & Automation",
      icon: <Cog className="w-6 h-6 text-accent" />,
      problem: "You’re wasting hours on tasks that could be automated.",
      solutions: [
        "Automated text-back for missed calls",
        "AI chatbots that answer FAQs and book appointments",
        "Automatic follow-ups for new leads",
        "Internal dashboards or CRMs for tracking customers and sales",
      ],
      packages: [
        "AI auto-reply system for missed calls",
        "Client booking automation for service businesses",
        "Custom business management portal",
      ],
      href: "/services/automation",
    },
    {
      title: "AI-Driven Tools & Web Apps",
      icon: <Cpu className="w-6 h-6 text-accent" />,
      problem: "You’ve outgrown spreadsheets and need smarter tools.",
      solutions: [
        "Custom web apps for workflow management, reporting, or client portals",
        "Internal dashboards and analytics tools",
        "SaaS development (from concept to launch)",
        "Integration with APIs and AI models (OpenAI, Gemini, etc.)",
      ],
      packages: [
        "Quote calculator tools",
        "Inventory dashboards",
        "AI-powered content or recommendation systems",
      ],
      href: "/services/ai-tools",
    },
    {
      title: "Technical Consulting & Growth Strategy",
      icon: <LineChart className="w-6 h-6 text-accent" />,
      problem: "You know your business needs tech — but don’t know where to start.",
      solutions: [
        "Technology audits and recommendations",
        "System integration consulting (CRMs, booking, payments, AI tools)",
        "Process improvement through automation",
        "Ongoing technical partnership",
      ],
      packages: [],
      href: "/services/consulting",
    },
  ];

  return (
    <main className="min-h-screen bg-muted/10 transition-colors">
      <div className="container mx-auto px-6 md:px-10 py-20 space-y-28">
        {/* Hero Section */}
        <section className="text-center max-w-5xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-foreground"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We don’t just build websites — we solve business problems through
            thoughtful design, automation, and intelligent systems built to help
            you grow.
          </motion.p>
        </section>

        {/* Service Categories */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6, ease: "easeOut" }}
            >
              <Card className="h-full flex flex-col justify-between rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-left space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                      {category.icon}
                    </div>
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    Problem we solve: {category.problem}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-accent uppercase mb-2">
                      What We Deliver
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {category.solutions.map((solution) => (
                        <li key={solution}>• {solution}</li>
                      ))}
                    </ul>
                  </div>

                  {category.packages.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-accent uppercase mb-2">
                        Packages / Examples
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {category.packages.map((pkg) => (
                          <li key={pkg}>• {pkg}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>

                <div className="p-6 pt-0 mt-auto text-left">
                  <Link href={category.href as any}>
                    <Button variant="outline" className="w-full justify-between">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center border-t border-border pt-16 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Let’s Build Something <span className="text-accent">Real</span> Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Whether it’s your first website or an advanced automation system,
            we’ll help you find the right solution to grow your business.
          </motion.p>
          <Link href="/contact" className="inline-block mt-6">
            <Button size="lg" className="px-8 py-3 font-medium">
              Schedule a Free Consultation
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
