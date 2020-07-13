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
          <div class="proj-main">
            {projects.map(project => (
              <div class="col">
                <div class="proj-top">
                        <div class="proj-name">{project.name}</div>
                        <div class="proj-short">{project.short}</div>
                </div>
                <div class="proj-date">{project.date}</div>
              </div>
            ))}
          </div>
        ) : (
          <div />
        );
    }
}
