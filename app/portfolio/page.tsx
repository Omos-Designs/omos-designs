import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Portfolio - Omos Designs",
  description:
    "See how Omos has helped businesses solve real problems with custom web solutions and intelligent systems.",
};

// Portfolio data describing each project. For the two external projects, make sure to
// save screenshots into the public/portfolio directory with the matching filenames.
const portfolio = [
  {
    title: "Local Tutoring Business",
    subtitle: "Calder Tutoring",
    image: "/portfolio/calder_tutoring.png",
    problem:
      "Calder Tutoring’s old site didn’t reflect their passion for helping students succeed. Parents had trouble trusting an outdated site, and bookings were handled manually.",
    solution:
      "We delivered a modern, mobile‑friendly site with clear messaging, real success stories, and a seamless form for scheduling sessions. It builds trust and converts visitors into bookings.",
    href: "https://www.caldertutoring.com/",
  },
  {
    title: "Consulting Services Website",
    subtitle: "Matter Analytics",
    image: "/portfolio/matter_analytics.png",
    problem:
      "Matter Analytics needed to convey complex AI offerings in a way that resonated with decision‑makers. Their previous site lacked clarity and lead capture.",
    solution:
      "We built a clean, professional site that explains their services in plain language. A prominent call to action invites visitors to start projects or explore services, generating qualified leads.",
    href: "https://www.matteranalytics.io/",
  },
  {
    title: "Equipment Leasing Application",
    subtitle: "Internal Web App",
    image: "/portfolio/internal-equipment-leasing.jpeg",
    problem:
      "An equipment leasing company relied on spreadsheets and manual processes to collect information from sales reps. There was no way to know inventory availability or pricing in real time.",
    solution:
      "We designed a multi‑page web app that integrates with the company’s inventory and finance APIs. Sales reps can fill out forms, check stock automatically, and retrieve vendor and pricing data instantly—cutting manual work by over 70%.",
    href: null,
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-muted/10">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-heading font-bold">Our Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every project starts with a business problem—and ends with a digital solution that saves time, builds trust, and drives growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolio.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-border bg-card shadow-sm overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                {/* Images are imported via next/image for optimized loading. Add your own screenshots in /public/portfolio. */}
                <Image
                  src={item.image}
                  alt={`${item.subtitle} screenshot`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <span className="block text-sm text-muted-foreground mb-2">{item.subtitle}</span>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Problem:</strong> {item.problem}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Solution:</strong> {item.solution}
                  </p>
                </div>
                {item.href ? (
                  <Link href={item.href as any} target="_blank" className="mt-auto">
                    <Button variant="outline" className="w-full">
                      Visit Site
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" disabled className="w-full mt-auto">
                    Internal Application
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20">
          <h2 className="text-2xl font-heading font-semibold mb-4">Need More Examples?</h2>
          <p className="text-muted-foreground mb-6">
            We’ve built dozens of solutions for small and medium businesses. Let’s find the right approach for your unique challenge.
          </p>
          <Link href="/contact">
            <Button size="lg">Request More Work</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}