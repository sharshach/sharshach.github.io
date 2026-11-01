import React, { Component } from "react";
import profile from "../../data/profile.json";
import "./Header.css";

export default class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [[true, ""]],
            fullContent: [
                [true, "whoami"],
                [false, profile.name],
                [true, "whereami"],
                [false, profile.role],
                [true, "study"],
                [false, <span>B.Tech in Computer Science and Engineering<br />National Institute of Technology, Durgapur · 2018–2022</span>],
                [true, "projects"],
                [false, <span>I build things personally and with teams. <a href="#github">View my earlier public projects</a>.</span>],
                [true, "experience"],
                [false, <span>Full-time at Microsoft since July 2022. <a href="#jobs">View my experience</a> and <a href="#work">selected engineering work</a>.</span>],
                [true, "contact"],
                [false, <span>Contact me through <a href={`mailto:${profile.email}`}>email</a>, <a href={profile.linkedin}>LinkedIn</a>, or <a href={profile.github}>GitHub</a>.</span>],
                [true, ""]
            ]
        };
        this.timer = null;
        this.resolveSleep = null;
        this.output = null;
    }

    sleep = ms => new Promise(resolve => {
        this.resolveSleep = resolve;
        this.timer = setTimeout(() => {
            this.timer = null;
            this.resolveSleep = null;
            resolve(true);
        }, ms);
    });

    async componentDidMount() {
        const { fullContent } = this.state;
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            this.setState({ content: fullContent });
            return;
        }
        let content = [[true, ""]];
        for (let i = 0; i + 2 < fullContent.length; i += 2) {
            if (!await this.sleep(1000)) { return; }
            content = content.map((line, index) => index === i ? fullContent[i] : line);
            this.setState({ content });
            if (!await this.sleep(1500)) { return; }
            content = content.concat([fullContent[i + 1], [fullContent[i + 2][0], ""]]);
            this.setState({ content }, () => {
                if (this.output) { this.output.scrollTop = this.output.scrollHeight; }
            });
        }
    }

    componentWillUnmount() {
        if (this.timer !== null) { clearTimeout(this.timer); }
        if (this.resolveSleep) { this.resolveSleep(false); }
    }

    render() {
        return (
            <div className="terminal" role="region" aria-labelledby="terminal-title">
                <div className="terminal-top" id="terminal-title">SriHarsha@Chilukuri:~</div>
                <div id="terminal-core" className="terminal-core"
                    ref={element => { this.output = element; }}
                    role="log" aria-label="Animated introduction" aria-live="polite" tabIndex="0">
                    {this.state.content.map((line, index) => (
                        <div key={index} className="terminal-line">
                            {line[0] && (
                                <div className="terminal-left-line" aria-hidden="true">
                                    <div className="terminal-name">SriHarsha@Chilukuri</div>
                                    :<div className="terminal-path">~</div>$&nbsp;
                                </div>
                            )}
                            <div className="terminal-line-content">{line[1]}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
