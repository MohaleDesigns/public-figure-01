import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import About from "../sections/About";
import Schedule from "../sections/Schedule";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      <Navigation />
      <main className="flex-1 pt-24">
        <About />
        <Schedule />
      </main>
      <Footer />
    </div>
  );
}
