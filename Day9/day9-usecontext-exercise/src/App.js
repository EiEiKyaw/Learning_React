import BasicPropsDrilling from "./components/N1_BasicPropsDrilling";
import BasicPropsWithContext from "./components/N2_BasicPropsWithContext";
import "./css/custom.css";
import ThemeContextAlternative from "./components/N3_ThemeContextWithAlternative";
import ThemeContextWithUseContext from "./components/N4_ThemeContextWithUseContext";

function App() {
  return (
    <div className="App">
      {/* <BasicPropsDrilling value="Basic Props Drilling" /> */}
      {/* <BasicPropsWithContext /> */}
      {/* <ThemeContextAlternative value="dark" /> */}
      <ThemeContextWithUseContext />
    </div>
  );
}

export default App;
