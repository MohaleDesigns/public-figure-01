"use client";

import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-background font-bold text-xl overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Thapelo Jonas logo"
                  width={1254}
                  height={1254}
                  sizes="48px"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Thapelo Jonas</h3>
                <p className="text-sm text-muted">Coach TJ</p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Empowering individuals and families to prosper in every area of life — from finances and fitness to faith and relationships.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div className="md:ml-15">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Me" },
                { href: "/#services", label: "What I Do" },
                { href: "/#book", label: "My Book" },
                { href: "/#schedule", label: "Schedule" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms and Conditions" },
                { href: "#", label: "Return & Refund Policy" },
                { href: "#", label: "Media Release Policy" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-gold-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <span className="text-gold-light font-medium">Location:</span> Bloemfontein, South Africa
              </li>
              <li>
                <span className="text-gold-light font-medium">Radio:</span> Monate Breakfast Show, Lesedi FM
              </li>
              <li>
                <span className="text-gold-light font-medium">Bookings:</span> Available for speaking & coaching
              </li>
            </ul>
            <a
              href="/contact"
              className="inline-block mt-6 px-5 py-2.5 text-sm font-semibold bg-gold/10 text-gold-light border border-gold/30 rounded-full hover:bg-gold/20 transition-colors"
            >
              Send a Message
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Thapelo Jonas. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Designed with purpose by <a href="#" target="_black" className="text-white/70 hover:text-white/90 transition-all delay-150 ease-in-out">Mohale Designs</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
