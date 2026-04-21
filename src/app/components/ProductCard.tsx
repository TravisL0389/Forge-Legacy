import { Link } from 'react-router';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../context/StoreContext';
import { useStore } from '../context/StoreContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const isInWishlist = wishlist.includes(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product.id);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative overflow-hidden rounded-lg bg-card aspect-square mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleToggleWishlist}
              className={`p-2 rounded-full ${
                isInWishlist ? 'bg-primary text-primary-foreground' : 'bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground'
              } transition-colors`}
              aria-label="Add to wishlist"
            >
              <Heart className="w-4 h-4" fill={isInWishlist ? 'currentColor' : 'none'} />
            </button>
            <button
              onClick={handleAddToCart}
              className="p-2 rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
          {product.bestSeller && (
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              Best Seller
            </div>
          )}
        </div>
        <div className="space-y-1">
          <h3 className="text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-muted-foreground text-sm">{product.category}</p>
          <p className="text-primary">${product.price.toLocaleString()}</p>
        </div>
      </Link>
    </motion.div>
  );
}
