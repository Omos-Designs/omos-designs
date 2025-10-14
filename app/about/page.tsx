"use client";

import { motion } from "framer-motion";
import { ColourfulText } from "@/components/ui/colorful-text";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Users, Code2, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-muted/10 transition-colors">
      <div className="container mx-auto px-6 md:px-10 py-20 space-y-28">
        {/* Hero Section */}
        <section className="text-center max-w-5xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
          >
            Who is <ColourfulText text="Omos Designs" />?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Your reliable partner for professional web development — the
            shoulder your business can lean on for a stronger, more modern
            online presence.
          </motion.p>
        </section>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded to make modern web development accessible to small
              businesses, Omos Designs builds custom-coded digital experiences
              that evolve as your business grows.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in Chicagoland and serving businesses nationwide, we
              understand that every company deserves a website that reflects its
              unique story and goals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The name <strong>Omos</strong> means “shoulder” in Greek — a symbol
              of how we support your business through thoughtful design,
              reliable tech, and a long-term partnership mindset.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="relative rounded-3xl border border-border bg-card p-10 text-center shadow-sm"
          >
            <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-accent/10 blur-2xl" />
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center text-4xl">
              🤝
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Partnership Approach
            </h3>
            <p className="text-sm text-muted-foreground leading-snug max-w-sm mx-auto">
              We believe in building relationships, not just delivering
              projects. Your success becomes our shared goal.
            </p>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <InfiniteMovingCards
              items={[
                {
                  icon: <Heart className="h-5 w-5 text-accent" />,
                  title: "Personal Touch",
                  description:
                    "Every project receives individual attention and custom solutions tailored to your business.",
                },
                {
                  icon: <Users className="h-5 w-5 text-accent" />,
                  title: "Local Expertise",
                  description:
                    "Deep understanding of Chicagoland markets and small business challenges.",
                },
                {
                  icon: <Code2 className="h-5 w-5 text-accent" />,
                  title: "Custom Development",
                  description:
                    "No templates — each build is hand-crafted for performance and flexibility.",
                },
                {
                  icon: <Award className="h-5 w-5 text-accent" />,
                  title: "Proven Results",
                  description:
                    "5+ years helping small businesses succeed through modern design and reliable code.",
                },
              ]}
              direction="left"
              speed="normal"
              pauseOnHover
              className="my-6"
            />
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-8 border-border pt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-foreground"
        >
          Ready to Build Something{" "}
          <span className="text-accent">Real?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Let’s discuss how Omos can help your business grow with a digital
          presence that works as hard as you do.
        </motion.p>

        <Link href="/contact" className="mt-8 inline-block">
          <Button size="lg" className="px-8 py-3 font-medium">
            Schedule a Discovery Call
          </Button>
        </Link>
      </section>
      </div>
    </main>
  );
}
