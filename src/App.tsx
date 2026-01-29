import Header from './components/blocks/Header';
import Hero from './components/blocks/Hero';
import CompanyLogos from './components/blocks/CompanyLogos';
import Support from './components/blocks/Support';
import Features from './components/blocks/Features';
import Benefits from './components/blocks/Benefits';
import Pricing from './components/blocks/Pricing';
import Testimonials from './components/blocks/Testimonials';
import Footer from './components/blocks/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <Support />
        <Features />
        <Benefits />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
