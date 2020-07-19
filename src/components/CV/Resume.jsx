import React from "react";
import './Resume.css';
export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(window.innerWidth);
    console.log(this.state);
    return (
        <div className="resume-main">
            <div className="resume-heading">My Resume</div>
        {/* <iframe
          src="https://drive.google.com/file/d/16Jd6EdoW-pBH0ogppZTt0oN6Is6fL5dI/preview"
          className="resume-iframe"
        ></iframe>  */}
            <a href="https://drive.google.com/file/d/16Jd6EdoW-pBH0ogppZTt0oN6Is6fL5dI/view" className="resume-link">
                View My CV
            </a>
      </div>
    );
  }
}
