import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Problems from '@/components/Problems';
import Portfolio from '@/components/Portfolio';
import Differentiators from '@/components/Differentiators';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <WhatsAppButton />
      <Header />
      <main>
        <Hero />
        <Services />
        <Problems />
        <Portfolio />
        <Differentiators />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
