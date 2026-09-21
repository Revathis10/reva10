import React from 'react';
import { Sparkles, Clock, MapPin, Award, ArrowRight, CalendarDays, Utensils } from 'lucide-react';
import { RESTAURANT_IMAGES, GSN_CONTACT } from '../data/restaurantData';

interface HeroSectionProps {
  onReserveClick: () => void;
  onExploreMenuClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReserveClick, onExploreMenuClick }) => {
  return (
    <section id="hero" className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-[#121110]">
      {/* Subtle warm ambient glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E4ED64]/10 blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Chip */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1b18] border border-[#38332d] shadow-inner text-xs font-worksans text-[#e3ded4]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-[#E4ED64]">GSN Culinary Experience</span>
            <span className="text-[#6e685f]">|</span>
            <span>Now Accepting Autumn Tastings</span>
          </div>
        </div>

        {/* Hero Grid: Responsive for Mobile (<768px), Tab (768px-1199px), and Desktop (>1200px) */}
        <div className="grid grid-cols-1 min-[1200px]:grid-cols-12 gap-10 min-[1200px]:gap-12 items-center">
          
          {/* Left Hero Content (Columns 7 on desktop) */}
          <div className="min-[1200px]:col-span-7 flex flex-col items-center min-[1200px]:items-start text-center min-[1200px]:text-left space-y-6">
            <h1 className="font-rubik text-4xl sm:text-5xl lg:text-6xl min-[1200px]:text-7xl font-extrabold text-[#f7f5f0] tracking-tight leading-[1.1]">
              Elevated Fine Dining at{' '}
              <span className="text-[#E4ED64] relative inline-block">
                GSN
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#E4ED64]/40 rounded-full" />
              </span>
            </h1>

            <p className="font-worksans text-base sm:text-lg text-[#dedad2] max-w-2xl leading-relaxed font-normal">
              Welcome to <strong className="text-[#f7f5f0] font-semibold">GSN Restaurant</strong>, where culinary artistry meets contemporary gastronomy. Experience masterfully composed seasonal tasting menus, rare cellar vintages, and hospitality crafted for memorable moments.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onReserveClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-rubik text-sm uppercase tracking-wider font-semibold bg-[#E4ED64] hover:bg-[#f2f785] text-[#121110] px-7 py-3.5 rounded-full shadow-lg shadow-[#E4ED64]/25 hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <button
                onClick={onExploreMenuClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-worksans text-sm font-medium text-[#dedad2] hover:text-[#f7f5f0] px-7 py-3.5 rounded-full border border-[#3d3731] hover:border-[#E4ED64] bg-[#1a1816]/70 hover:bg-[#201d1a] transition-all"
              >
                <Utensils className="w-4 h-4 text-[#E4ED64]" />
                <span>Explore Menu Items</span>
              </button>
            </div>

            {/* Quick Venue Details Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 w-full max-w-lg text-left">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#191715] border border-[#2a2622]">
                <Clock className="w-5 h-5 text-[#E4ED64] shrink-0" />
                <div className="text-xs font-worksans">
                  <div className="text-[#8e887e]">Dinner Service</div>
                  <div className="text-[#f7f5f0] font-medium">5:00 PM – 11:00 PM Daily</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#191715] border border-[#2a2622]">
                <MapPin className="w-5 h-5 text-[#E4ED64] shrink-0" />
                <div className="text-xs font-worksans">
                  <div className="text-[#8e887e]">Prime Location</div>
                  <div className="text-[#f7f5f0] font-medium truncate">{GSN_CONTACT.address.city}, {GSN_CONTACT.address.neighborhood}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Showcase (Columns 5 on desktop) */}
          <div className="min-[1200px]:col-span-5 w-full flex justify-center">
            {/* Whole container with strict requirement 8: hover effect of y axis -30 */}
            <div
              id="hero-feature-card"
              className="hover-lift-30 relative w-full max-w-md min-[1200px]:max-w-none rounded-3xl overflow-hidden bg-[#181614] border border-[#38332d] shadow-2xl group cursor-pointer"
            >
              {/* Media Image generated for GSN */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                <img
                  src={RESTAURANT_IMAGES.heroDish}
                  alt="GSN Signature Culinary Presentation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/20" />

                {/* Floating Michelin/Mastery Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[#121110]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#38332d] text-xs font-worksans text-[#f7f5f0]">
                  <Award className="w-3.5 h-3.5 text-[#E4ED64]" />
                  <span className="font-semibold text-[#E4ED64]">Signature Dish</span>
                  <span className="text-[#8e887e]">• Herb-Crusted Lamb</span>
                </div>

                {/* Hover lift indicator tag */}
                <div className="absolute top-4 right-4 bg-[#E4ED64] text-[#121110] px-2.5 py-1 rounded-full text-[10px] font-rubik font-bold uppercase tracking-wider">
                  Hover to Lift (-30px)
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-worksans uppercase tracking-widest text-[#E4ED64] font-semibold">
                    Chef's Autumn Selection
                  </span>
                  <span className="font-rubik text-lg font-bold text-[#f7f5f0]">$48</span>
                </div>
                <h3 className="font-rubik text-xl font-bold text-[#f7f5f0] mb-2 group-hover:text-[#E4ED64] transition-colors">
                  Artisanal Colorado Lamb Rack & Truffle Glaze
                </h3>
                <p className="font-worksans text-xs text-[#a39e93] leading-relaxed line-clamp-2">
                  Slow-roasted herb crust, parsnip velvet purée, glazed heirloom roots, and 48-hour rosemary reduction.
                </p>
                <div className="mt-4 pt-4 border-t border-[#292521] flex items-center justify-between text-xs font-worksans text-[#E4ED64]">
                  <span className="font-medium">Discover culinary craftsmanship</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Interactive Highlight Badges - Each with hover effect of y axis -30 as whole container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-3 gap-6 mt-16">
          
          <div className="hover-lift-30 p-6 rounded-2xl bg-[#171513] border border-[#2a2622] hover:border-[#E4ED64]/60 shadow-lg cursor-pointer transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#24201c] flex items-center justify-center text-[#E4ED64] mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-rubik text-lg font-semibold text-[#f7f5f0] mb-1">Farm-to-Table Artistry</h4>
            <p className="font-worksans text-xs text-[#a39e93] leading-relaxed">
              100% organic micro-greens and heirloom harvests sourced daily from local sustainable coastal farmers.
            </p>
            <div className="mt-3 text-[11px] font-worksans text-[#E4ED64] font-medium">Interactive Container (-30px Lift)</div>
          </div>

          <div className="hover-lift-30 p-6 rounded-2xl bg-[#171513] border border-[#2a2622] hover:border-[#E4ED64]/60 shadow-lg cursor-pointer transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#24201c] flex items-center justify-center text-[#E4ED64] mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="font-rubik text-lg font-semibold text-[#f7f5f0] mb-1">Michelin-Trained Chefs</h4>
            <p className="font-worksans text-xs text-[#a39e93] leading-relaxed">
              Led by Executive Chef Gabriel Ramos, blending classical French techniques with modern fusion textures.
            </p>
            <div className="mt-3 text-[11px] font-worksans text-[#E4ED64] font-medium">Interactive Container (-30px Lift)</div>
          </div>

          <div className="hover-lift-30 p-6 rounded-2xl bg-[#171513] border border-[#2a2622] hover:border-[#E4ED64]/60 shadow-lg cursor-pointer transition-all sm:col-span-2 min-[1200px]:col-span-1">
            <div className="w-12 h-12 rounded-xl bg-[#24201c] flex items-center justify-center text-[#E4ED64] mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-rubik text-lg font-semibold text-[#f7f5f0] mb-1">Curated Wine Cellar</h4>
            <p className="font-worksans text-xs text-[#a39e93] leading-relaxed">
              Over 650 hand-selected vintage bottles managed by certified sommeliers with custom tasting pairings.
            </p>
            <div className="mt-3 text-[11px] font-worksans text-[#E4ED64] font-medium">Interactive Container (-30px Lift)</div>
          </div>

        </div>

      </div>
    </section>
  );
};
