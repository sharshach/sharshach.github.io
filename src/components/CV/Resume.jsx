import React from "react";
import profile from "../../data/profile.json";
import './Resume.css';
export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <div className="resume-main">
            <div className="resume-heading">CV</div>
            <a href={profile.resume} className="resume-link">
                View CV
            </a>
      </div>
    );
  }
}
