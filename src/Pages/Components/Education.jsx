import { useRef, useEffect } from "react";
import gsap from "gsap";

const Education = ({ level, degree, year, name }) => {
  const educationRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      educationRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 1,
        rotationY: -10,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );

    educationRef.current.addEventListener("mouseenter", () => {
      gsap.to(educationRef.current, {
        y: -8,
        scale: 1,
        duration: 0.05,
      });
    });

    educationRef.current.addEventListener("mouseleave", () => {
      gsap.to(educationRef.current, {
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.1,
      });
    });

    return () => {
      if (educationRef.current) {
        educationRef.current.removeEventListener("mouseenter", () => {});
        educationRef.current.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={educationRef}
        className="flex flex-col p-3 rounded-md w-[17rem] bg-[#071A2C]/90 hover:bg-black/50 lg:min-w-[23rem] max-w-[30rem] min-h-[30vh] md:min-h-[35vh] lg:min-h-[25vh] border border-indigo-950 hover:border-violet-600 transition-all duration-300 cursor-pointer"
      >
        <li className="text-violet-500 font-semibold">{level}</li>
        <p className="text-base mt-2 font-medium">{name}</p>
        <p className="text-base mt-1">{degree}</p>
        <p className="text-base mt-1 text-gray-400">{year}</p>
      </div>
    </div>
  );
};

export default Education;
