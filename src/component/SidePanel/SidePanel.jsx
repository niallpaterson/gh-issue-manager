import React from 'react';
import styles from './SidePanel.module.scss';
import RepoLabels from './RepoLabels';
import SearchBar from './Searchbar';

const SidePanel = ({ repo, repoLabels, fetchRepo }) => {
  return (
    <section className={styles.SidePanel}>
      <h1>Github Issue Manager</h1>
      <SearchBar fetchRepo={fetchRepo}/>
      <RepoLabels repoLabels={repoLabels}/>
      {/* <img> */}
    </section>
  );
};

export default SidePanel;
