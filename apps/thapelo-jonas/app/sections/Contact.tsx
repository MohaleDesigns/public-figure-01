"use client";

import { Mail, MapPin, Phone, Send, Radio, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.05),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to <span className="gold-gradient-text">Prosper?</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Whether you want coaching, a speaker for your event, or just want to say hello — I would love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-gold-light" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-sm text-muted">Bloemfontein, South Africa</p>
                  <p className="text-sm text-muted">Available for nationwide & international travel</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0">
                  <Radio size={24} className="text-gold-light" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Radio</h4>
                  <p className="text-sm text-muted">Monate Breakfast Show</p>
                  <p className="text-sm text-muted">Lesedi FM (SABC) — Weekday Mornings</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-gold-light" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Bookings</h4>
                  <p className="text-sm text-muted">Speaking: 4-6 weeks notice</p>
                  <p className="text-sm text-muted">Coaching: By appointment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-gold-light" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Response Time</h4>
                  <p className="text-sm text-muted">I personally respond to every message within 48 hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-3xl bg-surface-light border border-gold/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-gold/10 text-foreground placeholder:text-muted focus:outline-none focus:border-gold/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-gold/10 text-foreground placeholder:text-muted focus:outline-none focus:border-gold/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  How Can I Help?
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-gold/10 text-foreground focus:outline-none focus:border-gold/30 transition-colors"
                >
                  <option value="">Select an option...</option>
                  <option value="coaching">Life Coaching</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="business">Business Consulting</option>
                  <option value="book">Book a Copy of Made to Win</option>
                  <option value="other">Something Else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-gold/10 text-foreground placeholder:text-muted focus:outline-none focus:border-gold/30 transition-colors resize-none"
                  placeholder="Tell me about your goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-all hover:scale-[1.02] shadow-lg shadow-gold/20"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
