import { FaCheckCircle } from "react-icons/fa";

const Achievements = () => {
  const arr = [
    "2x Participation in hackathons",
    "Solved 250+ problems on Leetcode",
    "Rated 1016 at Codeforces",
    "Contributed to web developer vertical of TEDxIITRoorkee (Built complete website)",
    "Contributed to public github repository of Social summit website of NSS IIT Roorkee",
    "Participated in Snap syntax event in Cognizance'24 technical fest",
    "Worked as a marketing team member of NSS IIT Roorkee",
  ];

  return (
    <section className=" lg:p-3 w-full flex flex-col items-start ">
      <ul className="space-y-4 ">
        {arr.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 group rounded-lg p-3 transition-all duration-200 border border-sky-950 hover:border-violet-600"
            style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
          >
            <FaCheckCircle className="mt-1 text-violet-600 transition-all duration-200 w-0 sm:w-[1vw]" />
            <span className=" text-base">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
