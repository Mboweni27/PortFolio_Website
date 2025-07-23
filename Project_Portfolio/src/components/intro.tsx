import mypic from "../assets/Mb-ACTUALpng.png";
import { FaLinkedin, FaGithub, FaYoutube, FaDownload } from "react-icons/fa";
import pdf from "../assets/MbuyeloMboweniCV.pdf";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { TechStack } from "./TechStack";
import { Projects } from "./Projects";

export const intro = () => {
  return (
    <>
      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen gap-10 px-4 text-white bg-base-200">
        {/* Color Mode Switch (top-right) */}
        <div className="absolute top-4 right-4 z-50">
          <ColorModeSwitch />
        </div>

        {/* Left: Text content */}
        <div className="text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl font-bold max-w-md">
          <p>Hello, I am</p>
          <p className="text-primary">Mbuyelo Batlile Mboweni</p>
          <p className="text-gray-300 mt-6 text-base sm:text-lg leading-relaxed">
            I am a full-stack software developer and automation engineer. I’m
            highly adaptable and hardworking, always eager to learn new
            technologies.
          </p>

          {/* Social Icons */}
          <div className="mt-7 flex justify-center lg:justify-start gap-6">
            <a
              href="https://github.com/Mboweni27"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline w-12 h-12 border-2"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/mbuyelo-mboweni-32841a317/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline w-12 h-12 border-2"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://www.youtube.com/@BatlileMboweni"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline w-12 h-12 border-2"
            >
              <FaYoutube size={30} />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="mt-6">
            <a href={pdf} download className="btn btn-outline gap-2 border-2">
              <FaDownload />
              Download CV
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[350px] lg:h-[350px] rounded-3xl overflow-hidden">
          <img src={mypic} alt="me" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Tech Stack & Projects */}
      <TechStack />
      <Projects />

      {/* Space before ChatBot or Footer */}
      <div className="mt-12 mb-12 px-4"></div>
    </>
  );
};

export default intro;
