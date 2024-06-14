import React from "react";

const CustomDiv = (props) => {
  return (
    <footer>
      <div className="custom-div">
        <h3>{props.data.welcome}</h3>
        <h4>{props.data.title}</h4>
        <h5>{props.data.subtitle}</h5>
      </div>
    </footer>
  );
};

const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
  };

  return (
    <div className="object-app">
      <CustomDiv data={data} />
    </div>
  );
};

export default App;
