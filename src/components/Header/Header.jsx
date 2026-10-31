import React from "react";
import "./Header.css";
import Navigation from './Navigation';
import Terminal from './Terminal';
import profile from "../../data/profile.json";

export default function Header() {
    return (
        <header className="header-main" id="top">
            <Navigation />
            <div className="hero">
                <div className="hero-copy">
                    <h1>{profile.name}</h1>
                    <p className="hero-role">{profile.role}</p>
                </div>
                <Terminal />
                <div className="hero-actions">
                    <a className="hero-next" href="#about">Explore my experience <span aria-hidden="true">↓</span></a>
                    <div className="link-row hero-socials">
                        <a href={profile.linkedin}>LinkedIn</a>
                        <a href={profile.github}>GitHub</a>
                        <a href={profile.resume}>Request resume</a>
                    </div>
                </div>
            </div>
        </header>
    );
}