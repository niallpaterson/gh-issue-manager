import React from 'react';
import { render } from '@testing-library/react';
import SidePanel from './SidePanel';

describe('SidePanel tests', () => {
  it('should render', () => {
    expect(render(<SidePanel />)).toBeTruthy();
  });
});
