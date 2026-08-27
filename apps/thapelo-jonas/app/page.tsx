import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Book from "./sections/Book";
import Schedule from "./sections/Schedule";
import Media from "./sections/Media";
import Testimonials from "./sections/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <div>
          {/* Highlights Grid — Vusi-style horizontal panels (full width) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0">
            {[
              {
                topLabel: "EDUCATION",
                image: "/highlights/education.png",
                bottomLabel: "UNIVERSITY OF THE FREE STATE",
                description: "BCom Honours in Business Management & BCom in Marketing from the University of the Free State.",
              },
              {
                topLabel: "CORPORATE",
                image: "/highlights/corparate.png",
                bottomLabel: "DIRECTOR",
                description: "Director at one of South Africa's largest paper merchant companies, with multiple income streams.",
              },
              {
                topLabel: "MEDIA",
                image: "/highlights/media.png",
                bottomLabel: "LESEDI FM",
                description: "Regular contributor to the Monate Breakfast Show on Lesedi FM (SABC), reaching thousands daily.",
              },
              {
                topLabel: "FITNESS",
                image: "/highlights/fitness.png",
                bottomLabel: "16KG LOST",
                description: "Shed 16kg in just 3 months in 2018. A passionate fitness enthusiast who walks the talk.",
              },
              {
                topLabel: "FAMILY",
                image: "/highlights/family.png",
                bottomLabel: "HUSBAND & FATHER",
                description: "Devoted husband to Mampoi and proud father to Thapelo Jnr and Tlotliso Jonas.",
              },
              {
                topLabel: "COMMUNITY",
                image: "/highlights/community.png",
                bottomLabel: "PASTOR",
                description: "Pastor and community leader, guiding people in faith, family, and financial freedom.",
              },
            ].map((panel) => (
              <div
                key={panel.topLabel}
                className="group flex flex-col overflow-hidden"
              >
                {/* Top label */}
                <div className="bg-[#c8b99a] px-3 py-2 text-center">
                  <span className="text-[10px] font-bold text-[#1a1a1a] uppercase tracking-widest">
                    {panel.topLabel}
                  </span>
                </div>

                {/* Image + description at bottom like testimonial */}
                <div className="relative aspect-3/4 overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={panel.image}
                    alt={panel.topLabel}
                    width={100}
                    height={100}
                    className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Gradient overlay + description on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm italic leading-relaxed">
                      &ldquo;{panel.description}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom label */}
                <div className="bg-[#c8b99a] px-3 py-3 text-center">
                  <span className="text-[10px] font-bold text-[#1a1a1a] uppercase tracking-wider">
                    {panel.bottomLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Services />
        <Book />
        <Schedule />
        <Media />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
