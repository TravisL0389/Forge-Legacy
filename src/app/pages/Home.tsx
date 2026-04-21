import { Link } from 'react-router';
import { ArrowRight, Shield, Truck, RotateCcw, CreditCard } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { useStore } from '../context/StoreContext';
import { motion } from 'motion/react';

export function Home() {
  const { products } = useStore();
  const featuredProducts = products.filter((p) => p.featured);
  const bestSellers = products.filter((p) => p.bestSeller);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] sm:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1681392835841-78d5be73bd92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwYmxhY2slMjBtYW4lMjBnb2xkJTIwamV3ZWxyeSUyMG5lY2tsYWNlfGVufDF8fHx8MTc3NjY5MjcyNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight">
              Craft Your <span className="text-primary">Legacy</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-xl">
              Premium men's jewelry that bridges the gap between streetwear swagger and timeless sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors group"
              >
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">Featured Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that embody luxury and street culture
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Best Sellers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Customer favorites that define modern masculinity
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ y: -4 }}
            className="text-center p-6 rounded-lg bg-card"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="mb-2">Free Shipping</h3>
            <p className="text-muted-foreground text-sm">On orders over $100</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="text-center p-6 rounded-lg bg-card"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <RotateCcw className="w-8 h-8" />
            </div>
            <h3 className="mb-2">Easy Returns</h3>
            <p className="text-muted-foreground text-sm">30-day return policy</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="text-center p-6 rounded-lg bg-card"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="mb-2">Secure Payment</h3>
            <p className="text-muted-foreground text-sm">100% secure checkout</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="text-center p-6 rounded-lg bg-card"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <CreditCard className="w-8 h-8" />
            </div>
            <h3 className="mb-2">Premium Quality</h3>
            <p className="text-muted-foreground text-sm">Certified materials</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-4">Join the Legacy</h2>
          <p className="text-lg mb-8 opacity-90">
            Sign up for exclusive access to new drops, special offers, and styling tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-lg bg-background text-primary hover:bg-background/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
