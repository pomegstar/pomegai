import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deepBlack text-white">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
