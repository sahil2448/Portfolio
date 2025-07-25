"use client";

import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectsCard = ({
  id,
  image,
  title,
  description,
  teckStack,
  buttonText1,
  buttonText2,
  buttonLink,
  githubLink,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const modalId = `modal_${id}`;
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
    card.addEventListener("mouseenter", () => {
      gsap.to(image, {
        scale: 1.05,
        duration: 0.001,
        ease: "power2.out",
      });

      // Animate buttons on hover
      gsap.to(buttons, {
        scale: 1,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(image, {
        scale: 1,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(buttons, {
        scale: 1,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.out",
      });
    });

    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
      Array.from(buttons).forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      ref={projectsCardRef}
      className="card bg-base-100 shadow-xl overflow-hidden transition-all  w-[90vw] sm:w-[50vw] md:w-[40vw] lg:w-[25rem] border-b-4 border-violet-500/20 hover:border-violet-500 hover:rounded-lg  duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <figure className="relative h-auto w-full overflow-hidden p-2 group">
        <img
          ref={imageRef}
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-auto object-cover rounded-xl transition-transform duration-700"
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
            rel="noopener noreferrer"
            className="btn btn-primary text-xs px-2 sm:text-md lg:text-[0.9rem] sm:p-2 md:w-16 transition-all duration-200"
          >
            {buttonText2}
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-xs px-2 sm:text-md lg:text-[0.9rem] md:w-16 transition-all duration-200"
          >
            {buttonText1}
          </a>

          <button
            onClick={() => document.getElementById(modalId).showModal()}
            className="group btn btn-soft bg-transparent relative overflow-hidden rounded-lg border-2 border-primary px-3 py-3 font-semibold text-primary transition-all duration-300 hover:text-black hover:scale-105"
          >
            <span className="absolute bottom-0 left-0 h-0 w-full bg-primary transition-all duration-300 ease-out group-hover:h-full"></span>
            <span className="relative z-10">More</span>
          </button>
        </div>

        <dialog
          id={modalId}
          className="modal modal-middle sm:modal-middle w-[100vw] h-[95vh] justify-center align-middle items-center self-center overflow-y-scroll"
        >
          <div className="max-w-full  md:w-[70vw] lg:w-[60vw] p-5 md:p-10 mx-4 bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Project Details
              </h2>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </form>
            </div>

            {/* Modal Content */}
            <div className="space-y-8">
              {/* Project Title */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>
              </div>

              {/* Description Section */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-1 h-6 bg-violet-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Description
                  </h4>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-3">
                    {description.map((item, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack Section */}
              <div className="">
                <div className="flex items-center mb-4 ">
                  <div className="w-1 h-6 bg-violet-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Technologies Used
                  </h4>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800  rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-3">
                    {teckStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200 border border-violet-200 dark:border-violet-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-1 h-6 bg-violet-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Project Links
                  </h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg shadow-sm focus:outline-none  transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                    {buttonText2}
                  </a>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg shadow-sm focus:outline-none  transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {buttonText1}
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-6 mt-8 border-t border-gray-200 dark:border-gray-700">
              <form method="dialog">
                <button className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800  focus:outline-none  transition-all duration-300">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

// PropTypes validation
ProjectsCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  teckStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText1: PropTypes.string.isRequired,
  buttonText2: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

// Default props (optional)
ProjectsCard.defaultProps = {
  buttonText1: "GitHub",
  buttonText2: "Live Demo",
};

export default ProjectsCard;
