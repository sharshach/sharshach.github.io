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
  window.matchMedia = jest.fn(query => ({ matches: query === "(prefers-reduced-motion: reduce)" }));
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

it("makes professional identity and the complete experience readable without animation", () => {
  render();
  expect(container.querySelector("h1").textContent).toBe("Sri Harsha Chilukuri");
  expect(container.querySelector(".hero-role").textContent).toBe("Software Engineer II at Microsoft");
  expect(container.querySelector(".hero-identity h1")).not.toBeNull();
  expect(container.querySelector(".hero-identity .hero-role")).not.toBeNull();
  expect(container.querySelector(".hero-copy .hero-headline").textContent).toContain("useful platforms");
  expect(container.querySelector(".hero-copy .hero-intro").textContent).toContain("AI-assisted engineering");
  expect(container.querySelector(".hero-copy .hero-actions")).not.toBeNull();
  expect(container.querySelector("#about").textContent).toContain("I design developer APIs");
  expect(container.querySelector("#jobs").textContent).toContain("March 2025–Present");
  expect(container.querySelector("#jobs").textContent).toContain("July 2022–February 2025");
  expect(container.querySelector("#jobs").textContent).toContain("Viva Engage from November 2025");
  expect(container.querySelector("#jobs").textContent).toContain("B.Tech in Computer Science and Engineering");
  expect(container.querySelectorAll(".job").length).toBe(5);
  expect(container.querySelector(".experience-screen #jobs")).not.toBeNull();
  expect(container.textContent).not.toContain("Promoted in March 2025");
  expect(container.textContent).not.toContain("No confidential code");
});

it("gives each major section its own full-width background surface", () => {
  render();
  ["work", "team", "automations", "github", "contact"].forEach(id => {
    expect(container.querySelector(`#${id}`).classList.contains("page-block")).toBe(true);
  });
});

it("shows responsibility, outcomes, and engineering judgment without invented metrics", () => {
  render();
  expect(container.querySelectorAll(".work-item").length).toBe(4);
  expect(container.querySelector("#work-developer-platforms").textContent).toContain("API and type-contract design");
  expect(container.querySelector("#work-product-judgment").textContent).toContain("delivery through general availability");
  expect(container.querySelector("#work-reliability").textContent).toContain("guided a small reliability workstream");
  expect(container.querySelector(".team-section").textContent).toContain("prototypes and practical experiments");
});

it("preserves the original terminal instead of introducing an interactive shell", () => {
  render();
  const terminal = container.querySelector(".terminal");
  expect(terminal.querySelector(".terminal-top").textContent).toBe("SriHarsha@Chilukuri:~");
  expect(terminal.querySelector(".terminal-name").textContent).toBe("SriHarsha@Chilukuri");
  expect(terminal.querySelectorAll("input, form, button").length).toBe(0);
  expect(terminal.textContent).toContain("B.Tech in Computer Science and Engineering");
  expect(terminal.querySelector('a[href="#jobs"]')).not.toBeNull();
  expect(terminal.querySelector('a[href="#github"]')).not.toBeNull();
});

it("keeps original terminal content mounted while changing the page theme", () => {
  render();
  const terminal = container.querySelector(".terminal");
  const content = terminal.textContent;
  Simulate.click(container.querySelector("#theme-switch"));
  expect(container.querySelector(".App").getAttribute("data-theme")).toBe("light");
  expect(document.documentElement.getAttribute("data-theme")).toBe("light");
  expect(container.querySelector("#theme-switch").getAttribute("aria-label")).toBe("Switch to dark mode");
  expect(storage.setItem).toHaveBeenCalledWith("portfolio-theme", "light");
  expect(container.querySelector(".terminal")).toBe(terminal);
  expect(terminal.textContent).toBe(content);
});

it("keeps public projects separate and uses the CV link supplied by the user", () => {
  render();
  expect(container.querySelectorAll(".public-project").length).toBe(2);
  expect(container.querySelector("#github").textContent).toContain("record of building and learning");
  expect(container.querySelector("#github").textContent).toContain("not an institutional deployment");
  expect(container.querySelector("#contact").textContent).toContain("sharshach@gmail.com");
  const cvLinks = container.querySelectorAll('a[href="https://drive.google.com/file/d/16Jd6EdoW-pBH0ogppZTt0oN6Is6fL5dI/view?usp=drive_link"]');
  expect(cvLinks.length).toBe(2);
  expect(cvLinks[0].textContent).toBe("View CV");
  expect(container.querySelectorAll('a[href="mailto:sharshach@gmail.com?subject=Resume%20request"]').length).toBe(0);
});

it("links public SPFx resources without implying sole ownership or documentation authorship", () => {
  render();
  const charting = container.querySelector("#work-developer-platforms");
  expect(charting.textContent).toContain("SPFx Adaptive Card Extensions");
  expect(charting.textContent).toContain("Highcharts");
  expect(charting.textContent).toContain("Victory Native");
  expect(charting.textContent).toContain("co-presented");
  expect(charting.querySelector('a[href="https://youtu.be/zBLEEF6cC7I?si=F2pEPcatW2BdtfdQ"]')).not.toBeNull();
  expect(charting.querySelector('a[href="https://learn.microsoft.com/en-us/sharepoint/dev/spfx/viva/get-started/build-data-visualization-adaptive-card-extension"]')).not.toBeNull();
  expect(charting.querySelectorAll("iframe").length).toBe(0);
});

it("keeps analytics generic while showing ownership, technologies, and delivery status", () => {
  render();
  const analytics = container.querySelector("#work-analytics-integration");
  expect(analytics.querySelector("h3").textContent).toContain("3 organizations and 17 teams");
  expect(analytics.textContent).toContain("End-to-end ownership");
  expect(analytics.textContent).toContain("new C#/.NET service and repository from scratch");
  expect(analytics.textContent).toContain("Azure Event Hubs");
  expect(analytics.textContent).toContain("Azure Cosmos DB");
  expect(analytics.textContent).not.toContain("reading-time");
  expect(analytics.textContent).not.toContain("dwell");
  expect(analytics.textContent).not.toContain("Outlook");
  expect(analytics.querySelector(".work-outcome strong").textContent).toBe("Implementation & validation");
  expect(analytics.querySelector(".work-outcome").textContent).toContain("Production rollout is not confirmed");
});

it("covers AI-first and hackathon responsibilities separately from personal engineering assistants", () => {
  render();
  const team = container.querySelector("#team");
  expect(team.querySelectorAll(".team-story").length).toBe(3);
  expect(team.textContent).toContain("AI First Champion");
  expect(team.textContent).toContain("Hackathon Champion");
  expect(team.textContent).toContain("not every innovation depended on AI");
  const assistants = container.querySelector("#automations");
  expect(assistants.querySelectorAll("dt").length).toBe(5);
  expect(assistants.textContent).toContain("track duplicates");
  expect(assistants.textContent).toContain("verified facts, inferences");
  expect(assistants.textContent).toContain("does not replace final approval");
  expect(container.querySelector('.navigation a[href="#automations"]')).not.toBeNull();
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

it("keeps themes working and reports unavailable preference storage", () => {
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

it("preserves legacy project routes without old shipped-product claims", () => {
  window.history.replaceState({}, "", "/project/ms-lists");
  render();
  expect(container.querySelector("h1").textContent).toBe("Search prototype");
  expect(container.textContent).toContain("not a completed production feature");
  expect(container.querySelector("#theme-switch")).not.toBeNull();
});

it("handles unknown identifiers and routes explicitly", () => {
  window.history.replaceState({}, "", "/project/__proto__");
  render();
  expect(container.querySelector("h1").textContent).toBe("Project not found");
  ReactDOM.unmountComponentAtNode(container);
  window.history.replaceState({}, "", "/missing-page");
  render();
  expect(container.querySelector("h1").textContent).toBe("Page not found");
});

it("retains the credential route without institutional or security guarantees", () => {
  window.history.replaceState({}, "", "/project/nitdgp-qrcode");
  render();
  expect(container.querySelector("h1").textContent).toBe("Academic credential verification");
  expect(container.textContent).toContain("not an official NIT Durgapur service");
});
