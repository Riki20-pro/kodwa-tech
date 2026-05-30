import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ServicesShowcase />
      <PortfolioPreview />
      <Faq />
    </main>
  );
}
