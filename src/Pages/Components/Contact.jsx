import PropTypes from "prop-types";

const Contact = ({ type, icon, text, link }) => {
  return (
    <div
      className="flex flex-col gap-4 p-3 bg-[#071A2C]/90 hover:bg-black/50 rounded-md w-[18rem] lg:min-w-[15rem] max-w-[30rem] min-h-[7rem] border border-indigo-950 hover:border-violet-600 transition-all duration-300 "
      style={
        {
          // backgroundColor: "rgba(7, 26, 47, 0.878)",
        }
      }
    >
      <li className="text-lg text-violet-500">{type}</li>
      <div className="flex items-center gap-4">
        {" "}
        <img
          src={icon}
          alt=""
          className="size-6 shadow-md bg-violet-800 rounded-lg shadow-violet-800"
        />
        <p className="text-base hover:underline hover:text-violet-500 transition-all duration-300">
          {" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </p>
      </div>
    </div>
  );
};

Contact.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Contact;
