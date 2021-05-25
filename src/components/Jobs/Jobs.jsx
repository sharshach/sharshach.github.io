import React from "react";
import jobs from "../../data/jobs.json";
import "./jobs.css";
import "../style.css";

export default class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme:this.props.theme,
    };
  }
  componentDidUpdate(){
    const {theme}=this.props;
    if(this.state.theme!==theme){
        this.setState({theme})
    }
  }
  render() {
    const {theme}=this.state;
    return jobs ? (
      <div className={`jobs ${theme==="dark"?"background-dark":"background-light"}`}>
      <div className="my-heading">Experiences</div>
      <div className="jobs-list">
        {jobs.map(job => (
          <a href={job.website} target="blank" className="job" key={job.name}>
            <div className="job-company-name">{job.name}</div>
            <div className="job-logo-div">
              <img className="job-logo-img" src={job.logo} alt={job.code} style={{backgroundColor:job["background-color"],borderRadius:job["border-radius"]||"20px"}}/>
            </div>
            <div className="job-core-empty"></div>
            <div className="job-core">
              <div className="job-core-data">{job.name} is a {job.tag}.</div>
              <div className="job-core-data job-core-data-role">{job.curr_role}</div>
              <div className="job-core-data">{job.locality} | {job.start} - {job.end}</div>
            </div>
          </a>
        ))}
        </div>
      </div>
    ) : (
      <div />
    );
  }
}
