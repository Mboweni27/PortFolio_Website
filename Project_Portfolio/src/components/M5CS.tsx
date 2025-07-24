import interior from "../assets/Screenshot m5 interiorpng.png";
import portfolio from "../assets/Screenshot of-Portfolio.png";
import { useState, useEffect } from "react";

export const M5CS = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // On small screens (<768px) start zoomed and showing portfolio automatically
  const [zoomed, setZoomed] = useState(window.innerWidth < 768);
  const [showPortfolio, setShowPortfolio] = useState(window.innerWidth < 768);
  const [superZoom, setSuperZoom] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // If resizing to small screen, auto enable zoomed/showPortfolio
    if (window.innerWidth < 768) {
      setZoomed(true);
      setShowPortfolio(true);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    setZoomed(true);
    setShowPortfolio(true);
  };

  const handleIframeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!superZoom) setSuperZoom(true);
  };

  // Disable scrolling on main view when zoomed in (except iframe)
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

  // Responsive zoom + pan transform logic
  let povTransform = "scale(1) translate(0, 0)";
  if (zoomed && !superZoom) {
    if (windowWidth < 768) {
      povTransform = "scale(1) translate(0, 0)"; // small screen - no zoom transform
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      povTransform = "scale(2.5) translate(18%, 10%)"; // medium screens
    } else {
      povTransform = "scale(3) translate(-17%, 10%)"; // large screens
    }
  }
  if (superZoom) {
    if (windowWidth < 768) {
      povTransform = "scale(1) translate(0, 0)"; // keep no zoom for small + superZoom
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      povTransform = "scale(3.5) translate(-20%, 0%)";
    } else {
      povTransform = "scale(3.35) translate(-17%, -10%)";
    }
  }

  const tabletPosition =
    "absolute border-2 border-white rounded-sm overflow-hidden " +
    "top-[23.7%] left-[1.7%] w-[65%] h-[11.2%] " +
    "sm:top-[12%] sm:left-[60%] sm:w-[28%] sm:h-[22%] " +
    "md:top-[22%] md:left-[22%] md:w-[35%] md:h-[12%] " +
    "lg:top-[10.1%] lg:left-[64.9%] lg:w-[26%] lg:h-[22.2%] " +
    "transition-all duration-500 cursor-pointer z-50";

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
          onClick={windowWidth >= 768 ? handleClick : undefined} // disable click on small screens
          style={{
            transform: "rotateZ(1deg)",
            transformOrigin: "center center",
            transition: "transform 0.3s ease",
            ...(windowWidth < 768
              ? {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  border: "none",
                  borderRadius: 0,
                  zIndex: 1000,
                  cursor: "default",
                  transform: "rotateZ(0deg)", // no tilt on phone
                }
              : {}),
          }}
        >
          {showPortfolio ? (
            <div
              className="w-full h-full origin-top-left"
              style={
                windowWidth < 768
                  ? { transform: "scale(1)", width: "100%", height: "100%" }
                  : {
                      transform: "scale(0.40)",
                      width: "254.11%",
                      height: "250.11%",
                    }
              }
            >
              <iframe
                src="https://project-portfolio-sable-one.vercel.app/portfolio"
                title="My Portfolio"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                onClick={handleIframeClick}
                style={{
                  cursor: superZoom ? "default" : "zoom-in",
                  pointerEvents: "auto",
                  border: "none",
                  transformOrigin: "top left",
                }}
              />
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
