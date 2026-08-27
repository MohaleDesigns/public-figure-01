"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const services = [
  {
   
    title: "Career Coaching",
    subtitle: "One-on-One & Group",
    number: "01",
    description:
      "Personalised career coaching that helps you identify your strengths, align with your passions, and build a roadmap to a fulfilling career. Whether you are transitioning, advancing, or starting fresh — I guide you every step.",
    features: ["Strengths Assessment", "Career Roadmapping", "Interview Preparation", "Personal Branding"],
    cta: "Apply Now",
    href: "/contact",
  },
  {
   
    title: "Executive Coaching",
    subtitle: "Leadership Development",
    number: "02",
    description:
      "For senior leaders and executives navigating complex career decisions. I help you develop leadership presence, manage organisational change, and align your career with your values and vision.",
    features: ["Leadership Presence", "Strategic Thinking", "Stakeholder Management", "Career Transition"],
    cta: "Apply Now",
    href: "/contact",
  },
  {
    
    title: "Public Speaking",
    subtitle: "Keynotes & Events",
    number: "03",
    description:
      "Dynamic, research-backed keynotes on talent management, career mastery, and leadership. I bring two decades of global HR experience to every stage, inspiring audiences to take charge of their careers.",
    features: ["Corporate Keynotes", "Career Workshops", "Leadership Seminars", "University Guest Lectures"],
    cta: "Apply Now",
    href: "/contact",
  },
  {
    
    title: "Author & Educator",
    subtitle: "Books & Resources",
    number: "04",
    description:
      "Author of Passion to Careers and Master Your Career. I create practical, research-informed content that demystifies career management and gives you actionable tools to build a career you love.",
    features: ["Passion to Careers", "Master Your Career", "Online Courses", "Career Toolkits"],
    cta: "Apply Now",
    href: "#books",
  },
  {
    
    title: "Talent Consulting",
    subtitle: "Organisations",
    number: "05",
    description:
      "Strategic talent management consulting for organisations. From succession planning to leadership pipelines, I help companies build cultures where talent thrives and careers flourish.",
    features: ["Succession Planning", "Leadership Pipelines", "Talent Strategy", "Culture Design"],
    cta: "Apply Now",
    href: "/contact",
  },
  {
    
    title: "CV & LinkedIn Review",
    subtitle: "Personal Branding",
    number: "06",
    description:
      "Your personal brand is your career currency. I help professionals craft compelling CVs, optimise LinkedIn profiles, and build a personal brand that opens doors to aligned opportunities.",
    features: ["CV Rewriting", "LinkedIn Optimisation", "Personal Brand Strategy", "Portfolio Review"],
    cta: "Apply Now",
    href: "/contact",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-surface-cream/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Your Career,{" "}
            <span className="accent-gradient-text">Mastered</span>
          </h2>
          <p className="text-base text-muted leading-relaxed">
            From one-on-one coaching to corporate consulting and keynote speaking —
            I bring over two decades of global HR leadership to every engagement.
          </p>
        </div>

        {/* Services Accordion */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={service.title}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-surface border-accent/20 shadow-lg shadow-accent/5"
                    : "bg-surface/50 border-border hover:border-accent/15 hover:bg-surface"
                }`}
              >
                {/* Header — always visible */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center gap-4 sm:gap-6 p-5 sm:p-6 text-left cursor-pointer"
                >
                  {/* Number */}
                  <span className="hidden sm:block text-2xl font-black text-accent/20 leading-none select-none w-10 text-center">
                    {service.number}
                  </span>

                  {/* Title & Subtitle */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-foreground">{service.title}</h3>
                    <p className="text-xs text-accent font-semibold uppercase tracking-wider mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Chevron */}
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-accent/10" : ""
                    }`}
                  >
                    <ChevronDown size={16} className="text-accent" />
                  </div>
                </button>

                {/* Content — visible when open */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <div className="border-t border-border pt-5 sm:pt-6">
                      <p className="text-[15px] text-muted leading-relaxed mb-5">
                        {service.description}
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2.5 text-[13px] text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={service.href}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-full hover:bg-accent-dark transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group/link"
                      >
                        {service.cta}
                        <ArrowRight
                          size={15}
                          className="group-hover/link:translate-x-1 transition-transform duration-200"
                        />
                      </a>
                    </div>
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
