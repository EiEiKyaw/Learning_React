import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmpDetail from "./pages/EmpDetail";
import EmpAdd from "./pages/EmpAdd";
import EmpList from "./pages/EmpList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/employee/all" element={<EmpList />} />
          <Route exact path="/employee/add" element={<EmpAdd />} />
          <Route exact path="/employee/detail/:id" element={<EmpDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
