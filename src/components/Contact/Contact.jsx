import React from "react";
import profile from "../../data/profile.json";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">Let's talk engineering.</h2>
        <p>For engineering conversations, collaboration, or professional opportunities,
          reach me by email.</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <div className="contact-links">
        <a href={profile.linkedin}>LinkedIn</a>
        <a href={profile.github}>GitHub</a>
        <a href={profile.resume}>View CV</a>
      </div>
    </section>
  );
}
