import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Courses",

    responsibilities: [
      "AWS Academy Cloud Foundation - AWS Academy",
      "IOA Institue of Analytics - ioaglobal.org",
    ],
  },
  {
    job: "Academic Courses ",
    company: "Coventry University",
    date: "2022 - 2025",
    responsibilities: [
      "Web Api Development",
      "UI/UX Design",
      "Data and Visual Analytics.",
      "Data Structure and Algorithm",
      " Database System",
      "Security",
    ],
  },
  {
    job: "Academic Courses ",
    company: "Sprints",
    date: "2022 - 2025",
    responsibilities: [
      "Software Development",
      "Mobile Application Development",
      "Data Science for Developers",
      "Mathematics for Computer Science",
      "Object Oriented Programming",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
