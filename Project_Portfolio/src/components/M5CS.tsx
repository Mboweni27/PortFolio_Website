import interior from "../assets/Screenshot m5 interiorpng.png";
import portfolio from "../assets/Screenshot of-Portfolio.png";
import { useState, useEffect } from "react";
import Intro from "./intro"; // Import Intro component

export const M5CS = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // On small screens (<768px) start zoomed and showing portfolio automatically
  const [zoomed, setZoomed] = useState(window.innerWidth < 768);
  const [showPortfolio, setShowPortfolio] = useState(window.innerWidth < 768);

  // State to toggle inline Intro component rendering instead of preview image
  const [showIntroInline, setShowIntroInline] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // If resizing to small screen, set zoomed/showPortfolio and clear inline display
    if (window.innerWidth < 768) {
      setZoomed(true);
      setShowPortfolio(true);
      setShowIntroInline(false); // reset inline intro
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // When clicking tablet, show inline Intro (instead of preview image)
  const handleClick = () => {
    setShowIntroInline(true);
    setZoomed(true);
    setShowPortfolio(true);
  };

  // Disable scrolling when zoomed in (same as before)
  useEffect(() => {
    if (zoomed && !showPortfolio) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [zoomed, showPortfolio]);

  // If on mobile, render Intro full screen only
  if (windowWidth < 768) {
    return (
      <div className="w-screen h-screen overflow-auto bg-base-200">
        <Intro />
      </div>
    );
  }

  // Desktop/tablet rendering with M5 dashboard
  // Responsive zoom + pan transform logic
  let povTransform = "scale(1) translate(0, 0)";
  if (zoomed) {
    if (windowWidth >= 768 && windowWidth < 1024) {
      povTransform = "scale(2.5) translate(18%, 10%)";
    } else if (windowWidth >= 1024) {
      povTransform = "scale(3) translate(-17%, 10%)";
    }
  }

  const tabletPosition =
    "absolute border-2 border-white rounded-sm overflow-hidden " +
    "top-[23.7%] left-[1.7%] w-[65%] h-[11.2%] " +
    "sm:top-[12%] sm:left-[60%] sm:w-[28%] sm:h-[22%] " +
    "md:top-[22%] md:left-[22%] md:w-[35%] md:h-[12%] " +
    "lg:top-[10.1%] lg:left-[64.9%] lg:w-[26%] lg:h-[22.2%] " +
    "transition-all duration-500 cursor-pointer z-50";

  // Scale factor for the Intro component inside tablet (adjust here)
  const introScale = 0.3;

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
        transform: povTransform,
        transformOrigin: "65% 25%",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* BMW Dashboard Background */}
        <img
          src={interior}
          alt="BMW Dashboard"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />

        <div
          className={tabletPosition}
          onClick={windowWidth >= 768 ? handleClick : undefined} // enable click on desktop/tablet only
          style={{
            transform: "rotateZ(1deg)",
            transformOrigin: "center center",
            transition: "transform 0.3s ease",
          }}
        >
          {showIntroInline ? (
            // Render Intro inline inside tablet div WITH SCALE
            <div
              className="w-full h-full overflow-auto bg-base-200"
              style={{
                transform: `scale(${introScale})`,
                transformOrigin: "top left",
                width: `${100 / introScale}%`, // compensate for scaling horizontally
                height: `${100 / introScale}%`, // compensate for scaling vertically
              }}
            >
              <Intro />
            </div>
          ) : (
            // Show portfolio preview image
            <img
              src={portfolio}
              alt="My Portfolio Preview"
              className="w-full h-full object-cover"
              draggable={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default M5CS;
