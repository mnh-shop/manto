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
    id: "urban_splash",
    slug: "urban_splash",
    name: "Urban Splash",
    description: "A bold watercolor splash that captures the energy of city streets. Premium heavyweight cotton with vibrant print that won't fade.",
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
    id: "concrete_bloom",
    slug: "concrete_bloom",
    name: "Concrete Bloom",
    description: "Find beauty in the unexpected. Organic watercolor formations on structured cotton — art that grows on you.",
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
    id: "neon_drift",
    slug: "neon_drift",
    name: "Neon Drift",
    description: "Let the current carry you. Fluid shapes and electric edges make this tee a statement piece for night riders and day dreamers.",
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
    id: "shadow_veil",
    slug: "shadow_veil",
    name: "Shadow Veil",
    description: "Mystery meets texture. Layered watercolor tones create depth that shifts in different light. Subtle enough for everyday, bold enough to turn heads.",
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
    id: "midnight_wave",
    slug: "midnight_wave",
    name: "Midnight Wave",
    description: "Deep blues and flowing curves inspired by the ocean at night. A serene, sophisticated design for those who move to their own rhythm.",
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
    id: "vapor_trail",
    slug: "vapor_trail",
    name: "Vapor Trail",
    description: "Inspired by the streaks left behind at full speed. A dynamic watercolor splash that captures motion in pigment.",
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
    id: "electric_fade",
    slug: "electric_fade",
    name: "Electric Fade",
    description: "Bright meets washed — a controlled chaos of color transitions. For those who refuse to blend in.",
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
    id: "ash_and_ember",
    slug: "ash_and_ember",
    name: "Ash & Ember",
    description: "Smoldering tones of charcoal and glow. A watercolor composition that evokes the last light of a fire — raw, warm, disappearing.",
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
    id: "cyan_rush",
    slug: "cyan_rush",
    name: "Cyan Rush",
    description: "Electric cyan explodes across premium cotton — a bold rush of color for the fearless. Part of our signature splash series.",
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
    id: "crimson_break",
    slug: "crimson_break",
    name: "Crimson Break",
    description: "A bold rupture of red and magenta on clean fabric. For moments that demand attention. Limited edition run in our splash collection.",
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
