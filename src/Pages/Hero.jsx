import github from "/ContactIcons/github.webp";
import gmail from "/ContactIcons/gmail.webp";
import linkedin from "/ContactIcons/linkedin.webp";
import profile from "/profile.webp";
import BackgroundVideo from "./BackgroundVideo";
import { FaFileDownload } from "react-icons/fa";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  let icons = [
    { imgUrl: github, lk: "https://github.com/sahil2448" },
    {
      imgUrl: linkedin,
      lk: "https://www.linkedin.com/in/sahil-kamble-43b3ba279/",
    },
    { imgUrl: gmail, lk: "syk2448@gmail.com" },
  ];

  const imgRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const iconsRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Animate profile image with rotation and scale
    tl.fromTo(
      imgRef.current,
      { 
        x: 300, 
        opacity: 0, 
        rotation: 15,
        scale: 0.8
      },
      { 
        x: 0, 
        opacity: 1, 
        rotation: 0,
        scale: 1,
        duration: 1.2, 
        ease: "back.out(1.7)" 
      }
    );

    // Animate main content with stagger
    tl.fromTo(
      contentRef.current.children,
      {
        y: 100,
        opacity: 0,
        rotationX: -15,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // Animate floating badge
    tl.fromTo(
      badgeRef.current,
      {
        y: -50,
        opacity: 0,
        scale: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.4"
    );

    // Animate buttons with bounce effect
    tl.fromTo(
      buttonsRef.current.children,
      {
        y: 50,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );

    // Animate social icons with rotation
    tl.fromTo(
      iconsRef.current.children,
      {
        y: 30,
        opacity: 0,
        rotation: 180,
        scale: 0,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.4"
    );

    // Continuous floating animation for badge
    gsap.to(badgeRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 2,
    });

    // Hover animations for profile image
    const profileImg = imgRef.current.querySelector('img');
    profileImg.addEventListener('mouseenter', () => {
      gsap.to(profileImg, {
        scale: 1.05,
        rotation: 2,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    profileImg.addEventListener('mouseleave', () => {
      gsap.to(profileImg, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    // Cleanup
    return () => {
      profileImg.removeEventListener('mouseenter', () => {});
      profileImg.removeEventListener('mouseleave', () => {});
    };
  }, []);

  return (
    <div>
      <BackgroundVideo />
      <div
        className="hero min-h-screen bg-none"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 mt-10 lg:mt-0">
          <div
            ref={imgRef}
            className="avatar rounded-full lg:rounded-sm flex justify-start items-start p-2 border-2 border-primary w-[70vw] sm:w-[70vw] md:w-[40vw] lg:w-[28vw] xl:w-[30vw] hover:border-violet-500 transition-colors duration-300"
          >
            <div className="rounded-full lg:rounded-sm overflow-hidden">
              <img src={profile} className="transition-transform duration-300" />
            </div>
          </div>
          <div
            ref={contentRef}
            className="w-[90vw] md:w-[80vw] lg:w-[60vw] flex flex-col justify-center items-center sm:items-start gap-4"
          >
            <div 
              ref={badgeRef}
              className="py-2 px-3 border border-gray-600 rounded-3xl shadow-lg shadow-violet-700 absolute invisible xl:visible top-[20%]"
            >
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Ready to innovate
              </h3>
            </div>
            <div>
              <h1 className="relative text-3xl lg:text-7xl mb-2 font-bold inline-block bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-heading">
                Hello World !
              </h1>
              <p className="text-xl lg:text-2xl font-semibold mb-2 text-white font-serif">
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-extrabold">
                  Sahil Yuvraj Kamble
                </span>
                .
              </p>
            </div>

            <div className="flex flex-col mb-1 lg:py-3 p-6 lg:px-0">
              <div className="space-y-1 text-gray-300">
                <h1 className="text-base">
                  I'm a Passionate Full Stack Developer, problem solver &
                  upcoming 3rd year student at IIT Roorkee.
                </h1>
                <h1 className="text-base">
                  Constantly improving my skills through project based learning.
                </h1>
                <h1 className="text-base">
                  I Like Building software Stuff and solving problems.
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div ref={buttonsRef} className="flex flex-row gap-3 sm:w-full sm:gap-5">
                <button
                  className="btn btn-primary hover:scale-105 transition-transform duration-200"
                  onClick={() => {
                    const element = document.getElementById("projects-section");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Projects
                </button>

                <button className="group btn btn-soft bg-transparent relative overflow-hidden rounded-lg border-2 border-primary font-semibold text-primary transition-all duration-300 hover:text-black hover:scale-105">
                  <span className="absolute bottom-0 left-0 h-0 sm:w-full bg-primary transition-all duration-300 ease-out group-hover:h-full"></span>
                  <a href="/ResumeLatest.pdf" download>
                    <div className="flex justify-between items-center w-[30vw] sm:w-[7vw] group">
                      <span className="relative z-10">My Resume</span>
                      <FaFileDownload className="size-5 z-10 group-hover:text-black transition-all duration-200 group-hover:animate-bounce" />
                    </div>
                  </a>
                </button>
              </div>
              <div ref={iconsRef} className="flex justify-center gap-5 sm:gap-10">
                {icons.map((image, idx) => {
                  return (
                    <a key={idx} href={image.lk} target="_blank">
                      <img
                        className="size-8 sm:size-10 shadow-md shadow-violet- rounded-lg bg-violet-700/85 hover:shadow-lg hover:shadow-violet-500 hover:bg-violet-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 cursor-pointer hover:scale-110 hover:-rotate-3"
                        key={idx}
                        src={image.imgUrl}
                        alt=""
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;