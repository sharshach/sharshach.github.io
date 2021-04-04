import React from "react";
import jobs from "../../data/jobs.json";
import "./jobs.css";
import "../style.css";

export default class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return jobs ? (
      <div className="jobs">
      <div className="my-heading">Projects</div>
        {jobs.map(job => (
          <div className="job-col" key={job.name}>
            <div className="job-top">
              <div className="logo-div">
                <img className="logo-img" src={job.logo} alt={job.code} />
              </div>
              <div className="name">{job.name}</div>
              <div className="type">{job.type}</div>
              <div className="tag">{job.tag}</div>
            </div>
            <div className="role">
              {job.role.map((role) => (
                <div key={role.name}>
                  <p className="role-name">{role.name}</p>
                  <p className="role-date">
                    {role.start} - {role.end ? role.end : "Present"}{" "}
                  </p>
                </div>
              ))}
            </div>
            <p className="webite">{job.website}</p>
            <p className="locality">{job.locality}</p>
          </div>
        ))}
      </div>
    ) : (
      <div />
    );
  }
}
