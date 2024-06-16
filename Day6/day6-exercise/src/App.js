import "./App.css";
import NumsMapping from "./MappingOfNumbers.js";
import ArraysMapping from "./MappingOfArrays.js";
import ObjsMapping from "./MappingOfObjects.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <NumsMapping />
          <ArraysMapping />
          <ObjsMapping />
        </div>
      </header>
    </div>
  );
}

export default App;
