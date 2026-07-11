import { useEffect, useState } from "react";

const Education = ({ level, degree, year, name }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideUpRotate {
          0% { 
            opacity: 0; 
            transform: translateY(50px) rotateY(-10deg); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) rotateY(0); 
          }
        }
        .animate-slide-up-rotate {
          /* cubic-bezier(0.175, 0.885, 0.32, 1.275) precisely matches GSAP's back.out(1.7) */
          animation: slideUpRotate 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      <div>
        <div
          className={`flex flex-col p-4 md:p-5 rounded-md w-full sm:w-[17rem] lg:min-w-[23rem] max-w-[30rem] min-h-[30vh] md:min-h-[35vh] lg:min-h-[25vh] bg-[#071A2C]/90 border border-indigo-950 transition-all duration-300 cursor-pointer 
          hover:bg-black/50 hover:border-violet-600 hover:-translate-y-2 
          ${isMounted ? "animate-slide-up-rotate" : "opacity-0"}`}
        >
          {/* Changed <li> to <span> since it's not inside a <ul> or <ol> */}
          <span className="text-violet-500 font-semibold">{level}</span>
          <p className="text-lg mt-2 font-medium">{name}</p>
          <p className="text-base mt-1">{degree}</p>
          <p className="text-sm mt-1 text-gray-400">{year}</p>
        </div>
      </div>
    </>
  );
};

export default Education;
