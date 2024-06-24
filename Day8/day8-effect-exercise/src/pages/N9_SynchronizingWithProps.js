import React, { useEffect } from "react";

const LogProps = ({ value }) => {
  useEffect(() => {
    console.log("Prop changed:", value);
  }, [value]);

  return <div>Check the console log!</div>;
};

export default LogProps;
