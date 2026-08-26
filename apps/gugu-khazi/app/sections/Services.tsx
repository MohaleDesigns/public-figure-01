"use client";

import { Target, Mic, BookOpen, Users, ArrowRight, Briefcase } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Career Coaching",
    subtitle: "One-on-One & Group",
    description:
      "Personalised career coaching that helps you identify your strengths, align with your passions, and build a roadmap to a fulfilling career. Whether you are transitioning, advancing, or starting fresh — I guide you every step.",
    features: ["Strengths Assessment", "Career Roadmapping", "Interview Preparation", "Personal Branding"],
    cta: "Book a Session",
    href: "/contact",
  },
  {
    icon: Briefcase,
    title: "Executive Coaching",
    subtitle: "Leadership Development",
    description:
      "For senior leaders and executives navigating complex career decisions. I help you develop leadership presence, manage organisational change, and align your career with your values and vision.",
    features: ["Leadership Presence", "Strategic Thinking", "Stakeholder Management", "Career Transition"],
    cta: "Apply Now",
    href: "/contact",
  },
  {
    icon: Mic,
    title: "Public Speaking",
    subtitle: "Keynotes & Events",
    description:
      "Dynamic, research-backed keynotes on talent management, career mastery, and leadership. I bring two decades of global HR experience to every stage, inspiring audiences to take charge of their careers.",
    features: ["Corporate Keynotes", "Career Workshops", "Leadership Seminars", "University Guest Lectures"],
    cta: "Book Me to Speak",
    href: "/contact",
  },
  {
    icon: BookOpen,
    title: "Author & Educator",
    subtitle: "Books & Resources",
    description:
      "Author of Passion to Careers and Master Your Career. I create practical, research-informed content that demystifies career management and gives you actionable tools to build a career you love.",
    features: ["Passion to Careers", "Master Your Career", "Online Courses", "Career Toolkits"],
    cta: "Get the Books",
    href: "#books",
  },
  {
    icon: Users,
    title: "Talent Consulting",
    subtitle: "Organisations",
    description:
      "Strategic talent management consulting for organisations. From succession planning to leadership pipelines, I help companies build cultures where talent thrives and careers flourish.",
    features: ["Succession Planning", "Leadership Pipelines", "Talent Strategy", "Culture Design"],
    cta: "Let's Talk",
    href: "/contact",
  },
  {
    icon: Target,
    title: "CV & LinkedIn Review",
    subtitle: "Personal Branding",
    description:
      "Your personal brand is your career currency. I help professionals craft compelling CVs, optimise LinkedIn profiles, and build a personal brand that opens doors to aligned opportunities.",
    features: ["CV Rewriting", "LinkedIn Optimisation", "Personal Brand Strategy", "Portfolio Review"],
    cta: "Get Started",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-cream/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header — centered, more editorial */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="pill mb-6">What I Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Your Career,{" "}
            <span className="accent-gradient-text">Mastered</span>
          </h2>
          <p className="text-base text-muted leading-relaxed">
            From one-on-one coaching to corporate consulting and keynote speaking —
            I bring over two decades of global HR leadership to every engagement.
          </p>
        </div>

        {/* Services — 2-column staggered layout, different from TJ's 3x2 grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.title}
                className={`group relative p-7 sm:p-8 rounded-2xl card-soft ${
                  isEven ? "md:mt-0" : "md:mt-8"
                }`}
              >
                {/* Number indicator — unique to Gugu's design */}
                <span className="absolute top-6 right-6 text-[48px] font-black text-accent/[0.04] leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-accent-soft border border-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors duration-300">
                    <Icon size={22} className="text-accent" />
                  </div>

                  <h3 className="text-lg font-bold mb-1 text-foreground">{service.title}</h3>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-4">{service.subtitle}</p>

                  <p className="text-[15px] text-muted leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-[13px] text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark transition-colors group/link"
                  >
                    {service.cta}
                    <ArrowRight
                      size={15}
                      className="group-hover/link:translate-x-1 transition-transform duration-200"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
