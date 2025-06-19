import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Experience = ({ org, position, techStack, timeline, description }) => {
  const experienceRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      experienceRef.current,
      {
        x: -100,
        opacity: 0,
        rotationY: -15,
        scale: 0.95,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );

    // Animate description items
    const descriptionItems = experienceRef.current.querySelectorAll('.description-item');
    gsap.fromTo(
      descriptionItems,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    // Hover animations
    experienceRef.current.addEventListener('mouseenter', () => {
      gsap.to(experienceRef.current, {
        y: -5,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    experienceRef.current.addEventListener('mouseleave', () => {
      gsap.to(experienceRef.current, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    return () => {
      if (experienceRef.current) {
        experienceRef.current.removeEventListener('mouseenter', () => {});
        experienceRef.current.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  return (
    <div
      ref={experienceRef}
      className="w-[80vw] sm:w-[50vw] lg:w-[50vw] p-3 rounded-md border bg-[#071A2C]/90 hover:bg-black/50 border-indigo-950 hover:border-violet-600 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex gap-3 text-violet-500">
          <li>
            <b>{org}</b>
          </li>
        </div>
        <div className="text-gray-400">{timeline}</div>
      </div>

      <i className="text-violet-300 font-medium">{position}</i>
      <div className="mt-3">
        {description.map((item, idx) => {
          return (
            <div
              className="description-item text-base ml-4 mb-2 flex items-start gap-3"
              key={idx}
            >
              <p>
                <FaCheckCircle className="mt-1 text-violet-600 transition-all duration-200 w-0 sm:w-[1vw]" />
              </p>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Experience.propTypes = {
  org: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;