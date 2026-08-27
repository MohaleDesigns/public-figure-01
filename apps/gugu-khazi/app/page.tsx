import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Books from "./sections/Books";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import CTA from "./components/cta";
import Partners from "./components/partners";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Services />
        <Books />
        <About />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
