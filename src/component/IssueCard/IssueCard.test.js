import React from "react";
import { render } from "@testing-library/react";
import IssueCard from "./IssueCard";

describe("IssueCard tests", () => {
  it("should render", () => {
    expect(render(<IssueCard />)).toBeTruthy();
  });
});
