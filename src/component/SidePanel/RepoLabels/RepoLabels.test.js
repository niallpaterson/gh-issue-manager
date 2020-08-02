import React from 'react';
import { shallow } from 'enzyme';
import RepoLabels from './RepoLabels';

describe("RepoLabels tests", () => {
  const repoLabels = shallow(<RepoLabels repoLabels={[]}/>);

  it('should render', () => {
    expect(repoLabels).toBeTruthy();
  });
});
