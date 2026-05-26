export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  sizes: string[];
  images: string[];
  badge?: string;
}

// List of design files from pixel_art_samples
const designFiles = [
  "print_design_4.png",
  "watercolor_formation_1.png",
  "watercolor_formation_3.png",
  "watercolor_formation_4.png",
  "watercolor_formation_5.png",
  "watercolor_splash_1.png",
  "watercolor_splash_2.png",
  "watercolor_splash_3.png",
  "watercolor_splash_4.png",
  "watercolor_splash_5.png"
];

export const products: Product[] = designFiles.map((file, i) => {
  const baseName = file.replace(".png", "");
  const title = baseName
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    id: baseName,
    slug: baseName,
    name: title,
    description: `Pixel art design ${i + 1}`,
    price: 24 + i * 2,
    category: 'tees',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      `/images/designs/${file}`
    ],
    badge: i < 3 ? 'Bestseller' : undefined,
  };
});

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'tees', name: 'T-Shirts' },
];
