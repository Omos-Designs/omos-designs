"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
 
export function Hero() {
  return (
    <section className="bg-muted/10 pt-8 pb-16 px-12">
    <div className="relative mx-auto my-2 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-8 md:py-14">
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
          Custom-coded websites and web applications for small businesses, tailored to your unique needs.
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
          <Link href="/contact">
            <button className="w-60 transform rounded-lg bg-primary px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Get Started today
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
          <Link href="/services">
            <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-100 dark:text-black dark:hover:bg-gray-50">
              Explore Services
            </button>
          </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="grid sm:grid-cols-3 gap-10">
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
            delay: 1.5,
          }}
        >
          <Card className="p-4 hover-elevate">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-chart-1" />
              <span className="text-sm font-medium">Custom Coded</span>
            </div>
          </Card>
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
            delay: 1.5,
          }}
        >
          <Card className="p-4 hover-elevate">
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-chart-2" />
              <span className="text-sm font-medium">Beautiful Designs</span>
            </div>
          </Card>
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
            delay: 1.5,
          }}
        >
          <Card className="p-4 hover-elevate">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-chart-3" />
              <span className="text-sm font-medium">Fast & Reliable</span>
            </div>
          </Card>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
