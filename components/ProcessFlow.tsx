import { Briefcase, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description: "We learn about your business, goals, and discuss budget and timeline.",
    icon: Briefcase,
  },
  {
    title: "Design",
    description: "Custom design that reflects your brand and serves your users.",
    icon: Palette,
  },
  {
    title: "Development",
    description: "Hand-coded implementation with modern technologies.",
    icon: Code2,
  },
  {
    title: "Launch",
    description: "Go live with ongoing support and lifetime updates.",
    icon: Rocket,
  },
];

export function ProcessFlow() {
  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="flex flex-row items-center gap-0 w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 md:justify-center"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="flex flex-row items-center flex-shrink-0 snap-center"
          >
            <div className="flex flex-col items-center text-center min-w-[180px] max-w-[220px] mx-2">
              <div className="bg-primary/10 rounded-full p-4 mb-2">
                <step.icon size={36} className="text-primary" />
              </div>
              <div className="font-bold text-lg mb-1">{step.title}</div>
              <div className="text-muted-foreground text-sm mb-2 max-w-[160px]">{step.description}</div>
            </div>
            {idx < steps.length - 1 && (
              <span className="mx-4 flex items-center flex-shrink-0">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16H24" stroke="#888" strokeWidth="2" strokeLinecap="round" />
                  <path d="M20 12L24 16L20 20" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
