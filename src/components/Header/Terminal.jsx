import React, { Component } from "react";
import profile from "../../data/profile.json";
import "./Header.css";

export default class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            command: "",
            entries: [{ id: 0, command: "whoami", output: this.getOutput("whoami") }],
            history: [],
            historyIndex: 0
        };
        this.nextId = 1;
        this.output = null;
        this.input = null;
    }

    getOutput = command => {
        switch (command) {
            case "whoami":
                return <span>{profile.name}<br />{profile.role}<br />Useful platforms. Dependable experiences.</span>;
            case "help":
                return <span>Try: whoami, work, experience, projects, study, contact, resume, theme, clear.<br />Use Up / Down for command history. Nothing here runs on your computer.</span>;
            case "work":
                return <span>Developer APIs, cross-platform products, reliability, and AI-assisted engineering.<br /><a href="#work">Read selected employer experience</a></span>;
            case "experience":
                return <span>Microsoft, full-time since July 2022. Software Engineer II since March 2025.<br />Earlier internships in 2021 and 2022.<br /><a href="#jobs">View the timeline</a></span>;
            case "projects":
                return <span>Earlier personal work: JobStocker and an academic credential-verification concept.<br /><a href="#github">Explore public projects</a> · <a href={profile.github}>GitHub</a></span>;
            case "study":
                return <span>B.Tech in Computer Science and Engineering<br />NIT Durgapur · 2018–2022</span>;
            case "contact":
                return <span><a href={`mailto:${profile.email}`}>{profile.email}</a><br /><a href={profile.linkedin}>LinkedIn</a> · <a href={profile.github}>GitHub</a></span>;
            case "resume":
                return <span><a href={profile.resume}>Request a current resume by email</a></span>;
            case "theme":
                return <span>Switched to {this.props.theme === "dark" ? "light" : "dark"} mode. You can also click or pull the theme switch.</span>;
            default:
                return <span>Command not found: {command}. Type help to see available commands.</span>;
        }
    };

    runCommand = value => {
        const command = value.trim().toLowerCase();
        if (!command) { return; }
        const entry = { id: this.nextId++, command, output: this.getOutput(command) };
        if (command === "theme") { this.props.onChangeTheme(); }
        this.setState(state => {
            const history = state.history.concat(command).slice(-30);
            return {
                command: "",
                entries: command === "clear" ? [] : state.entries.concat(entry).slice(-30),
                history,
                historyIndex: history.length
            };
        }, () => {
            if (this.output) { this.output.scrollTop = this.output.scrollHeight; }
            if (this.input) { this.input.focus({ preventScroll: true }); }
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.runCommand(this.state.command);
    };

    onKeyDown = event => {
        if (event.key !== "ArrowUp" && event.key !== "ArrowDown") { return; }
        event.preventDefault();
        const direction = event.key === "ArrowUp" ? -1 : 1;
        this.setState(state => {
            const historyIndex = Math.max(0, Math.min(state.history.length,
                state.historyIndex + direction));
            return { historyIndex, command: state.history[historyIndex] || "" };
        });
    };

    render() {
        return (
            <section className="terminal" aria-labelledby="terminal-title">
                <div className="terminal-top">
                    <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
                    <h2 id="terminal-title">harsha@portfolio:~</h2>
                </div>
                <p className="terminal-welcome">A small shell. A little about me.</p>
                <div className="terminal-core" ref={element => { this.output = element; }}
                    role="log" aria-label="Terminal output" aria-live="polite" tabIndex="0">
                    {this.state.entries.map(entry => (
                        <div key={entry.id} className="terminal-entry">
                            <div className="terminal-command"><span className="terminal-prompt" aria-hidden="true">harsha<span>:~</span>$ </span>{entry.command}</div>
                            <div className="terminal-response">{entry.output}</div>
                        </div>
                    ))}
                </div>
                <form className="terminal-form" onSubmit={this.onSubmit}>
                    <span className="terminal-prompt" aria-hidden="true">harsha<span>:~</span>$</span>
                    <label className="visually-hidden" htmlFor="terminal-command">Terminal command</label>
                    <input id="terminal-command" ref={element => { this.input = element; }}
                        value={this.state.command}
                        onChange={event => this.setState({ command: event.target.value })}
                        onKeyDown={this.onKeyDown} placeholder="Type help" maxLength="160"
                        autoComplete="off" autoCapitalize="none" spellCheck="false"
                        aria-describedby="terminal-hint" />
                    <button type="submit" aria-label="Run terminal command">Run</button>
                </form>
                <div className="terminal-shortcuts" aria-label="Suggested terminal commands">
                    {["help", "work", "projects", "contact"].map(command => (
                        <button key={command} type="button" onClick={() => this.runCommand(command)}>{command}</button>
                    ))}
                </div>
                <p className="terminal-hint" id="terminal-hint">Explore here, or read the page below.</p>
            </section>
        );
    }
}
