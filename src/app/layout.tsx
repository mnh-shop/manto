import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartSidebar } from "@/components/cart/CartSidebar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "MANTO - Youth Graphic Tees & Streetwear",
  description: "Fresh designs for youth culture. Premium graphic tees, hoodies, and streetwear. Free shipping over $50.",
  openGraph: {
    title: "MANTO - Youth Graphic Tees & Streetwear",
    description: "Bold graphic tees and streetwear for the next generation.",
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