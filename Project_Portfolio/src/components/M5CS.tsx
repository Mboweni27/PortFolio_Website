import { useState, useEffect } from "react";
import interior from "../assets/Screenshot m5 interiorpng.webp";
import portfolio from "../assets/portofio pic.webp";
import Intro from "./intro";

export const M5CS = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [zoomed, setZoomed] = useState(window.innerWidth < 768);
  const [showIntroInline, setShowIntroInline] = useState(false);

  // Update window size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width < 768) {
        setZoomed(true);
        setShowIntroInline(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll unless Intro inline is visible on desktop/tablet
  useEffect(() => {
    const shouldLockScroll = windowWidth >= 768 && !showIntroInline;

    if (shouldLockScroll) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    };
  }, [windowWidth, showIntroInline]);

  const handleClick = () => {
    setShowIntroInline(true);
    setZoomed(true);
  };

  // Zoom styles
  let povTransform = "scale(1) translate(0, 0)";
  if (zoomed) {
    if (windowWidth >= 768 && windowWidth < 1024) {
      povTransform = "scale(2.5) translate(18%, 10%)";
    } else if (windowWidth >= 1024) {
      povTransform = "scale(3) translate(-17%, 10%)";
    }
  }

  const introScale = 0.3;

  const tabletPosition =
    "absolute border-2 border-white rounded-sm overflow-hidden " +
    "top-[23.7%] left-[1.7%] w-[65%] h-[11.2%] " +
    "sm:top-[12%] sm:left-[60%] sm:w-[28%] sm:h-[22%] " +
    "md:top-[22%] md:left-[22%] md:w-[35%] md:h-[12%] " +
    "lg:top-[10.1%] lg:left-[64.9%] lg:w-[26%] lg:h-[22.2%] " +
    "transition-all duration-500 cursor-pointer z-50";

  // Mobile override: show Intro as fullscreen scrollable
  if (windowWidth < 768) {
    return (
      <div className="w-screen h-screen overflow-auto bg-base-200">
        <Intro />
      </div>
    );
  }

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen overflow-hidden"
      style={{
        transform: povTransform,
        transformOrigin: "65% 25%",
        transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Background */}
        <img
          src={interior}
          alt="BMW Dashboard"
          className="w-full h-full object-cover object-center"
          draggable={false}
        />

        {/* Tablet Area */}
        <div
          className={tabletPosition}
          onClick={windowWidth >= 768 ? handleClick : undefined}
          style={{
            transform: "rotateZ(1deg)",
            transformOrigin: "center center",
            transition: "transform 0.3s ease",
          }}
        >
          {showIntroInline ? (
            <div
              className="w-full h-full overflow-auto bg-base-200"
              style={{
                transform: `scale(${introScale})`,
                transformOrigin: "top left",
                width: `${100 / introScale}%`,
                height: `${100 / introScale}%`,
              }}
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <Intro />
            </div>
          ) : (
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
