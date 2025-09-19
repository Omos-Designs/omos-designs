import { Metadata } from 'next'
import { DesignTest } from "@/components/design-test"

export const metadata: Metadata = {
  title: 'Professional Web Design & Development',
  description: 'Transform your business with custom web design and development. Monthly pricing with lifetime updates, serving businesses nationwide with Chicago specialization.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <DesignTest />
    </main>
  )
}