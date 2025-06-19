import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import github from "/ContactIcons/github.webp";
import gmail from "/ContactIcons/gmail.webp";
import linkedin from "/ContactIcons/linkedin.webp";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);
  const iconsRef = useRef(null);
  const navRef = useRef(null);

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

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      navRef.current.children,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: navRef.current,
          start: "top 95%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      iconsRef.current.children,
      {
        scale: 0,
        rotation: 180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 95%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const iconElements = iconsRef.current.children;
    Array.from(iconElements).forEach((icon) => {
      const img = icon.querySelector("img");

      icon.addEventListener("mouseenter", () => {
        gsap.to(img, {
          scale: 1.2,
          rotation: 10,
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      icon.addEventListener("mouseleave", () => {
        gsap.to(img, {
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    const navElements = navRef.current.children;
    Array.from(navElements).forEach((navItem) => {
      navItem.addEventListener("mouseenter", () => {
        gsap.to(navItem, {
          scale: 1.05,
          y: -2,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      navItem.addEventListener("mouseleave", () => {
        gsap.to(navItem, {
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    return () => {
      Array.from(iconElements).forEach((icon) => {
        icon.removeEventListener("mouseenter", () => {});
        icon.removeEventListener("mouseleave", () => {});
      });
      Array.from(navElements).forEach((navItem) => {
        navItem.removeEventListener("mouseenter", () => {});
        navItem.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div>
      <footer
        ref={footerRef}
        className="footer footer-horizontal footer-center text-base-content rounded p-10"
      >
        <nav ref={navRef} className="grid grid-flow-col gap-4">
          {navItems.map((item, idx) => {
            return (
              <a
                key={idx}
                className="hover:text-violet-600 transition-all duration-150 cursor-pointer"
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
          <div ref={iconsRef} className="flex gap-10">
            {icons.map((image, idx) => {
              return (
                <a key={idx} href={image.lk} target="_blank">
                  <img
                    className="size-10 shadow-md shadow-violet- rounded-lg bg-violet-700/85 hover:shadow-lg hover:shadow-violet-500 hover:bg-violet-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400 cursor-pointer"
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
          <p className="hover:text-violet-400 transition-colors duration-200">
            Copyright © {new Date().getFullYear()} - All right reserved by Sahil
            Kamble
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
