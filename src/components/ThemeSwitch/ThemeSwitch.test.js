import React from "react";
import ReactDOM from "react-dom";
import { Simulate } from "react-dom/test-utils";
import ThemeSwitch from "./ThemeSwitch";

let container;
let onChangeTheme;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    onChangeTheme = jest.fn();
    ReactDOM.render(<ThemeSwitch theme="dark" onChangeTheme={onChangeTheme} />, container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
});

function pull(distance) {
    const button = container.querySelector("button");
    Simulate.pointerDown(button, { clientY: 100, button: 0, pointerId: 1 });
    Simulate.pointerMove(button, { clientY: 100 + distance, pointerId: 1 });
    Simulate.pointerUp(button, { pointerId: 1 });
    return button;
}

it("preserves the pull interaction and suppresses its following pointer click", () => {
    const button = pull(70);
    expect(onChangeTheme.mock.calls.length).toBe(1);
    expect(button.style.transform).toBe("translateY(0px)");
    Simulate.click(button, { detail: 1 });
    expect(onChangeTheme.mock.calls.length).toBe(1);
    Simulate.click(button, { detail: 0 });
    expect(onChangeTheme.mock.calls.length).toBe(2);
});

it("does not toggle for a short drag or a canceled pointer", () => {
    const button = pull(30);
    Simulate.click(button, { detail: 1 });
    expect(onChangeTheme.mock.calls.length).toBe(0);
    Simulate.pointerDown(button, { clientY: 100, button: 0, pointerId: 1 });
    Simulate.pointerMove(button, { clientY: 180, pointerId: 1 });
    Simulate.pointerCancel(button, { pointerId: 1 });
    expect(onChangeTheme.mock.calls.length).toBe(0);
    expect(button.style.transform).toBe("translateY(0px)");
});
