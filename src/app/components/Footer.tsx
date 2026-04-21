import { Link } from 'react-router';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl tracking-tight">
              <span className="text-foreground">FORGE</span>
              <span className="text-primary">&</span>
              <span className="text-foreground">LEGACY</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Craft your legacy with premium men's jewelry and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-foreground">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=Necklaces" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Watches" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Watches
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Bracelets" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Rings" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Rings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-foreground">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Forge & Legacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
