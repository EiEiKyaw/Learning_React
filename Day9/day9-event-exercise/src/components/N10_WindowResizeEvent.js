import React, { useEffect, useState } from "react";

const WindowResizeEvent = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h3 style={{ color: "blue" }}>Width: {dimensions.width}</h3>
      <h3 style={{ color: "red" }}>Height: {dimensions.height}</h3>
    </div>
  );
};

export default WindowResizeEvent;
