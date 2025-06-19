import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectsCard = ({
  image,
  title,
  buttonText1,
  buttonText2,
  buttonLink,
  githubLink,
  description,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const projectsCardRef = useRef(null);
  const imageRef = useRef(null);
  const buttonsRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      projectsCardRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
        rotationY: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  useEffect(() => {
    const card = projectsCardRef.current;
    const image = imageRef.current;
    const buttons = buttonsRef.current.children;

    // Card hover animations
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(image, {
        scale: 1.1,
        duration: 0.5,
        ease: "power2.out"
      });

      // Animate buttons on hover
      gsap.to(buttons, {
        scale: 1.05,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(image, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(buttons, {
        scale: 1,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.out"
      });
    });

    // Individual button hover animations
    Array.from(buttons).forEach((button) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.1,
          y: -2,
          duration: 0.2,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out"
        });
      });
    });

    return () => {
      card.removeEventListener('mouseenter', () => {});
      card.removeEventListener('mouseleave', () => {});
      Array.from(buttons).forEach((button) => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div
      ref={projectsCardRef}
      className="card bg-base-100 shadow-xl overflow-hidden transition-all duration-300 w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[25rem] border border-violet-500/20 hover:border-violet-500/50"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image container with overlay */}
      <figure className="relative h-64 w-full overflow-hidden p-2 group">
        {/* Project image */}
        <img
          ref={imageRef}
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl transition-transform duration-700"
        />

        <div
          className={`absolute inset-0 bg-black/30 flex items-center justify-center overflow-hidden transition-all duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`p-6 w-full transition-transform duration-500 ${
              isHovering ? "translate-y-0" : "translate-y-full"
            }`}
          ></div>
        </div>
      </figure>

      {/* Card body */}
      <div className="card-body p-3 flex flex-row justify-between items-center">
        <h3 className="card-title text-xs sm:text-md md:text-lg">{title}</h3>
        <div ref={buttonsRef} className="flex gap-2">
          <a
            href={buttonLink}
            target="_blank"
            className="btn btn-primary text-xs px-2 sm:text-md lg:text-[0.9rem] sm:p-2 md:w-16 transition-all duration-200"
          >
            {buttonText2}
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="btn btn-primary text-xs px-2 sm:text-md lg:text-[0.9rem] md:w-16 transition-all duration-200"
          >
            {buttonText1}
          </a>

          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="group btn btn-soft bg-transparent relative overflow-hidden rounded-lg border-2 border-primary px-3 py-3 font-semibold text-primary transition-all duration-300 hover:text-black hover:scale-105"
          >
            <span className="absolute bottom-0 left-0 h-0 w-full bg-primary transition-all duration-300 ease-out group-hover:h-full"></span>
            <span className="relative z-10">More</span>
          </button>
        </div>
        
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="bg-gray-800 p-5 rounded-2xl min-w-[50vw] max-w-[70vw] border border-violet-500/30">
            <h3 className="font-bold text-lg mb-2 text-violet-400">Description!</h3>
            <div className="flex flex-col gap-1 p-2 border border-gray-400 rounded-lg">
              {description.map((item, idx) => {
                return <p key={idx}>{item}</p>;
              })}
            </div>

            <h3 className="font-bold text-lg text-violet-400 mt-4">TechStack!</h3>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn hover:scale-105 transition-transform duration-200">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ProjectsCard;