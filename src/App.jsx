import "./App.css";
// import { useEffect } from "react";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import BackgroundVideo from "./Pages/BackgroundVideo";
import Footer from "./Pages/Footer";
import { ContactPage } from "./Pages/ContactPage";

// import LocomotiveScroll from "locomotive-scroll";
export default function App() {
  // const scrollRef = useRef(null);

  return (
    <div
      style={{
        backgroundColor: "rgba(7, 26, 47, 0.878)",
      }}
    >
      <BackgroundVideo />
      <Navbar />
      <section id="hero-section">
        <Hero />
        <hr className="w-[80%] mx-auto border-gray-600" />
      </section>
      <section id="about-section">
        <About />
        <hr className="w-[80%] mx-auto border-gray-600" />
      </section>
      <section id="projects-section">
        <Projects />
        <hr className="w-[80%] mx-auto border-gray-600" />
      </section>
      <section id="contact-section">
        <ContactPage />
        <hr className="w-[80%] mx-auto border-gray-600" />
      </section>
      <section id="footer-section">
        <Footer />
      </section>
    </div>
  );
}
