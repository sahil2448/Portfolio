import { useState, useEffect, useRef } from "react";
import "../css/Navbar.css";
import gsap from "gsap";

const Navbar = () => {
  // const [darkTheme, setDarkTheme] = useState(
  //   localStorage.getItem("theme") === "dark"
  // );
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navRef = useRef(null);
  const navItemsRef = useRef(null);

  // Check screen size and update state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // sm breakpoint is 640px
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Animation effect
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    if (navItemsRef.current) {
      const buttons = navItemsRef.current.querySelectorAll("button, label");

      gsap.fromTo(
        buttons,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          delay: 0,
          stagger: 0.3,
        }
      );
    }
  }, []);

  // Theme effect
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    // Optionally, clear any previous theme in localStorage
    localStorage.removeItem("theme");
  }, []);

  const scrollToSection = (sectionId) => {
    const drawerCheckbox = document.getElementById("navbar-drawer");
    if (drawerCheckbox && drawerCheckbox.checked) {
      drawerCheckbox.checked = false;
    }

    // Finding the target section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", id: "hero-section" },
    { label: "About", id: "about-section" },
    { label: "Projects", id: "projects-section" },
    { label: "Contact", id: "contact-section" },
  ];

  return (
    <div className="sticky top:0 lg:top-5 z-50  backdrop-blur-md bg-opacity-40 bg-base-100 lg:w-[80%] lg:mx-auto border border-gray-600 md:rounded-3xl md:px-10">
      {isSmallScreen ? (
        // Mobile drawer navigation
        <div className="drawer drawer-end ">
          <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <nav className="max-w-7xl mx-auto p-4 ">
              <div ref={navRef} className="flex items-center justify-between">
                {/* <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> */}
                {/* <div className="text-2xl font-bold bg-clip-text text-transparent !text-sky-500">
                  Portfolio
                </div> */}
                <div className="relative inline-block mt-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                  Sahil kamble
                </div>
                <div className="flex items-center gap-2">
                  <label
                    htmlFor="navbar-drawer"
                    className="btn btn-circle btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
            </nav>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="navbar-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul
              className="menu text-base-content min-h-full w-[60vw] p-4"
              style={{
                backgroundColor: "rgba(7, 26, 47, 0.978)",
              }}
            >
              <div className="flex flex-col justify-center items-center gap-2 ">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={() => scrollToSection(item.id)}
                      className="cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      ) : (
        // Desktop navigation
        <nav className="max-w-7xl mx-auto p-4 ">
          <div ref={navRef} className="flex items-center justify-between">
            {/* <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"> */}
            {/* <div className="text-2xl font-bold bg-clip-text text-transparent !text-sky-500">
              Portfolio
            </div> */}
            <div className="relative text-2xl font-bold inline-block  bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              SK
            </div>
            <div
              ref={navItemsRef}
              className="flex items-center gap-6 flex-wrap"
            >
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="btn btn-ghost hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
      {/* <hr className="w-[100%] mx-auto border-gray-600" /> */}
    </div>
  );
};

export default Navbar;
