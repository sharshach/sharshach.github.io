import React from "react";
import experience from "../../data/experience.json";
import "./selected-work.css";

export default function SelectedWork() {
    return (
        <section id="work" className="section selected-work" aria-labelledby="work-title">
            <h2 id="work-title">Selected engineering work</h2>
            <p className="section-intro">Employer experience at Microsoft: the problems I work on,
                my contribution, and what I take forward. Described at a high level.</p>
            <div className="work-list">
                {experience.map(item => (
                    <article className="work-item" key={item.title}>
                        <div>
                            <h3>{item.title}</h3>
                            <p className="muted">{item.summary}</p>
                        </div>
                        <div className="work-detail">
                            <p>{item.contribution}</p>
                            <p className="work-lesson"><strong>What I learned</strong> {item.lesson}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
