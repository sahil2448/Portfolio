import { useState, useRef } from "react";
import "../css/About.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Education from "./Components/Education";

const About = () => {
  const [activeSection, setActiveSection] = useState("Education");
  const sections = [
    "Education",
    "Experience",
    "Skills",
    "Achievements",
    "Hobbies",
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
    Experience: {
      Heading: <>Btech chemical engineering</>,
      subHeading: [],
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
      subHeading: [],
    },
    Achievements: {
      Heading: "Awards & Recognition",
      subHeading: [],
    },
    Hobbies: {
      Heading: "What I Love To Do",
      subHeading: [],
    },
    Contact: {
      Heading: "Get In Touch",
      subHeading: [],
    },
  };

  return (
    <section id="about-section" className="pt-40  min-h-screen">
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
            className="flex flex-col justify-start items-center w-[80%] md:w-fit lg:w-[75%] min-h-[400px] h-auto space-y-12  p-8 rounded-xl shadow-xl"
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
