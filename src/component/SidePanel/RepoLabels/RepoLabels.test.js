import React from 'react';
import { render } from '@testing-library/react';
import RepoLabels from './RepoLabels';

describe('RepoLabels tests', () => {
  it('should render', () => {
    expect(render(<RepoLabels />)).toBeTruthy();
  });
});
