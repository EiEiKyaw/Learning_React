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

  let month = months[time.getMonth()].slice(0, 3);
  let year = time.getFullYear();
  let day = time.getDate();
  return `${month} ${day}, ${year}`;
};

const Header = (props) => {
  //   const { welcome, title, subtitle, author, date } = props.data;
  //   const { firstName, lastName } = author;

  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = props.data;

  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(),
  };

  return (
    <div className="destructuring-app">
      <Header data={data} />
    </div>
  );
};

export default App;
