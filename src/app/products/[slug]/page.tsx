import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import { Badge } from "@/components/ui/Input";
import { AddToCartButton } from "@/components/products/AddToCart";
import { RelatedProducts } from "@/components/products/RelatedProducts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="aspect-square rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden relative">
          <Image src={product.images[0]} alt={product.name} fill className="object-contain p-8" priority />
          {product.badge && <div className="absolute top-4 left-4"><Badge>{product.badge}</Badge></div>}
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-black">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-0.5">{[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-gray-900 text-gray-900" />)}</div>
              <span className="text-sm text-gray-600">(128 reviews)</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <AddToCartButton product={product} />
          <RelatedProducts products={related} />
        </div>
      </div>
    </div>
  );
}