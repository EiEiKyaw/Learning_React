import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  return <div>Check the console log!</div>;
};

export default BasicEffect;
