"use client";

import { Star, ShoppingCart } from "lucide-react";

const reviews = [
  {
    text: "This book changed how I see money. Thapelo doesn't just talk theory — he gives you laws you can apply immediately.",
    author: "Reader Review",
  },
  {
    text: "Made to Win is not a feel-good book. It's a manual for anyone serious about building real wealth.",
    author: "Verified Purchase",
  },
  {
    text: "I bought this for my son and ended up reading it myself. Now the whole family talks about money differently.",
    author: "Parent & Entrepreneur",
  },
];

export default function Book() {
  return (
    <section id="book" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_right,_rgba(212,175,55,0.08),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Book Visual */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="absolute -inset-8 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" />
            <div className="relative">
              <img
                src="/book.png"
                alt="book"
                className="w-[80%] h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 rounded-xl mx-auto"
              />

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-surface-light border border-gold/20 rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">&#128293;</span>
                  <div>
                    <div className="text-sm font-bold">Bestseller</div>
                    <div className="text-[10px] text-muted">South Africa</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-8 bg-surface-light border border-gold/20 rounded-xl p-3 shadow-xl">
                <div className="text-center">
                  <div className="text-lg font-bold gold-gradient-text">9 Irrefutable Laws</div>
                  <div className="text-[10px] text-muted">To Wealth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Info */}
          <div className="space-y-8 order-1 lg:order-2">
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-sm font-medium mb-4">
            My Book
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Made to{" "}
            <span className="gold-gradient-text">Win</span>
          </h2>
          <p className="text-xl text-muted leading-relaxed">
            9 Irrefutable Laws to Win the Money Game
          </p>
        </div>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Most people work hard their entire lives and still struggle financially. Not because they lack talent, but because nobody taught them the <span className="text-foreground font-medium">laws of money</span>.
              </p>
              <div>
                In <em className="text-gold-light not-italic font-medium">Made to Win</em>, I break down the 9 irrefutable laws —{" "}
                {[
                  "The Law of Ownership",
                  "The Law of Multiple Streams",
                  "The Law of Discipline",
                  "The Law of Legacy",
                  "The Law of Investment",
                  "The Law of Giving",
                  "The Law of Knowledge",
                  "The Law of Environment",
                  "The Law of Persistence",
                ].map((law, i) => (
                  <div key={law} className="inline-block mr-1">
                    <div className="flex items-center gap-1">
                      <span className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center text-xs text-gold-light flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="inline-block text-[16px] hover:translate-x-1 transition-transform duration-200 cursor-default">
                        {law}
                      </span>
                    </div>
                  </div>
                ))}{" "}
                — that separate those who merely survive from those who thrive. This is not a get-rich-quick scheme. It is a philosophy forged through years of business leadership, property investment, and coaching thousands of individuals.
              </div>
              <p>
                Whether you are drowning in debt, starting your first business, or looking to scale your wealth — this book gives you the mental framework and practical steps to win the money game for good.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <a
                href="https://www.takealot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-all hover:scale-105 shadow-lg shadow-gold/20"
              >
                <ShoppingCart size={20} />
                Get It Now
              </a>
              <span className="text-sm text-muted">
                Also available at major bookstores across South Africa
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
