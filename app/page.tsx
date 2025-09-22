import { Metadata } from 'next'
import { Hero } from "@/components/Hero"
import { AboutSection } from '@/components/AboutSection'
import { ServicesPricingOverview } from '@/components/PricingSummary'

export const metadata: Metadata = {
  title: 'Professional Web Design & Development',
  description: 'Transform your business with custom web design and development. Monthly pricing with lifetime updates, serving businesses nationwide with Chicago specialization.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      {/* Services & PricingOverview Section */}
      <ServicesPricingOverview />
      {/* About Section */}
      <AboutSection />
    </main>
  )
}