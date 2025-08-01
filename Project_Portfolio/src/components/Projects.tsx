import { useState, useEffect } from "react";

import gamestash from "../assets/game-hub.webp";
import gamestashVid from "../assets/Videos/Compressed Embedded Video For GameStash (1).mp4";
import gamejam from "../assets/gameJAm.webp";
import gamejamVid from "../assets/Videos/Compressed Embedded Video of GameJam (1).mp4";
import tradhis from "../assets/Screenshot of TradHistory.webp";
import tradhisVid from "../assets/Videos/Compressed Embedded Vidoe of Trading App (1).mp4";
import messApp from "../assets/MessagingApp.webp";
import messAppVid from "../assets/Videos/Compressed Embedded Video of Messaging App (1).mp4";

import coming from "../assets/peepo.webp";
import coming2 from "../assets/PEEPO2.webp";

export interface Project {
  name: string;
  image: string;
  tech: string[];
  links?: { label: string; url: string }[];
  videos?: string;
}

// Hook to detect screen width < 1024px (Tailwind's lg)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

export const projs: Project[] = [
  {
    name: "GameStash - Simple website to search games",
    image: gamestash,
    tech: ["TypeScript", "React", "CSS"],
    links: [
      { label: "Live Site", url: "http://gamestash-omega.vercel.app" },
      { label: "GitHub", url: "https://github.com/Mboweni27/GameStash" },
    ],
    videos: gamestashVid,
  },
  {
    name: "IP Conflict  - Topdown shooter arcade game",
    image: gamejam,
    tech: ["GameMaker-Language", "OOP"],
    links: [
      {
        label: "GameDownload",
        url: "https://zemushroomman.itch.io/ip-conflict-unconflicted-version",
      },
      { label: "GitHub", url: "https://github.com/Mboweni27/ShooterGame" },
      {
        label: "NWU Article",
        url: "https://news.nwu.ac.za/nwu-students-shine-48-hour-arcademia-game-jam",
      },
    ],
    videos: gamejamVid,
  },
  {
    name: "Trading Tracker - Logs and pulls trade performance ",
    image: tradhis,
    tech: [".NET", "WPF", "Python", "postgreSQL"],
    links: [
      { label: "YouTube", url: "https://www.youtube.com/watch?v=ZvcPTX_bDKg" },
    ],
    videos: tradhisVid,
  },
  {
    name: "Messaging App - Real time app with group chats",
    image: messApp,
    tech: ["JavaScript", "React", "CSS", "FireBase"],
    links: [
      { label: "GitHub", url: "https://github.com/Mboweni27/Messaging-App" },
      { label: "YouTube", url: "https://www.youtube.com/watch?v=8WSSvMK9mZA" },
    ],
    videos: messAppVid,
  },
  {
    name: "Coming Soon",
    image: coming,
    tech: ["Python", "Computer Vision", "MediaPipe"],
  },
  {
    name: "Coming Soon",
    image: coming2,
    tech: ["C++", "ImGui"],
  },
];

export const Projects = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="Projects"
      className="py-16 px-6 bg-base-100 text-center text-white"
    >
      <h2 className="text-3xl font-bold mb-8 text-primary">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projs.map((project, index) => (
          <div
            key={index}
            className="card bg-base-200 border-2 border-base-400 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <figure className="relative w-full h-74 object-cover rounded-t-xl overflow-hidden group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-300"
              />

              {project.videos && (
                <video
                  src={project.videos}
                  muted
                  loop
                  playsInline
                  autoPlay={isMobile}
                  className={`w-full h-full object-cover absolute inset-0 z-20 transition-opacity duration-300 ${
                    isMobile
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                  onMouseEnter={(e) => {
                    if (!isMobile) e.currentTarget.play();
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }
                  }}
                />
              )}
            </figure>

            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <div className="flex flex-wrap gap-2 text-sm justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded border border-primary text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.links && (
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
