import React from "react";

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const Number = ({ num }) => {
  const isEven = num % 2 === 0;
  const isPrimeNumber = isPrime(num);
  const style = {
    backgroundColor: isPrimeNumber ? "#FD5E53" : isEven ? "#21BF73" : "#FDDB3A",
  };
  return (
    <div className="number-box" style={style}>
      {num}
    </div>
  );
};

const Numbers = ({ numbers }) => {
  const numberList = numbers.map((n) => <Number num={n} key={n} />);
  return (
    <>
      <h1>30 Days Of React</h1>
      <h2 className="subtitle">Number Generator</h2>
      <div className="number-wrapper">{numberList}</div>
    </>
  );
};

export default Numbers;
