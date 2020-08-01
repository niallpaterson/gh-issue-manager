import React from 'react';
import PropTypes from 'prop-types';
import IssueCard from '../../component/IssueCard';

const IssuePanel = ({ issues }) => (
  <section className={styles.IssuePanel} >
    {issues.map((issue, index) => (
    <IssueCard 
      title={issue.title} 
      body={issue.body}
      number={issue.number} 
      labels={issue.labels}  
      key={index}
    />
    ))}
  </section>
);

IssuePanel.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string,
      number: PropTypes.string.isRequired,
      labels: PropTypes.object,
      key: PropTypes.number.isRequired,
    }),
  ),
};

export default IssuePanel;
