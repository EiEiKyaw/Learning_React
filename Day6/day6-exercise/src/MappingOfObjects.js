import React from "react";

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

const Country = ({ country: { name, city } }) => (
  <div className="card-body">
    <h3>{name}</h3>
    <h5>{city}</h5>
  </div>
);

const cardStyles = {
  borderRadius: "20px",
  border: "2px solid #73AD21",
  margin: "15px",
};

const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <div className="card" style={cardStyles}>
      <Country country={country} key={country.name} />
    </div>
  ));
  console.log(countryList);
  return <div>{countryList}</div>;
};

const App = () => (
  <div>
    <h1>Mapping Array of Objects</h1>
    <Countries countries={countries} />
  </div>
);

export default App;
