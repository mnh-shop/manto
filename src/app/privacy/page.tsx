
export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-manto-white mb-6">Privacy Policy</h1>
      <div className="prose text-manto-gray space-y-4">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>MANTO ("we", "us") respects your privacy. This policy describes how we collect, use, and protect your personal information.</p>
        <h2 className="text-xl font-bold text-manto-white pt-4">Information We Collect</h2>
        <p>We collect information you provide directly: name, email, phone, shipping address, and payment information. Payment data is processed securely by Stripe, Wompi, or NOWPayments — we never store your full card details.</p>
        <h2 className="text-xl font-bold text-manto-white pt-4">How We Use Your Information</h2>
        <p>To process orders, send shipping updates, respond to inquiries, and improve our products. We do not sell your data to third parties.</p>
        <h2 className="text-xl font-bold text-manto-white pt-4">Data Security</h2>
        <p>We use SSL encryption and comply with PCI DSS standards through our payment processors.</p>
        <h2 className="text-xl font-bold text-manto-white pt-4">Contact</h2>
        <p>For privacy questions: privacy@mantostreet.com</p>
      </div>
    </div>
  );
}
