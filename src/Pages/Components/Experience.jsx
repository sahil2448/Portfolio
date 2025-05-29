import PropTypes from "prop-types";
const Experience = ({ org, position, techStack, timeline, description }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(7, 26, 47, 0.878)",
      }}
      className="w-[90%] p-3 rounded-md border border-indigo-950 hover:border-violet-600 transition-all duration-300 cursor-pointer"
    >
      <div className="flex justify-between">
        {" "}
        <div className="flex gap-3 text-violet-500">
          <li>
            {" "}
            <b>{org}</b>
          </li>
        </div>
        <div>{timeline}</div>
      </div>

      <i>{position}</i>
      <div className="mt-3">
        {" "}
        {description.map((item, idx) => {
          return (
            <div className="text-base ml-4 mb-2" key={idx}>
              -> {item}
            </div>
          );
        })}
      </div>

      <i>{/* <p>{techStack}</p> */}</i>
    </div>
  );
};

Experience.propTypes = {
  org: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;
