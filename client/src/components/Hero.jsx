import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@/assets/hero-printer.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 right-0 w-125 h-125 bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-500/10 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New Laser Series Available
            </div> */}
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 tracking-tight bg-linear-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
              Precision Printing for Professionals
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Experience the future of office productivity with our next-generation laser printers and premium supplies. Engineered for reliability, designed for speed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                  Check Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products?category=supplies">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold border-white/10 hover:bg-white/5 hover:text-white">
                  View Supplies
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-card/50 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={heroImage} 
                alt="Modern Laser Printer" 
                className="w-full h-auto rounded-lg transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
