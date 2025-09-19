import { Hero } from "@/components/Hero";
import { PricingSummary } from "@/components/PricingSummary";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Users, Award, Star } from "lucide-react";
import { Link } from "wouter";

const quickSections = [
  {
    title: "Our Services",
    description: "From simple websites to complex web applications, all with lifetime updates included",
    icon: <Globe className="w-8 h-8" />,
    link: "/services",
    highlight: "4 Service Tiers"
  },
  {
    title: "About Us", 
    description: "Your reliable digital partner specializing in Chicagoland businesses",
    icon: <Users className="w-8 h-8" />,
    link: "/about",
    highlight: "5+ Years Experience"
  },
  {
    title: "Our Work",
    description: "See real projects and results from businesses we've helped succeed online",
    icon: <Award className="w-8 h-8" />,
    link: "/portfolio", 
    highlight: "50+ Projects"
  },
  {
    title: "Transparent Pricing",
    description: "Monthly plans with lifetime updates, or lump sum options available",
    icon: <Star className="w-8 h-8" />,
    link: "/pricing",
    highlight: "Starting $150/mo"
  }
];

export default function Home() {
  const handleGetStarted = () => {
    console.log('Get started clicked');
  };

  const handleViewBlog = () => {
    console.log('View blog clicked');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Quick Navigation Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom-coded solutions, transparent pricing, and lifetime support. 
              Click any section below to learn more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickSections.map((section, index) => (
              <Link key={index} href={section.link}>
                <Card className="h-full hover-elevate transition-all duration-300 cursor-pointer group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-chart-1/20 to-chart-2/20 flex items-center justify-center text-chart-1 group-hover:scale-110 transition-transform">
                      {section.icon}
                    </div>
                    <Badge variant="outline" className="w-fit mx-auto mb-2">
                      {section.highlight}
                    </Badge>
                    <CardTitle className="font-heading text-xl mb-2">{section.title}</CardTitle>
                    <CardDescription className="text-base">{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors" data-testid={`home-nav-${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <PricingSummary />

      {/* Quick About */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Why Choose Omos</Badge>
              <h2 className="text-3xl font-heading font-bold mb-4">
                Your Reliable Digital Partner
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                <strong>Omos</strong> means "shoulder" in Greek – we're the reliable support your business can lean on. 
                Working remotely with businesses nationwide, we specialize in helping Chicagoland small businesses 
                and nonprofits succeed online with custom-coded solutions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>✓ No website builders or templates</div>
                <div>✓ Lifetime updates & redesigns</div>
                <div>✓ Transparent, flexible pricing</div>
                <div>✓ Local expertise, remote capability</div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-chart-1/10 to-chart-2/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-heading font-bold">50+</span>
                  <span className="text-sm text-muted-foreground">Projects Completed</span>
                </div>
                <p className="text-sm">Websites and applications built for satisfied clients</p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-chart-2/10 to-chart-3/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-heading font-bold">100%</span>
                  <span className="text-sm text-muted-foreground">Client Retention</span>
                </div>
                <p className="text-sm">Every client continues working with us long-term</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-muted-foreground">
              Web design tips and business strategies to help you succeed online
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">Web Design Tips</Badge>
                <h3 className="font-heading font-semibold mb-2">5 Features Every Business Website Needs</h3>
                <p className="text-sm text-muted-foreground">Essential features that convert visitors into customers</p>
              </CardContent>
            </Card>
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">Business Strategy</Badge>
                <h3 className="font-heading font-semibold mb-2">Custom Code vs Website Builders</h3>
                <p className="text-sm text-muted-foreground">Why custom solutions provide better long-term value</p>
              </CardContent>
            </Card>
            <Card className="hover-elevate transition-all duration-300">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-2">Local SEO</Badge>
                <h3 className="font-heading font-semibold mb-2">Chicagoland Business SEO Secrets</h3>
                <p className="text-sm text-muted-foreground">Rank higher in local Google searches</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline" onClick={handleViewBlog} data-testid="home-view-blog">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-chart-1/10 to-chart-2/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 50+ successful businesses who trust Omos Designs for their web solutions. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleGetStarted} size="lg" data-testid="home-cta-primary">
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" data-testid="home-cta-secondary">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}