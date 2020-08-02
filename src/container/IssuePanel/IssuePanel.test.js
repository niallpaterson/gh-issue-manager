import React from 'react';
import { shallow } from 'enzyme';
import IssuePanel from './IssuePanel';

describe("Label tests", () => {
  const issuePanel = shallow(<IssuePanel issues={[]}/>);

  it('should render', () => {
    expect(issuePanel).toBeTruthy();
  });
});
