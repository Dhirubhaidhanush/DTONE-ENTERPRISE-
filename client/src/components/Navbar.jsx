import { Link, useLocation } from "wouter";
import { Printer, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "All Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Printer className="h-6 w-6 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            D TONE ENTERPRISES
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* MOBILE NAV */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-75 sm:w-100 border-l border-white/10 bg-card/95 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-6 mt-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}









// import { Link, useLocation } from "wouter";
// import { Printer, ShoppingCart, Menu, X } from "lucide-react";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// export default function Navbar() {
//   const [location] = useLocation();
//   const [isOpen, setIsOpen] = useState(false);

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "All Products" },
//     // { href: "/products?category=printers", label: "Printers" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
//       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link href="/">
//           <a className="flex items-center gap-2 group">
//             <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
//               <Printer className="h-6 w-6 text-primary" />
//             </div>
//             <span className="font-display font-bold text-xl tracking-tight">D TONE ENTERPRISES</span>
//           </a>
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-8">
//           {links.map((link) => (
//             <Link key={link.href} href={link.href}>
//               <a className={`text-sm font-medium transition-colors hover:text-primary ${
//                 location === link.href ? "text-primary" : "text-muted-foreground"
//               }`}>
//                 {link.label}
//               </a>
//             </Link>
//           ))}
//         </div>

//           {/* Mobile Nav */}
//           <div className="md:hidden">
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-5 w-5" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-75 sm:w-100 border-l border-white/10 bg-card/95 backdrop-blur-xl">
//                 <div className="flex flex-col gap-6 mt-8">
//                   {links.map((link) => (
//                     <Link key={link.href} href={link.href}>
//                       <a 
//                         className="text-lg font-medium hover:text-primary transition-colors"
//                         onClick={() => setIsOpen(false)}
//                       >
//                         {link.label}
//                       </a>
//                     </Link>
//                   ))}
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//       </div>
//     </nav>
//   );
// }
