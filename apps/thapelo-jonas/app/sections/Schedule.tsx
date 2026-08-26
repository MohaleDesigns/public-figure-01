"use client";

import { Radio, CalendarDays, MapPin, Clock, Ticket, Users, Mic2, BookOpenCheck } from "lucide-react";

const regularSlots = [
  {
    icon: Radio,
    title: "Monate Breakfast Show",
    platform: "Lesedi FM (SABC)",
    schedule: "Weekday Mornings",
    description: "Join me on air as we discuss life, money, relationships, and everything in between. Real talk for real people.",
    action: "Tune In",
    href: "https://www.lesedifm.co.za",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    icon: Mic2,
    title: "Live Speaking Events",
    platform: "Nationwide",
    schedule: "Monthly",
    description: "From corporate conferences to church gatherings and school assemblies — I bring energy and wisdom to every stage.",
    action: "Book Me",
    href: "/contact",
    color: "from-gold/20 to-amber-500/20",
  },
  {
    icon: BookOpenCheck,
    title: "Coaching Sessions",
    platform: "Online & In-Person",
    schedule: "By Appointment",
    description: "One-on-one and group coaching sessions tailored to your goals. Limited slots available each month.",
    action: "Apply Now",
    href: "/contact",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Users,
    title: "Workshops & Seminars",
    platform: "Various Venues",
    schedule: "Quarterly",
    description: "Immersive half-day and full-day workshops on money mastery, leadership, marriage, and personal development.",
    action: "Get Updates",
    href: "/contact",
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

const upcomingEvents = [
  {
    date: "Coming Soon",
    month: "TBD",
    title: "Made to Win Book Tour",
    location: "Johannesburg, Durban, Cape Town",
    time: "Multiple Dates",
    type: "Book Launch & Speaking",
    status: "Announcing Soon",
  },
  {
    date: "Every Weekday",
    month: "Live",
    title: "Monate Breakfast Show",
    location: "Lesedi FM Studios / On Air",
    time: "06:00 – 09:00",
    type: "Radio Show",
    status: "On Air",
  },
  {
    date: "Monthly",
    month: "Ongoing",
    title: "Wealth & Purpose Masterclass",
    location: "Bloemfontein & Online",
    time: "09:00 – 13:00",
    type: "Workshop",
    status: "Booking Open",
  },
  {
    date: "By Appt",
    month: "Now",
    title: "1-on-1 Life Coaching",
    location: "Online / In-Person",
    time: "Flexible",
    type: "Coaching",
    status: "Limited Slots",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-24 lg:py-32 bg-surface/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.06),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-sm font-medium mb-4">
            My Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Where to <span className="gold-gradient-text">Catch Me</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            From weekday radio shows to weekend workshops and one-on-one coaching — here is how you can connect with me throughout the year.
          </p>
        </div>

        {/* Regular Slots */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {regularSlots.map((slot) => {
            const Icon = slot.icon;
            return (
              <div
                key={slot.title}
                className="group p-6 rounded-2xl bg-surface-light border border-gold/10 gold-border-hover card-glow"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${slot.color} flex items-center justify-center mb-4`}
                >
                  <Icon size={24} className="text-gold-light" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{slot.title}</h3>
                <p className="text-sm text-gold-light font-medium mb-3">
                  {slot.platform}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted mb-3">
                  <Clock size={14} />
                  {slot.schedule}
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {slot.description}
                </p>
                <a
                  href={slot.href}
                  target={slot.href.startsWith("http") ? "_blank" : undefined}
                  rel={slot.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light hover:text-gold transition-colors"
                >
                  {slot.action}
                  <Ticket size={14} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Upcoming Events Cards */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">
            Upcoming <span className="gold-gradient-text">Events</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="group p-6 rounded-2xl bg-surface-light border border-gold/10 gold-border-hover card-glow flex flex-col"
              >
                {/* Date Badge */}
                <div className="w-full h-20 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex flex-col items-center justify-center mb-4">
                  <span className="text-xs text-gold-light font-medium uppercase">
                    {event.month}
                  </span>
                  <span className="text-xl font-bold gold-gradient-text">
                    {event.date}
                  </span>
                </div>

                {/* Status */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      event.status === "On Air"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : event.status === "Booking Open"
                        ? "bg-gold/10 text-gold-light border border-gold/20"
                        : event.status === "Limited Slots"
                        ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-semibold text-lg mb-3">{event.title}</h4>

                {/* Details */}
                <div className="space-y-2 text-sm text-muted mb-5 flex-grow">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-gold-light flex-shrink-0" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gold-light flex-shrink-0" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-gold-light flex-shrink-0" />
                    {event.type}
                  </span>
                </div>

                {/* Action */}
                <a
                  href="/contact"
                  className="block text-center px-4 py-2.5 text-sm font-medium bg-gold/10 text-gold-light border border-gold/20 rounded-full hover:bg-gold/20 transition-colors"
                >
                  {event.status === "On Air"
                    ? "Listen Live"
                    : event.status === "Booking Open" || event.status === "Limited Slots"
                    ? "Reserve Spot"
                    : "Notify Me"}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border border-gold/20 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Want Me at Your <span className="gold-gradient-text">Event?</span>
          </h3>
          <p className="text-muted max-w-xl mx-auto mb-6">
            I am available for speaking engagements, workshops, and corporate training sessions. Let us discuss how I can bring value to your audience.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-background font-semibold rounded-full hover:bg-gold-light transition-all hover:scale-105 shadow-lg shadow-gold/20"
          >
            <Mic2 size={20} />
            Book Me to Speak
          </a>
        </div>
      </div>
    </section>
  );
}
