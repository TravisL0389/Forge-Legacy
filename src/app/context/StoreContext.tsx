import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Necklaces' | 'Watches' | 'Bracelets' | 'Rings';
  material: 'Gold' | 'Silver';
  image: string;
  images: string[];
  description: string;
  sizes?: string[];
  featured?: boolean;
  bestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

interface StoreContextType {
  products: Product[];
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const products: Product[] = [
  {
    id: '1',
    name: 'Cuban Link Gold Chain',
    price: 1299,
    category: 'Necklaces',
    material: 'Gold',
    image: 'https://images.unsplash.com/photo-1773929269191-813b7eca6954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWJhbiUyMGxpbmslMjBjaGFpbiUyMGdvbGR8ZW58MXx8fHwxNzc2NjkyNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1773929269191-813b7eca6954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWJhbiUyMGxpbmslMjBjaGFpbiUyMGdvbGR8ZW58MXx8fHwxNzc2NjkyNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1719862056552-b9de4f843beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwY2hhaW4lMjBuZWNrbGFjZSUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzY2OTI3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Premium 18K gold plated Cuban link chain. Bold, heavyweight design that makes a statement. Perfect for both street and formal wear.',
    sizes: ['18"', '20"', '22"', '24"'],
    featured: true,
    bestSeller: true,
  },
  {
    id: '2',
    name: 'Luxury Chronograph Watch',
    price: 2499,
    category: 'Watches',
    material: 'Gold',
    image: 'https://images.unsplash.com/photo-1572194812951-f9a56327d2f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaHJvbm9ncmFwaCUyMHdhdGNofGVufDF8fHx8MTc3NjY5MjczMXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1572194812951-f9a56327d2f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaHJvbm9ncmFwaCUyMHdhdGNofGVufDF8fHx8MTc3NjY5MjczMXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1762232977931-2e3f5949b2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW5zJTIwd2F0Y2glMjB3cmlzdCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzc2NjkyNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Swiss-inspired chronograph timepiece with gold-tone finish. Precision movement meets luxury design. Water-resistant up to 50m.',
    featured: true,
    bestSeller: true,
  },
  {
    id: '3',
    name: 'Diamond Tennis Bracelet',
    price: 1899,
    category: 'Bracelets',
    material: 'Silver',
    image: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBicmFjZWxldCUyMGRpYW1vbmRzfGVufDF8fHx8MTc3NjY5MjczMnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBicmFjZWxldCUyMGRpYW1vbmRzfGVufDF8fHx8MTc3NjY5MjczMnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761331454826-a7b4ffd54398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBicmFjZWxldCUyMG1lbnMlMjBqZXdlbHJ5fGVufDF8fHx8MTc3NjY5MjcyNXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Iced out tennis bracelet with premium cubic zirconia stones. Sterling silver base with rhodium plating for lasting shine.',
    sizes: ['7"', '8"', '9"'],
    featured: true,
  },
  {
    id: '4',
    name: 'Gold Signet Ring',
    price: 799,
    category: 'Rings',
    material: 'Gold',
    image: 'https://images.unsplash.com/photo-1758362197676-228703a17e69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwc2lnbmV0JTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzY2OTI3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1758362197676-228703a17e69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwc2lnbmV0JTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzY2OTI3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Classic signet ring in 18K gold plated brass. Timeless design perfect for engraving your legacy.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    bestSeller: true,
  },
  {
    id: '5',
    name: 'Luxury Pendant Necklace',
    price: 999,
    category: 'Necklaces',
    material: 'Gold',
    image: 'https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW5kYW50JTIwbmVja2xhY2UlMjBnb2xkfGVufDF8fHx8MTc3NjY5MjcyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1758995115560-59c10d6cc28f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW5kYW50JTIwbmVja2xhY2UlMjBnb2xkfGVufDF8fHx8MTc3NjY5MjcyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Statement pendant necklace with intricate detailing. 18K gold plated on stainless steel chain.',
    sizes: ['20"', '24"'],
    featured: true,
  },
  {
    id: '6',
    name: 'Silver Chain Bracelet',
    price: 599,
    category: 'Bracelets',
    material: 'Silver',
    image: 'https://images.unsplash.com/photo-1761331454826-a7b4ffd54398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwc2lsdmVyJTIwY2hhaW4lMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NjY5MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1761331454826-a7b4ffd54398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwc2lsdmVyJTIwY2hhaW4lMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NjY5MjcyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Classic silver chain bracelet in premium 925 sterling silver. Refined elegance for everyday wear.',
    sizes: ['7"', '8"', '9"'],
    bestSeller: true,
  },
  {
    id: '7',
    name: 'Executive Dress Watch',
    price: 1799,
    category: 'Watches',
    material: 'Silver',
    image: 'https://images.unsplash.com/photo-1762232977931-2e3f5949b2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW5zJTIwd2F0Y2glMjB3cmlzdCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzc2NjkyNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1762232977931-2e3f5949b2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtZW5zJTIwd2F0Y2glMjB3cmlzdCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzc2NjkyNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Sleek minimalist dress watch with Japanese quartz movement. Sapphire crystal glass and leather strap.',
    featured: true,
  },
  {
    id: '8',
    name: 'Statement Gold Ring',
    price: 899,
    category: 'Rings',
    material: 'Gold',
    image: 'https://images.unsplash.com/photo-1758362197676-228703a17e69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwc2lnbmV0JTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzY2OTI3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1758362197676-228703a17e69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwc2lnbmV0JTIwcmluZyUyMGx1eHVyeXxlbnwxfHx8fDE3NzY2OTI3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Bold statement ring with geometric design. 18K gold plated with premium finish.',
    sizes: ['7', '8', '9', '10', '11', '12'],
  },
];

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addToCart = (product: Product, size?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
}
