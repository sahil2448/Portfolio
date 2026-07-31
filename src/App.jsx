import "./App.css";
// import { useEffect } from "react";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import BackgroundVideo from "./Pages/BackgroundVideo";
import Footer from "./Pages/Footer";
import { ContactPage } from "./Pages/ContactPage";

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "rgba(7, 26, 47, 0.478)",
      }}
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
