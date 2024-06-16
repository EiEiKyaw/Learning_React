import React from "react";
import logo from "./logo.svg";

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
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
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

const TechList = ({ techs }) => techs.map((t) => <li key={t}>{t}</li>);

const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

const imageStyles = {
  maxWidth: "300px",
  maxHeight: "300px",
};

const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} style={imageStyles} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

const Main = ({ user, techs, handleTime, greet }) => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text="Greet People" onClick={greet} style={buttonStyles} />
      <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
);

const Footer = ({ copyright }) => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyright.getFullYear()}</p>
    </div>
  </footer>
);

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
  const date = new Date();
  const techs = ["HTML", "CSS", "JavaScript"];
  const user = { ...data.author, image: logo };

  const handleTime = () => {
    alert(new Date());
  };

  const greet = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };

  return (
    <div className="app">
      <Header data={data} />
      <Main user={user} techs={techs} handleTime={handleTime} greet={greet} />
      <Footer copyright={date} />
    </div>
  );
};

export default App;
