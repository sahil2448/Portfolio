import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Contact = ({ type, icon, text, link }) => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
        rotationX: -15,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );

    // Hover animations
    contactRef.current.addEventListener('mouseenter', () => {
      gsap.to(contactRef.current, {
        y: -5,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    contactRef.current.addEventListener('mouseleave', () => {
      gsap.to(contactRef.current, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    return () => {
      if (contactRef.current) {
        contactRef.current.removeEventListener('mouseenter', () => {});
        contactRef.current.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  return (
    <div
      ref={contactRef}
      className="flex flex-col gap-4 p-3 bg-[#071A2C]/90 hover:bg-black/50 rounded-md w-[18rem] lg:min-w-[15rem] max-w-[30rem] min-h-[7rem] border border-indigo-950 hover:border-violet-600 transition-all duration-300 cursor-pointer"
    >
      <li className="text-lg text-violet-500">{type}</li>
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt=""
          className="size-6 shadow-md bg-violet-800 rounded-lg shadow-violet-800 transition-transform duration-200 hover:scale-110"
        />
        <p className="text-base hover:underline hover:text-violet-500 transition-all duration-300">
          <a href={link} target="_blank">
            {text}
          </a>
        </p>
      </div>
    </div>
  );
};

Contact.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Contact;