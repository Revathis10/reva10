export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'grills' | 'desserts' | 'beverages';
  price: number;
  description: string;
  calories?: string;
  dietary?: ('Vegetarian' | 'Vegan' | 'Gluten-Free' | "Chef's Signature" | 'Spicy')[];
  image: string;
  prepTime?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'indoor' | 'terrace' | 'private-dining' | 'chefs-counter';
  specialOccasion?: string;
  requests?: string;
}

export interface ContactDetails {
  restaurantName: string;
  tagline: string;
  primaryPhone: string;
  tollFreePhone: string;
  primaryEmail: string;
  reservationEmail: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    stateZip: string;
    country: string;
  };
  hours: {
    weekdayLunch: string;
    weekdayDinner: string;
    weekendLunch: string;
    weekendDinner: string;
  };
}
