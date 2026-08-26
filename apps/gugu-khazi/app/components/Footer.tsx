"use client";

import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Accent top border */}
      <div className="h-1 bg-gradient-to-r from-accent-light via-accent to-accent-dark" />

      <div className="bg-surface-cream">
        {/* Main footer content — single centered column, very different from TJ's 4-column grid */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="mb-8">
            <span className="text-4xl font-black accent-gradient-text">GK</span>
          </div>

          <h3 className="text-xl font-semibold text-foreground mb-2">
            Gugu Khazi
          </h3>
          <p className="text-sm text-muted mb-8 max-w-md mx-auto leading-relaxed">
            Connecting you with careers aligned to your passion.
            Based in London. Serving clients globally.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {[
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
            <div className="flex items-center gap-2">
              <span className="badge-2026">Built in 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
