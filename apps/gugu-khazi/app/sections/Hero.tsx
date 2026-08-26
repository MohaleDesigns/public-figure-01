"use client";

import { MessageCircle, Calendar, Award, Users, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Warm gradient background — completely different from TJ's dark image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7ED] via-[#FFFBF5] to-[#FDF2F8]" />

      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Decorative blurred circles */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-accent/5 to-accent/2 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-amber-200/20 to-rose-200/10 blur-3xl" />

      {/* Giant watermark — different from TJ, more subtle on light bg */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none select-none">
        <h1 className="giant-name text-center whitespace-nowrap">
          GUGU KHAZI
        </h1>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content — takes 7 columns, different from TJ's 6+6 */}
          <div className="lg:col-span-7 space-y-8">
            <div className="pill animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              International Speaker & Career Coach
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.92] tracking-tighter animate-fade-in-up animate-delay-1">
              <span className="accent-gradient-text">GUGU</span>
              <br />
              <span className="text-foreground">KHAZI</span>
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-lg leading-relaxed animate-fade-in-up animate-delay-2">
              Connecting you with careers aligned to your passion.
              <span className="text-foreground font-medium"> 20+ years</span> of senior HR leadership,
              executive coaching, and empowering professionals to build fulfilling careers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up animate-delay-3">
              <a
                href="/contact"
                className="group flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                Work With Me
              </a>
              <a
                href="/contact"
                className="group flex items-center gap-2 px-7 py-3.5 border border-border-warm text-foreground text-sm font-semibold rounded-full hover:border-accent/30 hover:bg-accent-soft transition-all duration-300"
              >
                <Calendar size={18} />
                Book a Session
              </a>
            </div>

            {/* 2026 badge — mobile visible too */}
            <div className="animate-fade-in-up animate-delay-4">
              <span className="badge-2026">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                2026
              </span>
            </div>
          </div>

          {/* Right side — decorative stats card, completely different visual from TJ */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
            <div className="relative animate-fade-in animate-delay-2">
              {/* Main card */}
              <div className="relative bg-surface rounded-3xl border border-border shadow-xl shadow-black/[0.03] p-8 w-80">
                {/* Decorative line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-accent-light to-accent rounded-full" />

                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-4">
                    <span className="text-3xl font-black accent-gradient-text">GK</span>
                  </div>
                  <p className="text-[11px] text-muted uppercase tracking-[0.2em] font-semibold">Est. 2026</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-cream border border-border/50">
                    <Award size={18} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">20+ Years</p>
                      <p className="text-[11px] text-muted">Global HR Leadership</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-cream border border-border/50">
                    <Users size={18} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">500+ Clients</p>
                      <p className="text-[11px] text-muted">Coached Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-cream border border-border/50">
                    <Globe size={18} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">3 Continents</p>
                      <p className="text-[11px] text-muted">SA, Europe, Middle East</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/10 animate-gentle-float" />
              <div className="absolute -bottom-3 -left-5 w-12 h-12 rounded-full bg-gradient-to-br from-amber-300/30 to-orange-200/20 border border-amber-200/30 animate-gentle-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
