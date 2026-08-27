"use client";

import { MessageCircle, Calendar } from "lucide-react";

export default function Partners() {
    return (
        <section
            className="relative py-20 flex items-center justify-center overflow-hidden bg-[#0B1020]">
            {/* Subtle dot pattern overlay */}
            <div className="absolute inset-0 dot-pattern opacity-5" />

            {/* Decorative blurred circles */}
            <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-linear-to-br from-accent/5 to-accent/2 blur-3xl" />

            <div>
                <h2 className="font-black leading-[0.88] tracking-tighter animate-fade-in-up animate-delay-1 mb-2 mx-auto text-center">
                    <span className="accent-gradient-text text-5xl sm:text-6xl lg:text-7xl">Trusted by leading </span>
                    <span className="text-white/50 text-5xl sm:text-6xl lg:text-7xl">organisations</span>
                </h2>

               
<div className="grid md:grid-cols-5 lg:grid-cols-10 gap-6 mt-16">
    <div className="h-16 w-16 rounded-md bg-accent"></div>
    <div className="h-16 w-16 rounded-md bg-accent"></div>
    <div className="h-16 w-16 rounded-md bg-accent"></div>
    <div className="h-16 w-16 rounded-md bg-accent"></div>
    <div className="h-16 w-16 rounded-md bg-accent"></div>
    <div className="h-16 w-16 rounded-md bg-accent"></div>
    <div className="h-16 w-16 rounded-md bg-accent"></div>
    <div className="h-16 w-16 rounded-md bg-accent"></div>
    <div className="h-16 w-16 rounded-md bg-accent"></div>
    <div className="h-16 w-16 rounded-md bg-accent"></div>
</div>
            </div>

        </section>
    );
}
