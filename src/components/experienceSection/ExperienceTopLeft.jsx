import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="xl:w-[25%] lg:w-[30%] border border-lightBrown p-4 rounded-xl">
      <p className="text-lg text-center text-lightGrey">
        I competed in the{" "}
        <span className="font-bold text-white">Robot Warrior League</span>, a
        high-intensity robotics combat tournament featuring 24 teams. <br />
        Leading a team of five, we engineered a{" "}
        <span className="font-bold text-white">combat-ready robot</span> using
        advanced mechanical design, electronics, and strategic automation.{" "}
        <br />
        With a current ranking of{" "}
        <span className="font-bold text-white">2nd place</span>, we continue to
        refine our design, integrating{" "}
        <span className="font-bold text-white">weaponized systems</span> to
        compete for the championship.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
