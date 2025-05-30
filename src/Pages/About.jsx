import { useState, useRef } from "react";
import "../css/About.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Achievements from "./Components/Achievements";
import Contact from "./Components/Contact";

import Skills from "./Components/Skills";
import HTML from "../../public/All logos/HTML.webp";
import CSS from "../../public/All logos/CSS.webp";
import JavaScript from "../../public/All logos/JavaScript.webp";
import ReactDark from "../../public/All logos/React-Dark.webp";
import TailwindCSS from "../../public/All logos/TailwindCSS-Dark.webp";
import NodeJs from "../../public/All logos/NodeJs-Dark.webp";
import ExpressJsDark from "../../public/All logos/ExpressJs-Dark.webp";
import MongoDB from "../../public/All logos/MongoDB.webp";
import REST_API from "../../public/All logos/REST_API.webp";
import Redux from "../../public/All logos/Redux.webp";
import SQL from "../../public/All logos/SQL.webp";
import JWT from "../../public/All logos/JWT.webp";
import GSAP from "../../public/All logos/GSAP.webp";
import MaterialUI from "../../public/All logos/MaterialUI-Dark.webp";
import DaisyUi from "../../public/All logos/DaisyUi.webp";
import Bootstrap from "../../public/All logos/Bootstrap.webp";
import Git from "../../public/All logos/Git.webp";
import Github from "../../public/All logos/Github-Dark.webp";
import NPM from "../../public/All logos/Npm-Dark.webp";
import GoogleCloud from "../../public/All logos/GCP-Dark.webp";
import AWS from "../../public/All logos/AWS-Dark.webp";
import Vercel from "../../public/All logos/Vercel-Dark.webp";
// import GmailDark from "../../public/All logos/Gmail-Dark.webp";
import Twitter from "../../public/ContactIcons/twitter.webp";
import Linkedin from "../../public/ContactIcons/linkedin.webp";
import Instagram from "../../public/ContactIcons/instagram.webp";
import Phone from "../../public/ContactIcons/phone.webp";
import Gmail from "../../public/ContactIcons/gmail.webp";
import githubNew from "../../public/ContactIcons/github.webp";

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
    { src: NodeJs, name: "Node-js" },
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
    { src: Github, name: "Github" },
    { src: GSAP, name: "GSAP" },
    { src: MaterialUI, name: "Material Ui" },
    { src: DaisyUi, name: "Daisy UI" },
    { src: Bootstrap, name: "Bootstrap" },
    { src: NPM, name: "npm" },
    { src: GoogleCloud, name: "Google Cloud" },
    { src: Vercel, name: "Vercel" },
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

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current.children,
      {
        opacity: -10,
        y: +500,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power1.out",
      }
    );
  }, [activeSection]);

  const content = {
    Intro: {
      Heading: "What I Love To Do",
      subHeading: [],
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
          key={0}
          org={"NSS IIT Roorkee"}
          position={"Web Developer"}
          techStack="Node.js, Express, MongoDB, HTML) + Extra tools"
          description={[
            "Contributed to public Git Repository of Web application of NSS_IITRoorkee.",
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
          key={1}
          level={"Senior Secondary School "}
          degree={"Science"}
          name={"Swami Vivekanand College, Kolhapur (Maharashtra)"}
          year={"2021-2023"}
        />,
        <Education
          key={2}
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
          key={0}
          type={"Gmail"}
          icon={Gmail}
          text={"syk2448@gmail.com"}
          link={"syk2448@gmail.com"}
        />,
        <Contact
          key={0}
          type={"Linkedin"}
          icon={Linkedin}
          text={"sahil_kamble"}
          link={"https://www.linkedin.com/in/sahil-kamble-43b3ba279/"}
        />,
        <Contact
          key={0}
          type={"Github"}
          icon={githubNew}
          text={"sahil2448"}
          link={"https://github.com/sahil2448"}
        />,
        <Contact
          key={0}
          type={"Instagram"}
          icon={Instagram}
          text={"sk_2448_iitr"}
          link={"https://www.instagram.com/sk_2448_iitr/"}
        />,
        <Contact
          key={0}
          type={"Twitter"}
          icon={Twitter}
          text={"SahilKamble2004"}
          link={"https://x.com/SahilKamble2004"}
        />,
      ],
    },
  };

  return (
    <section id="about-section" className="pt-10  min-h-screen">
      <h1 className="relative text-5xl font-bold text-center font-heading    bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
        About{" "}
      </h1>
      <div className="min-h-screen py-12">
        <div className="flex flex-col gap-10 sm:flex-row max-w-7xl mx-auto justify-evenly items-center">
          <div className="join flex flex-col justify-center w-full sm:w-[25%] space-y-4">
            {sections.map((section) => {
              return (
                <div className="w-[80%] mx-auto" key={section}>
                  <input
                    type="radio"
                    name="options"
                    aria-label={`${section}`}
                    onClick={() => setActiveSection(section)}
                    defaultChecked={section === activeSection}
                    className={`join-item btn btn-square w-full text-lg hover:scale-105 transition-transform  `}
                    style={{
                      backgroundColor:
                        section === activeSection
                          ? "rgba(51, 32, 98, 0.95)"
                          : "rgba(4, 50, 86, 0.521)",
                      color: section === activeSection ? "white" : "",
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div
            ref={contentRef}
            className="flex flex-col justify-start items-center w-[80%] md:w-fit lg:w-[75%] h-[460px] overflow-y-scroll  space-y-5  p-5 rounded-xl shadow-xl"
            style={{ backgroundColor: "rgba(4, 50, 86, 0.521)" }}
          >
            <h2 className="self-start text-4xl font-display font-bold  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
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

{
  /* 
Here's a detailed explanation of all Tailwind CSS modifications:

1. Container Layout:
- min-h-screen: Sets minimum height to 100vh for full viewport height
- bg-gradient-to-b: Background gradient flowing top to bottom
- from-base-200 to-base-300: Gradient colors from theme
- py-12: Vertical padding of 3rem

2. Main Content Wrapper:
- flex flex-row: Horizontal flex layout
- max-w-7xl: Maximum width of 80rem/1280px
- mx-auto: Auto horizontal margins for centering
- justify-evenly: Even space distribution between elements
- items-center: Vertically center items

3. Left Section (Buttons):
- join: DaisyUI class for connected elements
- flex flex-col: Vertical flex layout
- w-[40%]: Width of 40% of parent
- space-y-4: 1rem gap between vertical elements
- w-[80%]: Inner width of 80% for buttons
- mx-auto: Center buttons horizontally

4. Button Styling:
- join-item: DaisyUI class for joined elements
- btn btn-square: Square button style
- w-full: Full width
- text-lg: Large text size
- hover:scale-105: Scale up on hover
- transition-transform: Smooth transform animation

5. Right Section (Content):
- flex flex-col: Vertical flex layout
- w-[40%]: Width of 40% of parent
- space-y-12: 3rem gap between elements
- bg-base-100: Background color from theme
- p-8: 2rem padding
- rounded-xl: Large border radius
- shadow-xl: Extra large shadow

6. Heading Styles:
- text-5xl: Extra large text
- font-bold: Bold font weight
- bg-clip-text text-transparent: For gradient text
- bg-gradient-to-r: Right-flowing gradient
- from-primary to-secondary: Gradient colors

7. Contact Links:
- list-none: Remove list markers
- hover:translate-x-2: Move right on hover
- transition-transform: Smooth movement animation

All colors (primary, secondary, base-100, etc) are from DaisyUI theme system,
which automatically adapts to light/dark mode based on data-theme attribute.
*/
}
