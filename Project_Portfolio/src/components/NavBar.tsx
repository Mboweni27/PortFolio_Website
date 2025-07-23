import { ColorModeSwitch } from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <div className="w-full bg-base-100 shadow-md px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 gap-2 sm:gap-0">
      {/* LEFT SIDE: Navigation Buttons */}
      <div className="flex flex-col sm:flex-row sm:join gap-2 sm:gap-0 w-full sm:w-auto">
        <a
          href="#Projects"
          className="btn btn-sm btn-outline border-primary text-primary font-semibold tracking-wide px-6 rounded-lg sm:rounded-l-xl sm:rounded-r-none"
        >
          Projects
        </a>
        <a
          href="#AboutMe"
          className="btn btn-sm btn-outline border-primary text-primary font-semibold tracking-wide px-6 rounded-lg sm:rounded-none"
        >
          AboutMe
        </a>
        <a
          href="#ContactMe"
          className="btn btn-sm btn-outline border-primary text-primary font-semibold tracking-wide px-6 rounded-lg sm:rounded-r-xl sm:rounded-l-none"
        >
          ContactMe
        </a>
      </div>

      {/* RIGHT SIDE: Theme Toggle */}
      <div className="flex items-center h-full mt-2 sm:mt-0 w-full sm:w-auto justify-center sm:justify-start">
        <ColorModeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
