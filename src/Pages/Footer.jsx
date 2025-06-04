import React from "react";
import github from "../../public/ContactIcons/github.webp";
import gmail from "../../public/ContactIcons/gmail.webp";
import linkedin from "../../public/ContactIcons/linkedin.webp";
function Footer() {
  let icons = [
    { imgUrl: github, lk: "https://github.com/sahil2448" },
    {
      imgUrl: linkedin,
      lk: "https://www.linkedin.com/in/sahil-kamble-43b3ba279/",
    },
    { imgUrl: gmail, lk: "syk2448@gmail.com" },
  ];
  let navItems = [
    { Name: "Home", section: "hero-section" },
    { Name: "About", section: "about-section" },
    { Name: "Projects", section: "projects-section" },
    { Name: "Contact", section: "contact-section" },
  ];
  return (
    <div>
      <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 ">
        <nav className="grid grid-flow-col gap-4">
          {navItems.map((item, idx) => {
            return (
              <a
                key={idx}
                className=" hover:text-violet-600 transition-all duration-150 cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(item.section);
                  element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.Name}
              </a>
            );
          })}
        </nav>
        <nav>
          <div className="flex gap-10">
            {icons.map((image, idx) => {
              return (
                <a key={idx} href={image.lk} target="_blank">
                  <img
                    className="  size-10 shadow-md shadow-violet- rounded-lg bg-violet-700/85 hover:shadow-lg hover:shadow-violet-500 hover:bg-violet-800  transition-all duration-200  focus:outline-none focus:ring-2 focus:ring-violet-400 cursor-pointer"
                    key={idx}
                    src={image.imgUrl}
                    alt=""
                  />
                </a>
              );
            })}
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Sahil
            Kamble
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
