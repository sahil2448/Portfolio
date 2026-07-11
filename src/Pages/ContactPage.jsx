import { useRef, useState, useEffect } from "react";
// import emailjs from "@emailjs/browser"; // Uncomment this in your actual project

const CloseIcon = ({ onClick, className }) => (
  <svg
    onClick={onClick}
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    ></path>
  </svg>
);

export const ContactPage = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  // Replaces ScrollTrigger: detects when the section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);
    setSent(false);
    setIsSending(true);

    /* =========================================
    UNCOMMENT THIS BLOCK FOR YOUR ACTUAL APP
    =========================================
    emailjs
      .sendForm(
        "service_j1ctd4i",
        "template_p8fz13h",
        form.current,
        "QgX-s_IwezohJE97p"
      )
      .then(() => {
        setSent(true);
        setIsSending(false);
        form.current.reset();
      })
      .catch((error) => {
        setError("Failed to send message. Please try again.", error);
        setIsSending(false);
      });
    */

    // Simulated network request for Canvas preview
    setTimeout(() => {
      setSent(true);
      setIsSending(false);
      if (form.current) form.current.reset();
    }, 1500);
  };

  const handleClose = () => {
    setSent(false);
    setError(null);
  };

  let handleSent = () => {
    return (
      // Changed to toast-bottom for mobile, toast-end for sm+ screens
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-4 sm:bottom-4 z-50 w-[90%] sm:w-auto">
        <div className="bg-emerald-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-between animate-pulse">
          <span className="font-medium mr-4">Message sent successfully!</span>
          <CloseIcon
            onClick={handleClose}
            className="cursor-pointer w-6 h-6 hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>
    );
  };

  let handleError = () => {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-4 sm:bottom-4 z-50 w-[90%] sm:w-auto">
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-between animate-pulse">
          <span className="font-medium mr-4">
            {error || "Some error occurred."}
          </span>
          <CloseIcon
            onClick={handleClose}
            className="cursor-pointer w-6 h-6 hover:scale-110 transition-transform duration-200"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes slideDownFade {
          0% { opacity: 0; transform: translateY(-50px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(100px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeInStagger {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-title {
          animation: slideDownFade 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-form-container {
          animation: slideUpFade 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-form-field {
          opacity: 0;
          animation: fadeInStagger 0.5s ease-out forwards;
        }
      `}</style>

      <div
        ref={sectionRef}
        // Reduced vertical padding on mobile (py-10) vs desktop (md:py-16)
        className="contact-form-container min-h-screen flex flex-col justify-center items-center py-10 sm:py-12 md:py-16 px-4 sm:px-6"
      >
        <h1
          // Scaled typography: smaller on mobile, 5xl on desktop
          className={`relative text-3xl sm:text-4xl md:text-5xl mb-4 font-bold text-center font-heading bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent ${isVisible ? "animate-title" : "opacity-0"}`}
        >
          Contact me
        </h1>

        {(sent && handleSent()) || (error && handleError())}

        {/* Adjusted py-6 on mobile, py-12 on desktop */}
        <div className="w-full max-w-2xl py-6 sm:py-8 md:py-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{ backgroundColor: "rgba(4, 50, 86, 0.521)" }}
            // Responsive padding for the form card
            className={`contact-form rounded-xl shadow-lg p-5 sm:p-7 md:p-8 border border-white/20 hover:border-violet-500/40 transition-all duration-300 ${isVisible ? "animate-form-container" : "opacity-0"}`}
          >
            {/* Reduced gap between fields on mobile */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              {[
                {
                  type: "text",
                  name: "user_name",
                  id: "user_name",
                  placeholder: "Your Full Name",
                  required: true,
                },
                {
                  type: "email",
                  name: "user_email",
                  id: "user_email",
                  placeholder: "Your Email Address",
                  required: true,
                },
                {
                  type: "tel",
                  name: "user_phone",
                  id: "user_phone",
                  placeholder: "Your Contact Number",
                  required: false,
                },
                {
                  type: "text",
                  name: "subject",
                  id: "subject",
                  placeholder: "Subject Of Messaging",
                  required: true,
                },
              ].map((field, idx) => (
                <div
                  key={field.name}
                  className={`form-group ${isVisible ? "animate-form-field" : "opacity-0"}`}
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <input
                    className="w-full p-2.5 sm:p-3 text-[0.95rem] sm:text-base rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 outline-none hover:border-violet-400 text-white placeholder-gray-400"
                    style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
                    type={field.type}
                    name={field.name}
                    id={field.id}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              ))}

              <div
                className={`form-group ${isVisible ? "animate-form-field" : "opacity-0"}`}
                style={{ animationDelay: "0.6s" }}
              >
                <textarea
                  className="w-full p-2.5 sm:p-3 text-[0.95rem] sm:text-base rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 outline-none resize-y min-h-[100px] hover:border-violet-400 text-white placeholder-gray-400"
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Your Message Goes Here..."
                  required
                  style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                style={{ animationDelay: "0.7s" }}
                className={`w-full py-3 sm:py-3.5 mt-2 rounded-lg font-semibold text-white transition-all duration-300 
                  ${isSending ? "bg-indigo-400 cursor-not-allowed" : "bg-violet-600 hover:bg-violet-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/30"} 
                  ${sent ? "bg-emerald-500 hover:bg-emerald-600" : ""}
                  ${isVisible ? "animate-form-field" : "opacity-0"}`}
              >
                {isSending
                  ? "Sending..."
                  : sent
                    ? "Message Sent!"
                    : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
