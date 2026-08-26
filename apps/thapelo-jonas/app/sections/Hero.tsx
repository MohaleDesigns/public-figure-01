"use client";

import { Calendar, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/banner-image.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-sm font-medium animate-fade-in-up opacity-0">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Internationally Certified Life Coach
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-in-up opacity-0 animate-delay-1">
              Empowering You To{" "}
              <span className="gold-gradient-text">Prosper</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up opacity-0 animate-delay-2">
              I&apos;m <span className="text-white font-semibold">Thapelo Jonas</span> — Coach TJ. Speaker, Author, Property Investor, Pastor, and Entrepreneur helping people win the money game and master every area of life.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0 animate-delay-3">
              <a
                href="/contact"
                className="group flex items-center gap-2 px-8 py-4 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-all hover:scale-105 shadow-lg shadow-gold/20"
              >
                <MessageCircle size={20} />
                Work With Me
              </a>
              <a
                href="#schedule"
                className="group flex items-center gap-2 px-8 py-4 border border-gold/30 text-gold-light font-semibold rounded-full hover:bg-gold/10 transition-all hover:border-gold/60"
              >
                <Calendar size={20} />
                View My Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
