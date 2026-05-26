
export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-black mb-6">Terms of Service</h1>
      <div className="prose text-gray-600 space-y-4">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>By using MANTO, you agree to these terms.</p>
        <h2 className="text-xl font-bold text-black pt-4">Orders & Payment</h2>
        <p>All prices are in USD unless otherwise stated. We reserve the right to cancel orders for pricing errors or stock issues.</p>
        <h2 className="text-xl font-bold text-black pt-4">Shipping</h2>
        <p>Delivery times are estimates. We are not responsible for carrier delays. Free shipping on orders over $50.</p>
        <h2 className="text-xl font-bold text-black pt-4">Returns</h2>
        <p>30-day return policy. Items must be unused and in original packaging. Contact support@mantostreet.com to initiate a return.</p>
        <h2 className="text-xl font-bold text-black pt-4">Limitation of Liability</h2>
        <p>MANTO is not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount paid for the product.</p>
      </div>
    </div>
  );
}
