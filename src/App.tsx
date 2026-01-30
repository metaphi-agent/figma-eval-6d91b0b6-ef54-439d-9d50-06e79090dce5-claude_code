import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Support from './components/Support';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Companies />
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
