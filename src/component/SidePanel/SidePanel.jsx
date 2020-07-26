import React from "react";
import styles from "./SidePanel.module.scss";
import RepoLabels from './RepoLabels';

const SidePanel = ({ repo, repoLabels }) => {
  return (
    <section className={styles.SidePanel}>
      <h1>Github Issue Manager</h1>
      {/* <SearchBar /> */}
      <RepoLabels repoLabels={repoLabels}/>
      {/* <img> */}
    </section>
  );
};

export default SidePanel;
