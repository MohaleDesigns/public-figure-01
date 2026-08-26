"use client";

import { Mail, MapPin, Phone, Send, Clock, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-cream/50 to-background" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill mb-6">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Let's Build Your{" "}
            <span className="accent-gradient-text">Dream Career</span>
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Whether you are looking for coaching, speaking engagements, or corporate consulting —
            I would love to hear from you. Let's connect your passion to your career.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info — sidebar style, different from TJ's grid */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h3 className="font-semibold text-foreground mb-5">Contact Details</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-accent-soft border border-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground">Email</p>
                    <p className="text-[13px] text-muted">contact@gugukhazi.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-accent-soft border border-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground">Location</p>
                    <p className="text-[13px] text-muted">London, United Kingdom</p>
                    <p className="text-[13px] text-muted">Serving clients globally</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-accent-soft border border-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground">Availability</p>
                    <p className="text-[13px] text-muted">Coaching: By appointment</p>
                    <p className="text-[13px] text-muted">Speaking: 4-6 weeks notice</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-accent-soft border border-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-foreground">Response Time</p>
                    <p className="text-[13px] text-muted">Within 48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-soft to-surface-cream border border-accent/10">
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={16} className="text-accent" />
                <h4 className="font-semibold text-foreground text-[15px]">Current Availability</h4>
              </div>
              <p className="text-[13px] text-muted leading-relaxed mb-4">
                I am currently accepting new coaching clients and speaking inquiries for Q3 and Q4 2026.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[13px] font-medium text-emerald-700">Accepting new clients</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-7 sm:p-8 rounded-2xl bg-surface border border-border shadow-sm shadow-black/[0.02]">
              <h3 className="font-semibold text-foreground mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[13px] font-medium text-foreground mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-cream border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/5 transition-all text-[14px]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[13px] font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2.5 rounded-xl bg-surface-cream border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/5 transition-all text-[14px]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-[13px] font-medium text-foreground mb-1.5">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-cream border border-border text-foreground focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/5 transition-all text-[14px]"
                  >
                    <option value="">Select a service...</option>
                    <option value="coaching">Career Coaching</option>
                    <option value="executive">Executive Coaching</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="consulting">Talent Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-cream border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/5 transition-all text-[14px] resize-none"
                    placeholder="Tell me about your career goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/15 hover:-translate-y-0.5 text-[14px]"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
