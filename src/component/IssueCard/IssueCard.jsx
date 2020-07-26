import React from "react";
import styles from "./IssueCard.module.scss";
import MainContent from './MainContent';
import SideBar from './SideBar';

const IssueCard = ({
  title,
  body,
  number,
  labels,
}) => (
    <article className={styles.IssueCard}>
      <SideBar labels={labels} number={number} />
      <MainContent title={title} body={body} />
    </article>
);
};

export default IssueCard;
