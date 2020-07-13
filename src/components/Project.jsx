import React from 'react';
import projects from '../data/projects.json';

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return projects ? (
            projects.map(project => {
                return (
                    <div>
                        
                        <h1>{project.name}</h1>
                        <h2>{project.date}</h2>
                    </div>
                );
            })
        ) : (
            <div />
        );
    }
}
