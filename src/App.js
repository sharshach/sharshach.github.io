import React from "react";
import "./App.css";
// import Projects from "./components/Projects/Projects";
import Jobs from "./components/Jobs/Jobs";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
// import Resume from "./components/CV/Resume";
import GithubStats from "./components/Github/GithubStats";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       theme:"dark",
    }
  }
  onChangeTheme=()=>{
    const {theme}=this.state;
    if(theme==="dark"){
      this.setState({theme:"light"});
    }
    else{
      this.setState({theme:"dark"});
    }
  }
  printConsoleData=()=>{
    console.log("%cHi There\nI am Chilukuri Sri Harsha", "color:blue; font-size: 16pt");
    console.log("%cYou are here probably because you know some code\nWant to discuss anything with me? Contact me at sharshach@gmail.com", "color:green; font-size: 12pt");

  }
  componentDidMount(){
    this.printConsoleData();
  }
  render() {
    const{theme}=this.state;
    return (
      <div className="App">
      <Header theme={theme}/>
    <div className="left-block">
              <div id="jobs"><Jobs  theme={theme}/></div>
              <div  id="github"><GithubStats  theme={theme}/></div>
              {/* <div className="app-projects">
                  <Projects />
              </div> */}
        {/* <Resume /> */}
      </div>
      <div className="right-block">
        <Contact />
      </div>
      <ThemeSwitch theme={this.state.theme} onChangeTheme={this.onChangeTheme}/>
    </div>
    )
  }
}

export default App;
