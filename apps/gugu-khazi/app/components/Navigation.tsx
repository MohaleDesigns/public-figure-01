"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#books", label: "Books" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-surface/95 border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <h2 className="text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
              Gugu Khazi
              <span className="inline-block align-middle ml-0.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent" />
            </h2>
          </a>

          {/* Desktop Navigation — centered with underline hover */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-[13px] font-medium text-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="/contact"
              className="px-5 py-2 text-[13px] font-semibold bg-accent text-white rounded-full hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              Work With Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-sm font-medium text-muted hover:text-accent hover:bg-accent-soft rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={handleLinkClick}
              className="block mt-3 px-5 py-3 text-sm font-semibold bg-accent text-white rounded-full text-center hover:bg-accent-dark transition-colors"
            >
              Work With Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
