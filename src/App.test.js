import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App tests', () => {
  const appTest = shallow(<App />);
  it('should render', () => {
    expect(appTest).toBeTruthy();
  });
});
