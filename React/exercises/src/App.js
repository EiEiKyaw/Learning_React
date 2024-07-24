import "./App.css";
import "./components/custom.css";
import Gallery from "./components/N1_Gallery";
import ProfileImg from "./components/N2_ProfileImg";
import ConditionalRendering from "./components/N3_ConditionalRendering";
import RenderingListWithMap from "./components/N4_RenderingListMap";
import RenderingListWithFilter from "./components/N5_RenderingListFilter";

function App() {
  return (
    <div className="App">
      {/* <Gallery /> */}
      {/* <ProfileImg /> */}
      {/* <ConditionalRendering /> */}
      {/* <RenderingListWithMap /> */}
      <RenderingListWithFilter />
    </div>
  );
}

export default App;
