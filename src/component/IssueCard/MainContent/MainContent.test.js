import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './MainContent';

describe('MainContent tests', () => {
  const mainContent = shallow(<MainContent title={'testTitle'}/>);

  it('should render', () => {
    expect(MainContent).toBeTruthy();
  });
});
