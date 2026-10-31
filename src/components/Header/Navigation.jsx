import React from "react";

export default function Navigation() {
    return (
        <nav className="navigation" aria-label="Main navigation">
            <a className="navigation-home" href="#top" aria-label="Sri Harsha Chilukuri, home">harsha<span aria-hidden="true">:~</span></a>
            <div className="navigation-links">
                <a className="navigation-link" href="#about">About</a>
                <a className="navigation-link" href="#work">Work</a>
                <a className="navigation-link" href="#jobs">Experience</a>
                <a className="navigation-link" href="#github">Projects</a>
                <a className="navigation-link" href="#contact">Contact</a>
            </div>
        </nav>
    );
}
