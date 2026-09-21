import React, { useState } from 'react';
import { Calendar, Clock, Users, Utensils, CheckCircle, ShoppingBag, Trash2, Plus, Minus, Send, Sparkles } from 'lucide-react';
import { CartItem, ReservationFormData } from '../types';

interface OrderSectionProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [activeMode, setActiveMode] = useState<'reserve' | 'order'>('reserve');

  // Reservation form state
  const [reservation, setReservation] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 2,
    seatingArea: 'indoor',
    specialOccasion: '',
    requests: '',
  });

  const [reservationConfirmed, setReservationConfirmed] = useState<boolean>(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string>('');

  // Online Order state
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway' | 'vip-delivery'>('dine-in');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  const subtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const tax = subtotal * 0.085;
  const deliveryFee = orderType === 'vip-delivery' ? 12 : 0;
  const total = subtotal + tax + deliveryFee;

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reservation.name || !reservation.phone) return;
    const randomId = 'GSN-RES-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBookingId(randomId);
    setReservationConfirmed(true);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0 || !customerName || !customerPhone) return;
    const randomId = 'GSN-ORD-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedOrderId(randomId);
    setOrderPlaced(true);
    onClearCart();
  };

  return (
    <section id="order" className="py-20 md:py-28 bg-[#121110] relative border-t border-[#24201c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e1b18] border border-[#332e29] text-xs font-worksans text-[#E4ED64] uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Booking & Ordering Service
          </div>
          <h2 className="font-rubik text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f7f5f0] tracking-tight">
            Order Online & Table Reservations
          </h2>
          <div className="w-16 h-1 bg-[#E4ED64] rounded-full mt-4 mb-4" />
          <p className="font-worksans text-sm sm:text-base text-[#a39e93] max-w-2xl leading-relaxed">
            Secure your table for an unforgettable dining experience or assemble an exquisite chef's meal for takeout or VIP courier delivery.
          </p>
        </div>

        {/* Switcher Mode Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#191715] border border-[#2b2723]">
            <button
              onClick={() => setActiveMode('reserve')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-rubik text-sm font-semibold transition-all cursor-pointer ${
                activeMode === 'reserve'
                  ? 'bg-[#E4ED64] text-[#121110] shadow-md shadow-[#E4ED64]/20 font-bold'
                  : 'text-[#dedad2] hover:text-[#f7f5f0]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Table Reservation</span>
            </button>

            <button
              onClick={() => setActiveMode('order')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-rubik text-sm font-semibold transition-all cursor-pointer relative ${
                activeMode === 'order'
                  ? 'bg-[#E4ED64] text-[#121110] shadow-md shadow-[#E4ED64]/20 font-bold'
                  : 'text-[#dedad2] hover:text-[#f7f5f0]'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Online</span>
              {cart.length > 0 && (
                <span className="bg-[#121110] text-[#E4ED64] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* MODE 1: Table Reservation */}
        {activeMode === 'reserve' && (
          <div className="max-w-4xl mx-auto">
            {reservationConfirmed ? (
              <div
                id="reservation-confirmation-card"
                className="hover-lift-30 p-8 sm:p-12 rounded-3xl bg-[#181614] border border-[#E4ED64] text-center shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="text-xs uppercase tracking-widest text-[#E4ED64] font-worksans font-bold mb-2">
                  Reservation Confirmed
                </div>
                <h3 className="font-rubik text-2xl sm:text-3xl font-bold text-[#f7f5f0] mb-2">
                  We Look Forward to Welcoming You
                </h3>
                <p className="font-worksans text-sm text-[#dedad2] max-w-md mx-auto mb-6">
                  Your table at GSN Restaurant has been held. A confirmation and reminder have been recorded for your party.
                </p>

                <div className="p-4 rounded-xl bg-[#201d1a] border border-[#332e29] max-w-md mx-auto text-left space-y-2 mb-8 text-xs font-worksans">
                  <div className="flex justify-between">
                    <span className="text-[#8e887e]">Booking Reference:</span>
                    <span className="font-bold text-[#E4ED64]">{confirmedBookingId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e887e]">Guest Name:</span>
                    <span className="font-medium text-[#f7f5f0]">{reservation.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e887e]">Party Size:</span>
                    <span className="font-medium text-[#f7f5f0]">{reservation.guests} Guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e887e]">Date & Time:</span>
                    <span className="font-medium text-[#f7f5f0]">{reservation.date} at {reservation.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e887e]">Seating Area:</span>
                    <span className="font-medium text-[#f7f5f0] capitalize">{reservation.seatingArea.replace('-', ' ')}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setReservationConfirmed(false);
                    setReservation({
                      name: '',
                      email: '',
                      phone: '',
                      date: new Date().toISOString().split('T')[0],
                      time: '19:00',
                      guests: 2,
                      seatingArea: 'indoor',
                      specialOccasion: '',
                      requests: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full font-rubik text-xs uppercase tracking-wider font-semibold bg-[#25221e] hover:bg-[#302c26] text-[#E4ED64] border border-[#38332d] transition-all"
                >
                  Book Another Reservation
                </button>
              </div>
            ) : (
              /* Whole reservation container with -30px hover effect */
              <div
                id="reservation-form-container"
                className="hover-lift-30 p-8 sm:p-12 rounded-3xl bg-[#181614] border border-[#2e2a25] hover:border-[#E4ED64]/80 shadow-2xl cursor-pointer"
              >
                <div className="flex items-center justify-between border-b border-[#292521] pb-6 mb-8">
                  <div>
                    <h3 className="font-rubik text-2xl font-bold text-[#f7f5f0]">
                      Table Reservation Request
                    </h3>
                    <p className="font-worksans text-xs text-[#a39e93] mt-1">
                      No reservation deposit required for parties under 6 guests. Instant email receipt.
                    </p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <span className="text-xs font-rubik font-semibold text-[#E4ED64] bg-[#24201c] px-3 py-1.5 rounded-full border border-[#38332d]">
                      Dinner: 5:00 PM – 11:00 PM
                    </span>
                  </div>
                </div>

                <form onSubmit={handleReservationSubmit} className="space-y-6">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Victoria Sterling"
                        value={reservation.name}
                        onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-2">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={reservation.phone}
                        onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="victoria@example.com"
                        value={reservation.email}
                        onChange={(e) => setReservation({ ...reservation, email: e.target.value })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-2">
                        Number of Guests
                      </label>
                      <select
                        value={reservation.guests}
                        onChange={(e) => setReservation({ ...reservation, guests: parseInt(e.target.value) })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Date, Time & Seating Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-2">
                        Reservation Date
                      </label>
                      <input
                        type="date"
                        value={reservation.date}
                        onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-2">
                        Preferred Seating Time
                      </label>
                      <select
                        value={reservation.time}
                        onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans cursor-pointer"
                      >
                        {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((t) => (
                          <option key={t} value={t}>
                            {t} (Service Seating)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-2">
                        Seating Ambience
                      </label>
                      <select
                        value={reservation.seatingArea}
                        onChange={(e) => setReservation({ ...reservation, seatingArea: e.target.value as any })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans cursor-pointer"
                      >
                        <option value="indoor">Main Dining Salon</option>
                        <option value="terrace">Heated Garden Terrace</option>
                        <option value="chefs-counter">The Chef's Counter</option>
                        <option value="private-dining">Private Dining Salon</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-2">
                      Special Dietary Notes or Celebrations (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Celebrating 10th anniversary, gluten allergy, quiet booth preferred..."
                      value={reservation.requests}
                      onChange={(e) => setReservation({ ...reservation, requests: e.target.value })}
                      className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 font-rubik text-sm uppercase tracking-wider font-bold bg-[#E4ED64] hover:bg-[#f2f785] text-[#121110] py-4 rounded-xl transition-all shadow-lg shadow-[#E4ED64]/25 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Table Reservation at GSN</span>
                    </button>
                    <div className="text-center mt-3 text-[11px] font-worksans text-[#8e887e]">
                      Instant confirmation • Cancellation without penalty up to 4 hours before seating
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* MODE 2: Online Order Cart & Checkout */}
        {activeMode === 'order' && (
          <div className="max-w-4xl mx-auto">
            {orderPlaced ? (
              <div
                id="order-confirmation-card"
                className="hover-lift-30 p-8 sm:p-12 rounded-3xl bg-[#181614] border border-emerald-500/60 text-center shadow-2xl"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="text-xs uppercase tracking-widest text-[#E4ED64] font-worksans font-bold mb-2">
                  Order Received & Placed into Culinary Queue
                </div>
                <h3 className="font-rubik text-2xl sm:text-3xl font-bold text-[#f7f5f0] mb-2">
                  Chef Gabriel's Kitchen is Preparing Your Meal
                </h3>
                <p className="font-worksans text-sm text-[#dedad2] max-w-md mx-auto mb-6">
                  Your order has been transmitted directly to the kitchen display at GSN Restaurant.
                </p>

                <div className="p-4 rounded-xl bg-[#201d1a] border border-[#332e29] max-w-md mx-auto text-left space-y-2 mb-8 text-xs font-worksans">
                  <div className="flex justify-between">
                    <span className="text-[#8e887e]">Order ID:</span>
                    <span className="font-bold text-[#E4ED64]">{confirmedOrderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e887e]">Order Type:</span>
                    <span className="font-medium text-[#f7f5f0] capitalize">{orderType.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e887e]">Contact:</span>
                    <span className="font-medium text-[#f7f5f0]">{customerName} ({customerPhone})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8e887e]">Estimated Preparation:</span>
                    <span className="font-medium text-emerald-400">25 – 35 Minutes</span>
                  </div>
                </div>

                <button
                  onClick={() => setOrderPlaced(false)}
                  className="px-6 py-2.5 rounded-full font-rubik text-xs uppercase tracking-wider font-semibold bg-[#25221e] hover:bg-[#302c26] text-[#E4ED64] border border-[#38332d] transition-all"
                >
                  Start Another Order
                </button>
              </div>
            ) : (
              /* Whole order container with -30px hover effect */
              <div
                id="online-order-container"
                className="hover-lift-30 p-8 sm:p-12 rounded-3xl bg-[#181614] border border-[#2e2a25] hover:border-[#E4ED64]/80 shadow-2xl cursor-pointer"
              >
                <div className="flex items-center justify-between border-b border-[#292521] pb-6 mb-8">
                  <div>
                    <h3 className="font-rubik text-2xl font-bold text-[#f7f5f0]">
                      Your Gourmet Order Cart
                    </h3>
                    <p className="font-worksans text-xs text-[#a39e93] mt-1">
                      {cart.length === 0 ? 'No items in cart yet. Select dishes from the Menu Items section.' : `${cart.length} unique dish selections.`}
                    </p>
                  </div>

                  {cart.length > 0 && (
                    <button
                      onClick={onClearCart}
                      className="text-xs font-worksans text-rose-400 hover:text-rose-300 flex items-center gap-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Clear Cart
                    </button>
                  )}
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="w-12 h-12 text-[#443e38] mx-auto mb-4" />
                    <h4 className="font-rubik text-lg font-semibold text-[#dedad2] mb-2">
                      Your Order is Currently Empty
                    </h4>
                    <p className="font-worksans text-xs text-[#8e887e] max-w-sm mx-auto mb-6">
                      Explore our handcrafted menu items above and click "Add to Order" to curate your meal.
                    </p>
                    <a
                      href="#menu"
                      className="inline-block px-6 py-2.5 rounded-full font-rubik text-xs uppercase tracking-wider font-bold bg-[#E4ED64] text-[#121110]"
                    >
                      Browse Menu Items
                    </a>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Item List */}
                    <div className="space-y-3 divide-y divide-[#24201c]">
                      {cart.map(({ item, quantity }) => (
                        <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              referrerPolicy="no-referrer"
                              className="w-12 h-12 rounded-lg object-cover bg-[#24201c]"
                            />
                            <div>
                              <div className="font-rubik text-sm font-semibold text-[#f7f5f0]">
                                {item.name}
                              </div>
                              <div className="font-worksans text-xs text-[#E4ED64]">
                                ${item.price} each
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-[#332e29] rounded-lg bg-[#141312] overflow-hidden">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="p-1.5 hover:bg-[#25221e] text-[#a39e93] hover:text-[#f7f5f0]"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="font-worksans text-xs font-semibold text-[#f7f5f0] px-3">
                                {quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="p-1.5 hover:bg-[#25221e] text-[#a39e93] hover:text-[#f7f5f0]"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <span className="font-rubik text-sm font-bold text-[#f7f5f0] w-16 text-right">
                              ${item.price * quantity}
                            </span>

                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-[#6e685f] hover:text-rose-400 p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Fulfillment Selection */}
                    <div className="pt-4 border-t border-[#292521]">
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-3">
                        Select Dining Fulfillment
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { id: 'dine-in', label: 'Dine-In Pre-Order', desc: 'Ready upon your arrival' },
                          { id: 'takeaway', label: 'Express Takeout', desc: 'Eco-insulated thermal packaging' },
                          { id: 'vip-delivery', label: 'VIP Chauffeur Delivery', desc: 'Direct white glove courier ($12)' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setOrderType(opt.id as any)}
                            className={`p-3 rounded-xl text-left border cursor-pointer transition-all ${
                              orderType === opt.id
                                ? 'bg-[#25221e] border-[#E4ED64] text-[#f7f5f0]'
                                : 'bg-[#141312] border-[#292521] text-[#8e887e]'
                            }`}
                          >
                            <div className="font-rubik text-xs font-bold">{opt.label}</div>
                            <div className="font-worksans text-[10px] text-[#a39e93] mt-0.5">{opt.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Customer Info Form */}
                    <form onSubmit={handleOrderSubmit} className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-worksans text-[#dedad2] mb-1">Your Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-2.5 text-sm text-[#f7f5f0] outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-worksans text-[#dedad2] mb-1">Mobile Phone *</label>
                          <input
                            type="tel"
                            required
                            placeholder="Mobile for SMS order status"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-2.5 text-sm text-[#f7f5f0] outline-none"
                          />
                        </div>
                      </div>

                      {orderType === 'vip-delivery' && (
                        <div>
                          <label className="block text-xs font-worksans text-[#dedad2] mb-1">Delivery Address *</label>
                          <input
                            type="text"
                            required
                            placeholder="Street, Suite/Apartment, City, Postal Code"
                            value={customerAddress}
                            onChange={(e) => setCustomerAddress(e.target.value)}
                            className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-2.5 text-sm text-[#f7f5f0] outline-none"
                          />
                        </div>
                      )}

                      {/* Financial Summary */}
                      <div className="p-4 rounded-xl bg-[#141312] border border-[#2b2723] space-y-1.5 text-xs font-worksans">
                        <div className="flex justify-between text-[#dedad2]">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-[#dedad2]">
                          <span>Culinary Tax & State Surcharge (8.5%)</span>
                          <span>${tax.toFixed(2)}</span>
                        </div>
                        {orderType === 'vip-delivery' && (
                          <div className="flex justify-between text-[#dedad2]">
                            <span>VIP White Glove Delivery</span>
                            <span>${deliveryFee.toFixed(2)}</span>
                          </div>
                        )}
                        <div className="pt-2 border-t border-[#292521] flex justify-between font-rubik text-base font-bold text-[#f7f5f0]">
                          <span>Total</span>
                          <span className="text-[#E4ED64]">${total.toFixed(2)}</span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 font-rubik text-sm uppercase tracking-wider font-bold bg-[#E4ED64] hover:bg-[#f2f785] text-[#121110] py-3.5 rounded-xl transition-all shadow-lg shadow-[#E4ED64]/20 hover:scale-[1.01] active:scale-[0.99]"
                      >
                        <Send className="w-4 h-4" />
                        <span>Place Order (${total.toFixed(2)})</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
