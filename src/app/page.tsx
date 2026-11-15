import { Approach } from "@/components/sites/the-shiz/Approach";
import { Contact } from "@/components/sites/the-shiz/Contact";
import { Feed } from "@/components/sites/the-shiz/Feed";
import { Footer } from "@/components/sites/the-shiz/Footer";
import { Header } from "@/components/sites/the-shiz/Header";
import { Hero } from "@/components/sites/the-shiz/Hero";
import { Intro } from "@/components/sites/the-shiz/Intro";
import { Projects } from "@/components/sites/the-shiz/Projects";
import { Services } from "@/components/sites/the-shiz/Services";
import { Showreel } from "@/components/sites/the-shiz/Showreel";
import { Testimonials } from "@/components/sites/the-shiz/Testimonials";
import { WhatsAppFloat } from "@/components/sites/the-shiz/WhatsAppFloat";

export default function Home() {
  return (
    <div id="top" className="relative w-full">
      <Intro />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Testimonials />
        <Showreel />
        <Approach />
        <Contact />
        <Feed />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
