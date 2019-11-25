import React from "react";
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
})

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data",async () => {
  const fakeUser = {
    name: "Onur",
    surname: "Teber"
  };

  jest.spyOn(global,"fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );
  await act(async () => {
    render(<App id="123" />, container);
  });
  
  expect(container.querySelector("h1").textContent).toBe(fakeUser.name);
  expect(container.querySelector("h2").textContent).toBe(fakeUser.surname);

  })


