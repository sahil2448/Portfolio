import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CheckCircleIcon = ({ className }) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
  </svg>
);

const Experience = ({ org, position, timeline, description }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInRotateX {
          0% { 
            opacity: 0; 
            transform: translateX(-100px) rotateY(-15deg) scale(0.95); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) rotateY(0) scale(1); 
          }
        }
        @keyframes slideInX {
          0% { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        .animate-exp-container {
          /* Mimics GSAP's back.out(1.7) */
          animation: slideInRotateX 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-exp-item {
          opacity: 0;
          animation: slideInX 0.5s ease-out forwards;
        }
      `}</style>

      <div
        className={`w-full sm:w-[80vw] lg:w-[50vw] p-4 md:p-3 rounded-md border bg-[#071A2C]/90 border-indigo-950 transition-all duration-300 cursor-pointer 
        hover:bg-black/50 hover:border-violet-600 hover:-translate-y-1 
        ${isMounted ? "animate-exp-container" : "opacity-0"}`}
      >
        <div className="flex flex-col md:flex-row justify-between gap-1 md:gap-0">
          <div className="flex gap-3 text-violet-500">
            {/* Changed <li> to <span> for semantic HTML correctness */}
            <span className="text-lg md:text-base font-bold">{org}</span>
          </div>
          <div className="text-sm md:text-base text-gray-400">{timeline}</div>
        </div>

        <i className="text-violet-300 font-medium text-base block mt-1 md:mt-0">
          {position}
        </i>

        <div className="mt-3 md:mt-4">
          {description.map((item, idx) => {
            return (
              <div
                className={`description-item text-[0.95rem] md:text-base ml-1 md:ml-4 mb-3 md:mb-2 flex items-start gap-2 md:gap-3 ${isMounted ? "animate-exp-item" : "opacity-0"}`}
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                key={idx}
              >
                <div className="mt-1 md:mt-1.5 flex-shrink-0">
                  {/* Made the icon visible on mobile (w-3.5) and preserved your w-[1vw] for desktop sizes */}
                  <CheckCircleIcon className="text-violet-600 transition-all duration-200 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[1vw] md:h-[1vw]" />
                </div>
                <p className="leading-relaxed md:leading-normal">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Experience.propTypes = {
  org: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  techStack: PropTypes.string,
  timeline: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;
