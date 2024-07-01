import "./App.css";
import ClickEvent from "./components/N1_ClickEvent";
import InputChangeEvent from "./components/N2_InputChangeEvent";
import OnSubmitEvent from "./components/N3_OnSubmitEvent";
import MouseOverEvent from "./components/N4_MouseOverEvent";
import DoubleClickEvent from "./components/N5_DoubleClickEvent";
import KeyPressEvent from "./components/N6_KeyPressEvent";
import FocusBlurEvent from "./components/N7_FocusBlurEvent";
import ChangeEventOnSelect from "./components/N8_ChangeEventOnSelect";
import DragDropEvent from "./components/N9_DragDropEvent";
import WindowResizeEvent from "./components/N10_WindowResizeEvent";

function App() {
  return (
    <div className="App">
      {/* <ClickEvent /> */}
      {/* <InputChangeEvent /> */}
      {/* <OnSubmitEvent /> */}
      {/* <MouseOverEvent /> */}
      {/* <DoubleClickEvent /> */}
      {/* <KeyPressEvent /> */}
      {/* <FocusBlurEvent /> */}
      {/* <ChangeEventOnSelect /> */}
      {/* <DragDropEvent /> */}
      <WindowResizeEvent />
    </div>
  );
}

export default App;
