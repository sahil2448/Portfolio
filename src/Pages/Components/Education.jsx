import React from "react";

/**
 * A functional component that renders a single education entry.
 * @param {object} props
 * @param {string} props.level - The level of education (e.g. High School, Bachelor, Master, etc.)
 * @param {string} props.degree - The degree earned (e.g. Diploma, Bachelor's, Master's, etc.)
 * @param {string} props.year - The year the degree was earned
 * @param {string} props.name - The name of the institution
 * @returns {ReactElement} A div containing the education information
 */
const Education = ({ level, degree, year, name }) => {
  return (
    <div>
      <div
        className="flex flex-col p-3 rounded-md w-[18rem] lg:min-w-[23rem] max-w-[30rem] min-h-[9rem] border border-indigo-950 hover:border-violet-600 transition-all duration-300 cursor-pointer"
        style={{
          backgroundColor: "rgba(7, 26, 47, 0.878)",
        }}
      >
        <li className="text-violet-500">{level}</li>
        <p className="text-base">{name}</p>

        <p className="text-base">{degree}</p>
        <p className="text-base">{year}</p>
      </div>
    </div>
  );
};

export default Education;
