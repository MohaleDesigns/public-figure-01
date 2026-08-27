"use client";

import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Accent top border */}
      <div className="h-1 bg-linear-to-r from-accent-light via-accent to-accent-dark" />

      <div className="bg-surface-cream">
        {/* Main footer content — single centered column, very different from TJ's 4-column grid */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          {/* Giant watermark */}
          <div className="absolute top-10 left-0 right-0 flex justify-center overflow-hidden pointer-events-none select-none">
            <h1 className="giant-name text-center whitespace-nowrap">
              GUGU KHAZI
            </h1>
          </div>

          <h2 className="text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
              Gugu Khazi
              <span className="inline-block align-middle ml-0.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent" />
            </h2>
          <p className="text-sm text-muted mb-8 max-w-md mx-auto leading-relaxed">
            Connecting you with careers aligned to your passion.
            Based in London. Serving clients globally.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/#services", label: "Services" },
              { href: "/#books", label: "Books" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-muted hover:text-accent transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          <SocialLinks />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-muted">
              &copy; 2026 Gugu Khazi. All rights reserved.
            </p>
            <p className="text-xs text-muted">
            Designed with purpose by <a href="#" target="_black" className="text-pink-600 hover:text-pink-700 transition-all delay-150 ease-in-out">Mohale Designs</a>.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
