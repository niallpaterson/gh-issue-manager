import React from "react";
import { render } from "@testing-library/react";
import IssueNumber from "./IssueNumber";

describe("IssueNumber tests", () => {
  it("should render", () => {
    expect(render(<IssueNumber />)).toBeTruthy();
  });
});
