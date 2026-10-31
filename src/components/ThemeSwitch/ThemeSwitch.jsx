import React from "react";
import "./theme-switch.css";

export default class ThemeSwitch extends React.Component {
    state = { offset: 0 };
    startY = null;
    distance = 0;
    suppressClick = false;

    onPointerDown = event => {
        if (event.isPrimary === false || event.button !== 0) { return; }
        this.startY = event.clientY;
        this.distance = 0;
        this.suppressClick = false;
        if (event.currentTarget.setPointerCapture) {
            event.currentTarget.setPointerCapture(event.pointerId);
        }
    };

    onPointerMove = event => {
        if (this.startY === null) { return; }
        this.distance = event.clientY - this.startY;
        this.setState({ offset: Math.max(0, Math.min(90, this.distance)) });
    };

    onPointerUp = () => {
        if (this.startY === null) { return; }
        this.suppressClick = Math.abs(this.distance) > 8;
        if (this.distance >= 60) { this.props.onChangeTheme(); }
        this.startY = null;
        this.setState({ offset: 0 });
    };

    onPointerCancel = () => {
        this.startY = null;
        this.distance = 0;
        this.suppressClick = false;
        this.setState({ offset: 0 });
    };

    onClick = event => {
        if (this.suppressClick && event.detail !== 0) {
            this.suppressClick = false;
            return;
        }
        this.suppressClick = false;
        this.props.onChangeTheme();
    };

    render() {
        const isDark = this.props.theme === "dark";
        const action = `Switch to ${isDark ? "light" : "dark"} mode`;
        return (
            <button id="theme-switch" className="theme-switch" type="button"
                aria-label={action} title={`${action}. Click or pull down.`}
                style={{ transform: `translateY(${this.state.offset}px)` }}
                onClick={this.onClick} onPointerDown={this.onPointerDown}
                onPointerMove={this.onPointerMove} onPointerUp={this.onPointerUp}
                onPointerCancel={this.onPointerCancel}>
                <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor"
                    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {isDark ? (
                        <g><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></g>
                    ) : (
                        <path d="M20.8 13.2A9 9 0 0 1 10.8 3.2 9 9 0 1 0 20.8 13.2Z" />
                    )}
                </svg>
            </button>
        );
    }
}
