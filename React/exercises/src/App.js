import "./App.css";
import "./components/custom.css";
import "./render_components/styles.css";
import "./render-components-as-tree/styles.css";
import { useState, useEffect } from "react";
import Gallery from "./components/N1_Gallery";
import ProfileImg from "./components/N2_ProfileImg";
import ConditionalRendering from "./components/N3_ConditionalRendering";
import RenderingListWithMap from "./components/N4_RenderingListMap";
import RenderingListWithFilter from "./components/N5_RenderingListFilter";
import Clock from "./components/N6_PurityFunction1";
import Profile from "./components/N7_FunctionProfile";
import Main from "./render_components/main";
import TestMain from "./render-components-as-tree/main";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function App() {
  return (
    <div className="App">
      {/* <Gallery /> */}
      {/* <ProfileImg /> */}
      {/* <ConditionalRendering /> */}
      {/* <RenderingListWithMap /> */}
      {/* <RenderingListWithFilter /> */}
      {/* <Clock time={useTime()} /> */}
      {/* <>
        <Profile
          person={{
            imageId: "lrWQx8l",
            name: "Subrahmanyan Chandrasekhar",
          }}
        />
        <Profile
          person={{
            imageId: "MK3eW3A",
            name: "Creola Katherine Johnson",
          }}
        />
      </> */}
      <Main />
      <br />
      <TestMain />
    </div>
  );
}

export default App;
