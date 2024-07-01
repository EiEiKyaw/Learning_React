import "./App.css";
import ClickEvent from "./components/N1_ClickEvent";
import InputChangeEvent from "./components/N2_InputChangeEvent";
import OnSubmitEvent from "./components/N3_OnSubmitEvent";
import MouseOverEvent from "./components/N4_MouseOverEvent";
import DoubleClickEvent from "./components/N5_DoubleClickEvent";

function App() {
  return (
    <div className="App">
      {/* <ClickEvent /> */}
      {/* <InputChangeEvent /> */}
      {/* <OnSubmitEvent /> */}
      {/* <MouseOverEvent /> */}
      <DoubleClickEvent />
    </div>
  );
}

export default App;
