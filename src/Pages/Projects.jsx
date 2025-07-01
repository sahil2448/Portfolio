import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import ProjectsCard from "./ProjectsCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NoteSphere from "/ProjectImages/NoteSphere.webp";
import Wandarlust from "/ProjectImages/Wandarlust.png";
import Todo from "/ProjectImages/Todo.png";
import Calculator from "/ProjectImages/Calculator.png";
import TedX from "/ProjectImages/TedX.webp";
import LiveCircle from "/ProjectImages/LiveCircle.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);
  const cardsRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState("Latest");

  useGSAP(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      {
        y: -50,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Buttons animation
    gsap.fromTo(
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
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useGSAP(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotationY: -15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [activeBtn]);

  let btns = ["Latest", "Past"];

  const handleButtonClick = (btn) => {
    // Button click animation
    const clickedButton = event.target;
    gsap.to(clickedButton, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    setActiveBtn(btn);
  };

  const projects = {
    Latest: [
      {
        id: 1,
        title: "WandarLust",
        description: [
          "It's a full-stack property hosting platform enables users to list, edit, and manage rental properties with images,detailed descriptions, and customizable per-day pricing.",
          "Implemented advanced search and filtering features, allowing users to browse, rate, and review listings, as well assearch by destination and filter by categories for an enhanced user experience",
          "Integrated dynamic pricing calculations with GST application, ensuring transparent and accurate price updates forboth hosts and guests",
        ],
        teckStack: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "EJS templates",
          "Bootstrap",
          "Passport.js",
          "+Other Tools",
        ],
        image: `${Wandarlust}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://wanderlust-cg0y.onrender.com/",
        githubLink: "https://github.com/sahil2448/WanderLust",
      },
      {
        id: 2,
        title: "LiveCircle",
        description: [
          "Developed a real-time web communication system enabling seamless video conferencing via peer-to-peer (WebRTC)  connections for efficient live interaction",
          "Integrated in-call chat functionality, allowing participants to collaborate through instant messaging during meetings",
          "Implemented secure token-based user authentication and authorization, ensuring only authorized users access meetings and chat, following industry best practices",
        ],
        teckStack: [
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "Socket.io",
          "WebRTC",
          "+Other Tools",
        ],
        image: `${LiveCircle}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://livecircle-f.onrender.com/",
        githubLink: "https://github.com/sahil2448/LiveCircle",
      },
      {
        id: 3,
        title: "TEDxIITRoorkee",
        description: [
          "An animated web application for TEDxIITRoorkee to display their events, invited speakers, history, team members, and Component to sell their t-shirts and tickets .",
          "Transformed exact Figma designs into a dynamic and interactive website, focusing on smooth animations and a friendly experience.",
          "Gained valuable experience in building real-world End-To-End web applications.",
        ],
        teckStack: [
          "React.js",
          "Tailwind CSS",
          "GSAP",
          "DaisyUI",
          "+Other Tools",
        ],
        image: `${TedX}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://www.tedxiitroorkee.in/",
        githubLink: "https://github.com/TEDxIITR/TEDxIITR2025/tree/main",
      },

      {
        id: 4,
        title: "Note-sphere",
        description: [
          "A Notes-hosting application built for students to help them for last-time exam preparation.",
          "Students can post their notes with comment, download & react on other's notes for better searchability.",
          "This platform was built during SYNTAX ERROR HACKATHON with the team of 4 members.",
        ],
        teckStack: [
          "MongoDB",
          "Express.js",
          "React.js",
          "Node.js",
          "+Other Tools",
        ],
        image: `${NoteSphere}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://spontaneous-stardust-0bdf9a.netlify.app/",
        githubLink: "https://github.com/sahil2448/Syntax-Error-24",
      },
    ],

    Past: [
      {
        id: 3,
        title: "Todo Application",
        description: [
          "A task management application built with React.js and Tailwind CSS.",
          "Allows users to add, edit, delete and mark-done the tasks with a user-friendly interface.",
          "Features responsive design and state management for seamless performance.",
        ],
        image: `${Todo}`,
        teckStack: ["React.js", "Tailwind CSS"],
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://taskmanager-qikk.onrender.com/",
        githubLink: "https://github.com/sahil2448/TaskManager",
      },
      {
        id: 4,
        title: "Calculator",
        description: [
          "A calculator built with React.js and CSS that allows users to perform basic arithmetic operations, including addition, subtraction, multiplication, and division.",
          "The calculator also supports decimal numbers...And styled in such a way to get a feel of real offline calculator",
          "",
        ],
        teckStack: ["React.js", "CSS"],
        image: `${Calculator}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://calculator-cbv3.onrender.com/",
        githubLink: "https://github.com/sahil2448/Calculator",
      },
    ],
  };

  return (
    <section ref={projectsRef} id="projects-section" className="py-16">
      <div className="container mx-auto sm:p-8 md:px-10 lg:px-20 xl:px-32">
        <h1
          ref={titleRef}
          className="relative text-5xl font-bold text-center font-heading bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
        >
          My Projects{" "}
        </h1>
        <div
          ref={buttonsRef}
          className="join grid grid-cols-2 w-[80vw] sm:w-[60vw] lg:w-[30rem] mx-auto mb-10 py-12"
        >
          {btns.map((btn) => {
            return (
              <button
                key={uuidv4()}
                className={`join-item btn text-base hover:scale-105 transition-all duration-300 ${
                  activeBtn === btn
                    ? "btn-active !bg-primary border-2 border-primary text-black"
                    : "btn-outline hover:shadow-lg hover:shadow-violet-500/30"
                }`}
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            );
          })}
        </div>
        <div
          ref={cardsRef}
          className="flex flex-row justify-evenly w-full flex-wrap gap-8 md:gap-10 lg:gap-10"
        >
          {projects[activeBtn].map((project) => (
            <div key={project.id}>
              <ProjectsCard
                id={project.id}
                title={project.title}
                activeBtn={activeBtn}
                description={project.description}
                teckStack={project.teckStack}
                image={project.image}
                buttonText1={project.buttonText1}
                buttonText2={project.buttonText2}
                buttonLink={project.buttonLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
