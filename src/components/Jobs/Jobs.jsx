import React from "react";
import jobs from "../../data/jobs.json";
import "./jobs.css";

export default function Jobs() {
  return (
    <section id="jobs" className="jobs" aria-labelledby="jobs-title">
      <h3 id="jobs-title">Experience &amp; education</h3>
      <ol className="jobs-list">
        {jobs.map(job => (
          <li className="job" key={job.id}>
            <div>
              <h4>{job.role} <span className="job-company">· {job.name}</span></h4>
              <p className="job-period">{job.period}</p>
              <p className="job-description">{job.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
