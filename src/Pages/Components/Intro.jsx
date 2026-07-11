import { useEffect, useState } from "react";

const Intro = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const aboutMeData = [
    "Hi... Myself Sahil Yuvraj Kamble.",
    "My origin is Kolhapur, Maharashtra.",
    "Just finished my 3rd year at IIT Roorkee! I am truly passionate about technology. From my very first year, I have been exploring coding...starting with the basics of programming, then diving deep into data structures and algorithms and then full stack development. Currently, I am sharpening my skills through project and product-based learning, and also doing competitive programming to improve my problem solving skills.",
    "IIT Roorkee gives amazing exposure in different fields, and I try to make the most of it by taking part in coding events and hackathons. I have also contributed as a web developer for well-known club-TEDxIITRoorkee and NSS IIT Roorkee.",
    "Looking forward to build something impactful with like minded people.",
  ];

  return (
    <>
      <style>{`
        @keyframes bounceIn {
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      <div
        className={`max-w-full mx-auto rounded-[5px] p-4 sm:p-5 md:p-[1rem] shadow-[0_6px_32px_0_rgba(80,40,120,0.18)] text-base border border-indigo-950 bg-[#071A2C]/90 hover:bg-black/50 hover:border-violet-600 transition-all duration-300 cursor-pointer ${isMounted ? "animate-bounce-in" : "opacity-0"}`}
      >
        <ul className="list-none p-0 m-0">
          {aboutMeData.map((text, index) => (
            <li
              key={index}
              className={`relative text-[0.95rem] md:text-[1.15rem] leading-relaxed md:leading-[1.7] mb-3 md:mb-[1rem] pl-5 md:pl-[2.2rem] hover:text-violet-200 hover:translate-x-[10px] transition-all duration-300 ${isMounted ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <span className="content-[''] absolute left-0 top-[0.45rem] md:top-[0.65rem] w-[0.4rem] h-[0.4rem] md:w-[0.5rem] md:h-[0.5rem] rounded-full shadow-[0_0_8px_2px_#b16cea33] bg-violet-700"></span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Intro;
