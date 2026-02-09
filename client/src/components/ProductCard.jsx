import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
    >
      <div className="aspect-square relative overflow-hidden bg-linear-to-b from-white/5 to-transparent p-6">
        {product.isNew && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-bold z-10">
            NEW
          </Badge>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full  object-contain transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <Button className="bg-white text-black hover:bg-white/90 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Quick View
          </Button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 mb-2 text-yellow-500 text-xs">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-current" />
          ))}
          {/* <span className="text-muted-foreground ml-1">(24)</span> */}
        </div>
        
        <div className="text-xs font-medium text-primary mb-1 uppercase tracking-wider">
          {product.category}
        </div>
        
        <h3 className="text-lg font-bold font-display mb-2 text-white group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            {/* <span className="text-xs text-muted-foreground">Price</span>
            <span className="text-xl font-bold text-white">${product.price}</span> */}
          </div>
          {/* <Button size="icon" className="h-10 w-10 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground text-white transition-all duration-300">
            <ShoppingCart className="h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </motion.div>
  );
}
