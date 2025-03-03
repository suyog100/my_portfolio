import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import { FaReact } from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaNodeJs, FaGithub, FaPython } from "react-icons/fa";

import {
  SiPostgresql,
  SiMongodb,
  SiFlutter,
  SiExpress,
  SiDart,
} from "react-icons/si";

import { DiMysql } from "react-icons/di";

const skills = [
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "ExpressJS", icon: SiExpress },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Flutter", icon: SiFlutter },
  { skill: "Dart", icon: SiDart },
  { skill: "Python", icon: FaPython },
  { skill: "PostgreSQL", icon: SiPostgresql },
  { skill: "MySQL", icon: DiMysql },
  { skill: "MongoDB", icon: SiMongodb },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
