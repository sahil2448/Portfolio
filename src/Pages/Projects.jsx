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
        description: [
          "It’s a full-stack property hosting platform enables users to list, edit, and manage rental properties with images,detailed descriptions, and customizable per-day pricing.",
          "Implemented advanced search and filtering features, allowing users to browse, rate, and review listings, as well assearch by destination and filter by categories for an enhanced user experience",
          "Integrated dynamic pricing calculations with GST application, ensuring transparent and accurate price updates forboth hosts and guests",
        ],
        image: `${Wandarlust}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://wanderlust-cg0y.onrender.com/",
        githubLink: "https://github.com/sahil2448/WanderLust",
      },
      {
        id: 2,
        title: "TEDxIITRoorkee",
        description: [""],
        image: `${TedX}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://www.tedxiitroorkee.in/",
        githubLink: "https://github.com/TEDxIITR/TEDxIITR2025/tree/main",
      },
      {
        id: 3,
        title: "LiveCircle",
        description: [""],
        image: `${LiveCircle}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://livecircle-f.onrender.com/",
        githubLink: "https://github.com/sahil2448/LiveCircle",
      },
      {
        id: 4,
        title: "Note-sphere",
        description: [""],
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
        description: [""],

        image: `${Todo}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://taskmanager-qikk.onrender.com/",
        githubLink: "https://github.com/sahil2448/TaskManager",
      },
      {
        id: 4,
        title: "Calculator",
        description: [""],

        image: `${Calculator}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "https://calculator-cbv3.onrender.com/",
        githubLink: "https://github.com/sahil2448/Calculator",
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
