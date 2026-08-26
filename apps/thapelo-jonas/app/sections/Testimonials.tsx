"use client";

const testimonials = [
  {
    name: "Nelson Mandela",
    role: "Former President of South Africa",
    text: "Coach TJ is one of the best speakers we have in South African.",
    image: "/president-nelson.jpg",
  },
  {
    name: "Thuso Motaung",
    role: "Radio presenter & Pastor",
    text: "It was a pleasure to work with Coach TJ, great guy.",
    image: "/testimonials/thuso-motaung.png",
  },
  {
    name: "Witness Mdaka",
    role: "Founder of AdPro",
    text: "Coach TJ is a rockstar when it comes to public speaking.",
    image: "/testimonials/witness-mdaka.png",
  },
  {
    name: "DJ Sbu",
    role: "Founder of MoFaya",
    text: "I have shared a stage with him and I enjoyed his humour.",
    image: "/testimonials/dj-sbu.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-surface/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.05),_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-light text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Lives <span className="gold-gradient-text">Transformed</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            Real stories from real people whose lives have been touched by coaching, speaking, and the principles shared through my work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group flex flex-col bg-white shadow-lg overflow-hidden rounded-md"
            >
              {/* Image + Quote Area */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Quote overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white text-sm italic leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
              </div>

              {/* Name + Role Bar */}
              <div className="bg-[#c8b99a] px-5 py-4">
                <div className="text-[#1a1a1a] font-bold text-sm uppercase tracking-wide">
                  {t.name}
                </div>
                <div className="text-[#1a1a1a]/70 text-xs mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
