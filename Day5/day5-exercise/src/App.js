import "./App.css";
import StringProps from "./StringProps.js";
import NumberProps from "./NumberProps.js";
import BooleanProps from "./BooleanProps.js";
import ArrayProps from "./ArrayProps.js";
import ObjectProps from "./ObjectProps.js";
import ObjectProps1 from "./ObjectProps1.js";
import FunctionProps from "./FunctionProps.js";
import DestructuringProps from "./DestructuringProps.js";

function App() {
  return (
    <div className="App">
      <StringProps />
      <NumberProps />
      <BooleanProps />
      <ArrayProps />
      <ObjectProps />
      <ObjectProps1 />
      <FunctionProps />
      <DestructuringProps />
    </div>
  );
}

export default App;
