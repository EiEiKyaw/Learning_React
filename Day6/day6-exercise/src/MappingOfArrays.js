import React from "react";

const skills = [
  ["HTML", 10],
  ["CSS", 7],
  ["JavaScript", 9],
  ["React", 8],
];

const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} - {level}
  </li>
);

const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => (
    <Skill skill={skill} key={skill.tech} />
  ));
  return <ul>{skillsList}</ul>;
};

const App = () => {
  return (
    <div>
      <h1>Mapping Array of Arrays</h1>
      <Skills skills={skills} />
    </div>
  );
};

export default App;
