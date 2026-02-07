import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Foxin12A from "@/assets/Foxin12A.jpg";
import Foxin from "@/assets/Foxin 88A.jpg";
import Epson003Black from "@/assets/Epson003Black.jpg";
import Hp680 from "@/assets/Hp680.jpg";
import Epson003Pink from "@/assets/Epson003Pink.jpg";
import Epson003Blue from "@/assets/Epson003Blue.jpg";
import Epson003Yellow from "@/assets/Epson003Yellow.jpg";
import Ivoomi388A from "@/assets/Ivoomi388A.jpg";
import Green12A from "@/assets/Green12A.jpg";
import Green88A from "@/assets/Green88A.jpg";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Foxin 88A Toner Catridge",
    category: "TONER CATRIDGE",
    image: Foxin,
    description: "FOXIN FTC 88A/CC388A Black Laser Toner Cartridge Compatible for HP Laserjet Printer",
    isNew: false
  },
  {
    id: 2,
    name: "Foxin 12A Toner Catridge",
    category: "TONER CATRIDGE",
    image: Foxin12A,
    description: "Foxin FTC 12A Laser Printer Toner Cartridge Compatible",
    isNew: false
  },
  {
    id: 3,
    name: "HP 680 Black & Colour Catridge",
    category: "TONER ORIGINAL CATRIDGE",
    image: Hp680,
    description: "HP 680 Tri-color Original Ink Advantage Cartridge |HP 680 Original Ink Advantage Cartridge (Black)",
    isNew: false
  },
  {
    id: 4,
    name: "EPSON 003 Black Ink Bottle",
    category: "INK BOTTLE",
    image: Epson003Black,
    description: "Premium Level Refill Ink Deep black ink for high-volume printing.",
    isNew: false
  },
  {
    id: 5,
    name: "EPSON 003 Pink Magenta Ink Bottle",
    category: "INK BOTTLE",
    image: Epson003Pink,
    description: "Premium Level Refill Ink Rich pink ink for accurate colours.",
    isNew: false
  },
  {
    id: 6,
    name: "EPSON 003 Cyan Blue Ink Bottle",
    category: "INK BOTTLE",
    image: Epson003Blue,
    description: "Premium Level Refill Ink Bright blue ink for vivid images.",
    isNew: false
  },
  {
    id: 7,
    name: "EPSON 003 Yellow Ink Bottle",
    category: "INK BOTTLE",
    image: Epson003Yellow,
    description: "Premium Level Refill Ink Clear yellow ink for balanced colour output.",
    isNew: false
  },
  {
    id: 8,
    name: "Ivoomi IV-X-388A Toner Catridge",
    category: "TONER CATRIDGE",
    image: Ivoomi388A,
    description: "Premium Level Toner Catridge with Good Compatibility in HP Laser",
    isNew: false
  },
  {
    id: 9,
    name: "Green Force 12A Toner Catridge",
    category: "TONER CATRIDGE",
    image: Green12A,
    description: "Premium Level Toner Catridge with good level of Compatibility",
    isNew: false
  },
  {
    id: 10,
    name: "Green Force 88A Toner Catridge",
    category: "TONER CATRIDGE",
    image: Green88A,
    description: "Premium Level Toner Catridge with good level of Compatibility",
    isNew: false
  }
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold font-display mb-4">Our Products</h1>
          <p className="text-muted-foreground">Browse our complete collection of professional printing equipment.</p>
        </div>
      </div>

      <div className="bg-card border border-white/10 rounded-xl p-4 mb-8 sticky top-20 z-30 shadow-2xl backdrop-blur-md bg-card/80">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-background/50 border-white/10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-64">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="bg-background/50 border-white/10">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="TONER CATRIDGE">Toner Cartridge</SelectItem>
                <SelectItem value="TONER ORIGINAL CATRIDGE">Original Toner Cartridge</SelectItem>
                <SelectItem value="INK BOTTLE">Ink Bottle</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold mb-2">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter.</p>
          <Button
            variant="link"
            className="mt-4 text-primary"
            onClick={() => { setSearchTerm(""); setCategoryFilter("all"); }}
          >
            Clear all filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1  md:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
