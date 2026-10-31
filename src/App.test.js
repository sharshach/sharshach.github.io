import React from "react";
import ReactDOM from "react-dom";
import { Simulate } from "react-dom/test-utils";
import App from "./App";

let container;
let savedTheme;
let storage;
const originalWarn = console.warn;

beforeEach(() => {
  savedTheme = null;
  storage = {
    getItem: jest.fn(() => savedTheme),
    setItem: jest.fn((key, value) => { savedTheme = value; })
  };
  Object.defineProperty(window, "localStorage", { configurable: true, value: storage });
  window.matchMedia = jest.fn(() => ({ matches: false }));
  window.scrollTo = jest.fn();
  window.history.replaceState({}, "", "/");
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  console.warn = originalWarn;
  ReactDOM.unmountComponentAtNode(container);
  document.body.removeChild(container);
});

function render() {
  ReactDOM.render(<App />, container);
}

function runCommand(command) {
  Simulate.change(container.querySelector("#terminal-command"), { target: { value: command } });
  Simulate.submit(container.querySelector(".terminal-form"));
}

it("makes current identity, experience, projects and contact readable immediately", () => {
  render();
  expect(container.querySelector("h1").textContent).toBe("Sri Harsha Chilukuri");
  expect(container.querySelector(".hero-intro").textContent).toContain("Software Engineer II at Microsoft");
  expect(container.querySelector("#work").textContent).toContain("Developer capabilities across web and mobile");
  expect(container.querySelector("#jobs").textContent).toContain("March 2025–Present");
  expect(container.querySelector("#jobs").textContent).toContain("July 2022–February 2025");
  expect(container.querySelectorAll(".job").length).toBe(5);
  expect(container.querySelector("#jobs").textContent).toContain("Viva Engage from November 2025");
  expect(container.querySelector("#jobs").textContent).toContain("B.Tech in Computer Science and Engineering");
  expect(container.querySelector("#contact").textContent).toContain("sharshach@gmail.com");
  expect(container.querySelectorAll('a[href*="drive.google.com"]').length).toBe(0);
  expect(container.querySelectorAll('a[href="mailto:sharshach@gmail.com?subject=Resume%20request"]').length).toBe(2);
});

it("keeps public projects distinct from employer work and labels concepts accurately", () => {
  render();
  expect(container.querySelectorAll(".public-project").length).toBe(2);
  expect(container.querySelector("#github").textContent).toContain("archival explorations");
  expect(container.querySelector("#github").textContent).toContain("not an institutional deployment");
  expect(container.querySelector("#jobs").textContent).toContain("not a completed production feature");
  expect(container.querySelectorAll('img[src*="github-readme-stats"]').length).toBe(0);
});

it("starts from the system theme and honors a saved override", () => {
  window.matchMedia = jest.fn(() => ({ matches: true }));
  render();
  expect(container.querySelector(".App").getAttribute("data-theme")).toBe("light");
  ReactDOM.unmountComponentAtNode(container);
  savedTheme = "dark";
  render();
  expect(container.querySelector(".App").getAttribute("data-theme")).toBe("dark");
});

it("toggles the full site with a native button and saves the preference", () => {
  render();
  const terminal = container.querySelector(".terminal");
  runCommand("study");
  Simulate.click(container.querySelector("#theme-switch"));
  expect(container.querySelector(".App").getAttribute("data-theme")).toBe("light");
  expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  expect(container.querySelector("#theme-switch").getAttribute("aria-label")).toBe("Switch to dark mode");
  expect(storage.setItem).toHaveBeenCalledWith("portfolio-theme", "light");
  expect(container.querySelector(".terminal")).toBe(terminal);
  expect(terminal.textContent).toContain("NIT Durgapur");
  expect(terminal.textContent).toContain("B.Tech in Computer Science and Engineering");
});

it("keeps the theme working and reports unavailable preference storage", () => {
  const warn = jest.fn();
  console.warn = warn;
  storage.getItem.mockImplementation(() => { throw new Error("Storage denied"); });
  storage.setItem.mockImplementation(() => { throw new Error("Storage denied"); });
  render();
  Simulate.click(container.querySelector("#theme-switch"));
  expect(container.querySelector(".App").getAttribute("data-theme")).toBe("light");
  expect(container.querySelector('[role="status"]').textContent).toContain("cannot save your preference");
  expect(warn).toHaveBeenCalled();
});

it("runs terminal commands, retains history, and clears output", () => {
  render();
  runCommand("  EXPERIENCE  ");
  expect(container.querySelector(".terminal-core").textContent).toContain("full-time since July 2022");
  expect(container.querySelector('.terminal-core a[href="#jobs"]')).not.toBeNull();
  runCommand("resume");
  expect(container.querySelector(".terminal-core").textContent).toContain("Request a current resume");
  const input = container.querySelector("#terminal-command");
  Simulate.keyDown(input, { key: "ArrowUp" });
  expect(input.value).toBe("resume");
  Simulate.keyDown(input, { key: "ArrowUp" });
  expect(input.value).toBe("experience");
  Simulate.keyDown(input, { key: "ArrowDown" });
  expect(input.value).toBe("resume");
  runCommand("clear");
  expect(container.querySelector(".terminal-core").textContent).toBe("");
});

it("shows unknown commands as text and never executes or injects them", () => {
  render();
  runCommand("<img src=x onerror=alert(1)>");
  expect(container.querySelector(".terminal-core").textContent).toContain("Command not found");
  expect(container.querySelectorAll(".terminal-core img").length).toBe(0);
  runCommand("help");
  expect(container.querySelector(".terminal-core").textContent).toContain("Nothing here runs on your computer");
});

it("supports suggested commands and theme commands without losing the transcript", () => {
  render();
  Simulate.click(container.querySelector(".terminal-shortcuts button"));
  expect(container.querySelector(".terminal-core").textContent).toContain("Try: whoami");
  runCommand("theme");
  expect(container.querySelector(".App").getAttribute("data-theme")).toBe("light");
  expect(container.querySelector(".terminal-core").textContent).toContain("Switched to light mode");
  runCommand("theme");
  expect(container.querySelector(".App").getAttribute("data-theme")).toBe("dark");
  expect(container.querySelectorAll(".terminal-entry").length).toBe(4);
});

it("bounds the terminal transcript and command history", () => {
  render();
  for (let i = 0; i < 35; i++) { runCommand("whoami"); }
  expect(container.querySelectorAll(".terminal-entry").length).toBe(30);
});

it("preserves legacy project routes without old shipped-product claims", () => {
  window.history.replaceState({}, "", "/project/ms-lists");
  render();
  expect(container.querySelector("h1").textContent).toBe("Search prototype");
  expect(container.textContent).toContain("not a completed production feature");
  expect(container.querySelector("#theme-switch")).not.toBeNull();
});

it("handles unknown project identifiers and unknown routes explicitly", () => {
  window.history.replaceState({}, "", "/project/__proto__");
  render();
  expect(container.querySelector("h1").textContent).toBe("Project not found");
  ReactDOM.unmountComponentAtNode(container);
  window.history.replaceState({}, "", "/missing-page");
  render();
  expect(container.querySelector("h1").textContent).toBe("Page not found");
});

it("retains the public credential route without deployment or security guarantees", () => {
  window.history.replaceState({}, "", "/project/nitdgp-qrcode");
  render();
  expect(container.querySelector("h1").textContent).toBe("Academic credential verification");
  expect(container.textContent).toContain("not an official NIT Durgapur service");
  expect(container.querySelector('a[href="https://github.com/sharshach/verify-nitdgp"]')).not.toBeNull();
});
