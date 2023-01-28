import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./views/Welcome";
import Home from "./views/Home";


function App() {
  return (
      <Router>
        <Routes>
          <Route path={"/"} exact element={<Welcome/>} />
          <Route path={"/Home"} exact element={<Home/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;