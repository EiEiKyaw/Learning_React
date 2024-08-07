import "./App.css";
import Main from "./adding_event_handlers/Main";
import EventPropagation from "./event-propagation/Main";
import ComponentMemory from "./component-memory/Main";
import RenderAndCommit from "./render-and-commit/Main";
import StateAsSnapshot from "./state-as-snapshot/Main";
import QueueingSeries from "./queueing_series_of_state_updates/Main";

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      {/* <EventPropagation /> */}
      {/* <ComponentMemory /> */}
      {/* <RenderAndCommit /> */}
      {/* <StateAsSnapshot /> */}
      <QueueingSeries />
    </div>
  );
}

export default App;
