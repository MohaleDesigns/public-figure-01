"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Stephanie Martinis",
    role: "Executive Coach and Coach Mentor",
    text: "This book is a must-read for anyone seeking fulfilment in both work and life. Gugu Khazi delivers timeless wisdom with practical application.",
  },
  {
    name: "Verified Reader",
    role: "Amazon Reviewer",
    text: "Gugu Khazi's inspirational and easy to understand advice in Passion to Careers is highly valuable to all individuals who want to achieve their career dreams utilising their passions.",

  },
  {
    name: "Corporate Client",
    role: "Fortune 500 HR Director",
    text: "Gugu brought a level of insight and strategic clarity to our talent review that transformed how we think about succession planning. Truly world-class.",

  },
  {
    name: "University Student",
    role: "University of Manchester",
    text: "Hearing Gugu speak about aligning passion with profession completely changed my approach to job searching. I now have a career I actually care about.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-surface-cream/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight animate-fade-in-up animate-delay-1 mb-2">
            Lives <span className="accent-gradient-text">Transformed</span>
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Real impact from real people — readers, clients, and audiences whose careers have been reshaped by Gugu Khazi's work.
          </p>
        </div>

        {/* Testimonials — wide quote cards, completely different from TJ's image cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-surface border border-border card-soft"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-accent/20 mb-4" />

              <p className="text-[15px] text-foreground leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-border/60">
                <div>
                  <p className="font-semibold text-foreground text-[15px]">{t.name}</p>
                  <p className="text-[13px] text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
