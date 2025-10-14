"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-muted/10 px-6 pt-20 pb-24 transition-colors"
    >
      <motion.div
        style={{ y }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto text-4xl font-semibold text-foreground md:text-6xl lg:text-7xl tracking-tight leading-[1.1]"
        >
          Let’s Build Something{" "}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="text-accent font-bold"
          >
            Real
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Websites, tools, and automations that solve real business problems —
          helping small businesses save time, capture more leads, and work
          smarter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button className="px-8 py-3 text-base font-medium transition-transform duration-300 hover:-translate-y-0.5">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="px-8 py-3 text-base font-medium transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Feature Cards */}
      <div className="relative z-10 mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
        {[
          { icon: Code, title: "Custom Coded", color: "text-chart-1" },
          { icon: Palette, title: "Beautifully Designed", color: "text-chart-2" },
          { icon: Zap, title: "Fast & Reliable", color: "text-chart-3" },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.3 + index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <Card className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <item.icon className={`h-6 w-6 ${item.color}`} />
              <span className="text-sm font-medium text-foreground">
                {item.title}
              </span>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
