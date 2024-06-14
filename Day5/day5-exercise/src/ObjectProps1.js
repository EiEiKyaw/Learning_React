import React from "react";

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

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const day = time.getDate();
  return `${month} ${day}, ${year}`;
};

const Header = (props) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
        <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
      </div>
    </header>
  );
};

const App = () => {
  const data = {
    welcome: "Welcome to 30 Days of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Ei Ei",
      lastName: "Kyaw",
    },
    date: new Date(),
  };

  return (
    <div className="object-app-1">
      <Header data={data} />
    </div>
  );
};

export default App;
