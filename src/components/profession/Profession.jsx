import Roles from "./Roles";

const rolesData = [
    {
    id: 1,
    title: "Requirement Gathering",
    description:
      "I collect and analyze business needs by engaging with stakeholders, studying processes, and identifying gaps to define clear and actionable requirements.",
  },
  {
    id: 2,
    title: "Data Analysis",
    description:
      "I interpret data to uncover trends, patterns, and insights that guide decision-making and highlight opportunities for business growth.",
  },
  {
    id: 3,
    title: "Strategy Implementation",
    description:
      "I support the execution of business strategies, track outcomes, and ensure continuous improvement to deliver long-term value.",
  },

];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in analyzing business needs, identifying opportunities, and 
            translating requirements into actionable solutions that drive efficiency 
            and growth.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My approach combines analytical thinking and problem-solving skills to 
            deliver insights and strategies that align business objectives with 
            practical, results-driven outcomes.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
