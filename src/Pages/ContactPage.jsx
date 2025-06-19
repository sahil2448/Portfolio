import { useRef, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

export const ContactPage = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      {
        y: -50,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Form animation
    gsap.fromTo(
      formRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Form fields animation
    const formFields = formRef.current.querySelectorAll('input, textarea, button');
    gsap.fromTo(
      formFields,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);
    setSent(false);

    // Button click animation
    const submitButton = e.target.querySelector('button[type="submit"]');
    gsap.to(submitButton, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    emailjs
      .sendForm(
        "service_j1ctd4i",
        "template_p8fz13h",
        form.current,
        "QgX-s_IwezohJE97p"
      )
      .then((result) => {
        setSent(true);
        form.current.reset();
        
        // Success animation
        gsap.fromTo(submitButton, {
          backgroundColor: "#10b981",
          scale: 1.05,
        }, {
          backgroundColor: "",
          scale: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      })
      .catch((error) => {
        setError("Failed to send message. Please try again.");
      });
  };

  // Close alert manually
  const handleClose = () => {
    setSent(false);
    setError(null);
  };

  let handleSent = () => {
    return (
      <div className="toast toast-end">
        <div className="alert alert-success flex justify-between animate-pulse">
          <span>Message sent successfully.</span>
          <CiSquareRemove
            onClick={handleClose}
            className="cursor-pointer size-10 hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>
    );
  };
  
  let handleError = () => {
    return (
      <div className="toast toast-end">
        <div className="alert alert-error flex justify-between animate-pulse">
          <span>Some error occurred.</span>
          <CiSquareRemove 
            onClick={handleClose} 
            className="cursor-pointer hover:scale-110 transition-transform duration-200" 
          />
        </div>
      </div>
    );
  };

  return (
    <div ref={sectionRef} className="contact-form-container min-h-screen flex flex-col justify-center items-center py-16 px-4">
      <h1 
        ref={titleRef}
        className="relative text-5xl font-bold text-center font-heading bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
      >
        Contact me
      </h1>
      {(sent && handleSent()) || (error && handleError())}
      <div className="w-full max-w-2xl py-12">
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ backgroundColor: "rgba(4, 50, 86, 0.521)" }}
          className="contact-form rounded-xl shadow-lg p-8 border border-white/20 hover:border-violet-500/40 transition-all duration-300"
        >
          <div ref={formRef} className="space-y-6">
            <div className="form-group">
              <input
                className="w-full p-3 rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 outline-none hover:border-violet-400"
                style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="w-full p-3 rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 outline-none hover:border-violet-400"
                style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Your Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                className="w-full p-3 rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 outline-none hover:border-violet-400"
                style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
                type="tel"
                name="user_phone"
                id="user_phone"
                placeholder="Your Contact Number"
              />
            </div>
            <div className="form-group">
              <input
                className="w-full p-3 rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 outline-none hover:border-violet-400"
                style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject Of Messaging"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="w-full p-3 rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 outline-none resize-vertical hover:border-violet-400"
                name="message"
                id="message"
                rows="6"
                placeholder="Your Message Goes Here..."
                required
                style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary w-full hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};