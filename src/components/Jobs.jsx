import React from "react";
import jobs from "../data/jobs.json";
import "../css/style.css";
export default class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
 
  render() {
    return jobs ? (
      <div class="job-row">
        {jobs.map(job =>  (
            <div class="job-col">
                <div class="job-top">
                    <div class="logo-div">
                        <img class="logo-img" src={job.logo} alt={job.code} />
                    </div>
                    <div class="name">{job.name}</div>
                    <div class="type">{job.type}</div>
                    <div class="tag">{job.tag}</div>
                </div>
                <div class="role">
                    {job.role.map(role => (
                        <div>
                            <p class="role-name">{role.name}</p>
                            <p class="role-date">{role.start} - {role.end ? role.end : "Present"} </p>
                        </div>
                    ))}
                </div>
                <p class="webite">{job.website}</p>
                <p class="locality">{job.locality}</p>
            </div>
        ))}
      </div>
    ) : (
      <div />
    );
  }
}
