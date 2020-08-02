import React from 'react';
import { shallow } from 'enzyme';
import SidePanel from './SidePanel';

const fetchRepo = () => 'repoFetched';

describe("Sidepanel tests", () => {
  const sidepanelTest = shallow(<SidePanel repoLabels={[]} fetchRepo={fetchRepo}/>);

  it('should render', () => {
    expect(sidepanelTest).toBeTruthy();
  });
});
