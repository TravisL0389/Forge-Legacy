import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { SizeGuide } from './pages/SizeGuide';
import { Wishlist } from './pages/Wishlist';
import { Account } from './pages/Account';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'shop', Component: Shop },
      { path: 'product/:id', Component: ProductDetail },
      { path: 'cart', Component: Cart },
      { path: 'checkout', Component: Checkout },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'size-guide', Component: SizeGuide },
      { path: 'wishlist', Component: Wishlist },
      { path: 'account', Component: Account },
      { path: 'shipping', Component: () => <div className="min-h-screen py-16 px-4 text-center"><h1 className="text-3xl mb-4">Shipping Information</h1><p className="text-muted-foreground">Coming soon...</p></div> },
      { path: 'returns', Component: () => <div className="min-h-screen py-16 px-4 text-center"><h1 className="text-3xl mb-4">Returns Policy</h1><p className="text-muted-foreground">Coming soon...</p></div> },
      { path: '*', Component: () => <div className="min-h-screen py-16 px-4 text-center"><h1 className="text-3xl mb-4">404 - Page Not Found</h1></div> },
    ],
  },
]);
