"use client";

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
import { Navbar, NavBody } from "@/components/ui/resizable-nav-bar";

const navigationItems = [
  { name: "Home", path: "/" as const },
  { name: "About", path: "/about" as const },
  { name: "Pricing", path: "/pricing" as const },
  { name: "Contact", path: "/contact" as const },
];

// About dropdown items (must be outside navigationItems array)
const aboutDropdownItems = [
  { name: "Who We Are", path: "/about" as const },
  { name: "Portfolio", path: "/portfolio" as const },
  { name: "Blog", path: "/blog" as const }
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
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
  {/* Desktop Navigation (Floating/Sidebar only on xl and up) */}
  <div className="hidden xl:block bg-muted/10">
        <Navbar>
          {(props: any) => (
            <NavBody sidebar={props.sidebar} visible={props.visible}>
              {/* Logo */}
              {props.sidebar ? (
                <Link href="/" className="flex w-full justify-center items-center mb-4">
                  <img
                    src="/logo_icon.svg"
                    alt="Omos Designs Logo"
                    className="h-28 w-auto object-contain"
                  />
                </Link>
              ) : (
                <Link href="/" className="flex items-center gap-2">
                  <img
                    src="/logo_icon.svg"
                    alt="Omos Designs Logo"
                    className="h-20 w-auto object-contain"
                  />
                  <div className="font-heading font-bold text-2xl text-primary">
                    Omos Designs
                  </div>
                </Link>
              )}

              {/* Navigation */}
              <nav
                className={
                  props.sidebar
                    ? "flex flex-col gap-3 mt-8 w-full"
                    : "hidden md:flex items-center space-x-10"
                }
              >
                {navigationItems.map((item, idx) => (
                  <React.Fragment key={item.path}>
                    {/* About dropdown replaces About link */}
                    {item.name === "About" ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                              ["/about","/portfolio","/blog"].includes(pathname)
                                ? "text-primary"
                                : "text-muted-foreground"
                            } ${props.sidebar ? "w-full text-left pl-0 !justify-start !items-start py-2" : "flex items-center px-2"}`}
                            style={props.sidebar ? { justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'left' } : undefined}
                            data-testid="nav-dropdown-about"
                          >
                            <span className="w-full text-left">About</span>
                            <ChevronDown className="w-3 h-3 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                          {aboutDropdownItems.map((aboutItem) => (
                            <DropdownMenuItem key={aboutItem.path} asChild>
                              <Link
                                href={aboutItem.path}
                                className={`w-full ${
                                  pathname === aboutItem.path
                                    ? "text-primary font-medium"
                                    : "text-muted-foreground"
                                } py-2`}
                                data-testid={`nav-about-${aboutItem.name.toLowerCase().replace(/ /g, '-')}`}
                              >
                                {aboutItem.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        href={item.path}
                        className={`text-sm font-medium transition-colors hover:text-primary ${
                          pathname === item.path
                            ? "text-primary"
                            : "text-muted-foreground"
                        } ${props.sidebar ? "w-full py-2" : "px-2"}`}
                        data-testid={`nav-link-${item.name.toLowerCase()}`}
                      >
                        {item.name}
                      </Link>
                    )}
                    {/* Insert Services dropdown after About dropdown */}
                    {item.name === "About" && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                                      pathname.startsWith('/services')
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                    } ${props.sidebar ? "w-full text-left pl-0 !justify-start !items-start py-2" : "flex items-center px-2"}`}
                            style={props.sidebar ? { justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: 'left' } : undefined}
                            data-testid="nav-dropdown-services"
                          >
                            <span className="w-full text-left">Services</span>
                            <ChevronDown className="w-3 h-3 ml-2" />
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
                                } py-2`}
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

              {/* Actions */}
              <div
                className={
                  props.sidebar
                    ? "flex flex-col items-start gap-2 mt-8 w-full"
                    : "hidden md:flex items-center space-x-4"
                }
              >
                {mounted && (
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
                )}
                <Link href="/contact" className={props.sidebar ? "w-full" : ""} data-testid="cta-consultation">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </NavBody>
          )}
        </Navbar>
      </div>
  {/* Mobile, Tablet & Large Screens (Header) */}
  <div className="xl:hidden fixed top-0 left-0 w-full z-50 bg-white dark:bg-background shadow">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center justify-center w-full">
            {/* Show banner logo on small/mobile, icon logo on md+ */}
            <img
              src="/logo_banner.svg"
              alt="Omos Designs Logo Banner"
              className="block md:hidden h-12 w-auto object-contain mx-auto"
            />
            <img
              src="/logo_icon.svg"
              alt="Omos Designs Logo Icon"
              className="hidden md:block h-20 w-auto object-contain"
            />
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Open navigation menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-background shadow-lg">
            <nav className="flex flex-col items-start gap-2 p-4">
              {/* Home */}
              <Link
                href="/"
                className="w-full py-2 px-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {/* About Dropdown (mobile) */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`w-full text-left py-2 px-2 text-base font-medium text-muted-foreground hover:text-primary flex items-center justify-between`}
                    data-testid="mobile-nav-dropdown-about"
                  >
                    <span>About</span>
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {aboutDropdownItems.map((aboutItem) => (
                    <DropdownMenuItem key={aboutItem.path} asChild>
                      <Link
                        href={aboutItem.path}
                        className={`w-full py-2 px-2 text-base font-medium ${pathname === aboutItem.path ? "text-primary" : "text-muted-foreground"}`}
                        onClick={() => setIsMenuOpen(false)}
                        data-testid={`mobile-nav-about-${aboutItem.name.toLowerCase().replace(/ /g, '-')}`}
                      >
                        {aboutItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`w-full text-left py-2 px-2 text-base font-medium text-muted-foreground hover:text-primary flex items-center justify-between`}
                    data-testid="mobile-nav-dropdown-services"
                  >
                    <span>Services</span>
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {servicesItems.map((service) => (
                    <DropdownMenuItem key={service.path} asChild>
                      <Link
                        href={service.path}
                        className={`w-full py-2 px-2 text-base font-medium ${pathname === service.path ? "text-primary" : "text-muted-foreground"}`}
                        onClick={() => setIsMenuOpen(false)}
                        data-testid={`mobile-nav-service-${service.name.toLowerCase().replace(' ', '-')}`}
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Pricing */}
              <Link
                href="/pricing"
                className="w-full py-2 px-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              {/* Contact */}
              <Link
                href="/contact"
                className="w-full py-2 px-2 text-base font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}