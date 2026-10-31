import React from "react";
import experience from "../../data/experience.json";
import "./selected-work.css";

export default function SelectedWork() {
    return (
        <section id="work" className="section selected-work" aria-labelledby="work-title">
            <div className="work-heading">
                <h2 id="work-title">The work.<br />The decisions behind it.</h2>
                <p className="section-intro">Selected experience at Microsoft.
                    Building useful interfaces, choosing practical designs, and
                    following through with the people who make a product work.</p>
            </div>
            <div className="work-list">
                {experience.map(item => (
                    <article className="work-item" key={item.id} id={`work-${item.id}`}>
                        <div className="work-subject">
                            <h3>{item.title}</h3>
                            <p className="muted">{item.summary}</p>
                            <ul className="work-focus" aria-label="Areas of responsibility">
                                {item.focus.map(focus => <li key={focus}>{focus}</li>)}
                            </ul>
                        </div>
                        <div className="work-detail">
                            <p className="work-problem">{item.problem}</p>
                            <p>{item.contribution}</p>
                            <p className="work-outcome"><strong>Delivered</strong>{item.outcome}</p>
                            <p className="work-judgment"><strong>The engineering judgment</strong>{item.judgment}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
