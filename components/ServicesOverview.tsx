"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Cog, Zap, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Websites That Work",
    description:
      "Modern, mobile-friendly websites designed to attract and convert customers.",
    icon: <Globe className="w-6 h-6 text-accent" />,
    link: "/services/simple-website",
  },
  {
    title: "Smart Business Tools",
    description:
      "Automations and integrations that save time and handle repetitive work for you.",
    icon: <Cog className="w-6 h-6 text-accent" />,
    link: "/services/automations",
  },
  {
    title: "Custom Web Apps",
    description:
      "Tailored systems that fit your workflow — from internal dashboards to client portals.",
    icon: <Zap className="w-6 h-6 text-accent" />,
    link: "/services/web-applications",
  },
  {
    title: "Ongoing Tech Partner",
    description:
      "We handle maintenance, updates, and new features so you can focus on your business.",
    icon: <Users className="w-6 h-6 text-accent" />,
    link: "/services/support",
  },
];

export function ServicesOverview() {
  return (
    <section className="relative border-t border-border bg-muted/10 py-24 px-8 transition-colors">
      <div>
            <p className="mb-3 text-sm text-center font-semibold uppercase tracking-wide text-accent">
                Services Overview
            </p>
        </div>
      <div className="relative z-10 container mx-auto max-w-6xl text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-4"
        >
          Solutions Built for Real Businesses
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12"
        >
          From websites to automations, our services help small businesses grow
          by saving time, capturing more leads, and building a strong online
          presence.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Link href={service.link}>
                <Card className="group relative flex h-full flex-col items-center justify-between rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="mt-6 flex items-center text-accent text-sm font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14"
        >
          <Link href="/services">
            <Button size="lg" className="px-8 py-3 font-medium">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
