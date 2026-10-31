import React from "react";
import jobs from "../../data/jobs.json";
import "./jobs.css";

export default function Jobs() {
  return (
    <section id="jobs" className="section jobs" aria-labelledby="jobs-title">
      <h2 id="jobs-title">Experience &amp; education</h2>
      <p className="section-intro">Full-time at Microsoft since July 2022, following two separate internships.</p>
      <ol className="jobs-list">
        {jobs.map(job => (
          <li className="job" key={job.id}>
            <p className="job-period">{job.period}</p>
            <div>
              <h3>{job.role} <span className="job-company">· {job.name}</span></h3>
              <p>{job.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
