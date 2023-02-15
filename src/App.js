import React from "react";
import "./App.css";
import About from "./component/About";
import Conatct from "./component/Conatct";
import FaQs from "./component/FaQs";
import Features from "./component/Features";
import Home from "./component/Home";
import NavBar from "./component/NavBar.js";
import Pricing from "./component/Pricing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Features />
      <About />
      <FaQs />
      <Pricing />
      <Conatct />
    </div>
  );
}

export default App;
