import React, { useState } from 'react';
import { UtensilsCrossed, Phone, Mail, MapPin, Clock, ArrowUp, Download, ShieldCheck, Instagram, Facebook, Twitter } from 'lucide-react';
import { GSN_CONTACT } from '../data/restaurantData';

interface FooterProps {
  onOpenZipModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenZipModal }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
    setEmailInput('');
  };

  return (
    <footer id="main-footer" className="bg-[#0e0d0c] text-[#dedad2] border-t-2 border-[#E4ED64]/30 pt-16 pb-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-[#E4ED64] shadow-[0_0_12px_#E4ED64]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Container changed to Column layout */}
        <div className="flex flex-col gap-10 pb-14 border-b border-[#221f1c]">
          
          {/* Section 1: Brand & Identity */}
          <div className="w-full space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E4ED64] flex items-center justify-center text-[#121110]">
                <UtensilsCrossed className="w-5 h-5 text-[#121110]" />
              </div>
              <div className="flex flex-col">
                <span className="font-rubik text-2xl font-black tracking-wider text-[#f7f5f0] leading-none">
                  GSN
                </span>
                <span className="font-worksans text-[10px] tracking-[0.2em] uppercase text-[#a39e93] font-semibold mt-1">
                  Restaurant & Fine Dining
                </span>
              </div>
            </div>

            <p className="font-worksans text-xs sm:text-sm text-[#a39e93] leading-relaxed">
              GSN Restaurant celebrates the timeless heritage of culinary craftsmanship, organic regenerative farm partnerships, and an uncompromising dedication to hospitality.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="flex items-center gap-3">
                <a
                  href="#footer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-[#1a1816] border border-[#2e2a25] hover:border-[#E4ED64] text-[#a39e93] hover:text-[#E4ED64] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#footer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-[#1a1816] border border-[#2e2a25] hover:border-[#E4ED64] text-[#a39e93] hover:text-[#E4ED64] flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#footer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-lg bg-[#1a1816] border border-[#2e2a25] hover:border-[#E4ED64] text-[#a39e93] hover:text-[#E4ED64] flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={onOpenZipModal}
                className="inline-flex items-center gap-2 text-xs font-worksans text-[#E4ED64] hover:text-[#f2f785] font-semibold underline underline-offset-4 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Editable Source Code (.ZIP)</span>
              </button>
            </div>
          </div>

          {/* Section 2: Explore Navigation Links */}
          <div className="w-full space-y-3 pt-6 border-t border-[#1f1c19]">
            <h4 className="font-rubik text-sm font-bold uppercase tracking-wider text-[#E4ED64]">
              Explore GSN
            </h4>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-worksans">
              <li>
                <a href="#hero" className="hover:text-[#E4ED64] transition-colors">Overview</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#E4ED64] transition-colors">About GSN</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#E4ED64] transition-colors">Menu Items</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#E4ED64] transition-colors">Dining Experience</a>
              </li>
              <li>
                <a href="#order" className="hover:text-[#E4ED64] transition-colors">Order & Reservations</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E4ED64] transition-colors">Contact Details</a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact & Service Hours */}
          <div className="w-full space-y-4 pt-6 border-t border-[#1f1c19]">
            <h4 className="font-rubik text-sm font-bold uppercase tracking-wider text-[#E4ED64]">
              Contact Details & Service Hours
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-4 gap-6 text-xs font-worksans text-[#a39e93]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E4ED64] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#f7f5f0] block font-medium">Physical Location</span>
                  <span>{GSN_CONTACT.address.street}, {GSN_CONTACT.address.city}, {GSN_CONTACT.address.stateZip}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E4ED64] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#f7f5f0] block font-medium">Telephone Lines</span>
                  <a href={`tel:${GSN_CONTACT.primaryPhone}`} className="text-[#dedad2] hover:text-[#E4ED64] block">
                    {GSN_CONTACT.primaryPhone}
                  </a>
                  <a href={`tel:${GSN_CONTACT.tollFreePhone}`} className="text-[#a39e93] hover:text-[#E4ED64] block text-[11px]">
                    Toll-Free: {GSN_CONTACT.tollFreePhone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E4ED64] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#f7f5f0] block font-medium">Electronic Mail</span>
                  <a href={`mailto:${GSN_CONTACT.primaryEmail}`} className="text-[#dedad2] hover:text-[#E4ED64] block">
                    {GSN_CONTACT.primaryEmail}
                  </a>
                  <a href={`mailto:${GSN_CONTACT.reservationEmail}`} className="text-[#a39e93] hover:text-[#E4ED64] block text-[11px]">
                    {GSN_CONTACT.reservationEmail}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E4ED64] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#f7f5f0] block font-medium">Dining Service Hours</span>
                  <span>Lunch: 11:30 AM – 2:30 PM</span><br />
                  <span>Dinner: 5:00 PM – 11:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Newsletter & Exclusive Invitations */}
          <div className="w-full space-y-3 pt-6 border-t border-[#1f1c19] max-w-xl">
            <h4 className="font-rubik text-sm font-bold uppercase tracking-wider text-[#E4ED64]">
              Private Tastings & News
            </h4>
            <p className="font-worksans text-xs text-[#a39e93] leading-relaxed">
              Subscribe to receive seasonal menu announcements, sommelier cellar releases, and priority reservations.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs font-worksans text-emerald-400">
                Thank you for subscribing to GSN Restaurant updates.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 bg-[#161412] border border-[#2e2a25] focus:border-[#E4ED64] rounded-xl px-3.5 py-2.5 text-xs text-[#f7f5f0] outline-none"
                />
                <button
                  type="submit"
                  className="font-rubik text-xs uppercase tracking-wider font-bold bg-[#E4ED64] hover:bg-[#f2f785] text-[#121110] px-5 py-2.5 rounded-xl transition-all shadow-sm shrink-0"
                >
                  Join Tasting List
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-worksans text-[#8e887e]">
          <div>
            © {new Date().getFullYear()} GSN Restaurant. All rights reserved. Professional gastronomy & hospitality.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#dedad2] transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-[#dedad2] transition-colors">Terms of Dining</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#E4ED64] hover:text-[#f2f785] font-semibold transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
