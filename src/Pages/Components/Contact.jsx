import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Contact = ({ type, icon, text, link }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes contactSlideUp {
          0% { 
            opacity: 0; 
            transform: translateY(50px) scale(0.9) rotateX(-15deg); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateX(0); 
          }
        }
        .animate-contact-card {
          /* Matches GSAP's back.out(1.7) */
          animation: contactSlideUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      <div
        className={`flex flex-col gap-3 md:gap-4 p-4 md:p-3 bg-[#071A2C]/90 border border-indigo-950 rounded-md w-full sm:w-[18rem] lg:min-w-[15rem] max-w-[30rem] min-h-[6rem] md:min-h-[7rem] transition-all duration-300 cursor-pointer 
        hover:bg-black/50 hover:border-violet-600 hover:-translate-y-[5px]
        ${isMounted ? "animate-contact-card" : "opacity-0"}`}
      >
        {/* Changed <li> to <span> for semantic HTML correctness */}
        <span className="text-base md:text-lg text-violet-500 font-semibold">
          {type}
        </span>

        <div className="flex items-center gap-3 md:gap-4">
          <img
            src={icon}
            alt={`${type} icon`}
            // Mobile sizes are w-5 h-5, while desktop rigidly stays w-6 h-6 (size-6)
            className="w-5 h-5 md:w-6 md:h-6 shadow-md bg-violet-800 rounded-lg shadow-violet-800 transition-transform duration-200 hover:scale-110 object-contain"
          />
          <p className="text-[0.95rem] md:text-base hover:underline hover:text-violet-500 transition-all duration-300 truncate">
            {/* Added rel="noopener noreferrer" for security when using target="_blank" */}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {text}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

Contact.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Contact;
