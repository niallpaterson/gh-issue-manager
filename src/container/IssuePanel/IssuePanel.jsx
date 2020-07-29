import React from 'react';
import styles from "./IssuePanel.module.scss";
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
)

export default IssuePanel;
