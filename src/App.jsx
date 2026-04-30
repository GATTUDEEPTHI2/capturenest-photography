import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Portfolio />
      <Services />
      <WhyChoose />
      <Pricing />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;