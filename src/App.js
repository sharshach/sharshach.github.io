import React from "react";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
NewYear:false,
time:"00h:00m:00s"
    }
  }
  
  
updTime=()=>{
var date=new Date();
var min=60-date.getMinutes()-1;
var sec=60-date.getSeconds();
this.setState({time: min+"M:"+sec+"S",newYear:date.getYear()===2022});
}
  
componentDidMount() {
  this.interval = setInterval(this.updTime, 1000);
}
componentWillUnmount() {
  clearInterval(this.interval);
}
  render() {
    return (
      <div className="App">
       {
  "Happy New Year 2022"
}
     
    </div>
    )
  }
}

export default App;
