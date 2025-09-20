"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function HeroOld() {
  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
                Your Digital Success{" "}
                <span className="text-transparent bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text">
                  Starts Here
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Custom-coded websites and web applications for small businesses nationwide. 
                Specializing in Chicagoland businesses with personalized, remote service and solutions that grow with your business.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-chart-1" />
                  <span className="text-sm font-medium">Custom Coded</span>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-chart-2" />
                  <span className="text-sm font-medium">Unique Design</span>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-chart-3" />
                  <span className="text-sm font-medium">Fast & Reliable</span>
                </div>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => handleNavigate('/contact')}
                className="flex items-center"
                data-testid="hero-cta-primary"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleNavigate('/services')}
                data-testid="hero-cta-secondary"
              >
                View Services
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">50+</span> Websites Built
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">5 Years</span> Experience
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">100%</span> Satisfaction
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:order-last">
            <div className="relative bg-gradient-to-br from-chart-1/20 to-chart-2/20 rounded-lg p-12 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="w-12 h-12 text-primary" />
                </div>
                <p className="text-lg font-medium text-muted-foreground">
                  Professional Web Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


 
export function Hero() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Your Digital Success Starts Here"
            .split(" ")
            .map((word, index) => (
                <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className={`mr-2 inline-block ${
                  index >= "Your Digital Success Starts Here".split(" ").length - 2
                  ? "text-primary"
                  : ""
                }`}
                >
                {word}
                </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Custom-coded websites and web applications for small businesses nationwide.
          Specializing in Chicagoland businesses with personalized, remote service and solutions that grow with your business.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact">
            <button className="w-60 transform rounded-lg bg-primary px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Get Started today
            </button>
          </Link>
          <Link href="/services">
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Explore Services
            </button>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
        >
        </motion.div>
      </div>
      <div className="grid sm:grid-cols-3 gap-20">
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-chart-1" />
                  <span className="text-sm font-medium">Custom Coded</span>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-chart-2" />
                  <span className="text-sm font-medium">Unique Design</span>
                </div>
              </Card>
              <Card className="p-4 hover-elevate">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-chart-3" />
                  <span className="text-sm font-medium">Fast & Reliable</span>
                </div>
              </Card>
            </div>
    </div>
  );
}
