import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Music Recommendation System",
    year: "Mar2022",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/suyog100/MUSIC_RECOMMENDATION",
  },
  {
    name: "SongType",
    year: "Sept2022",
    align: "left",
    image: "/images/songtype.png",
    link: "https://github.com/suyog100/Final-Songtype",
  },
  {
    name: "Food Delivery Website and Mobile App",
    year: "Jan2023",
    align: "right",
    image: "/images/besushi.png",
    link: "https://github.com/suyog100/FoodWeb",
  },
  {
    name: "Junglee",
    year: "May2024",
    align: "left",
    image: "/images/junglee.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
