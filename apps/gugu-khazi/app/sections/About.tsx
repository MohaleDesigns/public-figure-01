"use client";

import { Award, Globe, Heart, GraduationCap, Building2, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    label: "Global Experience",
    value: "South Africa, Europe & Middle East",
    description: "Having grown up in South Africa and built a career across Europe and the Middle East, I bring a truly global perspective to talent management and career development.",
  },
  {
    icon: Building2,
    label: "Corporate Leadership",
    value: "Kimberly-Clark & Beyond",
    description: "Over 20 years as a senior HR leader in major international businesses, shaping talent strategy and organisational culture at the highest levels.",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "University of Manchester",
    description: "Educated at one of the UK's most prestigious institutions, combining academic rigour with real-world executive experience.",
  },
  {
    icon: Award,
    label: "Recognition",
    value: "Author & Speaker",
    description: "Published author of two career-defining books and an internationally sought-after speaker on career management and leadership.",
  },
  {
    icon: Heart,
    label: "Passion",
    value: "Career Alignment",
    description: "I am passionate about helping others connect with their strengths and passions to build career success that feels authentic and fulfilling.",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "London, UK",
    description: "Currently based in London, England, serving clients globally through in-person and virtual coaching and consulting engagements.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-cream to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill mb-6">About Me</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            The Story Behind{" "}
            <span className="accent-gradient-text">Gugu Khazi</span>
          </h2>
          <p className="text-base text-muted leading-relaxed">
            From a young girl in South Africa with big dreams to a global HR executive, author, and career coach
            helping professionals build careers aligned with their passions.
          </p>
        </div>

        {/* Giant Name — light theme */}
        <div className="flex justify-center mb-16 overflow-hidden">
          <span className="text-[6rem] sm:text-[10rem] lg:text-[14rem] font-black leading-none tracking-tighter accent-gradient-text opacity-[0.05] whitespace-nowrap select-none">
            GUGU KHAZI
          </span>
        </div>

        {/* Highlights — different card style from TJ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group p-6 rounded-2xl bg-surface border border-border card-soft"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-soft border border-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="font-semibold text-foreground text-[15px] mb-2">{item.value}</p>
                    <p className="text-[13px] text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
