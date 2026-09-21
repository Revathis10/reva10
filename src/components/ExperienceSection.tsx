import React, { useState } from 'react';
import { GlassWater, Sparkles, Wine, Users, CalendarCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { RESTAURANT_IMAGES, EXPERIENCE_HIGHLIGHTS } from '../data/restaurantData';

interface ExperienceSectionProps {
  onBookExperience: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onBookExperience }) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentExperience = EXPERIENCE_HIGHLIGHTS[activeTab];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#151311] relative border-t border-[#24201c] overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute -right-40 top-1/3 w-96 h-96 bg-[#E4ED64]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#201d19] border border-[#332e29] text-xs font-worksans text-[#E4ED64] uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Ambiance & Atmosphere
          </div>
          <h2 className="font-rubik text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f7f5f0] tracking-tight max-w-2xl">
            The GSN Dining Experience
          </h2>
          <div className="w-16 h-1 bg-[#E4ED64] rounded-full mt-4 mb-4" />
          <p className="font-worksans text-sm sm:text-base text-[#a39e93] max-w-2xl leading-relaxed">
            Every dining room at GSN has been acoustically balanced and atmospherically illuminated to create an intimate sanctuary for world-class gastronomy.
          </p>
        </div>

        {/* Interactive Experience Category Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-12">
          {EXPERIENCE_HIGHLIGHTS.map((exp, idx) => (
            <button
              key={exp.title}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#221e1a] border-[#E4ED64] shadow-lg shadow-[#E4ED64]/10'
                  : 'bg-[#181614] border-[#292521] hover:bg-[#1d1b18] text-[#a39e93]'
              }`}
            >
              <div className="text-[11px] uppercase tracking-wider font-worksans text-[#E4ED64] font-semibold mb-1">
                {exp.tag}
              </div>
              <div className="font-rubik text-sm sm:text-base font-bold text-[#f7f5f0]">
                {exp.title}
              </div>
            </button>
          ))}
        </div>

        {/* Feature Showcase Container with -30px Hover Lift */}
        <div className="grid grid-cols-1 min-[1200px]:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Media Container with .hover-lift-30 */}
          <div className="min-[1200px]:col-span-7">
            <div
              id="experience-ambient-card"
              className="hover-lift-30 relative rounded-3xl overflow-hidden bg-[#181614] border border-[#332e29] shadow-2xl group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={RESTAURANT_IMAGES.ambiance}
                  alt="GSN Restaurant Interior Ambiance"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/30" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-[#121110]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#38332d] text-xs font-worksans text-[#f7f5f0] flex items-center gap-2">
                  <Wine className="w-3.5 h-3.5 text-[#E4ED64]" />
                  <span>{currentExperience.badge}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#121110]/85 backdrop-blur-md p-5 rounded-2xl border border-[#2e2a25]">
                  <h3 className="font-rubik text-xl sm:text-2xl font-bold text-[#f7f5f0]">
                    {currentExperience.title}
                  </h3>
                  <p className="font-worksans text-xs sm:text-sm text-[#dedad2] mt-1.5 leading-relaxed">
                    {currentExperience.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights & Booking Callout with .hover-lift-30 */}
          <div className="min-[1200px]:col-span-5">
            <div
              id="experience-details-card"
              className="hover-lift-30 p-8 rounded-3xl bg-[#1a1816] border border-[#332e29] hover:border-[#E4ED64] shadow-2xl flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-[#25221e] text-[#E4ED64] text-xs font-worksans font-semibold mb-4 border border-[#332e29]">
                  Curated Highlights
                </div>

                <h4 className="font-rubik text-xl font-bold text-[#f7f5f0] mb-4">
                  What makes dining at GSN unmatched
                </h4>

                <div className="space-y-4 mb-8">
                  {currentExperience.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E4ED64] shrink-0 mt-0.5" />
                      <span className="font-worksans text-xs sm:text-sm text-[#dedad2] leading-relaxed">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#292521]">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-worksans text-[#8e887e]">
                    Private Salon & Chef Table
                  </div>
                  <div className="text-xs font-rubik font-bold text-[#E4ED64]">
                    Advance Booking Recommended
                  </div>
                </div>

                <button
                  onClick={onBookExperience}
                  className="w-full flex items-center justify-center gap-2 font-rubik text-sm uppercase tracking-wider font-semibold bg-[#E4ED64] hover:bg-[#f2f785] text-[#121110] py-3.5 rounded-xl transition-all shadow-lg shadow-[#E4ED64]/20 hover:scale-105 active:scale-95"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Request Experience Booking</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 2 Bottom Highlight Cards: Wine Cellar & Sommelier Pairings with .hover-lift-30 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="hover-lift-30 p-6 rounded-2xl bg-[#181614] border border-[#2e2a25] hover:border-[#E4ED64] shadow-xl cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#24201c] flex items-center justify-center text-[#E4ED64]">
                <Wine className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-rubik text-lg font-bold text-[#f7f5f0]">Sommelier Pairings</h4>
                <div className="font-worksans text-xs text-[#a39e93]">Available with 5-Course and 8-Course Menus</div>
              </div>
            </div>
            <p className="font-worksans text-xs text-[#dedad2] leading-relaxed">
              Curated by Master Sommelier Lucian Moreau, matching Old World classic terroirs with unheralded boutique natural winemakers across France, Italy, and California.
            </p>
            <div className="mt-4 pt-3 border-t border-[#26221f] text-[11px] font-worksans text-[#E4ED64] font-medium flex items-center gap-1">
              <span>Interactive Container (-30px Hover Lift)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="hover-lift-30 p-6 rounded-2xl bg-[#181614] border border-[#2e2a25] hover:border-[#E4ED64] shadow-xl cursor-pointer">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#24201c] flex items-center justify-center text-[#E4ED64]">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-rubik text-lg font-bold text-[#f7f5f0]">Private Celebrations</h4>
                <div className="font-worksans text-xs text-[#a39e93]">Accommodating groups from 8 to 40 guests</div>
              </div>
            </div>
            <p className="font-worksans text-xs text-[#dedad2] leading-relaxed">
              Tailored event coordination for corporate banquets, anniversary celebrations, and intimate nuptial dinners, with personalized menus printed on linen.
            </p>
            <div className="mt-4 pt-3 border-t border-[#26221f] text-[11px] font-worksans text-[#E4ED64] font-medium flex items-center gap-1">
              <span>Interactive Container (-30px Hover Lift)</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
