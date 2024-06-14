import React from "react";

const Skills = (props) => props.skills.map((p) => <li key={p}>{p}</li>);

const App = () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  return (
    <div className="array-app">
      <ul>
        <Skills skills={skills} />
      </ul>
    </div>
  );
};

export default App;
