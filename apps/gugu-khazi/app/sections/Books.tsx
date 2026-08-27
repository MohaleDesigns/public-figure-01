"use client";

import { ShoppingCart, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

const books = [
  {
    title: "Passion to Careers",
    subtitle: "Nine steps to building a successful career from your passion",
    description:
      "A practical, nine-step framework for turning what you love into a thriving career. Drawing from over 20 years in global HR leadership, Gugu Khazi breaks down the exact process for identifying your passions, building relevant skills, and creating a career that energises you every single day.",
    features: ["9-Step Career Framework", "Passion Discovery Tools", "Skill Mapping", "Actionable Worksheets"],
    cta: "Get on Amazon",
    href: "https://us.amazon.com/Passion-Careers-building-successful-passion/dp/1644673762",
    image: "/images/passion-to-careers.png",
    imageAlt: "Gugu Khazi - Author of Passion to Careers",
  },
  {
    title: "Master Your Career",
    subtitle: "Navigating the 12 Stages of Your Fulfilling Career",
    description:
      "Careers are not linear — they evolve through distinct stages. This book maps the 12 stages of a fulfilling career, from self-discovery and skill-building to executive leadership and legacy. A timeless guide for anyone seeking professional fulfilment.",
    features: ["12 Career Stages", "Leadership Transitions", "Strategic Planning", "Legacy Building"],
    cta: "Get on Amazon",
    href: "https://us.amazon.com/Master-Your-Career-Navigating-Fulfilling/dp/1037009819",
    image: "/images/about/career.png",
    imageAlt: "Master Your Career by Gugu Khazi",
  },
];

export default function Books() {
  return (
    <section id="books" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-surface-cream via-background to-surface-cream" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft border border-accent/10 mb-6">
            <BookOpen size={16} className="text-accent" />
            <span className="text-sm font-semibold text-accent">Published Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Knowledge That{" "}
            <span className="accent-gradient-text">Transforms</span>
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Two definitive guides forged from two decades of global HR leadership, coaching thousands of professionals, and building careers that matter.
          </p>
        </div>

        {/* Books */}
        <div className="space-y-20 lg:space-y-28">
          {books.map((book, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={book.title}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative aspect-1/1 rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-border group">
                    <Image
                      src={book.image}
                      alt={book.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
                  </div>
                  {/* Decorative accent shape */}
                  <div className={`absolute -z-10 w-full h-full rounded-2xl bg-accent/8 top-3 ${isReversed ? "right-3" : "left-3"}`} />
                </div>

                {/* Content */}
                <div className={`space-y-6 ${isReversed ? "lg:order-1 lg:text-right" : "lg:order-2"}`}>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{book.title}</h3>
                    <p className="text-sm sm:text-base text-accent font-semibold">{book.subtitle}</p>
                  </div>

                  <p className="text-[15px] sm:text-base text-muted leading-relaxed">
                    {book.description}
                  </p>

                  {/* Features */}
                  <div className={`grid grid-cols-2 gap-3 ${isReversed ? "lg:direction-rtl" : ""}`}>
                    {book.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface-cream border border-border/60"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                        <span className="text-[13px] sm:text-sm text-muted font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/15 hover:-translate-y-0.5"
                  >
                    <ShoppingCart size={16} />
                    {book.cta}
                    <ArrowRight size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
