"use client";

import { Play, ExternalLink } from "lucide-react";
import Image from "next/image";

function YoutubeIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );
}

const videos = [
  {
    title: "7 Decisions You Must Make to Quantum Leap Your Life",
    duration: "4:21",
    views: "530 views",
    id: "TS6l9tGRYm4",
    thumbnail: "Video 1",
  },
  {
    title: "Refine Your Philosophy, Transform Your Life",
    duration: "19:43",
    views: "1.6K views",
    id: "E5Xhl_KMeYY",
    thumbnail: "Video 2",
  },
  {
    title: "7 Decisions You Must Make To Become Rich",
    duration: "15:51",
    views: "6.2K views",
    id: "CMc7_dtRFig",
    thumbnail: "Video 3",
  },
  {
    title: "Do you marry for love or purpose",
    duration: "2:22",
    views: "398 views",
    id: "fFNX2EvYawk",
    thumbnail: "Video 4",
  },
];

const podcastFeatures = [
  {
    title: "You're Not Humble, You're Just Broke",
    host: "Witness Mdaka",
    platform: "YouTube Interview",
    description:
      "An in-depth conversation about success, mindset, and why humility without achievement is just poverty of ambition.",
    link: "https://www.youtube.com/watch?v=eH8JZ4sK3YY",
  },
  {
    title: "Always Have A Plan For Your Own Life",
    host: "Witness Mdaka",
    platform: "YouTube Interview",
    description:
      "Why waiting for permission or perfect conditions is the fastest way to stay stuck — and how to take control of your destiny.",
    link: "https://www.youtube.com/watch?v=7PZjRgrg89w",
  },
  {
    title: "Master Yourself - The Key to Endless Growth",
    host: "Witness Mdaka",
    platform: "YouTube Interview",
    description:
      "Self-mastery is the foundation of all success. This conversation dives deep into discipline, habits, and personal transformation.",
    link: "https://www.youtube.com/watch?v=6KZQCoS3Wtw",
  },
];

export default function Media() {
  return (
    <section id="media" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.05),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-sm font-medium mb-4">
            Media & Content
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Watch, <span className="gold-gradient-text">Listen & Learn</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Dive into my YouTube channel, podcast interviews, and radio segments. Free wisdom you can apply today.
          </p>
        </div>

        {/* YouTube Videos Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <YoutubeIcon size={24} className="text-red-500" />
              Latest on YouTube
            </h3>
            <a
              href="https://www.youtube.com/c/ThapeloJonas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold-light hover:text-gold font-medium flex items-center gap-1 transition-colors"
            >
              View Channel <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden bg-surface-light border border-gold/10 gold-border-hover card-glow"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-linear-to-br from-surface to-surface-light flex items-center justify-center overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />


                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
                      <Play size={28} className="text-background ml-1" fill="currentColor" />
                    </div>
                  </div>
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/70 rounded text-[10px] font-medium">
                    {video.duration}
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-gold-light transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-xs text-muted mt-1">{video.views}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Podcast / Interview Features */}
        <div>
          <h3 className="text-xl font-bold mb-8">Featured Interviews</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {podcastFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-surface-light border border-gold/10 gold-border-hover card-glow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">&#127908;</span>
                  <span className="text-xs text-gold-light font-medium uppercase">
                    {feature.platform}
                  </span>
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-xs text-muted mb-1">with {feature.host}</p>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {feature.description}
                </p>
                <a
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light hover:text-gold transition-colors"
                >
                  Watch Interview <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
