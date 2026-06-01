import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Skills from './components/Skills';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Skills />
      <Quote variant="quote2" />
      <About />
      <Quote variant="quote1" />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
