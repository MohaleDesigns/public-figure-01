import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import About from "../sections/About";

export default function AboutPage() {
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
                About Us
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Discover the story, mission, and values behind Gugu Khazi — a global career coach,
                author, and speaker dedicated to helping you build a career aligned with your passion.
              </p>
            </div>
          </div>
        </section>

        <About />
      </main>
      <Footer />
    </div>
  );
}
