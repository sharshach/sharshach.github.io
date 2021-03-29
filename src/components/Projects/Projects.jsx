import React from "react";
import projects from "../../data/projects.json";
import './Projects.css';
import Project from './Project'

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        return projects ? (
          <div className="projects-main">
            {projects.map(project => (
              <Project data={project}/>
            ))}
          </div>
        ) : (
          <div />
        );
    }
}
