import React from "react";
import './Projects.css';
import { withParams } from "../hocs";
import data from "../../data/project.json";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { params } = this.props;
        const pid=params.pid;
        return(
            <div className="project-main">
                <h1>{data[pid].title}</h1>
                <p>{data[pid].description}</p>
                {
                    data[pid].points.forEach(point=><p>{point}</p>)
                }
            </div>
        )
    }
}

export default withParams(Project);