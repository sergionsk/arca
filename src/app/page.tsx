// app/page.tsx
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ForWhom from '@/components/sections/ForWhom';
import Portfolio from '@/components/sections/Portfolio';
import HowWeWork from '@/components/sections/HowWeWork';
import WhyUs from '@/components/sections/WhyUs';
import Pricing from '@/components/sections/Pricing';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <Portfolio />
        <HowWeWork />
        <WhyUs />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}