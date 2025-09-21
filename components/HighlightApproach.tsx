import { Code2, RefreshCw, Users } from 'lucide-react';

export function HighlightApproach() {
  const values = [
    {
      icon: <Code2 className="w-10 h-10 text-primary mb-2" />,
      title: "Custom Coded",
      description: "No templates or page builders. Every website is hand-coded for optimal performance and uniqueness."
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-primary mb-2" />,
      title: "Lifetime Updates",
      description: "Monthly payments include unlimited updates, redesigns, and new features as your business grows."
    },
    {
      icon: <Users className="w-10 h-10 text-primary mb-2" />,
      title: "Personable Partnership",
      description: "Direct communication with your developer. No outsourcing, no middlemen, just personalized service."
    }
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8">
      {values.map((value, idx) => (
        <div key={idx} className="bg-card rounded-2xl border shadow-sm p-8 flex flex-col items-center text-center w-full md:w-1/3">
          {value.icon}
          <h3 className="font-heading font-bold text-lg mb-2">{value.title}</h3>
          <p className="text-base text-muted-foreground">{value.description}</p>
        </div>
      ))}
    </div>
  );
}
