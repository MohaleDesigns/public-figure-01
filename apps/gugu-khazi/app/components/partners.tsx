"use client";

import Image from "next/image";

const partners = [
    {
        title: "Absa",
        image: "/images/partners/absa.png",
    },
    {
        title: "FNB",
        image: "/images/partners/fnb.png",
    },
    {
        title: "Impact",
        image: "/images/partners/impact.png",
    },
    {
        title: "Momentum",
        image: "/images/partners/momentum.png",
    },
    {
        title: "Ninety One",
        image: "/images/partners/ninety-one.png",
    },
    {
        title: "Old Mutual",
        image: "/images/partners/old-mutual.png",
    },
    {
        title: "Sanlam",
        image: "/images/partners/sanlam.png",
    },
    {
        title: "Spar Pharmacy",
        image: "/images/partners/spar-pharmacy.png",
    },
    // {
    //     title: "We Sell Property",
    //     image: "/images/partners/we-sell-property.png",
    // },
    {
        title: "Women In Tech Global",
        image: "/images/partners/women-in-tech-global.png",
    },
    {
        title: "Woolworths",
        image: "/images/partners/woolworths.png",
    },
];

export default function Partners() {
    return (
        <section
            className="relative py-20 flex items-center justify-center overflow-hidden bg-[#0B1020]">
            {/* Subtle dot pattern overlay */}
            <div className="absolute inset-0 dot-pattern opacity-5" />

            {/* Decorative blurred circles */}
            <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-linear-to-br from-accent/5 to-accent/2 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight animate-fade-in-up animate-delay-1 mb-2 mx-auto text-center">
                        <span className="accent-gradient-text">Trusted by leading </span>
                        <span className="text-white/50">organisations</span>
                    </h2>
                    <p className="text-base text-muted leading-relaxed">
                        Organisations that are <span className="accent-gradient-text">100%</span> behind us, at all times.
                    </p>
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-x-10 gap-y-12">
                    {partners.map((item) => (
                        <div
                            key={item.title}
                            className="relative h-16 sm:h-20 lg:h-24 w-full"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(min-width: 1024px) 10vw, (min-width: 768px) 20vw, (min-width: 640px) 25vw, 33vw"
                                className="object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
