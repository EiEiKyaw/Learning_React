import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ItemContextProvider from "./pages/ItemContext";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Create from "./pages/Create";

const App = () => {
  return (
    <ItemContextProvider>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </ItemContextProvider>
  );
};

export default App;
