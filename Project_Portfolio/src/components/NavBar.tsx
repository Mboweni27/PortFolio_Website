// Navbar.tsx
import { ColorModeSwitch } from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <div className="w-full bg-base-100 shadow-md px-6 py-2 flex items-center justify-between h-16">
      {/* LEFT SIDE: Navigation Buttons as one joined button group */}
      <div className="join">
        <a
          href="#Home"
          className="join-item btn btn-sm btn-outline border-primary text-primary font-semibold tracking-wide px-6 rounded-l-xl"
        >
          Home
        </a>
        <a
          href="#TechStack"
          className="join-item btn btn-sm btn-outline border-primary text-primary font-semibold tracking-wide px-6"
        >
          TechStack
        </a>
        <a
          href="#AboutME"
          className="join-item btn btn-sm btn-outline border-primary text-primary font-semibold tracking-wide px-6 rounded-r-xl"
        >
          AboutMe
        </a>
      </div>

      {/* RIGHT SIDE: Theme Toggle */}
      <div className="flex items-center h-full">
        <ColorModeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
