import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { OrderSection } from './components/OrderSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ZipDownloadModal } from './components/ZipDownloadModal';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isZipModalOpen, setIsZipModalOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((c) => {
          if (c.item.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#121110] text-[#f7f5f0] flex flex-col font-worksans">
      
      {/* Sticky Header with 2 Divisions & Responsive Hamburger Menu */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => scrollToSection('order')}
        onOpenZipModal={() => setIsZipModalOpen(true)}
      />

      {/* Main Content: 6 Distinct, Engaging Sections */}
      <main className="flex-1">
        
        {/* SECTION 1: Hero Section */}
        <HeroSection
          onReserveClick={() => scrollToSection('order')}
          onExploreMenuClick={() => scrollToSection('menu')}
        />

        {/* SECTION 2: About Us ("About") */}
        <AboutSection />

        {/* SECTION 3: Menu Items */}
        <MenuSection onAddToCart={handleAddToCart} />

        {/* SECTION 4: Dining Experience & Ambiance */}
        <ExperienceSection onBookExperience={() => scrollToSection('order')} />

        {/* SECTION 5: Online Order & Table Reservation ("Order") */}
        <OrderSection
          cart={cart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* SECTION 6: Contact & Location ("Contact") with Mobile & Mail ID */}
        <ContactSection />

      </main>

      {/* Professional Footer */}
      <Footer onOpenZipModal={() => setIsZipModalOpen(true)} />

      {/* Editable Code ZIP Export Modal */}
      <ZipDownloadModal
        isOpen={isZipModalOpen}
        onClose={() => setIsZipModalOpen(false)}
      />

    </div>
  );
}
