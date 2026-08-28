"use client";

import { MessageCircle, Calendar, Award, Users, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/images/banner.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Warm gradient background — completely different from TJ's dark image */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7ED] via-[#FFFBF5] to-[#FDF2F8]" /> */}

      {/* Subtle dot pattern overlay */}
      {/* <div className="absolute inset-0 dot-pattern opacity-40" /> */}

      {/* Decorative blurred circles */}
      {/* <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-linear-to-br from-accent/5 to-accent/2 blur-3xl" /> */}
      {/* <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-linear-to-tr from-amber-200/20 to-rose-200/10 blur-3xl" /> */}

      {/* Giant watermark — different from TJ, more subtle on light bg */}
      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none select-none">
        <h1 className="giant-name text-center whitespace-nowrap">
          GUGU KHAZI
        </h1>
      </div> */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
            <div className="relative animate-fade-in animate-delay-2">
              {/* Main card */}
              <div className="relative bg-surface rounded-4xl border border-border/60 shadow-2xl shadow-black/4 p-7 sm:p-9 w-full">
                {/* Decorative top line */}
                <div className="absolute top-0 left-10 right-10 h-1 bg-linear-to-r from-accent-light to-accent rounded-full" />

                {/* Badge */}
                <div className="pill animate-fade-in-up mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  International Speaker & Career Coach
                </div>

                {/* Name */}
                <h1 className="font-black leading-[0.88] tracking-tighter animate-fade-in-up animate-delay-1 mb-7">
                  <span className="accent-gradient-text text-5xl sm:text-6xl lg:text-7xl">I'M GUGU </span>
                  <span className="text-foreground text-5xl sm:text-6xl lg:text-7xl">KHAZI</span>
                </h1>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-surface-cream border border-border/40">
                    <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Award size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">20+ Years</p>
                      <p className="text-xs text-muted">Global HR Leadership</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-surface-cream border border-border/40">
                    <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Users size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">500+ Clients</p>
                      <p className="text-xs text-muted">Coached Worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-surface-cream border border-border/40">
                    <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Globe size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">3 Continents</p>
                      <p className="text-xs text-muted">SA, Europe, Middle East</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-linear-to-br from-accent/20 to-accent/5 border border-accent/10 animate-gentle-float" />
              <div className="absolute -bottom-4 -left-6 w-12 h-12 rounded-full bg-linear-to-br from-amber-300/30 to-orange-200/20 border border-amber-200/30 animate-gentle-float" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up animate-delay-3">
              <a
                href="/contact"
                className="group flex items-center gap-2.5 px-8 py-4 bg-accent text-white text-sm font-bold rounded-full hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                Work With Me
              </a>
              <a
                href="/contact"
                className="group flex items-center gap-2.5 px-8 py-4 bg-border border border-border-warm text-foreground text-sm font-bold rounded-full hover:border-accent/30 hover:bg-accent-soft transition-all duration-300"
              >
                <Calendar size={18} />
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
