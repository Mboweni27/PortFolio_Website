import cpp from "../assets/cpp-svgrepo-com.svg";
import python from "../assets/python-svgrepo-com.svg";
import java from "../assets/java-svgrepo-com.svg";
import react from "../assets/react-svgrepo-com.svg";
import css from "../assets/css-3-svgrepo-com.svg";
import typescript from "../assets/typescript.svg";
import csharp from "../assets/csharp-svgrepo-com.svg";
import html from "../assets/html-5-svgrepo-com.svg";
import flask from "../assets/flask-svgrepo-com.svg";
import firebase from "../assets/icons8-firebase.svg";
import sql from "../assets/sql-database-generic-svgrepo-com.svg";
import mongo from "../assets/MongoDB (1).svg";

const stack = [
  { icon: python, name: "Python" },
  { icon: flask, name: "Flask" },
  { icon: mongo, name: "MongoDB" },
  { icon: sql, name: "SQL" },
  { icon: typescript, name: "TypeScript" },
  { icon: react, name: "React" },
  { icon: html, name: "HTML" },
  { icon: java, name: "Java" },
  { icon: css, name: "CSS" },
  { icon: firebase, name: "FireBase" },
  { icon: cpp, name: "C++" },
  { icon: csharp, name: "C#" },
];

export const TechStack = () => {
  return (
    <div className="py-16 px-6 bg-base-100 text-center text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {stack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 hover:scale-110 transition-transform duration-200"
            />
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
