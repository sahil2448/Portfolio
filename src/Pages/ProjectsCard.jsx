import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectsCard = ({
  image,
  title,
  description,
  buttonText1,
  buttonText2,
  buttonLink,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const projectsCardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      projectsCardRef.current,
      {
        opacity: -100,
        // y: -100,
        x: -100,
      },
      {
        opacity: 1,
        // delay: 1,
        duration: 0.4,
        x: 0,
      }
    );
  }, [projectsCardRef]);

  return (
    <div
      ref={projectsCardRef}
      className="card bg-base-100 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2  w-full sm:w-[70%] md:w-[60%] lg:w-[25rem]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image container with overlay */}
      <figure className="relative h-64 w-full overflow-hidden p-2">
        {/* Project image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Overlay that appears on hover */}
        <div
          className={`absolute inset-0 bg-black/70 flex items-center justify-center overflow-hidden transition-all duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Description container */}
          <div
            className={`p-6 w-full transition-transform duration-500 ${
              isHovering ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <p className="text-white text-center">{description}</p>
          </div>
        </div>
      </figure>

      {/* Card body */}
      <div className="card-body p-3 flex flex-row justify-between items-center ">
        <h3 className="card-title text-lg">{title}</h3>
        <a href={buttonLink} className="btn btn-primary w-16">
          {buttonText2}
        </a>
        <a href={buttonLink} className="btn btn-primary w-16">
          {buttonText1}
        </a>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button
          className="btn btn-outline btn-accent  w-16"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          More
        </button> */}
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="group btn btn-soft bg-transparent relative overflow-hidden rounded-lg border-2 border-primary px-3 py-3 font-semibold text-primary transition-colors duration-300 hover:text-black"
        >
          <span className="absolute bottom-0 left-0 h-0 w-full bg-primary transition-all duration-300 ease-out group-hover:h-full"></span>
          <span className="relative z-10 ">More</span>
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ProjectsCard;

// TAILWIND CSS CLASSES EXPLANATION:

// Layout & Positioning:
// - card: DaisyUI component that provides card styling
// - relative: Sets position: relative for parent elements that need absolute children
// - absolute: Takes element out of normal flow, positioned relative to nearest positioned ancestor
// - inset-0: Sets top, right, bottom, left all to 0 (covers entire parent)
// - overflow-hidden: Hides content that exceeds the container's boundaries
// - w-full: Sets width: 100%
// - h-64: Sets height to 16rem (256px)
// - h-full: Sets height: 100%
// - max-w-sm: Sets max-width to 24rem (384px)
// - p-4, p-6: Padding (1rem and 1.5rem respectively)

// Flexbox:
// - flex: Sets display: flex
// - items-center: Centers items vertically (align-items: center)
// - justify-center: Centers items horizontally (justify-content: center)
// - justify-between: Spaces items evenly with first at start and last at end
// - flex-row: Sets flex-direction to row (horizontal)

// Typography:
// - text-lg: Sets font-size to large
// - text-center: Centers text horizontally
// - text-white: Sets text color to white
// - card-title: DaisyUI class for card titles

// Visual Effects:
// - bg-base-300: Sets background color from DaisyUI theme
// - bg-black/70: Sets semi-transparent black background (70% opacity)
// - shadow-xl: Adds extra large shadow
// - opacity-0: Makes element completely transparent
// - opacity-100: Makes element fully visible
// - btn, btn-primary: DaisyUI button styles

// Transitions & Animations:
// - transition-all: Applies transition to all properties
// - transition-transform: Applies transition only to transform properties
// - duration-300: Sets transition duration to 300ms
// - duration-500: Sets transition duration to 500ms
// - hover:-translate-y-2: On hover, moves element up by 0.5rem
// - translate-y-0: No vertical translation
// - translate-y-full: Translates element 100% downward (outside of view)

// Images:
// - object-cover: Resizes image to cover container while maintaining aspect ratio
// */
