"use client";

import { BookOpen } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/thapelo.jonas/",
    icon: FacebookIcon,
    followers: "137K",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/thapelodj/",
    icon: InstagramIcon,
    followers: "2.2K",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ThapeloJonas3",
    icon: TwitterIcon,
    followers: "3.6K",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/ThapeloJonas",
    icon: YoutubeIcon,
    followers: "1.3K",
  },
  {
    name: "Blog",
    href: "http://thapelojonas.blogspot.com/",
    icon: BookOpen,
    followers: null,
  },
];

export default function SocialLinks({ showFollowers = false }: { showFollowers?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-surface-light border border-gold/20 text-muted hover:text-gold-light hover:border-gold/50 hover:bg-gold/10 transition-all"
            aria-label={social.name}
          >
            <Icon size={18} />
            {showFollowers && social.followers && (
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gold-light whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {social.followers}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
