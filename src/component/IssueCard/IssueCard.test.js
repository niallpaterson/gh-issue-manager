import React from 'react';
import { shallow } from 'enzyme';
import IssueCard from './IssueCard';

describe('IssueCard tests', () => {
  const issueCard = shallow(<IssueCard title={'testIssueCard'} number={'1'} />);

  it('should render', () => {
    expect(issueCard).toBeTruthy();
  });
});
