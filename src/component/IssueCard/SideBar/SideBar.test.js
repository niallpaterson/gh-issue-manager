import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './SideBar';

describe("SideBar tests", () => {
  const sideBar = shallow(<SideBar number={'1'} labels={[]}/>);

  it('should render', () => {
    expect(sideBar).toBeTruthy();
  });
});
