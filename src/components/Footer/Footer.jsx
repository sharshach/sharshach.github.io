import React from "react";
import Contact from "../Contact/Contact"
import './Footer.css'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer-main">
            <Contact/>
      </div>
    );
  }
}
