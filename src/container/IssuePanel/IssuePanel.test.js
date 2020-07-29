import React from "react";
import { render } from "@testing-library/react";
import IssuePanel from "./IssuePanel";

describe("IssuePanel tests", () => {
  it("should render", () => {
    expect(render(<IssuePanel />)).toBeTruthy();
  });
});
