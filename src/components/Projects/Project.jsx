import React from "react";
import { Link } from "react-router-dom";
import './Projects.css';
import data from "../../data/project.json";

export default function Project({ match }) {
    const pid = match.params.pid;
    const project = Object.prototype.hasOwnProperty.call(data, pid) ? data[pid] : null;
    const title = React.useRef(null);
    React.useEffect(() => {
        document.title = `${project ? project.title : "Project not found"} | Sri Harsha Chilukuri`;
        window.scrollTo(0, 0);
        title.current.focus({ preventScroll: true });
        return () => { document.title = "Sri Harsha Chilukuri | Software Engineer"; };
    }, [pid, project]);
    return (
        <main id="main-content" className="section project-main" tabIndex="-1">
            <Link to="/">Back to the portfolio</Link>
            <h1 ref={title} tabIndex="-1">{project ? project.title : "Project not found"}</h1>
            {project ? (
                <div>
                    <p className="muted">{project.for}</p>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-points">
                        {project.points.map(point => <li key={point}>{point}</li>)}
                    </ul>
                    {project.source && <a className="button-link" href={project.source}>View public repository</a>}
                </div>
            ) : (
                <p>This project is not part of the portfolio. Return to the homepage to explore selected work.</p>
            )}
        </main>
    );
}