import React from "react";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Jobs from "./components/Jobs/Jobs";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact"
import Resume from "./components/CV/Resume";

const App = (_props) => (
  <div className="App">
    <Header />
        <div style={{"height":"auto"}}>
            <Jobs />
            <Projects />
            <Resume/>
        </div>
        <div className="contact-right" >
            <Contact/>
        </div>
  </div>
);

export default App;
