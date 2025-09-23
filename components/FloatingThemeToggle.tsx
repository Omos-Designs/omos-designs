"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function FloatingThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
  <div className="fixed bottom-6 left-6 z-[100] xl:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        className="shadow-lg bg-background/80 backdrop-blur border border-border hover:bg-muted"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
