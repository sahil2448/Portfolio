import React from "react";
import github from "../../public/ContactIcons/github.webp";
import gmail from "../../public/ContactIcons/gmail.webp";
import linkedin from "../../public/ContactIcons/linkedin.webp";
import { FaFileDownload } from "react-icons/fa";

const Hero = () => {
  let icons = [github, linkedin, gmail];
  return (
    <div>
      <div
        className="hero  min-h-screen bg-none"
        // style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="avatar">
            <div className="w-72 h-96 rounded-xl">
              {/* <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" /> */}
            </div>
          </div>
          <div className="w-[60%] flex flex-col gap-4">
            <h1 className="relative text-6xl mb-6 font-bold inline-block bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Hello world !, <br />
            </h1>
            <div className="flex flex-col py-3 mb-3  p-6">
              <p className="text-2xl font-semibold mb-2 text-white">
                I’m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-extrabold">
                  Sahil Yuvraj Kamble
                </span>
                .
              </p>
              {/* <p className="text-lg text-violet-200 mb-4">
                <span className="px-2 py-1 bg-violet-700/30 rounded-md font-medium text-violet-100">
                  Full Stack Developer
                </span>{" "}
                &nbsp;|&nbsp; 2nd Year @ IIT Roorkee
              </p> */}
              <ul className="list-disc list-inside space-y-1 text-violet-100 ">
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
              <div className="flex flex-row gap-5">
                <button className="btn btn-primary ">Projects</button>

                <button className="group btn btn-soft bg-transparent  relative overflow-hidden rounded-lg border-2 border-primary  font-semibold text-primary transition-colors duration-300 hover:text-black">
                  <span className="absolute bottom-0 left-0 h-0 w-full bg-primary transition-all duration-300 ease-out group-hover:h-full"></span>
                  <div className="flex justify-between items-center w-[7vw] group">
                    <span className="relative z-10 ">My Resume</span>
                    <FaFileDownload className="size-5 z-10 group-hover:text-black transition-all duration-200" />
                  </div>
                </button>
              </div>
              <div className="flex gap-10">
                {icons.map((image, idx) => {
                  return (
                    <img
                      className="  size-10 shadow-md shadow-violet- rounded-lg bg-violet-700/55 hover:shadow-lg hover:shadow-violet-500 hover:bg-violet-800  transition-all duration-200  focus:outline-none focus:ring-2 focus:ring-violet-400 cursor-pointer"
                      key={idx}
                      src={image}
                      alt=""
                    />
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
