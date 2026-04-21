export function About() {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl mb-8 text-center">About Forge & Legacy</h1>

        <div className="space-y-8">
          <div className="aspect-[16/9] rounded-lg overflow-hidden mb-12">
            <img
              src="https://images.unsplash.com/photo-1629871870289-21efd577d820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtYW4lMjBmYXNoaW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc2NjkyNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="About Forge & Legacy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl sm:text-3xl mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Forge & Legacy was born from a vision to bridge the gap between streetwear culture and luxury sophistication.
              We believe that modern masculinity doesn't have to choose between hip-hop swagger and suit-and-tie elegance—it
              can embody both.
            </p>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-12">The Forge & Legacy Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every piece in our collection is carefully curated to represent the duality of modern men's fashion. Whether
              you're hitting the streets or closing a boardroom deal, our jewelry makes a statement that's uniquely yours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl mb-3">Premium Quality</h3>
                <p className="text-muted-foreground text-sm">
                  We source only the finest materials—18K gold plating, sterling silver, and premium cubic zirconia—to
                  ensure every piece stands the test of time.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl mb-3">Authentic Design</h3>
                <p className="text-muted-foreground text-sm">
                  Our designs blend timeless elegance with contemporary edge, creating pieces that feel both classic and
                  cutting-edge.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl mb-3">Cultural Relevance</h3>
                <p className="text-muted-foreground text-sm">
                  We draw inspiration from hip-hop culture, high fashion, and everything in between to create jewelry that
                  resonates with today's tastemakers.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl mb-3">Customer First</h3>
                <p className="text-muted-foreground text-sm">
                  From free shipping on orders over $100 to our 30-day return policy, we're committed to making your
                  experience exceptional.
                </p>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl mb-4 mt-12">Craft Your Legacy</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're more than a jewelry brand—we're a movement. Every piece you wear is a chapter in your story, a symbol
              of your journey, and a testament to your individuality. Your legacy isn't just what you leave behind; it's
              what you build every day.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Join us in redefining what it means to wear luxury. Welcome to Forge & Legacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
