import interior from "../assets/Screenshot m5 interiorpng.png";
import { useNavigate } from "react-router-dom";
import portfolio from "../assets/Screenshot of-Portfolio.png";

export const M5CS = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={interior}
        alt="BMW Dashboard"
        className="w-full h-full object-cover"
      />

      {/* Clickable overlay area */}
      <div
        onClick={() => navigate("/portfolio")}
        style={{ transform: "rotate(1.5deg)" }}
        className="
          absolute cursor-pointer border-2 border-white rounded-sm overflow-hidden
          top-[23.7%] left-[1.7%] w-[65%] h-[11.2%]
          sm:top-[12%] sm:left-[60%] sm:w-[28%] sm:h-[22%]
          md:top-[22%] md:left-[20%] md:w-[35%] md:h-[12%]
          lg:top-[11.4%] lg:left-[64.9%] lg:w-[26%] lg:h-[20.2%]
        "
      >
        <img
          src={portfolio}
          alt="My Portfolio"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default M5CS;
