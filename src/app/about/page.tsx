
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-manto-white mb-6">Our Story</h1>
      <div className="prose prose-lg text-manto-gray space-y-6">
        <p>MANTO was founded on a simple belief: men deserve streetwear products that actually work, without the fluff.</p>
        <p>We started in 2024 after our founder spent thousands on overhyped products that delivered nothing. We decided to create a brand focused on real ingredients, real results, and real value.</p>
        <p>Every product in our lineup is hand-selected and tested by our team. We partner with premium suppliers and use only clinically-proven ingredients at effective concentrations.</p>
        <p>Today, over 50,000 men trust MANTO for their daily streetwear routine. From graphic tee tools carved from natural stone to retinol creams that actually deliver, we are here to help you look and feel your best.</p>
        <h2 className="text-2xl font-bold text-manto-white pt-4">Our Promise</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Only clinically-proven ingredients</li>
          <li>No parabens, no sulfates, no BS</li>
          <li>30-day money-back guarantee</li>
          <li>Free shipping on orders over $50</li>
          <li>Fast delivery to Latin America and the US</li>
        </ul>
      </div>
    </div>
  );
}
