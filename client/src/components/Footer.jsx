import { Printer, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-20 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Printer className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-xl tracking-tight text-white">D TONE ENTERPRISES</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Providing top-tier printing solutions for modern businesses. Quality, speed, and reliability in every print.
            </p>
          </div>

          <div>
            <h4 className="font-display  font-bold text-white mb-6">Products</h4>
            <ul className="space-y-3 text-muted-foreground">
              {/* <li className="hover:text-primary cursor-pointer transition-colors">Laser Printers</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Inkjet Printers</li> */}
              <li className="hover:text-primary cursor-pointer transition-colors">Toner Cartridges</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Ink Bottles</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Toner Refill Powder</li>
            </ul>
          </div>

         

          <div>
            <h4 className="font-display  font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Ottiyambakkam Main Road, Sithalapakkam Chennai-131</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 7305419024</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>svvtechnologies@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} SVVTechnologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
