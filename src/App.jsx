import { useEffect } from "react";
// import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/HeroSection";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}