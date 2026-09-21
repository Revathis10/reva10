import React from 'react';
import { ChefHat, ShieldCheck, HeartHandshake, Leaf, Flame, Sparkles } from 'lucide-react';
import { RESTAURANT_IMAGES } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#161412] relative border-t border-[#24201c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#201d19] border border-[#332e29] text-xs font-worksans text-[#E4ED64] uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Our Heritage & Culinary Philosophy
          </div>
          <h2 className="font-rubik text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f7f5f0] tracking-tight max-w-3xl">
            Crafting Extraordinary Experiences at <span className="text-[#E4ED64]">GSN</span>
          </h2>
          <div className="w-16 h-1 bg-[#E4ED64] rounded-full mt-4 mb-4" />
          <p className="font-worksans text-base text-[#a39e93] max-w-2xl leading-relaxed">
            Founded with an uncompromising passion for culinary excellence, GSN represents the union of traditional gastronomy with daring modern innovation.
          </p>
        </div>

        {/* Story & Chef Two-Column Grid */}
        <div className="grid grid-cols-1 min-[1200px]:grid-cols-12 gap-10 min-[1200px]:gap-12 items-center mb-16">
          
          {/* Visual Chef Showcase Container with hover effect y -30 */}
          <div className="min-[1200px]:col-span-5 flex justify-center">
            <div
              id="about-chef-container"
              className="hover-lift-30 relative w-full max-w-lg rounded-3xl overflow-hidden bg-[#1a1816] border border-[#332e29] shadow-2xl p-4 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={RESTAURANT_IMAGES.chef}
                  alt="GSN Executive Chef Gabriel Ramos at work"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/30" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#121110]/90 backdrop-blur-md p-4 rounded-xl border border-[#332e29]">
                  <div className="text-xs font-worksans text-[#E4ED64] uppercase tracking-wider font-bold">
                    Executive Chef
                  </div>
                  <div className="font-rubik text-lg font-bold text-[#f7f5f0]">
                    Gabriel Ramos
                  </div>
                  <div className="text-xs font-worksans text-[#dedad2] mt-0.5">
                    22 Years of Haute Cuisine & Michelin-starred Mentorship
                  </div>
                </div>
              </div>

              <div className="mt-4 px-2 pb-2">
                <blockquote className="font-worksans text-xs text-[#dedad2] italic leading-relaxed">
                  "Every dish that leaves our pass at GSN tells an authentic narrative of season, soil, and reverence for ingredients."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Narrative Content on the Right */}
          <div className="min-[1200px]:col-span-7 flex flex-col space-y-6">
            <h3 className="font-rubik text-2xl sm:text-3xl font-bold text-[#f7f5f0] leading-snug">
              From Soil to Savor: A Thoughtful Culinary Journey
            </h3>
            
            <p className="font-worksans text-sm sm:text-base text-[#dedad2] leading-relaxed">
              At GSN Restaurant, we believe fine dining transcends nourishment—it is a multisensory art form. We collaborate directly with independent heritage growers, biodynamic ranchers, and day-boat fishermen who share our dedication to purity and regenerative agriculture.
            </p>

            <p className="font-worksans text-sm sm:text-base text-[#dedad2] leading-relaxed">
              Every reduction is simmered for over 36 hours. Every pasta ribbon is hand-rolled minutes before service. Our culinary kitchen is a sanctuary where timeless European foundational discipline harmonizes with bold contemporary flavors.
            </p>

            {/* 3 Interactive Highlight Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#1d1a17] border border-[#2e2a25]">
                <Leaf className="w-5 h-5 text-[#E4ED64] mb-2" />
                <div className="font-rubik text-sm font-semibold text-[#f7f5f0]">Zero Waste Ethos</div>
                <div className="font-worksans text-xs text-[#a39e93] mt-1">Full-utilization fermentations & house vinegars</div>
              </div>

              <div className="p-4 rounded-xl bg-[#1d1a17] border border-[#2e2a25]">
                <Flame className="w-5 h-5 text-[#E4ED64] mb-2" />
                <div className="font-rubik text-sm font-semibold text-[#f7f5f0]">Artisanal Embers</div>
                <div className="font-worksans text-xs text-[#a39e93] mt-1">Japanese Binchotan & California almond wood grills</div>
              </div>

              <div className="p-4 rounded-xl bg-[#1d1a17] border border-[#2e2a25]">
                <ShieldCheck className="w-5 h-5 text-[#E4ED64] mb-2" />
                <div className="font-rubik text-sm font-semibold text-[#f7f5f0]">Organic Certified</div>
                <div className="font-worksans text-xs text-[#a39e93] mt-1">Non-GMO, hormone-free heirloom ingredients</div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Engaging Milestone / Core Values Cards - Each lifting by -30px on hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="hover-lift-30 p-8 rounded-2xl bg-[#181614] border border-[#2e2a25] hover:border-[#E4ED64] shadow-xl cursor-pointer">
            <div className="text-[#E4ED64] font-rubik text-3xl font-extrabold mb-2">15+</div>
            <h4 className="font-rubik text-lg font-bold text-[#f7f5f0] mb-2">Years of Gastronomic Heritage</h4>
            <p className="font-worksans text-xs text-[#a39e93] leading-relaxed">
              Consistently recognized among premier dining destinations for authentic hospitality, creative menus, and sommelier distinction.
            </p>
            <div className="mt-4 text-[10px] uppercase tracking-wider text-[#E4ED64] font-semibold">
              Interactive Container • -30px Lift
            </div>
          </div>

          <div className="hover-lift-30 p-8 rounded-2xl bg-[#181614] border border-[#2e2a25] hover:border-[#E4ED64] shadow-xl cursor-pointer">
            <div className="text-[#E4ED64] font-rubik text-3xl font-extrabold mb-2">100%</div>
            <h4 className="font-rubik text-lg font-bold text-[#f7f5f0] mb-2">Scratch Culinary Kitchen</h4>
            <p className="font-worksans text-xs text-[#a39e93] leading-relaxed">
              From aged sourdough starters to house-cultured butter, dry-aged cuts, and slow-steeped stocks, nothing artificial ever enters our kitchen.
            </p>
            <div className="mt-4 text-[10px] uppercase tracking-wider text-[#E4ED64] font-semibold">
              Interactive Container • -30px Lift
            </div>
          </div>

          <div className="hover-lift-30 p-8 rounded-2xl bg-[#181614] border border-[#2e2a25] hover:border-[#E4ED64] shadow-xl cursor-pointer">
            <div className="text-[#E4ED64] font-rubik text-3xl font-extrabold mb-2">4.9 ★</div>
            <h4 className="font-rubik text-lg font-bold text-[#f7f5f0] mb-2">Guest Distinction Rating</h4>
            <p className="font-worksans text-xs text-[#a39e93] leading-relaxed">
              Celebrated by over 12,000 discerning diners for unparalleled atmosphere, attentive white-glove service, and memorable feasts.
            </p>
            <div className="mt-4 text-[10px] uppercase tracking-wider text-[#E4ED64] font-semibold">
              Interactive Container • -30px Lift
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
