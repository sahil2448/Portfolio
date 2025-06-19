import "./App.css";
// import { useEffect } from "react";
import Navbar from "./Pages/Navbar";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import BackgroundVideo from "./Pages/BackgroundVideo";
import Footer from "./Pages/Footer";
import { ContactPage } from "./Pages/ContactPage";

export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // Adjust multiplier or inertia as needed
        multiplier: 1,
        inertia: 0.75,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (
    <div
      // ref={scrollRef}
      // data-scroll-container
      style={{
        backgroundColor: "rgba(7, 26, 47, 0.478)",
      }}
      className="scroll-smooth"
    >
      <BackgroundVideo />
      <Navbar />
      <section id="hero-section">
        <Hero />
        <hr className="w-[80%] mx-auto border-gray-600" />
      </section>
      <section
        id="about-section"
        style={{
          backgroundColor: "rgba(7, 26, 47, 0.578)",
        }}
      >
        <About />
        <hr className="w-[80%] mx-auto border-gray-600" />
      </section>
      <section
        id="projects-section"
        style={{
          backgroundColor: "rgba(7, 26, 47, 0.578)",
        }}
      >
        <Projects />
        <hr className="w-[80%] mx-auto border-gray-600" />
      </section>
      <section
        id="contact-section"
        style={{
          backgroundColor: "rgba(7, 26, 47, 0.578)",
        }}
      >
        <ContactPage />
        <hr className="w-[80%] mx-auto border-gray-600" />
      </section>
      <section
        id="footer-section"
        style={{
          backgroundColor: "rgba(7, 26, 47, 0.578)",
        }}
      >
        <Footer />
      </section>
    </div>
  );
}
