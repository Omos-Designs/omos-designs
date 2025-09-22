"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

const footerLinks = {
  services: [
  { name: "Simple Website", href: "/services#simple" as const },
  { name: "Complete Website", href: "/services#complete" as const },
  { name: "E-Commerce", href: "/services#ecommerce" as const },
  { name: "Web Applications", href: "/services#webapp" as const },
  ],
  company: [
  { name: "About Us", href: "/about" as const },
  { name: "Our Process", href: "/about#process" as const },
  { name: "Pricing", href: "/pricing" as const },
  { name: "Contact", href: "/contact" as const },
  ],
  resources: [
  { name: "Portfolio", href: "/portfolio" as const },
  { name: "Case Studies", href: "/case-studies" as const },
  { name: "Blog", href: "/blog" as const },
  { name: "FAQ", href: "/faq" as const },
  ]
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSignup = () => {
    console.log('Newsletter signup clicked');
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="font-heading font-bold text-xl">Omos Designs</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your reliable digital partner for custom web solutions. 
              Working remotely with businesses nationwide, specializing in 
              Chicagoland small businesses and nonprofits.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Remote work, Chicagoland specialty</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@omosdesigns.com</span>
              </div>
            </div>
          </div>

          {/* Spacer for gap on large screens */}
          <div className="hidden lg:block" />

          {/* Services */}
          <div className="lg:text-right">
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  {link.name === "services" ? (
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-services`}
                  >
                    {link.name}
                  </Link>
                  ) : (
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground" data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}> 
                      {link.name}
                    </span>
                  </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:text-right">
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-8" />
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Omos Designs. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>in Chicago</span>
          </div>
          
          <div className="flex space-x-4 text-sm">
            <Link 
              href={"/private-policy" as const} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-privacy"
            >
              Privacy Policy
            </Link>
            <Link 
              href={"/terms-of-service" as const} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}