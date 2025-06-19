import { FaCheckCircle } from "react-icons/fa";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Achievements = () => {
  const achievementsRef = useRef(null);

  const arr = [
    "2x Participation in hackathons",
    "Solved 250+ problems on Leetcode",
    "Rated 1016 at Codeforces",
    "Contributed to web developer vertical of TEDxIITRoorkee (Built complete website)",
    "Contributed to public github repository of Social summit website of NSS IIT Roorkee",
    "Participated in Snap syntax event in Cognizance'24 technical fest",
    "Worked as a marketing team member of NSS IIT Roorkee",
  ];

  useEffect(() => {
    gsap.fromTo(
      achievementsRef.current.children,
      {
        x: -100,
        opacity: 0,
        rotationY: -15,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }
    );

    // Add hover animations
    const items = achievementsRef.current.children;
    Array.from(items).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          x: 10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          x: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      Array.from(items).forEach((item) => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section className="lg:p-3 w-full flex flex-col items-start">
      <ul ref={achievementsRef} className="space-y-4">
        {arr.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start bg-[#071A2C]/90 hover:bg-black/50 gap-3 group rounded-lg p-3 transition-all duration-300 border border-sky-950 hover:border-violet-600 cursor-pointer"
          >
            <FaCheckCircle className="mt-1 text-violet-600 transition-all duration-200 w-0 sm:w-[1vw] group-hover:text-violet-400" />
            <span className="text-base group-hover:text-violet-100 transition-colors duration-200">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;