export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  features: string[];
  benefits: string[];
  badge?: string;
  sizes?: string[];
}

export const products: Product[] = [
  {
    id: "colombia-flag-tee",
    name: "Colombia Flag Graphic Tee",
    slug: "colombia-flag-tee",
    description: "Bold Colombia flag graphic on heavyweight cotton. Premium screen print that won't crack or fade.",
    price: 24.99, category: "tees", sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["https://placehold.co/600x600/0A0A0A/39FF14?text=Colombia+Tee"],
    features: ["100% cotton 220gsm", "Screen print graphics", "Oversized fit"],
    benefits: ["Vibrant colors", "Durable print", "Streetwear fit"],
    badge: "Bestseller",
  },
  {
    id: "anime-eyes-hoodie",
    name: "Anime Eyes Hoodie",
    slug: "anime-eyes-hoodie",
    description: "All-over anime eyes graphic on heavyweight hoodie. Ribbed cuffs, kangaroo pocket.",
    price: 38.99, category: "hoodies", sizes: ["S", "M", "L", "XL"],
    images: ["https://placehold.co/600x600/0A0A0A/39FF14?text=Anime+Hoodie"],
    features: ["350gsm cotton blend", "All-over print", "Kangaroo pocket"],
    benefits: ["Statement piece", "Super warm", "Unique design"],
    badge: "Popular",
  },
  {
    id: "street-art-bomber",
    name: "Street Art Bomber Tee",
    slug: "street-art-bomber-tee",
    description: "Urban street art inspired graphic. Dripping paint, bold colors, raw energy.",
    price: 26.99, category: "tees", sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["https://placehold.co/600x600/0A0A0A/39FF14?text=Street+Art"],
    features: ["200gsm cotton", "Pigment dye wash", "Relaxed fit"],
    benefits: ["Washes beautifully", "Gets better with age"],
  },
  {
    id: "meme-drop-tee",
    name: "Cuando No Es Una Tee",
    slug: "cuando-no-es-una-tee",
    description: "The iconic Latin meme on premium cotton. Relatable Latino humor, finally on a tee.",
    price: 22.99, category: "tees", sizes: ["S", "M", "L", "XL"],
    images: ["https://placehold.co/600x600/0A0A0A/39FF14?text=Meme+Tee"],
    features: ["Soft cotton", "Classic fit", "Printed tag"],
    benefits: ["Instant conversation starter", "Hilarious design"],
    badge: "Trending",
  },
  {
    id: "urban-camo-hoodie",
    name: "Urban Camo Hoodie",
    slug: "urban-camo-hoodie",
    description: "Digital urban camo pattern in neon green and black. Reflective logo detail.",
    price: 36.99, category: "hoodies", sizes: ["M", "L", "XL"],
    images: ["https://placehold.co/600x600/0A0A0A/39FF14?text=Camo+Hoodie"],
    features: ["320gsm fleece", "Digital camo print", "Reflective details"],
    benefits: ["Standout pattern", "Premium warmth"],
  },
  {
    id: "bandana-print-tee",
    name: "Bandana Print Tee",
    slug: "bandana-print-tee",
    description: "Classic paisley bandana pattern reimagined. A streetwear staple.",
    price: 24.99, category: "tees", sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["https://placehold.co/600x600/0A0A0A/39FF14?text=Bandana+Tee"],
    features: ["Paisley print", "180gsm cotton", "Regular fit"],
    benefits: ["Timeless pattern", "Wear with everything"],
  },
  {
    id: "retro-sunset-tee",
    name: "Retro Sunset Tee",
    slug: "retro-sunset-tee",
    description: "Vaporwave sunset gradient with palm trees and mountains.",
    price: 23.99, category: "tees", sizes: ["S", "M", "L", "XL"],
    images: ["https://placehold.co/600x600/0A0A0A/39FF14?text=Sunset+Tee"],
    features: ["Gradient print", "200gsm cotton", "Box fit"],
    benefits: ["Instagram-worthy", "Unique aesthetic"],
  },
  {
    id: "acid-wash-logo",
    name: "Acid Wash Logo Tee",
    slug: "acid-wash-logo-tee",
    description: "Each piece is uniquely acid-washed, making every tee one-of-a-kind.",
    price: 28.99, category: "tees", sizes: ["S", "M", "L", "XL"],
    images: ["https://placehold.co/600x600/0A0A0A/39FF14?text=Acid+Wash"],
    features: ["Hand acid-washed", "No two alike", "230gsm cotton"],
    benefits: ["Unique piece", "Premium feel"],
    badge: "Limited",
  },
  {
    id: "oversized-boxy",
    name: "Oversized Boxy Tee",
    slug: "oversized-boxy-tee",
    description: "The oversized boxy fit. Dropped shoulders, wide body, cropped length.",
    price: 21.99, category: "tees", sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["https://placehold.co/600x600/0A0A0A/39FF14?text=Boxy+Tee"],
    features: ["220gsm cotton", "Dropped shoulders", "Wide body"],
    benefits: ["Perfect streetwear fit", "Layerable"],
  },
  {
    id: "limited-drop",
    name: "Limited Edition Drop",
    slug: "limited-edition-drop",
    description: "Numbered limited edition. Only 200 pieces made. When they are gone, they are gone.",
    price: 34.99, category: "tees", sizes: ["M", "L", "XL"],
    images: ["https://placehold.co/600x600/0A0A0A/39FF14?text=Limited+Drop"],
    features: ["Numbered edition", "250gsm cotton", "Exclusive design"],
    benefits: ["Collectible", "Never restocked"],
    badge: "Limited",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const categories = [
  { id: "all", name: "All" },
  { id: "tees", name: "T-Shirts" },
  { id: "hoodies", name: "Hoodies" },
];
