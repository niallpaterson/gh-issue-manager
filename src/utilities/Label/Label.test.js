import React from "react";
import { render } from "@testing-library/react";
import Label from "./Label";

describe("Label tests", () => {
  it("should render", () => {
    expect(render(<Label />)).toBeTruthy();
  });
});
