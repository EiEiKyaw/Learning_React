import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmpDetail from "./pages/EmpDetail";
import ResponsiveApp from "./components/navbar";

function App() {
  return (
    <>
      <ResponsiveApp />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/employee/detail/:id" element={<EmpDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;