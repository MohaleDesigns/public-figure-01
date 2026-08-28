import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contact from "../sections/Contact";

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      <Navigation />
      <main className="flex-1">
        {/* Banner */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/banner.png')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-2">
                Contact Us
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Ready to take the next step in your career? Get in touch — whether you are looking for
                coaching, speaking engagements, or corporate consulting, we would love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
