"use client";

export default function PrivatePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <h1 className="text-4xl font-heading font-bold mb-8">Omos Designs – Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground text-lg">
          <p><strong>Effective Date:</strong> September 2025</p>
          <p>Omos Designs values your privacy. This Privacy Policy explains how we collect, use, and protect your information.</p>
          <h2 className="text-2xl font-bold mt-8 mb-2">Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Personal details you provide (name, email, phone, billing information) when filling out forms or engaging our services.</li>
            <li>Usage data (IP address, browser type, interactions with our website).</li>
            <li>Cookies to improve website functionality and analytics.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2">How We Use Your Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To communicate with you about services, projects, or inquiries.</li>
            <li>To process payments and deliver contracted services.</li>
            <li>To improve our website and offerings.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2">How We Share Information</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>We do not sell your personal data.</li>
            <li>We may share data with trusted third-party service providers (hosting, analytics, payment processors) only as needed to operate our services.</li>
            <li>We may disclose information if required by law.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2">Data Security</h2>
          <p>We implement industry-standard security measures, but no online system can be guaranteed 100% secure.</p>
          <h2 className="text-2xl font-bold mt-8 mb-2">Your Rights</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>You may request access, correction, or deletion of your data by contacting us.</li>
            <li>You can opt out of marketing emails anytime.</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-2">Cookies</h2>
          <p>We use cookies to analyze site traffic and enhance user experience. You can control cookies through your browser settings.</p>
          <h2 className="text-2xl font-bold mt-8 mb-2">Children’s Privacy</h2>
          <p>Our services are not directed at children under 13. We do not knowingly collect data from children.</p>
          <h2 className="text-2xl font-bold mt-8 mb-2">Changes to This Policy</h2>
          <p>We may update this Privacy Policy occasionally. Continued use of our website indicates acceptance of any changes.</p>
          <p>For privacy-related questions, contact us at <a href="mailto:support@omosdesigns.com" className="underline">support@omosdesigns.com</a>.</p>
        </div>
      </div>
    </main>
  );
}
