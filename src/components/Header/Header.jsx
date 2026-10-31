import React from "react";
import "./Header.css";
import Navigation from './Navigation';
import Terminal from './Terminal';
import profile from "../../data/profile.json";

export default function Header({ theme, onChangeTheme }) {
    return (
        <header className="header-main" id="top">
            <Navigation />
            <div className="hero">
                <div className="hero-copy">
                    <h1>{profile.name}</h1>
                    <p className="hero-headline">{profile.headline}</p>
                    <p className="hero-intro">{profile.intro}</p>
                    <div className="link-row hero-links">
                        <a className="button-link" href="#work">Selected work</a>
                        <a className="button-link button-link-secondary" href={profile.resume}>Request resume</a>
                    </div>
                    <div className="link-row hero-socials">
                        <a href={profile.linkedin}>LinkedIn</a>
                        <a href={profile.github}>GitHub</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
                <Terminal theme={theme} onChangeTheme={onChangeTheme} />
            </div>
        </header>
    );
}