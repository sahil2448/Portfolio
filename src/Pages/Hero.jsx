import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero  min-h-screen bg-none"
        // style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="avatar">
            <div className="w-72 h-96 rounded-xl">
              <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" />
            </div>
          </div>
          <div className="w-[60%]">
            <h1 className="relative text-5xl mb-6 font-bold inline-block  bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Hello world, I'm Sahil
            </h1>
            <p className="py-6 text-xl mb-6">
              I'm a Passionate Mern Stack Developer from IIT Roorkee, Currently
              a 2nd year at chemical engineering department.
            </p>
            <div className="flex flex-row gap-5">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-outline btn-info">
                Donwload Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
