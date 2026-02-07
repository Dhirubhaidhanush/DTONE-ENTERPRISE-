import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

// Import assets
import laserPrinterImg from "@/assets/product-laser-printer.png";
import tonerImg from "@/assets/product-toner.png";
import inkImg from "@/assets/product-ink.png";
import powderImg from "@/assets/product-powder.png";
import Foxin from "@/assets/Foxin 88A.jpg";
import Epson from "@/assets/Epson-003.jpg";
import Hp680 from "@/assets/Hp680.jpg";


const CATEGORIES = [
  // { name: "Laser Printers", image: laserPrinterImg, desc: "High-speed enterprise printing" },
  { name: "Toner Cartridges", image: tonerImg, desc: "Premium quality original toners" },
  { name: "Ink Bottles", image: inkImg, desc: "Vibrant colors for inkjet series" },
  { name: "Toner Powder", image: powderImg, desc: "Professional refill kits" },
];

const FEATURED_PRODUCTS = [
  // {
  //   id: 1,
  //   name: "ProLaser X5000 Enterprise",
  //   category: "Laser Printer",
  //   price: "499.00",
  //   image: laserPrinterImg,
  //   description: "Our fastest network laser printer for high-volume office environments.",
  //   isNew: true
  // },
  {
    id: 2,
    name: "Foxin Toner Catridge 88A",
    category: "Toner Cartridge",
    price: "89.00",
    image: Foxin,
    description: "High-yield black toner cartridge compatible with X5000 series.",
    isNew: false
  },
  {
    id: 3,
    name: "EPSON 003 Black & Colour",
    category: "Ink Bottle",
    price: "45.00",
    image: Epson,
    description: "Complete set of dye-based inks for photo-realistic printing.",
    isNew: false
  },
  {
    id: 4,
    name: "HP 680 Black and Colour Catridge",
    category: "Toner Catridge",
    price: "29.00",
    image: Hp680,
    description: "Original Toner Catridge",
    isNew: false
  }
];

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Find exactly what you need for your printing setup. From hardware to supplies, we have it all.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-4/5 cursor-pointer">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-xl font-bold text-white mb-1">{cat.name}</h3>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Featured Products</h2>
              <p className="text-muted-foreground">Hand-picked best sellers for this month.</p>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="hidden md:flex group">
                View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline" className="w-full">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-20 bg-primary/5 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { title: "Genuine Quality", desc: "100% authentic parts directly from manufacturers." },
              { title: "Express Shipping", desc: "Same-day dispatch for orders placed before 2PM." },
              { title: "Expert Support", desc: "24/7 technical assistance for all your printer needs." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-colors">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
