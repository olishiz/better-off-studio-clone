import { Benefits } from "@/components/sites/betteroff/Benefits";
import { CookieBanner } from "@/components/sites/betteroff/CookieBanner";
import { CultureSlideshow } from "@/components/sites/betteroff/CultureSlideshow";
import { Faq } from "@/components/sites/betteroff/Faq";
import { Feed } from "@/components/sites/betteroff/Feed";
import { Footer } from "@/components/sites/betteroff/Footer";
import { Header } from "@/components/sites/betteroff/Header";
import { Hero } from "@/components/sites/betteroff/Hero";
import { Intro } from "@/components/sites/betteroff/Intro";
import { Plans } from "@/components/sites/betteroff/Plans";
import { Projects } from "@/components/sites/betteroff/Projects";
import { Services } from "@/components/sites/betteroff/Services";
import { Testimonials } from "@/components/sites/betteroff/Testimonials";

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
        <CultureSlideshow />
        <Benefits />
        <Plans />
        <Faq />
        <Feed />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
