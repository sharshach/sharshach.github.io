import React from "react";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Jobs from "./components/Jobs/Jobs";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact"

const App = (_props) => (
  <div className="App">
    <Header />
        <div style={{"height":"auto"}}>
        <Jobs />
        <Projects />
        </div>
        <div class="contact-right" >
            <Contact/>
        </div>
  </div>
);

export default App;
