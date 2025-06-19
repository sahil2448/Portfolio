import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Skills = ({ name, tech }) => {
  const skillsRef = useRef(null);
  const titleRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate title
    tl.fromTo(
      titleRef.current,
      {
        y: -30,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );

    // Animate icons with stagger
    tl.fromTo(
      iconsRef.current.children,
      {
        y: 50,
        opacity: 0,
        scale: 0,
        rotation: 180,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );

    // Add hover animations to each icon
    const icons = iconsRef.current.children;
    Array.from(icons).forEach((icon) => {
      const img = icon.querySelector('img');
      
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          y: -10,
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(img, {
          scale: 1.2,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(img, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      Array.from(icons).forEach((icon) => {
        icon.removeEventListener('mouseenter', () => {});
        icon.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div ref={skillsRef} className="flex flex-col items-center gap-4">
      <h1 ref={titleRef} className="text-2xl font-bold text-violet-400">{name}</h1>
      <div 
        ref={iconsRef}
        className="flex flex-wrap max-w-[40rem] gap-4 justify-center border-y-2 border-sky-950 py-4"
      >
        {tech.map((t) => (
          <div
            key={t.name}
            style={{
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "5rem",
              minHeight: "5rem",
              height: "fit-content",
            }}
            className="border group border-gray-600 hover:border-violet-600 bg-[#071A2C]/90 hover:bg-black/50 transition-all duration-300 cursor-pointer"
          >
            <img
              style={{
                width: "3rem",
                height: "auto",
                margin: "0.5rem",
                marginTop: "10px",
                borderRadius: "0.9rem",
              }}
              className="transition-all duration-300"
              src={t.src}
              alt={t.name}
              title={t.name}
            />
            <p style={{ marginBottom: "10px", fontSize: "12px" }}>{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Skills;