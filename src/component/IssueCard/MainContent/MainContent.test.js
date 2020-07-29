import React from "react";
import { render } from "@testing-library/react";
import MainContent from "./MainContent";

describe("MainContent tests", () => {
  it("should render", () => {
    expect(render(<MainContent />)).toBeTruthy();
  });
});
