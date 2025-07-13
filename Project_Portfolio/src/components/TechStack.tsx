import { SiTypescript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
export const TechStack = () => {
  const stack = [
    { icon: <SiPython size={40} />, name: "Python" },
    { icon: <FaFlask size={40} />, name: "Flask" },
    { icon: <DiPostgresql size={40} />, name: "PostgreSQL" },
    { icon: <DiMongodb size={40} />, name: "MongoDB" },
    { icon: <SiTypescript size={40} />, name: "TypeScript" },
    { icon: <FaReact size={40} />, name: "React" },
    { icon: <FaCss3Alt size={40} />, name: "CSS3" },
    { icon: <FaNodeJs size={40} />, name: "Node.js" },
    { icon: <IoLogoFirebase size={40} />, name: "Firebase" },
    { icon: <FaWpforms size={40} />, name: "C# WebForms" },
  ];
  return (
    <div className="py-16 px-6 bg-base-100 text-center text-white">
      <h2 className="text-3xl font-bold mb-8 text-primary">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-10 justify-items-center">
        {stack.map((tech, index) => (
          <div key={index} className="tooltip tooltip-top" data-tip={tech.name}>
            <div className="hover:scale-110 transition-transform">
              {tech.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
