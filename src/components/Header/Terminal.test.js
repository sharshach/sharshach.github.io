import React from "react";
import ReactDOM from "react-dom";
import Terminal from "./Terminal";

let container;
const originalError = console.error;

beforeEach(() => {
    jest.useFakeTimers();
    window.matchMedia = jest.fn(() => ({ matches: false }));
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    console.error = originalError;
    jest.useRealTimers();
});

it("retains the original one-second command and 1.5-second response timing", async () => {
    ReactDOM.render(<Terminal />, container);
    expect(container.querySelector("#terminal-core").textContent).not.toContain("whoami");
    jest.runTimersToTime(1000);
    await Promise.resolve();
    expect(container.querySelector("#terminal-core").textContent).toContain("whoami");
    expect(container.querySelector("#terminal-core").textContent).not.toContain("Sri Harsha Chilukuri");
    jest.runTimersToTime(1500);
    await Promise.resolve();
    expect(container.querySelector("#terminal-core").textContent).toContain("Sri Harsha Chilukuri");
    expect(container.querySelectorAll(".terminal-line").length).toBe(3);
});

it("plays the complete original command sequence and ends at an empty prompt", async () => {
    ReactDOM.render(<Terminal />, container);
    for (let i = 0; i < 12; i++) {
        jest.runOnlyPendingTimers();
        await Promise.resolve();
    }
    const commands = [...container.querySelectorAll(".terminal-line")]
        .filter(line => line.querySelector(".terminal-left-line"))
        .map(line => line.querySelector(".terminal-line-content").textContent);
    expect(commands).toEqual(["whoami", "whereami", "study", "projects", "experience", "contact", ""]);
    expect(container.textContent).toContain("Software Engineer II at Microsoft");
    expect(container.textContent).toContain("B.Tech in Computer Science and Engineering");
    expect(container.querySelector('a[href="#jobs"]')).not.toBeNull();
    expect(container.querySelectorAll("input, button, form").length).toBe(0);
});

it("provides the full transcript without waiting when reduced motion is requested", () => {
    window.matchMedia = jest.fn(() => ({ matches: true }));
    ReactDOM.render(<Terminal />, container);
    expect(container.querySelectorAll(".terminal-line").length).toBe(13);
    expect(container.textContent).toContain("contact");
    expect(container.querySelector('a[href="mailto:sharshach@gmail.com"]')).not.toBeNull();
    expect(setTimeout.mock.calls.length).toBe(0);
});

it("cancels playback safely when navigating away during a pause", async () => {
    console.error = jest.fn();
    ReactDOM.render(<Terminal />, container);
    jest.runTimersToTime(1000);
    await Promise.resolve();
    ReactDOM.unmountComponentAtNode(container);
    jest.runAllTimers();
    await Promise.resolve();
    expect(console.error.mock.calls.length).toBe(0);
    expect(container.textContent).toBe("");
});
