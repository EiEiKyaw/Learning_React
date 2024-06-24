import "./App.css";
import BasicEffect from "./pages/N1_BasicEffect";
import UpdateTitle from "./pages/N2_EffectWithState";
import IntervalCounter from "./pages/N3_EffectWithCleanup";
import FetchData from "./pages/N4_EffectWithFetchData";
import WindowResize from "./pages/N5_EffectWithEventListeners";
import ConditionalEffect from "./pages/N6_EffectWithCondition";
import FetchOnUserChange from "./pages/N7_EffectWithFetchDataDependency";
import CustomHookFetch from "./pages/N8_EffectWithCustomHooks";
import LogProps from "./pages/N9_SynchronizingWithProps";
import DebouncedInput from "./pages/N10_EffectWithDebouncing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <BasicEffect /> */}
        {/* <UpdateTitle /> */}
        {/* <IntervalCounter /> */}
        {/* <FetchData /> */}
        {/* <WindowResize /> */}
        {/* <ConditionalEffect /> */}
        {/* <FetchOnUserChange /> */}
        {/* <CustomHookFetch /> */}
        {/* <LogProps value={10} /> */}
        <DebouncedInput />
      </header>
    </div>
  );
}

export default App;
