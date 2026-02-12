import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <PortfolioGrid />
        <About />
        <Services />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
