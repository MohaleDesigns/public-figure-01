"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "What I Do" },
  { href: "/#book", label: "Book" },
  { href: "/#schedule", label: "Schedule" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-gold/20 shadow-lg shadow-gold/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-background font-bold text-lg group-hover:scale-110 transition-transform">
              TJ
            </div>
            <span className="font-semibold text-lg tracking-tight hidden sm:block">
              Thapelo Jonas
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted hover:text-gold-light transition-colors rounded-lg hover:bg-gold/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="ml-4 px-5 py-2.5 text-sm font-semibold bg-gold text-background rounded-full hover:bg-gold-light transition-colors"
            >
              Work With Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-gold-light transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-gold/20">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-sm font-medium text-muted hover:text-gold-light hover:bg-gold/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={handleLinkClick}
              className="block mt-4 px-5 py-3 text-sm font-semibold bg-gold text-background rounded-full text-center hover:bg-gold-light transition-colors"
            >
              Work With Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
