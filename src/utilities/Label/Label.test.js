import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';

describe('Label tests', () => {
  const label = shallow(<Label labelName={'testLabel'} color={'FFFFFF'}/>);

  it('should render', () => {
    expect(label).toBeTruthy();
  });
});
