"use client";

import { Mic, BookOpen, Home, Church, Briefcase, Target, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Life Coaching",
    subtitle: "One-on-One & Group",
    description:
      "Internationally certified life coaching that helps you break through mental barriers, set powerful goals, and create an actionable roadmap to success. Whether it's career, relationships, or personal growth — I help you find clarity and execute with confidence.",
    features: ["Goal Setting & Clarity", "Mindset Transformation", "Accountability Systems", "Habit Architecture"],
    cta: "Book a Session",
    href: "/contact",
  },
  {
    icon: Mic,
    title: "Public Speaking",
    subtitle: "Keynotes & Events",
    description:
      "Dynamic, engaging, and transformative speaking for corporate events, conferences, churches, schools, and seminars. I bring energy, authenticity, and practical wisdom that moves audiences from inspiration to action.",
    features: ["Corporate Keynotes", "Youth Motivation", "Financial Literacy", "Leadership & Team Building"],
    cta: "Book Me to Speak",
    href: "/contact",
  },
  {
    icon: BookOpen,
    title: "Author & Educator",
    subtitle: "Books & Workshops",
    description:
      "Author of 'Made to Win — 9 Irrefutable Laws to Win the Money Game.' I create content, workshops, and courses that simplify complex financial and life concepts into practical, everyday strategies.",
    features: ["Book: Made to Win", "Financial Workshops", "Online Courses", "Mentorship Programs"],
    cta: "Get the Book",
    href: "#book",
  },
  {
    icon: Home,
    title: "Property Investment",
    subtitle: "Wealth Through Real Estate",
    description:
      "I walk the talk when it comes to building wealth. With hands-on experience in property investment, I teach others how to use real estate as a vehicle for financial freedom and generational wealth.",
    features: ["Investment Strategy", "Portfolio Building", "Market Analysis", "Passive Income Design"],
    cta: "Learn More",
    href: "/contact",
  },
  {
    icon: Church,
    title: "Pastoral & Ministry",
    subtitle: "Faith & Leadership",
    description:
      "As a pastor, I provide spiritual guidance, marriage counseling, and leadership development for individuals and churches. I believe faith is the foundation upon which all other success is built.",
    features: ["Marriage Counseling", "Leadership Development", "Youth Ministry", "Spiritual Mentorship"],
    cta: "Connect",
    href: "/contact",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    subtitle: "Strategy & Growth",
    description:
      "With years of executive experience as a director at a major paper merchant company, I offer business consulting that drives revenue, streamlines operations, and builds high-performance teams.",
    features: ["Sales Strategy", "Marketing Systems", "Team Leadership", "Revenue Growth"],
    cta: "Let's Talk Business",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-surface/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.05),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-sm font-medium mb-4">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Multiple Ways to{" "}
            <span className="gold-gradient-text">Serve & Empower</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Whether you need a coach in your corner, a speaker to ignite your audience, or a strategist to grow your business — I bring decades of experience, certified expertise, and genuine passion to every engagement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-6 sm:p-8 rounded-2xl bg-surface-light border border-gold/10 gold-border-hover card-glow flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-gold-light" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-gold-light font-medium mb-4">{service.subtitle}</p>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-light flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-gold transition-colors group/link"
                >
                  {service.cta}
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
