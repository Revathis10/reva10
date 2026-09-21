import React, { useState } from 'react';
import { Plus, Check, Sparkles, Filter, Clock, Flame } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'starters', label: 'Starters & Tapas' },
    { id: 'mains', label: "Chef's Mains" },
    { id: 'grills', label: 'Prime Grills' },
    { id: 'desserts', label: 'Artisan Desserts' },
    { id: 'beverages', label: 'Craft Beverages' },
  ];

  const dietaryOptions = ['all', 'Chef\'s Signature', 'Vegetarian', 'Gluten-Free', 'Vegan'];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDietary =
      selectedDietary === 'all' || (item.dietary && item.dietary.includes(selectedDietary as any));
    return matchesCategory && matchesDietary;
  });

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#121110] relative border-t border-[#24201c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e1b18] border border-[#332e29] text-xs font-worksans text-[#E4ED64] uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Seasonal Gastronomic Catalog
          </div>
          <h2 className="font-rubik text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f7f5f0] tracking-tight">
            Curated Menu Items
          </h2>
          <div className="w-16 h-1 bg-[#E4ED64] rounded-full mt-4 mb-4" />
          <p className="font-worksans text-sm sm:text-base text-[#a39e93] max-w-2xl leading-relaxed">
            Every dish at GSN is meticulously prepared to order using pristine seasonal harvests and culinary precision. Hover over any dish to see the -30px lift container effect.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-rubik text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full transition-all cursor-pointer font-medium ${
                activeCategory === cat.id
                  ? 'bg-[#E4ED64] text-[#121110] shadow-md shadow-[#E4ED64]/25 font-bold scale-105'
                  : 'bg-[#1a1816] text-[#dedad2] hover:bg-[#25221e] hover:text-[#f7f5f0] border border-[#2e2a25]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dietary Tag Quick Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          <span className="text-xs font-worksans text-[#8e887e] flex items-center gap-1.5 mr-1">
            <Filter className="w-3.5 h-3.5 text-[#E4ED64]" /> Filter by:
          </span>
          {dietaryOptions.map((diet) => (
            <button
              key={diet}
              onClick={() => setSelectedDietary(diet)}
              className={`text-xs font-worksans px-3 py-1 rounded-md transition-all ${
                selectedDietary === diet
                  ? 'bg-[#38322a] text-[#E4ED64] font-medium border border-[#E4ED64]/40'
                  : 'text-[#a39e93] hover:text-[#dedad2] bg-[#171513] border border-[#24201c]'
              }`}
            >
              {diet === 'all' ? 'All Dietary Types' : diet}
            </button>
          ))}
        </div>

        {/* Grid of Menu Items with -30px Hover Lift on Whole Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isAdded = !!addedItemIds[item.id];
            return (
              <div
                key={item.id}
                id={`menu-item-card-${item.id}`}
                className="hover-lift-30 rounded-2xl overflow-hidden bg-[#181614] border border-[#2b2723] hover:border-[#E4ED64]/80 shadow-xl flex flex-col group cursor-pointer"
              >
                {/* Dish Media Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#201d1a]">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-transparent to-black/20" />

                  {/* Price Tag in Dish Header */}
                  <div className="absolute top-3 right-3 bg-[#121110]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#38332d] text-sm font-rubik font-bold text-[#E4ED64]">
                    ${item.price}
                  </div>

                  {/* Prep time badge */}
                  {item.prepTime && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#121110]/85 px-2.5 py-1 rounded-md text-[11px] font-worksans text-[#dedad2] border border-[#292521]">
                      <Clock className="w-3 h-3 text-[#E4ED64]" />
                      <span>{item.prepTime}</span>
                    </div>
                  )}
                </div>

                {/* Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Dietary Badges */}
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {item.dietary.map((d) => (
                          <span
                            key={d}
                            className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                              d === "Chef's Signature"
                                ? 'bg-[#E4ED64]/20 text-[#E4ED64] border border-[#E4ED64]/40'
                                : 'bg-[#25221e] text-[#a39e93] border border-[#332e29]'
                            }`}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="font-rubik text-xl font-bold text-[#f7f5f0] group-hover:text-[#E4ED64] transition-colors leading-snug">
                      {item.name}
                    </h3>

                    <p className="font-worksans text-xs sm:text-sm text-[#a39e93] mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer with Calories & Add to Order Action */}
                  <div className="mt-6 pt-4 border-t border-[#26221f] flex items-center justify-between">
                    <span className="font-worksans text-xs text-[#8e887e]">
                      {item.calories}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAdd(item);
                      }}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-rubik font-semibold transition-all shadow-md active:scale-95 ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#E4ED64] hover:bg-[#f2f785] text-[#121110]'
                      }`}
                      aria-label={`Add ${item.name} to order`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added to Order</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Menu Guarantee Notice */}
        <div className="mt-14 p-6 rounded-2xl bg-[#171513] border border-[#2b2723] text-center max-w-3xl mx-auto">
          <p className="font-worksans text-xs sm:text-sm text-[#dedad2]">
            <strong className="text-[#E4ED64]">Dietary & Allergy Accommodations:</strong> Our culinary brigade gladly accommodates gluten-free, vegan, nut sensitivities, and religious dietary requests. Please notify our service team upon reservation or in order instructions.
          </p>
        </div>

      </div>
    </section>
  );
};
