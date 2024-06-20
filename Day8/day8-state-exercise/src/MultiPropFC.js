import React, { useState } from "react";

const MultiPropFC = () => {
  const [profile, setProfile] = useState({
    firstName: "Ei Ei",
    lastName: "Kyaw",
  });

  const updateInfo = () => {
    setProfile({ firstName: "Aww Aww", lastName: "Kyie" });
  };

  return (
    <div>
      <p>First Name: {profile.firstName}</p>
      <p>Last Name: {profile.lastName}</p>
      <button onClick={updateInfo}>Update Profile (CC)</button>
    </div>
  );
};

export default MultiPropFC;
