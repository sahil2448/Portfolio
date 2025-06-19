import { useState, useRef } from "react";
import "../css/About.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";

import Skills from "./Components/Skills";
import HTML from "/All logos/HTML.webp";
import CSS from "/All logos/CSS.webp";
import JavaScript from "/All logos/JavaScript.webp";
import ReactDark from "/All logos/ReactDark.webp";
import TailwindCSS from "/All logos/TailwindCSSDark.webp";
import NodeJsDark from "/All logos/NodeJsDark.webp";
import ExpressJsDark from "/All logos/ExpressJsDark.webp";
import MongoDB from "/All logos/MongoDB.webp";
import REST_API from "/All logos/REST_API.webp";
import Redux from "/All logos/Redux.webp";
import SQL from "/All logos/SQL.webp";
import JWT from "/All logos/JWT.webp";
import GSAP from "/All logos/GSAP.webp";
import MaterialUIDark from "/All logos/MaterialUIDark.webp";
import DaisyUi from "/All logos/DaisyUi.webp";
import Bootstrap from "/All logos/Bootstrap.webp";
import Git from "/All logos/Git.webp";
import GithubDark from "/All logos/GithubDark.webp";
import NPM from "/All logos/NpmDark.webp";
import GCPDark from "/All logos/GCPDark.webp";
import AWS from "/All logos/AWSDark.webp";
import VercelDark from "/All logos/VercelDark.webp";
import Twitter from "/ContactIcons/twitter.webp";
import Linkedin from "/ContactIcons/linkedin.webp";
import Instagram from "/ContactIcons/instagram.webp";
import Phone from "/ContactIcons/phone.webp";
import Gmail from "/ContactIcons/gmail.webp";
import githubNew from "/ContactIcons/github.webp";
import Intro from "./Components/Intro";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [activeSection, setActiveSection] = useState("Education");

  const FtechArr = [
    { src: HTML, name: "HTML" },
    { src: CSS, name: "CSS" },
    { src: JavaScript, name: "JavaScript" },
    { src: ReactDark, name: "React.js" },
    { src: TailwindCSS, name: "TailwindCSS" },
    { src: Redux, name: "Redux" },
  ];
  const BtechArr = [
    { src: NodeJsDark, name: "Node-js" },
    { src: ExpressJsDark, name: "Express.js" },
    { src: REST_API, name: "Rest API" },
    { src: JWT, name: "JWT" },
  ];
  const DtechArr = [
    { src: MongoDB, name: "MongoDB" },
    { src: SQL, name: "MySQL" },
  ];
  const OtechArr = [
    { src: Git, name: "Git" },
    { src: GithubDark, name: "Github" },
    { src: GSAP, name: "GSAP" },
    { src: MaterialUIDark, name: "Material Ui" },
    { src: DaisyUi, name: "Daisy UI" },
    { src: Bootstrap, name: "Bootstrap" },
    { src: NPM, name: "npm" },
    { src: GCPDark, name: "Google Cloud" },
    { src: VercelDark, name: "Vercel" },
    { src: AWS, name: "AWS" },
  ];

  const sections = [
    "Intro",
    "Education",
    "Experience",
    "Skills",
    "Achievements",
    "Contact",
  ];

  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);

  // Scroll trigger animation for section entrance
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
          trigger: sectionRef.current,
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
        x: -100,
        opacity: 0,
        rotation: -10,
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
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
  }, []);

  // Content change animation
  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Animate out current content
    tl.to(contentRef.current.children, {
      opacity: 0,
      y: -30,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
    })
    // Animate in new content
    .fromTo(
      contentRef.current.children,
      {
        opacity: 0,
        y: 50,
        rotationX: -15,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }
    );
  }, [activeSection]);

  const handleSectionChange = (section) => {
    // Add click animation to button
    const clickedButton = event.target;
    gsap.to(clickedButton, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
    
    setActiveSection(section);
  };

  const content = {
    Intro: {
      Heading: "About Myself",
      subHeading: [<Intro key={0} />],
    },
    Experience: {
      Heading: <>Work Experience</>,
      subHeading: [
        <Experience
          key={0}
          org={"TEDxIITRoorkee"}
          position={"Web Developer"}
          techStack={"MERN + Socket.io + Extra tools"}
          description={[
            "Developed an animated web application of a well known club of IIT Roorkee ,To help them showcase their events,invited speakers, Past history, team members and component to sell t-shirts and tickets.",
            "Had a great experience of transforming exact figma design into Dynamic and interactive web application.",
            "Got to learn lot many insightful things and best practices from seniors.",
          ]}
          timeline={"August 2024 - Present"}
        />,
        <Experience
          key={1}
          org={"NSS IIT Roorkee"}
          position={"Web Developer"}
          techStack="Node.js, Express, MongoDB, HTML) + Extra tools"
          description={[
            "Contribut Git Repository of Web application of NSS_IITRoorkee.",
            "Worked with team of 4 member, this helped me to enhance my team work skills, Advanced Git-Github skills and also improved my software technological skills.",
            "Made highest contributions among all teammates.",
          ]}
          timeline={"July 2024 - Present"}
        />,
      ],
    },
    Education: {
      Heading: "Education history",
      subHeading: [
        <Education
          key={0}
          level={"College"}
          degree={"B.Tech - Chemical engineering"}
          name={"Indian Institute Of Technology, Roorkee (Uttarakhand)"}
          year={"2023-2027"}
        />,
        <Education
          key={1}
          level={"Joint Entrance Exam"}
          degree={"Physics, chemistry, math"}
          name={"Physics Wallah (Online)"}
          year={"2021-2023"}
        />,
        <Education
          key={2}
          level={"Senior Secondary School "}
          degree={"Science"}
          name={"Swami Vivekanand College, Kolhapur (Maharashtra)"}
          year={"2021-2023"}
        />,
        <Education
          key={3}
          level={"Secondary-school"}
          degree={"CBSE Courses"}
          name={"Jawahar Navodaya Vidyalaya, Sangli (Maharashtra)"}
          year={"2016-2021"}
        />,
      ],
    },

    Skills: {
      Heading: "Technical Skills",
      subHeading: [
        <Skills key={0} name={"Frontend"} tech={FtechArr} />,
        <Skills key={1} name={"Backend"} tech={BtechArr} />,
        <Skills key={2} name={"Databases"} tech={DtechArr} />,
        <Skills key={3} name={"Other Tools"} tech={OtechArr} />,
      ],
    },
    Achievements: {
      Heading: "Extracurriculars & Key Recognitions",
      subHeading: [<Achievements key={0} />],
    },

    Contact: {
      Heading: "Get In Touch",
      subHeading: [
        <Contact
          key={0}
          type={"Mobile number"}
          icon={Phone}
          text={"+91 9309282448"}
          link={"+91 9309282448"}
        />,
        <Contact
          key={1}
          type={"Gmail"}
          icon={Gmail}
          text={"syk2448@gmail.com"}
          link={"syk2448@gmail.com"}
        />,
        <Contact
          key={2}
          type={"Linkedin"}
          icon={Linkedin}
          text={"sahil_kamble"}
          link={"https://www.linkedin.com/in/sahil-kamble-43b3ba279/"}
        />,
        <Contact
          key={3}
          type={"Github"}
          icon={githubNew}
          text={"sahil2448"}
          link={"https://github.com/sahil2448"}
        />,
        <Contact
          key={4}
          type={"Instagram"}
          icon={Instagram}
          text={"sk_2448_iitr"}
          link={"https://www.instagram.com/sk_2448_iitr/"}
        />,
        <Contact
          key={5}
          type={"Twitter"}
          icon={Twitter}
          text={"SahilKamble2004"}
          link={"https://x.com/SahilKamble2004"}
        />,
      ],
    },
  };

  return (
    <section ref={sectionRef} id="about-section" className="pt-10 min-h-screen">
      <h1 
        ref={titleRef}
        className="relative text-5xl font-bold text-center font-heading bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
      >
        About{" "}
      </h1>
      <div className="min-h-screen py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-0 lg:gap-10 max-w-7xl mx-auto justify-evenly items-center">
          <div ref={buttonsRef} className="join flex flex-col justify-center w-full sm:w-[40vw] md:w-[30vw] lg:w-[30vw] space-y-4">
            {sections.map((section) => {
              return (
                <div className="w-[80%] mx-auto" key={section}>
                  <input
                    type="radio"
                    name="options"
                    aria-label={`${section}`}
                    onClick={() => handleSectionChange(section)}
                    defaultChecked={section === activeSection}
                    className={`join-item btn btn-square w-full text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50`}
                    style={{
                      backgroundColor:
                        section === activeSection
                          ? ""
                          : "rgba(4, 50, 86, 0.521)",
                      color: section === activeSection ? "black" : "",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div
            ref={contentRef}
            className="flex flex-col justify-start items-center w-[90vw] sm:w-[55vw] md:w-[60vw] lg:w-[60vw] xl:w-[70vw] h-[460px] overflow-y-scroll space-y-5 p-5 rounded-xl shadow-xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
            style={{ backgroundColor: "rgba(4, 50, 86, 0.521)" }}
          >
            <h2 className="self-start text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {content[activeSection].Heading}
            </h2>
            <div className="self-center text-xl font-serif flex gap-5 flex-wrap justify-evenly wrap">
              {content[activeSection].subHeading.map((heading) => {
                return <>{heading}</>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;