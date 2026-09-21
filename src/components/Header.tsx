import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, UtensilsCrossed, PhoneCall } from 'lucide-react';
import { GSN_CONTACT } from '../data/restaurantData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenZipModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenZipModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Order', href: '#order' },
    { label: 'Menu items', href: '#menu' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#141312]/95 backdrop-blur-md border-[#2e2a25] shadow-lg shadow-black/40 py-3'
          : 'bg-[#141312]/90 backdrop-blur-sm border-[#24201c] py-4'
      }`}
      style={{ position: 'sticky', top: 0 }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* DIVISION 1: Logo GSN */}
        <div id="header-division-logo" className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="GSN Restaurant Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#E4ED64] to-[#a8b320] flex items-center justify-center text-[#121110] font-bold shadow-md shadow-[#E4ED64]/20 group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5 text-[#121110]" />
            </div>
            <div className="flex flex-col">
              <span className="font-rubik text-2xl sm:text-3xl font-extrabold tracking-wider text-[#f7f5f0] group-hover:text-[#E4ED64] transition-colors leading-none">
                GSN
              </span>
              <span className="font-worksans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#a39e93] font-medium mt-1">
                Restaurant & Fine Dining
              </span>
            </div>
          </a>
        </div>

        {/* DIVISION 2: Navigation Menu (Desktop view >= 1200px, turns to Hamburger in Tab & Mobile view) */}
        <div id="header-division-navigation" className="flex items-center gap-6">
          
          {/* Desktop Navigation Menu (strictly for desktop devices over 1200px) */}
          <nav
            id="desktop-nav-menu"
            className="hidden min-[1200px]:flex items-center gap-8"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-worksans text-base font-normal normal-case text-[#dedad2] hover:text-[#E4ED64] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E4ED64] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Cart Icon */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#dedad2] hover:text-[#E4ED64] transition-colors rounded-full hover:bg-[#201d1a]"
              aria-label="View Order Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E4ED64] text-[#121110] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>

          {/* Tablet & Mobile Actions (screen under 1200px) */}
          <div className="flex min-[1200px]:hidden items-center gap-3">
            {/* Mobile Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#dedad2] hover:text-[#E4ED64] transition-colors rounded-full hover:bg-[#201d1a]"
              aria-label="View Order Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E4ED64] text-[#121110] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Button (turns to hamburger menu in tab and mobile view) */}
            <button
              id="hamburger-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#dedad2] hover:text-[#E4ED64] bg-[#201d1a] border border-[#332e29] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#E4ED64]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Hamburger Drawer for Tab and Mobile Views (< 1200px) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="min-[1200px]:hidden bg-[#181615] border-b border-[#2e2a25] px-6 py-6 shadow-2xl animate-in slide-in-from-top-4 duration-300"
        >
          <div className="flex flex-col space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#a39e93] font-medium pb-2 border-b border-[#292521]">
              Navigation Menu
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-rubik text-lg font-medium text-[#f7f5f0] hover:text-[#E4ED64] transition-colors py-2 flex items-center justify-between border-b border-[#23201d]"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#a39e93] font-worksans">Explore</span>
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#order"
                onClick={(e) => handleNavClick(e, '#order')}
                className="w-full text-center font-rubik text-sm uppercase tracking-wider font-semibold bg-[#E4ED64] hover:bg-[#f2f785] text-[#121110] py-3 rounded-xl transition-all shadow-md shadow-[#E4ED64]/20"
              >
                Reserve Table / Order Now
              </a>

              <a
                href={`tel:${GSN_CONTACT.primaryPhone}`}
                className="w-full text-center flex items-center justify-center gap-2 font-worksans text-xs text-[#dedad2] py-2.5 rounded-xl border border-[#38332d] hover:border-[#E4ED64]"
              >
                <PhoneCall className="w-4 h-4 text-[#E4ED64]" />
                <span>Call Us: {GSN_CONTACT.primaryPhone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenZipModal();
                }}
                className="w-full text-center font-worksans text-xs text-[#a39e93] hover:text-[#dedad2] py-1 underline"
              >
                Download Code ZIP / Instructions
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
