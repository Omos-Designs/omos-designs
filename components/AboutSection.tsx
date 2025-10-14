"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Code2, Award } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: <Heart className="w-6 h-6 text-accent" />,
    title: "Personal Touch",
    description:
      "Every project receives individual attention and custom solutions tailored to your business.",
  },
  {
    icon: <Users className="w-6 h-6 text-accent" />,
    title: "Local Expertise",
    description:
      "Based in Chicagoland with a deep understanding of local markets and small business needs.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-accent" />,
    title: "Custom Development",
    description:
      "No templates or builders — everything is hand-coded for performance, flexibility, and uniqueness.",
  },
  {
    icon: <Award className="w-6 h-6 text-accent" />,
    title: "Proven Results",
    description:
      "5+ years of experience helping small businesses succeed online through modern design and technology.",
  },
];

export function AboutSection() {
  return (
    <section className="relative border-t border-border bg-muted/10 py-24 transition-colors">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
                About Omos Designs
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Why Omos?
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              <strong>Omos</strong> means “shoulder” in Greek — representing our
              commitment to being the shoulder your business can lean on for all
              things digital. We’re not just another agency — we’re your
              dedicated technology partner.
            </p>

            <Link href="/about">
              <Button size="lg" className="mt-4 px-8 py-3 font-medium">
                Learn More
              </Button>
            </Link>
          </motion.div>

          {/* Right: Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <Card className="group h-full rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center justify-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 transition-transform group-hover:scale-110">
                    {value.icon}
                  </div>
                  <CardContent className="p-0 space-y-2">
                    <h4 className="text-lg font-semibold text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
