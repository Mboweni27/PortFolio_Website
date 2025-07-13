import mypic from "..//assets/Mb_photoshopped.webp";
import { FaLinkedin, FaGithub, FaYoutube, FaDownload } from "react-icons/fa";
import pdf from "../assets/MbuyeloMboweniCV.pdf";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { TechStack } from "./TechStack";
import { Projects } from "./Projects";

export const intro = () => {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen gap-20 px-4 text-white bg-base-200">
        {/* ColorModeSwitch positioned top-right */}
        <div className="absolute top-4 right-4 z-50">
          <ColorModeSwitch />
        </div>

        {/* Left: Text content */}
        <div className="text-4xl font-bold max-w-md">
          <p className="text-4xl font-bold">Hello, I am</p>
          <p className="text-4xl font-bold text-primary">
            Mbuyelo Batlile Mboweni
          </p>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            I am a full-stack software developer and automation engineer. I’m
            highly adaptable and hardworking, always eager to learn new
            technologies.
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/Mboweni27"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/mbuyelo-mboweni-32841a317/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline"
            >
              <FaLinkedin size={27} />
            </a>

            <a
              href="https://www.youtube.com/@BatlileMboweni"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline"
            >
              <FaYoutube size={30} />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="mt-6">
            <a href={pdf} download className="btn btn-outline gap-2">
              <FaDownload />
              Download CV
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-shrink-0 w-[280px] h-[280px] rounded-2xl overflow-hidden">
          <img src={mypic} alt="me" className="w-full h-full object-cover" />
        </div>
      </div>
      <TechStack />
      <Projects />
    </>
  );
};

export default intro;
