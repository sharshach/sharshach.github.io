import React from "react";
import projects from "../../data/projects.json";
import './Projects.css';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        return projects ? (
          <div className="proj-main">
            {projects.map(project => (
              <div className="proj-col" key={project.name}>
                <div className="proj-top">
                        <div className="proj-name">{project.name}</div>
                        <div className="proj-short">{project.short}</div>
                </div>
                <div className="proj-date">{project.date}</div>
              </div>
            ))}
          </div>
        ) : (
          <div />
        );
    }
}
