import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import personvid from "../../assets/images/videos/omvid.mp4"

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "1 Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "10+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "8",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-0 lg:mb-2.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Omkar Patil
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a <span className="bg-highlight">Performance Marketer</span>{" "}
            and <span className="bg-highlight"> Social media analyst</span> with experience in running digital campaigns, tracking performance, and building brand presence online.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="patilomkar7100@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div style={{marginTop:"60px"}}>
        <video
          className="shadow-2xl shadow-gray-200 w-[90%] h-auto mx-auto relative object-contain bg-white rounded-3xl"
          src={personvid}
          muted
          playsInline
          autoPlay
          onEnded={(e) => (e.target.currentTime = e.target.duration - 0.1)}
        />
      </div>
    </div>
  );
};

export default Introduction;
