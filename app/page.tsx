import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Web Design & Development',
  description: 'Transform your business with custom web design and development. Monthly pricing with lifetime updates, serving businesses nationwide with Chicago specialization.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Omos Designs NextJS
        </h1>
        <p className="text-center text-muted-foreground">
          NextJS migration in progress...
        </p>
      </div>
    </main>
  )
}