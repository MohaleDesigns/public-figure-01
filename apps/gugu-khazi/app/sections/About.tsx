"use client";

import { Award, Globe, Heart, GraduationCap, Building2, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    label: "Global Experience",
    value: "South Africa, Europe & Middle East",
    image: "/images/about/south-africa.png",
    description: "Having grown up in South Africa and built a career across Europe and the Middle East, I bring a truly global perspective to talent management and career development.",
  },
  {
    icon: Building2,
    label: "Corporate Leadership",
    value: "Kimberly-Clark & Beyond",
    image: "/images/about/work.png",
    description: "Over 20 years as a senior HR leader in major international businesses, shaping talent strategy and organisational culture at the highest levels.",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "University of Manchester",
    image: "/images/about/overseas.png",
    description: "Educated at one of the UK's most prestigious institutions, combining academic rigour with real-world executive experience.",
  },
  {
    icon: Award,
    label: "Recognition",
    value: "Author & Speaker",
    image: "/images/about/speaker.png",
    description: "Published author of two career-defining books and an internationally sought-after speaker on career management and leadership.",
  },
  {
    icon: Heart,
    label: "Passion",
    value: "Career Alignment",
     image: "/images/about/career.png",
    description: "I am passionate about helping others connect with their strengths and passions to build career success that feels authentic and fulfilling.",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "London, UK",
     image: "/images/about/london.png",
    description: "Currently based in London, England, serving clients globally through in-person and virtual coaching and consulting engagements.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-background via-surface-cream to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            The Story Behind{" "}
            <span className="accent-gradient-text">Gugu Khazi</span>
          </h2>
          <p className="text-base text-muted leading-relaxed">
            From a young girl in South Africa with big dreams to a global HR executive, author, and career coach
            helping professionals build careers aligned with their passions.
          </p>
        </div>

        {/* Highlights — single row on large screens, background image, content at bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative h-[340px] rounded-2xl overflow-hidden border border-border hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/5"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content at bottom */}
                <div className="relative h-full flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <Icon size={16} className="text-white" />
                    </div>
                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                      {item.label}
                    </p>
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-1.5 leading-snug">
                    {item.value}
                  </h3>
                  <p className="text-[12px] text-white/70 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
