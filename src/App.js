import React from "react";
import "./App.css";
import Projects from "./components/Projects/Projects";
import Jobs from "./components/Jobs/Jobs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = (_props) => (
  <div className="App">
    <Header />
        <div style={{"height":"auto"}}>
        <Jobs />
        <Projects />
        </div>
    <Footer />
  </div>
);

export default App;
