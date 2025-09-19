"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function DesignTest() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-heading font-bold text-foreground">
          Omos Design System
        </h1>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          data-testid="button-theme-toggle"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Primary Colors</CardTitle>
            <CardDescription>Navy blue primary with teal accents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button data-testid="button-primary">Primary</Button>
              <Button variant="secondary" data-testid="button-secondary">Secondary</Button>
            </div>
            <div className="flex gap-2">
              <Badge className="bg-accent text-accent-foreground">Teal Accent</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
            <CardDescription>Poppins headings with Open Sans body</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <h1 className="text-2xl font-heading font-bold">Heading Bold</h1>
            <h2 className="text-xl font-heading font-semibold">Heading Semibold</h2>
            <p className="text-base">This is body text using Open Sans font for excellent readability.</p>
            <p className="text-sm text-muted-foreground">Muted text for secondary information</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Elements</CardTitle>
            <CardDescription>Hover and focus states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full hover-elevate" data-testid="button-elevated">
              Elevated Button
            </Button>
            <Button variant="outline" className="w-full" data-testid="button-outline">
              Outline Button
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}