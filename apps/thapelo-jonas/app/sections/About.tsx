"use client";

import { GraduationCap, Building2, Mic, Dumbbell, Heart, Church, Target } from "lucide-react";

const storyPoints = [
  {
    icon: GraduationCap,
    year: "2008",
    title: "University of the Free State",
    description:
      "Earned both a BCom in Marketing and a BCom Honours in Business Management. It was here that the seeds of entrepreneurship and leadership were planted.",
  },
  {
    icon: Building2,
    year: "2012",
    title: "Corporate Director",
    description:
      "Rose through the ranks to become a Director at one of South Africa's largest paper merchant companies. Built multiple income streams and learned the real money game from the inside.",
  },
  {
    icon: Dumbbell,
    year: "2018",
    title: "The Fitness Turning Point",
    description:
      "Shed 16kg in just 3 months. This wasn't just about weight — it was about discipline, consistency, and proving to myself that transformation is possible in every area of life.",
  },
  {
    icon: Mic,
    year: "2020",
    title: "Lesedi FM & The Airwaves",
    description:
      "Became a regular contributor to the Monate Breakfast Show on Lesedi FM (SABC), reaching thousands of South Africans every weekday morning with messages of hope and financial wisdom.",
  },
  {
    icon: Church,
    year: "Ongoing",
    title: "Pastor & Community Leader",
    description:
      "Serving as a pastor, providing marriage counseling, spiritual guidance, and leadership development. Faith is the foundation upon which every other success is built.",
  },
  {
    icon: Heart,
    year: "Always",
    title: "Family First",
    description:
      "Devoted husband to Mampoi and proud father to Thapelo Jnr and Tlotliso Jonas. Everything I do is to build a legacy my children can inherit and improve upon.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.05),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-sm font-medium mb-4">
              My Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              From Bloemfontein to{" "}
              <span className="gold-gradient-text">Building Legacies</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I am <span className="text-foreground font-semibold">Thapelo Jonas</span> — but most people know me as Coach TJ. I wasn't born with a silver spoon. I was born with a hunger to understand why some people prosper while others struggle, and a determination to crack the code.
              </p>
              <p>
                Over the years, I have worn many hats: corporate director, property investor, radio personality, pastor, author, and certified life coach. But they all serve one mission — <span className="text-gold-light font-medium">to empower people to prosper in every area of life</span>.
              </p>
              <p>
                My book <em className="text-gold-light not-italic font-medium">Made to Win</em> is the culmination of everything I have learned about money, mindset, and mastery. It is not theory. It is the exact framework I have used to build wealth, transform my health, and create a life of purpose.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl blur-2xl" />
            <div className="relative p-8 rounded-3xl bg-surface-light border border-gold/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-background font-bold text-2xl">
                  TJ
                </div>
                <div>
                  <h3 className="font-bold text-xl">Thapelo Jonas</h3>
                  <p className="text-sm text-muted">Coach TJ</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-surface border border-gold/10">
                  <Target size={20} className="text-gold-light mb-2" />
                  <p className="text-lg font-bold">Life Coach</p>
                  <p className="text-xs text-muted">Internationally Certified</p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-gold/10">
                  <Mic size={20} className="text-gold-light mb-2" />
                  <p className="text-lg font-bold">Speaker</p>
                  <p className="text-xs text-muted">Nationwide Keynotes</p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-gold/10">
                  <Building2 size={20} className="text-gold-light mb-2" />
                  <p className="text-lg font-bold">Investor</p>
                  <p className="text-xs text-muted">Property & Business</p>
                </div>
                <div className="p-4 rounded-xl bg-surface border border-gold/10">
                  <Church size={20} className="text-gold-light mb-2" />
                  <p className="text-lg font-bold">Pastor</p>
                  <p className="text-xs text-muted">Faith & Leadership</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-12">
            The <span className="gold-gradient-text">Journey</span> So Far
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {storyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="group relative p-6 rounded-2xl bg-surface-light border border-gold/10 gold-border-hover card-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-gold-light" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gold-light uppercase tracking-widest">
                      {point.year}
                    </span>
                    <h4 className="font-semibold text-foreground mt-1 mb-2">
                      {point.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {point.description}
                    </p>
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
