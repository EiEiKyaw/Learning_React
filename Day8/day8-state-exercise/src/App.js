import "./App.css";
import CounterCP from "./CounterCC";
import CounterFC from "./CounterFC";
import MultiPropCC from "./MultiPropCC";
import MultiPropFC from "./MultiPropFC";
import FormInputCC from "./FormInputCC";
import FormInputFC from "./FormInputFC";
import BooleanCC from "./BooleanCC";
import BooleanFC from "./BooleanFC";
import ArrayCC from "./ArrayCC";
import ArrayFC from "./ArrayFC";

const commonStyle = {
  backgroundColor: "#4287f5",
  padding: "20px",
  margin: "20px",
  borderRadius: "25px",
};

const countStyle = {
  backgroundColor: "#5f85c2",
};

const multiPropStyle = {
  backgroundColor: "#c36dfc",
};

const formInputStyle = {
  backgroundColor: "#f5dda9",
};

const booleanStyle = {
  backgroundColor: "#a8d9a5",
};

const arrayStyle = {
  backgroundColor: "#b35992",
};

const reload = () => {
  window.location.reload();
};

function App() {
  return (
    <div className="App">
      <button onClick={reload} className="fixed-button">
        x
      </button>
      <div style={{ ...commonStyle, ...countStyle }}>
        <table>
          <tr>
            <td>
              <CounterCP />
            </td>
            <td>
              <CounterFC />
            </td>
          </tr>
        </table>
      </div>
      <div style={{ ...commonStyle, ...multiPropStyle }}>
        <table>
          <tr>
            <td>
              <MultiPropCC />
            </td>
            <td>
              <MultiPropFC />
            </td>
          </tr>
        </table>
      </div>
      <div style={{ ...commonStyle, ...formInputStyle }}>
        <table>
          <tr>
            <td>
              <FormInputCC />
            </td>
            <td>
              <FormInputFC />
            </td>
          </tr>
        </table>
      </div>
      <div style={{ ...commonStyle, ...booleanStyle }}>
        <table>
          <tr>
            <td>
              <BooleanCC />
            </td>
            <td>
              <BooleanFC />
            </td>
          </tr>
        </table>
      </div>
      <div style={{ ...commonStyle, ...arrayStyle }}>
        <table>
          <tr>
            <td>
              <ArrayCC />
            </td>
            <td>
              <ArrayFC />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
