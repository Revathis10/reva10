import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Sparkles, CheckCircle2, Navigation } from 'lucide-react';
import { GSN_CONTACT } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setContactForm({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#161412] relative border-t border-[#24201c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#201d19] border border-[#332e29] text-xs font-worksans text-[#E4ED64] uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Connect With Our Team
          </div>
          <h2 className="font-rubik text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#f7f5f0] tracking-tight">
            Contact GSN Restaurant
          </h2>
          <div className="w-16 h-1 bg-[#E4ED64] rounded-full mt-4 mb-4" />
          <p className="font-worksans text-sm sm:text-base text-[#a39e93] max-w-2xl leading-relaxed">
            Have an inquiry about table availability, private dining buyouts, or culinary events? We are here to assist with refined attention to every detail.
          </p>
        </div>

        {/* 4 Contact Information Cards with Hover Lift of y axis -30 as whole container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1200px]:grid-cols-4 gap-6 mb-14">
          
          {/* Card 1: Mobile & Phone Numbers */}
          <div
            id="contact-phone-card"
            className="hover-lift-30 p-6 rounded-2xl bg-[#1a1816] border border-[#2e2a25] hover:border-[#E4ED64] shadow-xl flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#24201c] flex items-center justify-center text-[#E4ED64] mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-worksans uppercase tracking-widest text-[#a39e93] font-semibold">
                Mobile & Reservations
              </span>
              <h3 className="font-rubik text-lg font-bold text-[#f7f5f0] mt-1 mb-2">
                Direct Call
              </h3>
              <div className="space-y-1 text-sm font-worksans">
                <div>
                  <a
                    href={`tel:${GSN_CONTACT.primaryPhone}`}
                    className="text-[#dedad2] hover:text-[#E4ED64] font-medium transition-colors"
                  >
                    {GSN_CONTACT.primaryPhone}
                  </a>
                  <span className="text-[10px] text-[#8e887e] block">Mobile / Host Stand</span>
                </div>
                <div className="pt-1">
                  <a
                    href={`tel:${GSN_CONTACT.tollFreePhone}`}
                    className="text-[#dedad2] hover:text-[#E4ED64] font-medium transition-colors"
                  >
                    {GSN_CONTACT.tollFreePhone}
                  </a>
                  <span className="text-[10px] text-[#8e887e] block">VIP Toll-Free Line</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#292521] text-[10px] font-worksans text-[#E4ED64] uppercase tracking-wider font-semibold">
              Tap to Call Direct
            </div>
          </div>

          {/* Card 2: Email IDs */}
          <div
            id="contact-email-card"
            className="hover-lift-30 p-6 rounded-2xl bg-[#1a1816] border border-[#2e2a25] hover:border-[#E4ED64] shadow-xl flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#24201c] flex items-center justify-center text-[#E4ED64] mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-worksans uppercase tracking-widest text-[#a39e93] font-semibold">
                Electronic Mail
              </span>
              <h3 className="font-rubik text-lg font-bold text-[#f7f5f0] mt-1 mb-2">
                Mail ID Contact
              </h3>
              <div className="space-y-1 text-sm font-worksans">
                <div>
                  <a
                    href={`mailto:${GSN_CONTACT.primaryEmail}`}
                    className="text-[#dedad2] hover:text-[#E4ED64] font-medium transition-colors break-all"
                  >
                    {GSN_CONTACT.primaryEmail}
                  </a>
                  <span className="text-[10px] text-[#8e887e] block">General Inquiries</span>
                </div>
                <div className="pt-1">
                  <a
                    href={`mailto:${GSN_CONTACT.reservationEmail}`}
                    className="text-[#dedad2] hover:text-[#E4ED64] font-medium transition-colors break-all"
                  >
                    {GSN_CONTACT.reservationEmail}
                  </a>
                  <span className="text-[10px] text-[#8e887e] block">Table Reservations</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#292521] text-[10px] font-worksans text-[#E4ED64] uppercase tracking-wider font-semibold">
              Tap to Compose Mail
            </div>
          </div>

          {/* Card 3: Physical Address */}
          <div
            id="contact-address-card"
            className="hover-lift-30 p-6 rounded-2xl bg-[#1a1816] border border-[#2e2a25] hover:border-[#E4ED64] shadow-xl flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#24201c] flex items-center justify-center text-[#E4ED64] mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-worksans uppercase tracking-widest text-[#a39e93] font-semibold">
                Location & Valet
              </span>
              <h3 className="font-rubik text-lg font-bold text-[#f7f5f0] mt-1 mb-2">
                Visit GSN
              </h3>
              <p className="font-worksans text-xs text-[#dedad2] leading-relaxed">
                {GSN_CONTACT.address.street}<br />
                {GSN_CONTACT.address.neighborhood}<br />
                {GSN_CONTACT.address.city}, {GSN_CONTACT.address.stateZip}<br />
                {GSN_CONTACT.address.country}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#292521] text-[10px] font-worksans text-[#E4ED64] uppercase tracking-wider font-semibold">
              Complimentary Valet Parking
            </div>
          </div>

          {/* Card 4: Operating Hours */}
          <div
            id="contact-hours-card"
            className="hover-lift-30 p-6 rounded-2xl bg-[#1a1816] border border-[#2e2a25] hover:border-[#E4ED64] shadow-xl flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#24201c] flex items-center justify-center text-[#E4ED64] mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-worksans uppercase tracking-widest text-[#a39e93] font-semibold">
                Service Schedule
              </span>
              <h3 className="font-rubik text-lg font-bold text-[#f7f5f0] mt-1 mb-2">
                Dining Hours
              </h3>
              <div className="space-y-1.5 text-xs font-worksans text-[#dedad2]">
                <div>
                  <span className="text-[#a39e93] block text-[10px] uppercase">Lunch</span>
                  <span>11:30 AM – 2:30 PM (Daily)</span>
                </div>
                <div>
                  <span className="text-[#a39e93] block text-[10px] uppercase">Dinner</span>
                  <span>5:00 PM – 11:30 PM (Daily)</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-[#292521] text-[10px] font-worksans text-[#E4ED64] uppercase tracking-wider font-semibold">
              Bar Open until 1:00 AM Fri-Sat
            </div>
          </div>

        </div>

        {/* Interactive Contact Form and Interactive Map Presentation */}
        <div className="grid grid-cols-1 min-[1200px]:grid-cols-12 gap-8 items-start">
          
          {/* Contact Message Form (Columns 7 on desktop) with .hover-lift-30 */}
          <div className="min-[1200px]:col-span-7">
            <div
              id="contact-form-container"
              className="hover-lift-30 p-8 sm:p-10 rounded-3xl bg-[#1a1816] border border-[#2e2a25] hover:border-[#E4ED64]/80 shadow-2xl cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#25221e] flex items-center justify-center text-[#E4ED64]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-rubik text-xl font-bold text-[#f7f5f0]">
                    Send a Direct Message to GSN Management
                  </h3>
                  <p className="font-worksans text-xs text-[#a39e93]">
                    Replies sent within 2 business hours.
                  </p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#141312] border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="font-rubik text-lg font-bold text-[#f7f5f0]">
                    Thank You for Contacting GSN Restaurant
                  </div>
                  <p className="font-worksans text-xs text-[#dedad2] max-w-sm mx-auto">
                    Your message has been received by our guest relations team. We will reply to your provided email and phone number promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs font-worksans text-[#E4ED64] hover:underline font-semibold"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-1.5">
                        Mail ID (Email) *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-1.5">
                        Mobile Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans cursor-pointer"
                      >
                        <option value="General Inquiry">General Dining Inquiry</option>
                        <option value="Private Event">Private Room / Corporate Dining</option>
                        <option value="Dietary Guidance">Dietary & Allergen Consultation</option>
                        <option value="Media & Press">Media & Press Relations</option>
                        <option value="Feedback">Dining Experience Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-worksans uppercase tracking-wider font-semibold text-[#dedad2] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your questions, requests, or event details here..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-[#121110] border border-[#332e29] focus:border-[#E4ED64] rounded-xl px-4 py-3 text-sm text-[#f7f5f0] outline-none transition-colors font-worksans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 font-rubik text-sm uppercase tracking-wider font-bold bg-[#E4ED64] hover:bg-[#f2f785] text-[#121110] py-4 rounded-xl transition-all shadow-md shadow-[#E4ED64]/20 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message to GSN</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map & Arrival Directions Showcase (Columns 5 on desktop) with .hover-lift-30 */}
          <div className="min-[1200px]:col-span-5">
            <div
              id="contact-map-card"
              className="hover-lift-30 p-8 rounded-3xl bg-[#1a1816] border border-[#2e2a25] hover:border-[#E4ED64] shadow-2xl flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block px-3 py-1 rounded-md bg-[#25221e] text-[#E4ED64] text-xs font-worksans font-semibold border border-[#332e29]">
                    Interactive Venue Map
                  </div>
                  <span className="text-xs font-worksans text-[#8e887e]">
                    San Francisco Arts District
                  </span>
                </div>

                <h4 className="font-rubik text-xl font-bold text-[#f7f5f0] mb-3">
                  Finding GSN Restaurant
                </h4>

                {/* Stylized Dark Mode Map Visual */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#121110] border border-[#332e29] mb-4 flex items-center justify-center p-6 text-center">
                  {/* Map Grid Pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(#E4ED64 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#E4ED64]/20 border border-[#E4ED64] flex items-center justify-center text-[#E4ED64] mb-2 animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="font-rubik text-base font-bold text-[#f7f5f0]">
                      GSN Restaurant
                    </div>
                    <div className="font-worksans text-xs text-[#a39e93] mt-1 max-w-xs">
                      742 Grand Gourmet Blvd, San Francisco, CA
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-worksans text-[#dedad2]">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#E4ED64]" />
                    <span>2 blocks from the Civic Center Symphony Hall</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#E4ED64]" />
                    <span>Valet attendant stationed at primary entrance</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#292521]">
                <a
                  href={`https://maps.google.com/?q=742+Grand+Gourmet+Boulevard+San+Francisco+CA`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 font-worksans text-xs font-semibold py-3 rounded-xl border border-[#38332d] hover:border-[#E4ED64] text-[#f7f5f0] hover:text-[#E4ED64] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
