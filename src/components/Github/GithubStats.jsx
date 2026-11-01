import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/github-stats.json";
import profile from "../../data/profile.json";
import "./github-stats.css";

export default function GithubStats() {
    return (
        <section id="github" className="section page-block personal-projects" aria-labelledby="projects-title">
            <h2 id="projects-title">Earlier experiments. Still part of the story.</h2>
            <p className="section-intro">Personal projects from college and research.
                Kept here as a record of building and learning, separate from my work at Microsoft.</p>
            <div className="public-project-list">
                {data.map(item => (
                    <article className="public-project" key={item.id}>
                        <h3>{item.title}</h3>
                        <p className="project-status">{item.status}</p>
                        <p>{item.summary}</p>
                        <div className="link-row">
                            <a href={item.source}>{item.sourceLabel}</a>
                            <Link to={`/project/${item.id}`} aria-label={`Read about ${item.title}`}>Project notes</Link>
                        </div>
                    </article>
                ))}
            </div>
            <a className="github-profile-link" href={profile.github}>More explorations on GitHub</a>
        </section>
    );
}
