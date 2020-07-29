import React from 'react';
import PropTypes from 'prop-types';
import styles from './IssueCard.module.scss';
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

IssueCard.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  body: PropTypes.string,
  labels: PropTypes.array,
};

export default IssueCard;
