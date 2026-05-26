
export default function ReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-black mb-6">Returns & Refunds</h1>
      <div className="prose text-gray-600 space-y-4">
        <p>We want you to love your MANTO products. If you are not satisfied, here is how returns work:</p>
        <h2 className="text-xl font-bold text-black pt-4">30-Day Money-Back Guarantee</h2>
        <p>Return any product within 30 days of delivery for a full refund. Items must be in original condition.</p>
        <h2 className="text-xl font-bold text-black pt-4">How to Return</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Email support@mantostreet.com with your order number</li>
          <li>We will send you a return label (free for defective items)</li>
          <li>Pack the item securely and drop it off at the carrier</li>
          <li>Refund processed within 5-7 business days of receipt</li>
        </ol>
        <h2 className="text-xl font-bold text-black pt-4">Defective Products</h2>
        <p>If your item arrives damaged or defective, we will replace it free of charge. Just send us a photo.</p>
      </div>
    </div>
  );
}
