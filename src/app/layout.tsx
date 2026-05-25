import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartSidebar } from "@/components/cart/CartSidebar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "MANTO - Streetwear & Graphic Tees",
  description: "Bold graphic tees, hoodies, and streetwear. Premium quality, fast shipping. Free shipping over $50.",
  openGraph: {
    title: "MANTO - Streetwear & Graphic Tees",
    description: "Bold graphic tees, hoodies, and streetwear for those who stand out.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CartSidebar />
      </body>
    </html>
  );
}
