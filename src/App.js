import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Jobs from "./components/Jobs";

const App = (_props) => (
  <div className="App">
    <Jobs />
    <Project />
    <Contact />
  </div>
);

export default App;
