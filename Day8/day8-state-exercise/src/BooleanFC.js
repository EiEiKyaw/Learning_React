import React, { useState } from "react";

const BooleanFC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h3>{isLoggedIn ? "Welcome Back!" : "Please Login Again!"}</h3>
      <button onClick={toggleLoggedIn}>
        {isLoggedIn ? "Logout" : "Login"} (FC)
      </button>
    </div>
  );
};

export default BooleanFC;
