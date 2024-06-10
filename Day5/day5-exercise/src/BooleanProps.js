import React from "react";

const Status = (props) => {
  let status = props.status ? "Old enough to drive" : "Too young for driving";
  return <p>{status}</p>;
};

const App = () => {
  let currentYear = 2020;
  let birthYear = 2015;
  const age = currentYear - birthYear; // 15 years

  let status = age >= 18;

  return (
    <div className="app">
      <Status status={status} />
    </div>
  );
};

export default App;
