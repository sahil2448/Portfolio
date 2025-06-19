import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const containerStyle = {
  borderRadius: "5px",
  padding: "1rem ",
  maxWidth: "[100%]",
  margin: " auto",
  boxShadow: "0 6px 32px 0 rgba(80, 40, 120, 0.18)",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const liStyle = {
  position: "relative",
  color: "",
  fontSize: "1.15rem",
  marginBottom: "1rem",
  paddingLeft: "2.2rem",
  lineHeight: 1.7,
  transition: "color 0.2s",
};

const bulletStyle = {
  content: '""',
  position: "absolute",
  left: 0,
  top: "0.65rem",
  width: "0.5rem",
  height: "0.5rem",
  borderRadius: "50%",
  boxShadow: "0 0 8px 2px #b16cea33",
};

const Intro = () => {
  const introRef = useRef(null);
  const listItemsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      introRef.current,
      {
        opacity: 0,
        scale: 0.95,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );

    const listItems = listItemsRef.current.children;
    gsap.fromTo(
      listItems,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    Array.from(listItems).forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          x: 10,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          x: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      Array.from(listItems).forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      ref={introRef}
      className="text-base border border-indigo-950 bg-[#071A2C]/90 hover:bg-black/50 hover:border-violet-600 transition-all duration-300 cursor-pointer"
      style={containerStyle}
    >
      <ul ref={listItemsRef} style={listStyle}>
        <li
          style={liStyle}
          className="hover:text-violet-200 transition-colors duration-200"
        >
          <span style={bulletStyle} className="bg-violet-700"></span>
          Hi... Myself Sahil Yuvraj Kamble.
        </li>
        <li
          style={liStyle}
          className="hover:text-violet-200 transition-colors duration-200"
        >
          <span style={bulletStyle} className="bg-violet-700"></span>
          My origin is Kolhapur, Maharashtra.
        </li>
        <li
          style={liStyle}
          className="hover:text-violet-200 transition-colors duration-200"
        >
          <span style={bulletStyle} className="bg-violet-700"></span>
          Just finished my 2nd year at IIT Roorkee! I am truly passionate about
          technology. From my very first year, I have been exploring
          coding...starting with the basics of programming, then diving deep
          into data structures and algorithms and then full stack development.
          Currently, I am sharpening my skills through project and product-based
          learning, and also doing competitive programming to improve my problem
          solving skills.
        </li>
        <li
          style={liStyle}
          className="hover:text-violet-200 transition-colors duration-200"
        >
          <span style={bulletStyle} className="bg-violet-700"></span>
          IIT Roorkee gives amazing exposure in different fields, and I try to
          make the most of it by taking part in coding events and hackathons. I
          have also contributed as a web developer for well-known
          club-TEDxIITRoorkee and NSS IIT Roorkee.
        </li>
        <li
          style={liStyle}
          className="hover:text-violet-200 transition-colors duration-200"
        >
          <span style={bulletStyle} className="bg-violet-700"></span>
          Looking forward to build something impactful with like minded people.
        </li>
      </ul>
    </div>
  );
};

export default Intro;
