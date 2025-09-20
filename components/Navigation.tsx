"use client"

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Pricing", path: "/pricing" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const servicesItems = [
  { name: "Overview", path: "/services" as const },
  { name: "Simple Website", path: "/services/simple-website" as const },
  { name: "Complete Website", path: "/services/complete-website" as const },
  { name: "E-Commerce", path: "/services/e-commerce" as const },
  { name: "Web Applications", path: "/services/web-applications" as const },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo_icon.svg"
              alt="Omos Designs Logo"
              className="h-20 w-auto object-contain"
              // style={{ maxWidth: '200px' }}
            />
            <div className="font-heading font-bold text-2xl text-primary">
              Omos Designs
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigationItems.map((item, idx) => (
              <React.Fragment key={item.path}>
                <Link
                  href={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  data-testid={`nav-link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
                {/* Insert Services dropdown after About */}
                {item.name === "About" && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`text-sm font-medium transition-colors hover:text-primary flex items-center ${
                          pathname.startsWith('/services')
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                        data-testid="nav-dropdown-services"
                      >
                        Services
                        <ChevronDown className="w-3 h-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {servicesItems.map((service) => (
                        <DropdownMenuItem key={service.path} asChild>
                          <Link
                            href={service.path}
                            className={`w-full ${
                              pathname === service.path
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                            }`}
                            data-testid={`nav-service-${service.name.toLowerCase().replace(' ', '-')}`}
                          >
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button data-testid="cta-consultation">Get Free Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="theme-toggle-mobile"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <React.Fragment key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    data-testid={`nav-link-mobile-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Link>
                  {/* Insert Services dropdown after About */}
                  {item.name === "About" && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">Services</div>
                      <div className="pl-4 space-y-2">
                        {servicesItems.map((service) => (
                          <Link
                            key={service.path}
                            href={service.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block text-sm transition-colors hover:text-primary ${
                              pathname === service.path
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                            }`}
                            data-testid={`nav-service-mobile-${service.name.toLowerCase().replace(' ', '-')}`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
              <Button
                className="w-full mt-4"
                onClick={() => setIsMenuOpen(false)}
                data-testid="cta-consultation-mobile"
              >
                Get Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}