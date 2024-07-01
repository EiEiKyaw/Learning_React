import React, { useState } from "react";

const ChangeEventOnSelect = () => {
  const [selectedValue, setSelectedValue] = useState("default");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <>
      <div>
        <select
          onChange={handleChange}
          style={{
            width: "200px",
            height: "50px",
            fontSize: "16px",
            margin: "50px",
          }}
        >
          <option value="default">Choose One</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
        <h2>
          Selected Value :{" "}
          <span style={{ color: "blue" }}>{selectedValue}</span>
        </h2>
      </div>
    </>
  );
};

export default ChangeEventOnSelect;
