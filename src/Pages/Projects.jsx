import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import ProjectsCard from "./ProjectsCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NoteSphere from "../../public/ProjectImages/NoteSphere.webp";
import Wandarlust from "../../public/ProjectImages/Wandarlust.png";
import Todo from "../../public/ProjectImages/Todo.png";

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
        buttonLink: "#",
      },
      {
        id: 2,
        title: "Note-sphere",
        description:
          "The ultimate note-sharing hub! Upload, rate, like, and download notes effortlessly. Perfect for students looking for last-minute revision material before exams!",
        image: `${NoteSphere}`,
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "#",
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
      },
      {
        id: 4,
        title: "Calculator",
        description:
          "A smart and intuitive calculator designed for quick and easy calculations. Solve problems with ease, whether simple or complex!",
        image: "default",
        buttonText1: "Github",
        buttonText2: "Live",
        buttonLink: "#",
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
      <div className="container mx-auto px-4 ">
        <h1 className="relative text-5xl font-bold text-center font-heading    bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          My Projects{" "}
        </h1>
        <div className="join grid grid-cols-2 lg:w-[30rem] mx-auto mb-10 py-12">
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
        <div className="flex flex-row justify-evenly w-full flex-wrap gap-8 lg:gap-0">
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
