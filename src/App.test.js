import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders ", () => {
    const { getByText } = render(<App />);
    const element = getByText("Jesstern Rays");
    expect(element).toBeInTheDocument();
  });
});
