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

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const projectsCardRef = useRef(null);
  //   Sample project data
  const [activeBtn, setActiveBtn] = useState("Latest");

  useGSAP(() => {
    gsap.from(projectsRef.current, {
      scrollTrigger: {
        trigger: projectsRef.current,
        // start: "top 90%",
        // end: "bottom 60%",
        scrub: true,
        delay: 2,
        duration: 2,
        opacity: 0,
        y: 50,
        scale: 0,
      },
    });
  }, []);

  let btns = ["Latest", "Past"];

  const projects = {
    Latest: [
      {
        id: 1,
        title: "WandarLust",
        description:
          "Turn your space into a dream getaway! Host your place, set your rates, and welcome travelers from around the world. A seamless platform for both hosts and guests!",
        image: `${Wandarlust}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://wanderlust-cg0y.onrender.com/",
        githubLink: "https://github.com/sahil2448/WanderLust",
      },
      {
        id: 3,
        title: "TEDxIITRoorkee",
        description: "",
        image: `${TedX}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://www.tedxiitroorkee.in/",
        githubLink: "https://github.com/TEDxIITR/TEDxIITR2025/tree/main",
      },
      {
        id: 2,
        title: "Note-sphere",
        description:
          "The ultimate note-sharing hub! Upload, rate, like, and download notes effortlessly. Perfect for students looking for last-minute revision material before exams!",
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
        description:
          "Stay organized like never before! Effortlessly add, edit, delete, and check off tasks to keep track of your daily goals and boost productivity.",
        image: `${Todo}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "#",
        githubLink: "https://github.com/sahil2448/iTask",
      },
      {
        id: 4,
        title: "Calculator",
        description:
          "A smart and intuitive calculator designed for quick and easy calculations. Solve problems with ease, whether simple or complex!",
        image: `${Calculator}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "#",
        githubLink: "https://github.com/sahil2448/Calculator-React.js",
      },
    ],
  };

  return (
    <section
      ref={projectsRef}
      id="projects-section"
      className="py-16 "
      // style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
    >
      <div className="container mx-auto sm:p-8 md:px-10 lg:px-20 xl:px-32">
        <h1 className="relative text-5xl font-bold text-center font-heading  bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          My Projects{" "}
        </h1>
        <div className="join grid grid-cols-2 w-[80vw] sm:w-[60vw] lg:w-[30rem] mx-auto mb-10 py-12">
          {btns.map((btn) => {
            return (
              <button
                key={uuidv4()}
                className={`join-item btn  text-base ${
                  activeBtn === btn
                    ? "btn-active !bg-primary border-2 border-primary text-black"
                    : "btn-outline"
                }`}
                onClick={() => setActiveBtn(btn)}
              >
                {btn}
              </button>
            );
          })}
        </div>
        <div className="flex flex-row justify-evenly w-full flex-wrap gap-8 md:gap-10 lg:gap-10">
          {projects[activeBtn].map((project) => (
            <div ref={projectsCardRef} key={uuidv4()}>
              <ProjectsCard
                key={project.id}
                title={project.title}
                activeBtn={activeBtn}
                description={project.description}
                image={project.image}
                buttonText1={project.buttonText1}
                buttonText2={project.buttonText2}
                buttonLink={project.buttonLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
          {console.log(projects.activeBtn)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
