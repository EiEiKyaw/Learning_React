import React from "react";

const Numbers = ({ numbers }) => numbers.map((num) => <li key={num}>{num}</li>);

const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1>Mapping Array of Numbers</h1>
      <ul>
        <Numbers numbers={numbers} />
      </ul>
    </div>
  );
};

export default App;
