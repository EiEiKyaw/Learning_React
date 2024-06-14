import React from "react";

const Age = (props) => <div>This person is {props.age} years old.</div>;
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
);

const App = () => {
  let currentYear = 2020;
  let birthYear = 1820;
  const age = currentYear - birthYear;
  const gravity = 9.81;
  const mass = 75;

  return (
    <div className="number-app">
      <Age age={age} />
      <Weight weight={gravity * mass} />
    </div>
  );
};

export default App;
