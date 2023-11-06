import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/General/home";
import ContactUs from "./pages/General/contact";

import NavBar from "./components/General/navbar/navbar";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
