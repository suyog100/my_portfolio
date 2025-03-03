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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
