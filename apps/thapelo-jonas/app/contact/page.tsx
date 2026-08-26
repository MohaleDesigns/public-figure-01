import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contact from "../sections/Contact";

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      <Navigation />
      <main className="flex-1 pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
