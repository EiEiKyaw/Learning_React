import React from "react";

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[time.getMonth()].split(0, 3);
  let year = time.getFullYear();
  let day = time.getDate();
  return `${month} ${day}, ${year}`;
};

const App = () => {
  const sayHi = () => {
    alert("Hi");
  };
  const handleTime = () => {
    alert(showDate(new Date()));
  };
  return (
    <div className="button-app">
      <Button text="Say Hi" onClick={sayHi} />
      <Button text="Greet" onClick={() => alert("Nice to meet you")} />
      <Button text="Show Date" onClick={handleTime} />
    </div>
  );
};

export default App;
