import Numbers from "./component/Numbers";
import ColorPalette from "./component/ColorPalette";
import Countries from "./component/Countries";
import "./App.css";
import "./style/global.css";

const numbers = [];
for (let i = 0; i < 32; i++) {
  numbers.push(i);
}

const countries = [
  { country: "World", population: 7693165599 },
  { country: "China", population: 1377422166 },
  { country: "India", population: 1295210000 },
  { country: "United States of America", population: 323947000 },
  { country: "Indonesia", population: 258705000 },
  { country: "Brazil", population: 206135893 },
  { country: "Pakistan", population: 194125062 },
  { country: "Nigeria", population: 186988000 },
  { country: "Bangladesh", population: 161006790 },
  { country: "Russian Federation", population: 146599183 },
  { country: "Japan", population: 126960000 },
];

function App() {
  return (
    <div className="App">
      <Numbers numbers={numbers} />
      <ColorPalette />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
