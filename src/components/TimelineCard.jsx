import { useEffect, useRef, useState } from "react";

const TimelineCard = ({ id, tagline, title, description, image, isLast }) => {
  const [lineHeight, setLineHeight] = useState(0);
  const [enlight, setEnlight] = useState(false);
  const [showText, setShowText] = useState(false);
  const cardRef = useRef(null);
  const lineRef = useRef(null);

  const getVerticalPosition = () => {
    const rect = cardRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2) {
      setEnlight(true);
      setShowText(true);
      const fark = (window.innerHeight / 2 - rect.top).toFixed(2);
      if (fark < lineRef.current.offsetHeight) setLineHeight(fark);
    } else {
      setEnlight(false);
      setShowText(false);
      setLineHeight(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", getVerticalPosition);
    return () => window.removeEventListener("scroll", getVerticalPosition);
  }, []);

  return (
    <div className="min-h-80 flex md:gap-10 gap-0 relative" ref={cardRef}>
      <div className="w-16 px-5 flex flex-col items-center gap-5 relative z-10">
        <h1
          className={`pt-3 text-6xl font-extrabold transition-all duration-400 ${
            enlight ? "text-gray-100" : "text-gray-600"
          }`}
        >
          {id < 10 ? `0${id}` : id}
        </h1>
        <div className="h-full w-1" ref={lineRef}>
          {!isLast && (
            <div
              className="bg-purple-700"
              style={{
                height: lineHeight + "px",
                transition: "height 0.1s ease",
              }}
            />
          )}
        </div>
      </div>
      <div
        className={`p-5 pt-0 transition-all duration-500 ${
          showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h6 className={`text-sm ${isLast ? "text-yellow-300" : ""}`}>
          {tagline}
        </h6>
        <h2 className="mb-3 text-5xl font-bold">{title}</h2>
        <p className="pb-20">{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
