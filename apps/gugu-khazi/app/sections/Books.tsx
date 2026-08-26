"use client";

import { ShoppingCart, Star, ArrowRight } from "lucide-react";

const books = [
  {
    title: "Passion to Careers",
    subtitle: "Nine steps to building a successful career from your passion",
    description:
      "A practical, nine-step framework for turning what you love into a thriving career. Drawing from over 20 years in global HR leadership, Gugu Khazi breaks down the exact process for identifying your passions, building relevant skills, and creating a career that energises you every single day.",
    features: ["9-Step Career Framework", "Passion Discovery Tools", "Skill Mapping", "Actionable Worksheets"],
    accent: "from-rose-400 to-rose-700",
    border: "border-rose-200",
    rating: 5,
    cta: "Get on Amazon",
    href: "https://us.amazon.com/Passion-Careers-building-successful-passion/dp/1644673762",
  },
  {
    title: "Master Your Career",
    subtitle: "Navigating the 12 Stages of Your Fulfilling Career",
    description:
      "Careers are not linear — they evolve through distinct stages. This book maps the 12 stages of a fulfilling career, from self-discovery and skill-building to executive leadership and legacy. A timeless guide for anyone seeking professional fulfilment.",
    features: ["12 Career Stages", "Leadership Transitions", "Strategic Planning", "Legacy Building"],
    accent: "from-amber-400 to-orange-600",
    border: "border-amber-200",
    rating: 5,
    cta: "Get on Amazon",
    href: "https://us.amazon.com/Master-Your-Career-Navigating-Fulfilling/dp/1037009819",
  },
];

export default function Books() {
  return (
    <section id="books" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-cream via-background to-surface-cream" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill mb-6">My Books</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Knowledge That{" "}
            <span className="accent-gradient-text">Transforms</span>
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Two definitive guides forged from two decades of global HR leadership, coaching thousands of professionals, and building careers that matter.
          </p>
        </div>

        {/* Books — horizontal scroll on mobile, stacked on desktop with different layout than TJ */}
        <div className="grid lg:grid-cols-2 gap-8">
          {books.map((book, index) => (
            <div
              key={book.title}
              className="group relative bg-surface rounded-3xl border border-border overflow-hidden card-soft"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 bg-gradient-to-r ${book.accent}`} />

              <div className="p-8 sm:p-10">
                {/* Book cover mockup */}
                <div className="mb-8 flex items-start gap-6">
                  <div className={`w-28 h-40 rounded-xl bg-gradient-to-br ${book.accent} shadow-lg shadow-black/5 flex flex-col items-center justify-center p-4 flex-shrink-0`}>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-medium text-center">
                      Gugu Khazi
                    </p>
                    <h3 className="text-lg font-bold text-white text-center leading-tight mt-1">
                      {book.title.split(" ")[0]}
                    </h3>
                    <h3 className="text-lg font-bold text-white text-center leading-tight">
                      {book.title.split(" ").slice(1).join(" ")}
                    </h3>
                    <div className="flex items-center gap-0.5 mt-2">
                      {[...Array(book.rating)].map((_, i) => (
                        <Star key={i} size={10} className="text-white fill-white" />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-foreground mb-1">{book.title}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{book.subtitle}</p>
                    <p className="text-[15px] text-muted leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {book.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-cream border border-border/60"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                      <span className="text-[13px] text-muted">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={book.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/15 hover:-translate-y-0.5"
                >
                  <ShoppingCart size={16} />
                  {book.cta}
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
