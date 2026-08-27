"use client";

import { MessageCircle, Calendar } from "lucide-react";

export default function CTA() {
    return (
        <section
            className="relative py-40 flex items-center justify-center overflow-hidden bg-[#0B1020]">
            {/* Subtle dot pattern overlay */}
            <div className="absolute inset-0 dot-pattern opacity-5" />

            {/* Decorative blurred circles */}
            <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-linear-to-br from-accent/5 to-accent/2 blur-3xl" />

            {/* Giant watermark — different from TJ, more subtle on light bg */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none select-none">
                <h1 className="giant-name text-center whitespace-nowrap">
                    GUGU KHAZI
                </h1>
            </div>

            <div>
                <h2 className="font-black leading-[0.88] tracking-tighter animate-fade-in-up animate-delay-1 mb-2 mx-auto text-center max-w-[70%]">
                    <span className="accent-gradient-text text-5xl sm:text-6xl lg:text-7xl">Let's turn the tide for </span>
                    <span className="text-white/50 text-5xl sm:text-6xl lg:text-7xl">your audience.</span>
                </h2>

                <p className="text-lg text-muted leading-relaxed text-center mx-auto">
                    Tell us about your event and we'll come back within one business day with availability.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animate-delay-3 mt-8">
                    <a
                        href="/contact"
                        className="group flex items-center gap-2.5 px-8 py-4 bg-accent text-white text-sm font-bold rounded-full hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
                    >
                        <MessageCircle size={18} />
                        Work With Me
                    </a>
                    <a
                        href="/contact"
                        className="group flex items-center gap-2.5 px-8 py-4 border border-border-warm text-white text-sm font-bold rounded-full hover:border-accent/30 hover:bg-accent-soft transition-all duration-300"
                    >
                        <Calendar size={18} />
                        Book a Session
                    </a>
                </div>
            </div>

        </section>
    );
}
