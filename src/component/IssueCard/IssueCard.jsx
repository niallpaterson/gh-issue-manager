import React from "react";
import styles from "./IssueCard.module.scss";
import MainContent from './MainContent';
import SideBar from './SideBar';

const IssueCard = ({ title, description, number, labels }) => {
  return (
      <article className={styles.IssueCard}>
        <SideBar labels={labels} number={number} />
        <MainContent title={title} description={description} />
      </article>
  );
};

export default IssueCard;
