import heroDishImg from '../assets/images/gsn_hero_dish_1789970467313.jpg';
import ambianceImg from '../assets/images/gsn_ambiance_1789970480216.jpg';
import chefImg from '../assets/images/gsn_chef_1789970490890.jpg';
import specialDessertImg from '../assets/images/gsn_special_1789970503322.jpg';
import chickenDishImg from '../assets/images/gourmet_chicken_dish_1789971845197.jpg';
import { ContactDetails, MenuItem } from '../types';

export const RESTAURANT_IMAGES = {
  heroDish: heroDishImg,
  ambiance: ambianceImg,
  chef: chefImg,
  specialDessert: specialDessertImg,
  chickenDish: chickenDishImg,
};

export const GSN_CONTACT: ContactDetails = {
  restaurantName: 'GSN Restaurant',
  tagline: 'Modern Gastronomy & Artisanal Culinary Heritage',
  primaryPhone: '+1 (555) 749-8820',
  tollFreePhone: '+1 (800) 476-DINE',
  primaryEmail: 'info@gsnrestaurant.com',
  reservationEmail: 'reservations@gsnrestaurant.com',
  address: {
    street: '742 Grand Gourmet Boulevard',
    neighborhood: 'Culinary Arts District',
    city: 'San Francisco',
    stateZip: 'CA 94103',
    country: 'United States',
  },
  hours: {
    weekdayLunch: '11:30 AM – 2:30 PM (Mon – Fri)',
    weekdayDinner: '5:00 PM – 10:30 PM (Mon – Thu)',
    weekendLunch: '11:00 AM – 3:30 PM (Sat – Sun)',
    weekendDinner: '5:00 PM – 11:30 PM (Fri – Sun)',
  },
};

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 'starter-1',
    name: 'Truffle & Burrata Carpaccio',
    category: 'starters',
    price: 24,
    description: 'Fresh Puglia burrata, black summer truffles, heirloom tomato confit, 25-year aged balsamic caviar, grilled sourdough.',
    calories: '420 kcal',
    dietary: ['Vegetarian', "Chef's Signature"],
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    prepTime: '12 mins',
  },
  {
    id: 'starter-2',
    name: 'Pan-Seared Hokkaido Scallops',
    category: 'starters',
    price: 28,
    description: 'Diver-caught sea scallops, saffron cauliflower velouté, crispy pancetta lardons, citrus emulsion and micro-sorrel.',
    calories: '360 kcal',
    dietary: ['Gluten-Free', "Chef's Signature"],
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
  },
  {
    id: 'starter-3',
    name: 'Wild Forest Morel Tartlet',
    category: 'starters',
    price: 22,
    description: 'Flaky artisanal butter pastry, caramelized shallot purée, sautéed morel mushrooms, shaved aged Gruyère and thyme jus.',
    calories: '390 kcal',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80',
    prepTime: '14 mins',
  },

  // Mains
  {
    id: 'main-1',
    name: 'Herb-Crusted Colorado Lamb Rack',
    category: 'mains',
    price: 48,
    description: 'Pistachio herb-crusted rack of lamb, truffled parsnip puree, glazed baby heirloom carrots, rich rosemary lamb reduction.',
    calories: '680 kcal',
    dietary: ["Chef's Signature", 'Gluten-Free'],
    image: heroDishImg,
    prepTime: '24 mins',
  },
  {
    id: 'main-2',
    name: 'Chilean Sea Bass en Papillote',
    category: 'mains',
    price: 46,
    description: 'Sustainable sea bass, lemongrass ginger broth, baby bok choy, shiitake mushrooms, steamed lotus root and kaffir lime leaves.',
    calories: '510 kcal',
    dietary: ['Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    prepTime: '20 mins',
  },

  // Grills & Steaks
  {
    id: 'grill-1',
    name: 'Prime Dry-Aged Tomahawk (A5 Cut)',
    category: 'grills',
    price: 85,
    description: '45-day dry aged USDA Prime ribeye on bone, smoked marrow butter, roasted garlic bulb, Maldon smoked salt flakes.',
    calories: '890 kcal',
    dietary: ["Chef's Signature"],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    prepTime: '28 mins',
  },
  {
    id: 'grill-2',
    name: 'Smoked Cedar Plank Salmon',
    category: 'grills',
    price: 39,
    description: 'Wild Alaskan King Salmon gently smoked on aromatic cedar, honey Dijon crust, grilled asparagus and fingerling potatoes.',
    calories: '610 kcal',
    dietary: ['Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    prepTime: '22 mins',
  },

  // Desserts
  {
    id: 'dessert-1',
    name: 'Gold Leaf Chocolate Grand Sphere',
    category: 'desserts',
    price: 20,
    description: 'Valrhona 70% dark chocolate sphere, warm Madagascar vanilla bean ganache, raspberry coulis, 24k edible gold dust.',
    calories: '450 kcal',
    dietary: ["Chef's Signature", 'Vegetarian'],
    image: specialDessertImg,
    prepTime: '10 mins',
  },
  {
    id: 'dessert-2',
    name: 'Sicilian Pistachio Soufflé',
    category: 'desserts',
    price: 18,
    description: 'Warm, airy Bronte pistachio soufflé dusted with powdered vanilla sugar, poured with rich white chocolate crème anglaise.',
    calories: '380 kcal',
    dietary: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    prepTime: '15 mins',
  },

  // Mains & Specialties
  {
    id: 'bev-1',
    name: 'Crispy Skin Heritage Roast Chicken',
    category: 'mains',
    price: 36,
    description: 'Pasture-raised organic chicken supreme roasted with golden crisp skin, wild morel mushroom cream jus, glazed baby heirloom carrots, and potato mousseline.',
    calories: '620 kcal',
    dietary: ["Chef's Signature", 'Gluten-Free'],
    image: chickenDishImg,
    prepTime: '22 mins',
  },

  // Beverages
  {
    id: 'bev-2',
    name: 'Botanical Yuzu & Elderflower Spritz',
    category: 'beverages',
    price: 14,
    description: 'Japanese yuzu extract, wild elderflower cordial, sparkling mineral water, cucumber ribbons and fresh mint.',
    calories: '90 kcal',
    dietary: ['Vegan', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    prepTime: '4 mins',
  },
  {
    id: 'bev-3',
    name: 'GSN Signature Smoked Old Fashioned',
    category: 'beverages',
    price: 19,
    description: 'Oak-smoked reserve bourbon, spiced demerara syrup, Angostura & blood orange bitters, flamed orange peel.',
    calories: '180 kcal',
    dietary: ["Chef's Signature"],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    prepTime: '5 mins',
  },
];

export const EXPERIENCE_HIGHLIGHTS = [
  {
    title: 'The Chef’s Table & Kitchen Theater',
    tag: 'Exclusive Experience',
    description: 'Immerse in an intimate 8-course omakase-style tasting counter overseen directly by Executive Chef Gabriel Ramos. Watch precision culinary techniques unfold in an open live theater kitchen.',
    badge: 'Limited to 8 Guests Nightly',
    highlights: ['Wine pairing curated by master sommelier', 'Private interaction with culinary team', 'Custom seasonal bespoke courses'],
  },
  {
    title: 'Sommelier Reserve Wine Cellar',
    tag: 'Curated Cellar',
    description: 'Housing over 650 hand-selected vintages across Bordeaux, Burgundy, Napa Valley, and emergent biodynamic European terroirs, temperature-controlled to optimal aging perfection.',
    badge: '650+ Global Vintages',
    highlights: ['Coravin rare vintage pours by the glass', 'Charcuterie & artisan cheese pairing boards', 'Sommelier guided tasting flights'],
  },
  {
    title: 'Grand Terrace & Private Dining Lounges',
    tag: 'Atmosphere & Architecture',
    description: 'Designed by award-winning architectural acousticians, GSN blends handcrafted walnut furnishings, hand-blown amber glass chandeliers, and private velvet-draped dining salon suites.',
    badge: 'Private & Corporate Events',
    highlights: ['Acoustically isolated private dining suites', 'Heated garden terrace with skyline views', 'Dedicated private event service team'],
  },
];
