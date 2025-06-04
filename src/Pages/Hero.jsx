import React from "react";
import github from "../../public/ContactIcons/github.webp";
import gmail from "../../public/ContactIcons/gmail.webp";
import linkedin from "../../public/ContactIcons/linkedin.webp";
// import profile from "../../public/profile-rm-bg.png";
import profile from "../../public/profile.jpg";
import BackgroundVideo from "./BackgroundVideo";
import { FaFileDownload } from "react-icons/fa";

const Hero = () => {
  let icons = [
    { imgUrl: github, lk: "https://github.com/sahil2448" },
    {
      imgUrl: linkedin,
      lk: "https://www.linkedin.com/in/sahil-kamble-43b3ba279/",
    },
    { imgUrl: gmail, lk: "syk2448@gmail.com" },
  ];
  return (
    <div>
      <BackgroundVideo />
      <div
        className="hero  min-h-screen bg-none"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="avatar rounded-full flex justify-start items-start p-2 border-2 border-primary w-[70vw] sm:w-[70vw] md:w-[40vw] lg:w-[28vw] xl:w-[30vw]">
            <div className=" rounded-full">
              <img src={profile} className="" />
            </div>
          </div>
          <div className="w-[90vw] lg:w-[60%] flex flex-col justify-center items-center gap-4">
            <div>
              <h1 className="relative text-3xl lg:text-6xl mb-2 font-bold inline-block bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Hello world !
              </h1>
              <p className="text-xl lg:text-2xl font-semibold mb-2 text-white font-serif">
                I’m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-extrabold">
                  Sahil Yuvraj Kamble
                </span>
                .
              </p>
            </div>

            <div className="flex flex-col py-3 mb-3  p-6 v-[90vw]">
              {/* <p className="text-lg text-violet-200 mb-4">
                <span className="px-2 py-1 bg-violet-700/30 rounded-md font-medium text-violet-100">
                  Full Stack Developer
                </span>{" "}
                &nbsp;|&nbsp; 2nd Year @ IIT Roorkee
              </p> */}
              <ul className="list-disc list-inside space-y-1 text-violet-100 text-base ">
                <li>
                  I'm a Passionate Full Stack Developer, problem solver &
                  upcoming 3rd year student at IIT Roorkee.
                </li>
                <li>
                  Constantly improving my skills through project based learning.
                </li>
                <li>I Like Building software Stuff and solving problems.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-row gap-3  sm:w-full sm:gap-5">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const element = document.getElementById("projects-section");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Projects
                </button>

                <button className="group btn btn-soft bg-transparent  relative overflow-hidden rounded-lg border-2 border-primary  font-semibold text-primary transition-colors duration-300 hover:text-black">
                  <span className="absolute bottom-0 left-0 h-0  sm:w-full bg-primary transition-all duration-300 ease-out group-hover:h-full"></span>
                  <a href="/Resume.pdf" download>
                    <div className="flex justify-between items-center w-[30vw] sm:w-[7vw] group">
                      {" "}
                      <span className="relative z-10 ">My Resume</span>
                      <FaFileDownload className="size-5 z-10 group-hover:text-black transition-all duration-200" />{" "}
                    </div>
                  </a>
                </button>
              </div>
              <div className="flex justify-center gap-5 sm:gap-10">
                {icons.map((image, idx) => {
                  return (
                    <a key={idx} href={image.lk} target="_blank">
                      <img
                        className=" size-8 sm:size-10 shadow-md shadow-violet- rounded-lg bg-violet-700/85 hover:shadow-lg hover:shadow-violet-500 hover:bg-violet-800  transition-all duration-200  focus:outline-none focus:ring-2 focus:ring-violet-400 cursor-pointer"
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
