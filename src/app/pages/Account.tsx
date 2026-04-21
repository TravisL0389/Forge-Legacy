import { User, Package, Heart, MapPin, CreditCard } from 'lucide-react';

export function Account() {
  return (
    <div className="min-h-screen py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Account Navigation */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 border border-border space-y-2">
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-primary text-primary-foreground transition-colors">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-background transition-colors">
                <Package className="w-5 h-5" />
                <span>Orders</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-background transition-colors">
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-background transition-colors">
                <MapPin className="w-5 h-5" />
                <span>Addresses</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-background transition-colors">
                <CreditCard className="w-5 h-5" />
                <span>Payment Methods</span>
              </button>
            </div>
          </aside>

          {/* Profile Content */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 sm:p-8 border border-border">
              <h2 className="text-2xl mb-6">Profile Information</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      defaultValue="John"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      defaultValue="Doe"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            {/* Recent Orders */}
            <div className="bg-card rounded-lg p-6 sm:p-8 border border-border mt-8">
              <h2 className="text-2xl mb-6">Recent Orders</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="mb-1">Order #FL-000123</p>
                      <p className="text-sm text-muted-foreground">Placed on March 15, 2026</p>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Delivered</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1773929269191-813b7eca6954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWJhbiUyMGxpbmslMjBjaGFpbiUyMGdvbGR8ZW58MXx8fHwxNzc2NjkyNzMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Product"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm">Cuban Link Gold Chain</p>
                      <p className="text-sm text-muted-foreground">$1,299.00</p>
                    </div>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="mb-1">Order #FL-000122</p>
                      <p className="text-sm text-muted-foreground">Placed on March 10, 2026</p>
                    </div>
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">In Transit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1572194812951-f9a56327d2f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjaHJvbm9ncmFwaCUyMHdhdGNofGVufDF8fHx8MTc3NjY5MjczMXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Product"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="text-sm">Luxury Chronograph Watch</p>
                      <p className="text-sm text-muted-foreground">$2,499.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
