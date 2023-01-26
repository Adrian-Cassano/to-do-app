import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./views/Welcome";


function App() {
  return (
      <Router>
        <Routes>
          <Route path={"/"} exact element={<Welcome/>} />
        </Routes>
      </Router>
    
  );
}

export default App;