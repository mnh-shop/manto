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

// Deprecated: previously flat image list; now organized per design.
const designFiles: string[] = [];

export const products: Product[] = [
  {
    id: "print_design_4",
    slug: "print_design_4",
    name: "Print Design 4",
    description: "Print Design 4",
    price: 24,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/designs/design1/watercolor_splash_1.png",
      "/images/designs/design1/mockup_1_black_front.png",
      "/images/designs/design1/mockup_1_white_front.png"
    ],
    badge: "Bestseller"
  },
  {
    id: "watercolor_formation_1",
    slug: "watercolor_formation_1",
    name: "Watercolor Formation 1",
    description: "Watercolor Formation 1",
    price: 26,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/designs/design2/logo2.png",
      "/images/designs/design2/mockup_2_black_front.png",
      "/images/designs/design2/mockup_2_white_front.png"
    ],
    badge: "Bestseller"
  },
  {
    id: "watercolor_formation_3",
    slug: "watercolor_formation_3",
    name: "Watercolor Formation 3",
    description: "Watercolor Formation 3",
    price: 28,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/designs/design3/logo3.png",
      "/images/designs/design3/mockup_3_black_front.png",
      "/images/designs/design3/mockup_3_white_front.png"
    ],
    badge: "Bestseller"
  },
  {
    id: "watercolor_formation_4",
    slug: "watercolor_formation_4",
    name: "Watercolor Formation 4",
    description: "Watercolor Formation 4",
    price: 30,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/designs/design4/logo4.png",
      "/images/designs/design4/mockup_4_black_front.png",
      "/images/designs/design4/mockup_4_white_angled.png",
      "/images/designs/design4/mockup_4_white_front.png"
    ],
    badge: undefined
  },
  {
    id: "watercolor_formation_5",
    slug: "watercolor_formation_5",
    name: "Watercolor Formation 5",
    description: "Watercolor Formation 5",
    price: 32,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/designs/design5/logo5.png",
      "/images/designs/design5/plain_mockup_5_black_back.png",
      "/images/designs/design5/plain_mockup_5_black_front.png",
      "/images/designs/design5/plain_mockup_5_white_back.png",
      "/images/designs/design5/plain_mockup_5_white_front.png"
    ],
    badge: undefined
  },
  {
    id: "watercolor_splash_1",
    slug: "watercolor_splash_1",
    name: "Watercolor Splash 1",
    description: "Watercolor Splash 1",
    price: 34,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/designs/design6/logo6.png",
      "/images/designs/design6/plain_mockup_6_black_back.png",
      "/images/designs/design6/plain_mockup_6_black_front.png",
      "/images/designs/design6/plain_mockup_6_white_back.png",
      "/images/designs/design6/plain_mockup_6_white_front.png"
    ],
    badge: undefined
  },
  {
    id: "watercolor_splash_2",
    slug: "watercolor_splash_2",
    name: "Watercolor Splash 2",
    description: "Watercolor Splash 2",
    price: 36,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/designs/design7/logo7.png",
      "/images/designs/design7/plain_mockup_7_black_back.png",
      "/images/designs/design7/plain_mockup_7_black_front.png",
      "/images/designs/design7/plain_mockup_7_white_back.png",
      "/images/designs/design7/plain_mockup_7_white_front.png"
    ],
    badge: undefined
  },
  {
    id: "watercolor_splash_3",
    slug: "watercolor_splash_3",
    name: "Watercolor Splash 3",
    description: "Watercolor Splash 3",
    price: 38,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/designs/design8/logo8.png",
      "/images/designs/design8/plain_mockup_8_black_back.png",
      "/images/designs/design8/plain_mockup_8_black_front.png",
      "/images/designs/design8/plain_mockup_8_white_back.png",
      "/images/designs/design8/plain_mockup_8_white_front.png"
    ],
    badge: undefined
  },
  {
    id: "watercolor_splash_4",
    slug: "watercolor_splash_4",
    name: "Watercolor Splash 4",
    description: "Watercolor Splash 4",
    price: 40,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/designs/design9/logo9.png",
      "/images/designs/design9/plain_mockup_9_black_back.png",
      "/images/designs/design9/plain_mockup_9_black_front.png",
      "/images/designs/design9/plain_mockup_9_white_back.png",
      "/images/designs/design9/plain_mockup_9_white_front.png"
    ],
    badge: undefined
  },
  {
    id: "watercolor_splash_5",
    slug: "watercolor_splash_5",
    name: "Watercolor Splash 5",
    description: "Watercolor Splash 5",
    price: 42,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/designs/design10/design10.png",
      "/images/designs/design10/mockup_10_white_front.png",
      "/images/designs/design10/plain_mockup_10_black_back.png",
      "/images/designs/design10/plain_mockup_10_black_front.png"
    ],
    badge: undefined
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'tees', name: 'T-Shirts' }
];
