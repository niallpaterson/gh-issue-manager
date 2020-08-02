import React from 'react';
import PropTypes from 'prop-types';
import styles from './SidePanel.module.scss';
import RepoLabels from './RepoLabels';
import SearchBar from './Searchbar';

const SidePanel = ({ repoLabels, fetchRepo }) => (
    <section className={styles.SidePanel}>
      <h1>Github Issue Manager</h1>
      <SearchBar fetchRepo={fetchRepo}/>
      <RepoLabels repoLabels={repoLabels}/>
    </section>
);

SidePanel.propTypes = {
  fetchRepo: PropTypes.func.isRequired,
  repoLabels: PropTypes.array,
};

export default SidePanel;
