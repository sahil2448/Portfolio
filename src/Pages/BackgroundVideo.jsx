import bg from "../../public/Videos/bg.webm";

const BackgroundVideo = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10 w-full h-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={bg} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default BackgroundVideo;
