import github from "/ContactIcons/github.webp";
import gmail from "/ContactIcons/gmail.webp";
import linkedin from "/ContactIcons/linkedin.webp";
// import profile from "/profile-rm-bg.png";
import profile from "/profile.webp";
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
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="avatar rounded-full lg:rounded-sm flex justify-start items-start p-2 border-2 border-primary w-[70vw] sm:w-[70vw] md:w-[40vw] lg:w-[28vw] xl:w-[30vw]">
            <div className=" rounded-full lg:rounded-sm">
              <img src={profile} className="" />
            </div>
          </div>
          <div className="w-[90vw] md:w-[80vw]  lg:w-[60vw] flex flex-col justify-center items-center sm:items-start gap-4">
            <div>
              <h1 className="relative text-3xl lg:text-6xl mb-2 font-bold inline-block bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Hello World !
              </h1>
              <p className="text-xl lg:text-2xl font-semibold mb-2 text-white font-serif">
                I’m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-extrabold">
                  Sahil Yuvraj Kamble
                </span>
                .
              </p>
            </div>

            <div className="flex flex-col  mb-1 lg:py-3 p-6 lg:px-0 ">
              <div className=" space-y-1  text-gray-300 ">
                <li className="text-base">
                  I'm a Passionate Full Stack Developer, problem solver &
                  upcoming 3rd year student at IIT Roorkee.
                </li>
                <li className="text-base">
                  Constantly improving my skills through project based learning.
                </li>
                <li className="text-base">
                  I Like Building software Stuff and solving problems.
                </li>
              </div>
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
                  <a href="/ResumeLatest.pdf" download>
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
