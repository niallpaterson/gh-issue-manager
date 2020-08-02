import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from './Searchbar';

const fetchRepo = () => 'repoFetched';

describe("Searchbar tests", () => {
  const searchBar = shallow(<Searchbar fetchRepo={fetchRepo}/>);

  it('should render', () => {
    expect(searchBar).toBeTruthy();
  });
});
