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
NewYear:false,
time:"00h:00m:00s"
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
updTime=()=>{
var date=new Date();
var min=60-date.getMinutes();
var sec=60-date.getSeconds();
this.setState({time: min+"M:"+sec+"S",newYear:date.getYear()==2022});
}
  componentDidMount(){
    this.printConsoleData();
    

  }
componentDidMount() {
  this.interval = setInterval(updTime, 1000);
}
componentWillUnmount() {
  clearInterval(this.interval);
}
  render() {
    const{theme}=this.state;
    return (
      <div className="App">
       {
  this.state.newyear?"Happy New Year 2022": this.state.time
}
     
    </div>
    )
  }
}

export default App;
