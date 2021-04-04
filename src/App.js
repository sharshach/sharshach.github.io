import React from "react";
import "./App.css";
// import Projects from "./components/Projects/Projects";
import Jobs from "./components/Jobs/Jobs";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
// import Resume from "./components/CV/Resume";
import GithubStats from "./components/Github/GithubStats";

const App = (_props) => (
  <div className="App">
    <Header />
    <div className="left-block">
            <Jobs />
            <GithubStats/>
            {/* <div className="app-projects">
                <Projects />
            </div> */}
      {/* <Resume /> */}
    </div>
    <div className="right-block">
      <Contact />
    </div>
  </div>
);

export default App;
