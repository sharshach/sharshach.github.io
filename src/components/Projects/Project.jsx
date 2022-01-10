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
                <div className="project-title">{data[pid].title}</div>
                <div className="project-body">
                    <div className="project-left">
                        {data[pid].img && <img className="project-img" src={data[pid].img} alt={data[pid].for}/>}
                        {data[pid].for}
                    </div>
                    <div className="project-right">
                        <div className="project-description">{data[pid].description}</div>
                        <ul className="project-points">
                        {
                            data[pid].points.map(point=><li className="project-point">{point}</li>)
                        }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withParams(Project);