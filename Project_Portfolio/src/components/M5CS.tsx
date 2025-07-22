import interior from "../assets/Screenshot m5 interiorpng.png";
import { useNavigate } from "react-router-dom";
import portfolio from "../assets/Screenshot Portfolio.png";

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
        className="absolute cursor-pointer"
        style={{
          top: "11.4%",
          left: "64.9%",
          width: "26%",
          height: "20.2%",
          transform: "rotate(1.5deg)",
          border: "2px solid white",
          borderRadius: "2px",
          overflow: "hidden", // Ensures image stays within bounds
        }}
        onClick={() => navigate("/portfolio")}
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
