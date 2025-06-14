import PropTypes from "prop-types";

const Skills = ({ name, tech }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1>{name}</h1>
      <div className="flex flex-wrap max-w-[40rem] gap-4  justify-center border-y-2 border-sky-950">
        {tech.map((t) => (
          <div
            key={t.name}
            style={{
              // backgroundColor: "rgba(7, 26, 47, 0.878)",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "5rem",
              minHeight: "5rem",
              height: "fit-content",
            }}
            className="border group border-gray-600 hover:border-violet-600 bg-[#071A2C]/90 hover:bg-black/50  transition-all duration-150"
          >
            {" "}
            <img
              style={{
                width: "3rem",
                height: "auto",
                margin: "0.5rem",
                marginTop: "10px",
                borderRadius: "0.9rem",
              }}
              className="transition-all duration-150 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-800"
              src={t.src}
              alt={t.name}
              title={t.name}
            />
            <p style={{ marginBottom: "10px", fontSize: "12px" }}>{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Skills;
