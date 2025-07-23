import gamestash from "../assets/game-hub.webp";
import gamejam from "../assets/gameJAm.webp";
import tradhis from "../assets/tradingAPP.webp";

export interface Project {
  name: string;
  image: string;
  tech: string[];
}
export const projs: Project[] = [
  {
    name: "GameStash",
    image: gamestash,
    tech: ["TypeScript", "React", "CSS"],
  },
  {
    name: "IP Conflict",
    image: gamejam,
    tech: ["GameMaker Language", "OOP"],
  },
  {
    name: "Trading History",
    image: tradhis,
    tech: [".NET", "WPF", "Python", "postgreSQL"],
  },
];
export const Projects = () => {
  return (
    <>
      <div className="py-16 px-6 bg-base-100 text-center text-white">
        <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projs.map((project, index) => (
            <div
              key={index}
              className="card bg-base-200 border border-base-300 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <figure>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge badge-outline">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
